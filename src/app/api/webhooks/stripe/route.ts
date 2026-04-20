import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function POST(req: Request) {
  if (!process.env.STRIPE_SECRET_KEY || !process.env.STRIPE_WEBHOOK_SECRET) {
    return NextResponse.json({ ok: true });
  }
  const { getStripe } = await import("@/lib/stripe");
  const stripe = getStripe();
  if (!stripe) return NextResponse.json({ ok: true });
  const body = await req.text();
  const sig = req.headers.get("stripe-signature") as string;
  let event;
  try {
    event = stripe.webhooks.constructEvent(body, sig, process.env.STRIPE_WEBHOOK_SECRET);
  } catch {
    return NextResponse.json({ error: "Webhook error" }, { status: 400 });
  }
  if (event.type === "checkout.session.completed") {
    const session = event.data.object as { customer: string; subscription: string; client_reference_id?: string };
    const userId = session.client_reference_id;
    if (userId) {
      const sub = await stripe.subscriptions.retrieve(session.subscription);
      await prisma.subscription.upsert({
        where: { userId },
        create: { userId, stripeCustomerId: session.customer, stripeSubscriptionId: session.subscription, stripePriceId: sub.items.data[0]?.price.id, status: "active", plan: "solo", stripeCurrentPeriodEnd: new Date((sub as { current_period_end: number }).current_period_end * 1000) },
        update: { stripeCustomerId: session.customer, stripeSubscriptionId: session.subscription, status: "active", plan: "solo" },
      });
    }
  }
  if (event.type === "customer.subscription.deleted") {
    const sub = event.data.object as { id: string };
    await prisma.subscription.updateMany({ where: { stripeSubscriptionId: sub.id }, data: { status: "free", plan: "free" } });
  }
  return NextResponse.json({ ok: true });
}
