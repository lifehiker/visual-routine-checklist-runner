import { NextResponse } from "next/server";
import { auth } from "@/auth";
import { prisma } from "@/lib/prisma";
import { canCreateRoutine } from "@/lib/plan-limits";
import slugify from "slugify";

export async function GET() {
  const session = await auth();
  if (!session?.user?.id) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  const userId = (session.user as { id: string }).id;
  const routines = await prisma.routine.findMany({
    where: { userId, isArchived: false },
    include: { steps: { orderBy: { position: "asc" } } },
    orderBy: { updatedAt: "desc" },
  });
  return NextResponse.json(routines);
}

export async function POST(req: Request) {
  const session = await auth();
  if (!session?.user?.id) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  const userId = (session.user as { id: string }).id;
  const canCreate = await canCreateRoutine(userId);
  if (!canCreate) return NextResponse.json({ error: "Free plan limit reached. Upgrade to create more routines." }, { status: 403 });
  const body = await req.json();
  const { title, category, description, lockSequence, steps } = body;
  const slug = slugify(title, { lower: true, strict: true }) + "-" + Date.now();
  const routine = await prisma.routine.create({
    data: {
      userId,
      title,
      slug,
      category,
      description,
      lockSequence: lockSequence ?? false,
      steps: {
        create: (steps || []).map((s: { title: string; description?: string; emoji?: string; imageUrl?: string; imageType?: string; durationLabel?: string }, i: number) => ({
          position: i,
          title: s.title,
          description: s.description,
          emoji: s.emoji || "✅",
          imageUrl: s.imageUrl,
          imageType: s.imageType || "emoji",
          durationLabel: s.durationLabel,
        })),
      },
    },
    include: { steps: { orderBy: { position: "asc" } } },
  });
  return NextResponse.json(routine);
}
