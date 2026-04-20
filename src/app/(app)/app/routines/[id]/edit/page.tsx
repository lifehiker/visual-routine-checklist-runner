import { auth } from "@/auth";
import { prisma } from "@/lib/prisma";
import { notFound } from "next/navigation";
import { RoutineForm } from "@/components/routines/routine-form";

export default async function EditRoutinePage({ params }: { params: Promise<{ id: string }> }) {
  const session = await auth();
  const { id } = await params;
  const userId = (session!.user as { id: string }).id;
  const routine = await prisma.routine.findFirst({
    where: { id, userId },
    include: { steps: { orderBy: { position: "asc" } } },
  });
  if (!routine) notFound();
  return (
    <div>
      <h1 className="text-2xl font-black mb-6" style={{fontFamily:"Nunito, sans-serif"}}>Edit Routine</h1>
      <RoutineForm
        mode="edit"
        initialData={{
          id: routine.id,
          title: routine.title,
          category: routine.category || "",
          description: routine.description || "",
          lockSequence: routine.lockSequence,
          steps: routine.steps.map((s) => ({
            title: s.title,
            emoji: s.emoji || "✅",
            description: s.description || "",
            durationLabel: s.durationLabel || "",
          })),
        }}
      />
    </div>
  );
}