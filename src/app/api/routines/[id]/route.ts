import { NextResponse } from "next/server";
import { auth } from "@/auth";
import { prisma } from "@/lib/prisma";
import slugify from "slugify";

type StepInput = { title: string; description?: string; emoji?: string; imageUrl?: string; imageType?: string; durationLabel?: string };

export async function GET(_req: Request, { params }: { params: Promise<{ id: string }> }) {
  const session = await auth();
  if (!session?.user?.id) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  const { id } = await params;
  const userId = (session.user as { id: string }).id;
  const routine = await prisma.routine.findFirst({
    where: { id, userId },
    include: { steps: { orderBy: { position: "asc" } }, shareLinks: true },
  });
  if (!routine) return NextResponse.json({ error: "Not found" }, { status: 404 });
  return NextResponse.json(routine);
}

export async function PUT(req: Request, { params }: { params: Promise<{ id: string }> }) {
  const session = await auth();
  if (!session?.user?.id) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  const { id } = await params;
  const userId = (session.user as { id: string }).id;
  const existing = await prisma.routine.findFirst({ where: { id, userId } });
  if (!existing) return NextResponse.json({ error: "Not found" }, { status: 404 });
  const body = await req.json();
  const { title, category, description, lockSequence, steps } = body;
  await prisma.routineStep.deleteMany({ where: { routineId: id } });
  const routine = await prisma.routine.update({
    where: { id },
    data: {
      title,
      slug: slugify(title, { lower: true, strict: true }) + "-" + Date.now(),
      category,
      description,
      lockSequence: lockSequence ?? false,
      steps: {
        create: (steps || []).map((s: StepInput, i: number) => ({
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

export async function DELETE(_req: Request, { params }: { params: Promise<{ id: string }> }) {
  const session = await auth();
  if (!session?.user?.id) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  const { id } = await params;
  const userId = (session.user as { id: string }).id;
  await prisma.routine.updateMany({ where: { id, userId }, data: { isArchived: true } });
  return NextResponse.json({ ok: true });
}
