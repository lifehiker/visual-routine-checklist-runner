"use client";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

interface RunStep {
  id: string;
  title: string;
  emoji: string | null;
  description?: string | null;
  durationLabel?: string | null;
}

interface RunModeProps {
  routine: {
    id: string;
    title: string;
    lockSequence: boolean;
    steps: RunStep[];
  };
  shareLinkId?: string;
}

export function RunMode({ routine, shareLinkId }: RunModeProps) {
  const [runId, setRunId] = useState<string | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [completed, setCompleted] = useState<Set<string>>(new Set());
  const [done, setDone] = useState(false);
  const [starting, setStarting] = useState(true);

  const steps = routine.steps;
  const currentStep = steps[currentIndex];
  const progress = completed.size / steps.length;

  useEffect(() => {
    async function startRun() {
      const res = await fetch("/api/runs", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ routineId: routine.id, shareLinkId }),
      });
      const data = await res.json();
      if (res.ok) setRunId(data.id);
      setStarting(false);
    }
    startRun();
  }, [routine.id, shareLinkId]);

  async function completeStep() {
    if (!currentStep) return;
    const newCompleted = new Set(completed);
    newCompleted.add(currentStep.id);
    setCompleted(newCompleted);
    if (runId) {
      await fetch("/api/runs", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ runId, stepId: currentStep.id }),
      });
    }
    if (currentIndex < steps.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setDone(true);
      if (runId) {
        await fetch("/api/runs/complete", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ runId, routineId: routine.id }),
        });
      }
    }
  }

  if (starting) {
    return <div className="min-h-screen flex items-center justify-center"><p className="text-gray-500">Starting routine...</p></div>;
  }

  if (done) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-teal-50 to-white p-8">
        <div className="text-8xl mb-6 animate-bounce">🎉</div>
        <h1 className="text-4xl font-black text-teal-700 mb-4" style={{fontFamily:"Nunito, sans-serif"}}>All Done!</h1>
        <p className="text-xl text-gray-600 mb-8">You completed all {steps.length} steps of {routine.title}.</p>
        <Button onClick={() => { setDone(false); setCompleted(new Set()); setCurrentIndex(0); }} className="bg-teal-600 hover:bg-teal-700" size="lg">
          Run Again
        </Button>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-teal-50 to-white">
      <div className="p-4 flex items-center gap-3">
        <button onClick={() => window.history.back()} className="text-gray-500 hover:text-gray-700">←</button>
        <div className="flex-1">
          <div className="h-3 bg-gray-200 rounded-full overflow-hidden">
            <div className="h-3 bg-teal-500 rounded-full transition-all duration-500" style={{width: Math.round(progress * 100) + "%"}} />
          </div>
          <p className="text-sm text-gray-500 mt-1">{completed.size} of {steps.length} steps done</p>
        </div>
      </div>
      <div className="flex-1 flex flex-col items-center justify-center p-8 text-center">
        <div className="text-9xl mb-6 select-none" role="img" aria-label={currentStep?.title}>
          {currentStep?.emoji}
        </div>
        <h1 className="text-4xl md:text-5xl font-black text-gray-900 mb-4" style={{fontFamily:"Nunito, sans-serif"}}>
          {currentStep?.title}
        </h1>
        {currentStep?.description && (
          <p className="text-xl text-gray-600 mb-4 max-w-lg">{currentStep.description}</p>
        )}
        {currentStep?.durationLabel && (
          <p className="text-lg text-teal-600 font-semibold mb-6">⏱ {currentStep.durationLabel}</p>
        )}
        <Button
          onClick={completeStep}
          className="bg-teal-600 hover:bg-teal-700 text-xl px-12 py-6 h-auto rounded-2xl shadow-lg hover:shadow-xl transition-all"
          size="lg"
        >
          {currentIndex === steps.length - 1 ? "✅ All Done!" : "Done! Next Step →"}
        </Button>
      </div>
      <div className="flex justify-center gap-2 pb-8">
        {steps.map((s, i) => (
          <button
            key={s.id}
            onClick={() => { if (!routine.lockSequence || i <= currentIndex) setCurrentIndex(i); }}
            className={"w-3 h-3 rounded-full transition-colors " + (completed.has(s.id) ? "bg-teal-500" : i === currentIndex ? "bg-teal-300" : "bg-gray-200")}
          />
        ))}
      </div>
    </div>
  );
}