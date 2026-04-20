"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { StepEditor } from "./step-editor";

interface Step {
  title: string;
  emoji: string;
  description?: string;
  durationLabel?: string;
}

interface RoutineFormProps {
  initialData?: {
    id?: string;
    title: string;
    category?: string;
    description?: string;
    lockSequence?: boolean;
    steps: Step[];
  };
  mode?: "create" | "edit";
}

const DEFAULT_STEP: Step = { title: "", emoji: "✅" };

export function RoutineForm({ initialData, mode = "create" }: RoutineFormProps) {
  const router = useRouter();
  const [title, setTitle] = useState(initialData?.title || "");
  const [category, setCategory] = useState(initialData?.category || "");
  const [description, setDescription] = useState(initialData?.description || "");
  const [lockSequence, setLockSequence] = useState(initialData?.lockSequence || false);
  const [steps, setSteps] = useState<Step[]>(initialData?.steps || [{ ...DEFAULT_STEP }]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  function addStep() {
    setSteps([...steps, { ...DEFAULT_STEP }]);
  }

  function removeStep(i: number) {
    setSteps(steps.filter((_, idx) => idx !== i));
  }

  function changeStep(i: number, field: string, value: string) {
    setSteps(steps.map((s, idx) => idx === i ? { ...s, [field]: value } : s));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!title.trim()) { setError("Title is required"); return; }
    setLoading(true);
    setError("");
    const url = mode === "edit" && initialData?.id ? "/api/routines/" + initialData.id : "/api/routines";
    const method = mode === "edit" ? "PUT" : "POST";
    const res = await fetch(url, {
      method,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title, category, description, lockSequence, steps }),
    });
    const data = await res.json();
    setLoading(false);
    if (!res.ok) { setError(data.error || "Failed to save"); return; }
    router.push("/app");
    router.refresh();
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6 max-w-2xl">
      {error && <p className="text-red-600 text-sm bg-red-50 p-3 rounded-lg">{error}</p>}
      <div>
        <Label htmlFor="title">Routine Title *</Label>
        <Input id="title" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="e.g. Morning Routine" className="mt-1" />
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <Label htmlFor="category">Category (optional)</Label>
          <Input id="category" value={category} onChange={(e) => setCategory(e.target.value)} placeholder="e.g. Daily Living" className="mt-1" />
        </div>
        <div className="flex items-end gap-3">
          <input type="checkbox" id="lock" checked={lockSequence} onChange={(e) => setLockSequence(e.target.checked)} className="h-4 w-4" />
          <Label htmlFor="lock" className="cursor-pointer">
            <span className="font-medium">Lock Sequence</span>
            <span className="block text-xs text-gray-500">Steps must be done in order</span>
          </Label>
        </div>
      </div>
      <div>
        <Label htmlFor="description">Description (optional)</Label>
        <Textarea id="description" value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Brief description of this routine..." className="mt-1" rows={2} />
      </div>
      <div>
        <div className="flex items-center justify-between mb-3">
          <Label className="text-base font-semibold">Steps ({steps.length})</Label>
          <Button type="button" variant="outline" size="sm" onClick={addStep}>+ Add Step</Button>
        </div>
        <div className="space-y-3">
          {steps.map((step, i) => (
            <StepEditor key={i} step={step} index={i} onChange={changeStep} onRemove={removeStep} />
          ))}
        </div>
        {steps.length === 0 && (
          <div className="text-center py-8 bg-gray-50 rounded-xl border-2 border-dashed text-gray-500">
            <p className="mb-2">No steps yet</p>
            <Button type="button" variant="outline" size="sm" onClick={addStep}>Add First Step</Button>
          </div>
        )}
      </div>
      <div className="flex gap-3 pt-4">
        <Button type="submit" className="bg-teal-600 hover:bg-teal-700" disabled={loading}>
          {loading ? "Saving..." : (mode === "edit" ? "Save Changes" : "Create Routine")}
        </Button>
        <Button type="button" variant="ghost" onClick={() => router.back()}>Cancel</Button>
      </div>
    </form>
  );
}