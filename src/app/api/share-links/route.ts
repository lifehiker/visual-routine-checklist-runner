import { NextResponse } from "next/server";
import { auth } from "@/auth";
import { prisma } from "@/lib/prisma";

export async function POST(req: Request) {
  const session = await auth();
  if (!session?.user?.id) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  const userId = (session.user as { id: string }).id;
  const { routineId, mode } = await req.json();
  const routine = await prisma.routine.findFirst({ where: { id: routineId, userId } });
  if (!routine) return NextResponse.json({ error: "Not found" }, { status: 404 });
  const link = await prisma.shareLink.create({
    data: { routineId, userId, mode: mode || "run" },
  });
  return NextResponse.json(link);
}

export async function DELETE(req: Request) {
  const session = await auth();
  if (!session?.user?.id) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  const userId = (session.user as { id: string }).id;
  const { id } = await req.json();
  await prisma.shareLink.updateMany({ where: { id, userId }, data: { isActive: false } });
  return NextResponse.json({ ok: true });
}
