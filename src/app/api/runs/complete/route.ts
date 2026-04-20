import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function POST(req: Request) {
  const { runId, routineId } = await req.json();
  await prisma.routineRun.update({
    where: { id: runId },
    data: { completedAt: new Date() },
  });
  await prisma.routine.update({
    where: { id: routineId },
    data: { completionCount: { increment: 1 }, lastRunAt: new Date() },
  });
  return NextResponse.json({ ok: true });
}
