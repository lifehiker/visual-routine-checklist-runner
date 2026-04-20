import { RoutineForm } from "@/components/routines/routine-form";

export default function NewRoutinePage() {
  return (
    <div>
      <h1 className="text-2xl font-black mb-6" style={{fontFamily:"Nunito, sans-serif"}}>Create New Routine</h1>
      <RoutineForm mode="create" />
    </div>
  );
}