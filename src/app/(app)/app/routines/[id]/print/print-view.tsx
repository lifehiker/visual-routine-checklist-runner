"use client";

interface Step {
  id: string;
  emoji: string | null;
  title: string;
  description: string | null;
  durationLabel: string | null;
}

interface Routine {
  title: string;
  steps: Step[];
}

export function PrintView({ routine }: { routine: Routine }) {
  return (
    <div className="min-h-screen bg-white p-8">
      <div className="max-w-lg mx-auto">
        <div className="text-center mb-8 no-print">
          <button onClick={() => window.print()} className="bg-teal-600 text-white px-6 py-2 rounded-lg hover:bg-teal-700 mr-3">Print</button>
          <button onClick={() => window.history.back()} className="bg-gray-100 text-gray-700 px-6 py-2 rounded-lg hover:bg-gray-200">Back</button>
        </div>
        <div className="border-2 border-gray-200 rounded-2xl p-6">
          <h1 className="text-3xl font-black text-center mb-6" style={{fontFamily:"Nunito, sans-serif"}}>{routine.title}</h1>
          <div className="space-y-3">
            {routine.steps.map((step) => (
              <div key={step.id} className="flex items-center gap-4 p-3 border rounded-xl">
                <div className="w-7 h-7 border-2 border-gray-300 rounded flex-shrink-0" />
                <span className="text-3xl">{step.emoji}</span>
                <div className="flex-1">
                  <div className="font-bold text-gray-900">{step.title}</div>
                  {step.description && <div className="text-sm text-gray-500">{step.description}</div>}
                </div>
                {step.durationLabel && <span className="text-sm text-gray-400">{step.durationLabel}</span>}
              </div>
            ))}
          </div>
          <div className="mt-6 pt-4 border-t text-center text-xs text-gray-400">RoutineChart.app</div>
        </div>
      </div>
    </div>
  );
}
