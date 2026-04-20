import { auth } from "@/auth";
import { prisma } from "@/lib/prisma";
import { notFound } from "next/navigation";
import { PrintView } from "./print-view";

export default async function PrintRoutinePage({ params }: { params: Promise<{ id: string }> }) {
  const session = await auth();
  const { id } = await params;
  const userId = (session!.user as { id: string }).id;
  const routine = await prisma.routine.findFirst({
    where: { id, userId },
    include: { steps: { orderBy: { position: "asc" } } },
  });
  if (!routine) notFound();
  return <PrintView routine={routine} />;
}
