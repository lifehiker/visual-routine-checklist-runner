import { auth } from "@/auth";
import { prisma } from "@/lib/prisma";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { PLANS } from "@/lib/stripe";

export default async function BillingPage() {
  const session = await auth();
  const userId = (session!.user as { id: string }).id;
  const sub = await prisma.subscription.findUnique({ where: { userId } });
  const plan = sub?.plan || "free";
  const planInfo = PLANS[plan as keyof typeof PLANS] || PLANS.free;

  return (
    <div className="max-w-2xl">
      <h1 className="text-2xl font-black mb-6">Billing</h1>
      <div className="bg-white rounded-2xl border p-6 mb-8">
        <div className="flex items-start justify-between">
          <div>
            <h2 className="font-bold text-lg">{planInfo.name} Plan</h2>
            <Badge className={plan === "free" ? "bg-gray-100 text-gray-700" : "bg-teal-100 text-teal-700"}>{plan === "free" ? "Free" : "Active"}</Badge>
          </div>
        </div>
        <ul className="mt-4 space-y-1">
          {planInfo.features.map((f) => (
            <li key={f} className="text-sm text-gray-600 flex gap-2"><span className="text-teal-500">✓</span>{f}</li>
          ))}
        </ul>
      </div>
      {plan === "free" && (
        <div className="bg-teal-50 rounded-2xl p-6">
          <h2 className="font-bold text-lg mb-2">Upgrade to unlock more</h2>
          <p className="text-gray-600 mb-4">Get unlimited routines and photos.</p>
          <a href="mailto:support@routinechart.app"><Button className="bg-teal-600 hover:bg-teal-700">Contact Us to Upgrade</Button></a>
        </div>
      )}
    </div>
  );
}
