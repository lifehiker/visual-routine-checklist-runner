import { NextResponse } from "next/server";
import { auth } from "@/auth";
import { prisma } from "@/lib/prisma";

export async function POST(req: Request) {
  const { routineId, shareLinkId } = await req.json();
  const session = await auth();
  const routine = await prisma.routine.findUnique({
    where: { id: routineId },
    include: { steps: { orderBy: { position: "asc" } } },
  });
  if (!routine) return NextResponse.json({ error: "Not found" }, { status: 404 });
  const userId = session?.user ? (session.user as { id: string }).id : null;
  if (!shareLinkId && userId !== routine.userId) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  const run = await prisma.routineRun.create({
    data: {
      routineId,
      shareLinkId,
      steps: {
        create: routine.steps.map((s) => ({
          routineStepId: s.id,
          position: s.position,
        })),
      },
    },
    include: { steps: true },
  });
  return NextResponse.json(run);
}

export async function PUT(req: Request) {
  const { runId, stepId } = await req.json();
  await prisma.routineRunStep.updateMany({
    where: { routineRunId: runId, routineStepId: stepId },
    data: { completedAt: new Date() },
  });
  return NextResponse.json({ ok: true });
}
