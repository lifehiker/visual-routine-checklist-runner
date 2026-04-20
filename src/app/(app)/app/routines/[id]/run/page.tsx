import { auth } from "@/auth";
import { prisma } from "@/lib/prisma";
import { notFound } from "next/navigation";
import { RunMode } from "@/components/routines/run-mode";

export default async function RunRoutinePage({ params }: { params: Promise<{ id: string }> }) {
  const session = await auth();
  const { id } = await params;
  const userId = (session!.user as { id: string }).id;
  const routine = await prisma.routine.findFirst({
    where: { id, userId },
    include: { steps: { orderBy: { position: "asc" } } },
  });
  if (!routine) notFound();
  return <RunMode routine={routine} />;
}