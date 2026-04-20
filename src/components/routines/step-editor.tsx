"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const COMMON_EMOJIS = [
  "✅","🌅","🚽","🧼","👕","🍳","🦷","🎒","👟","👋",
  "🍽","🛁","😴","📖","🌙","🪥","😁","👅","💧","🏠",
  "🍎","📚","🍱","😌","🎮","🎨","✏","📋","🎯","☕",
  "🌟","📸","🌓","🧦","👖","🧥","👟","🪞","📁","🎒",
  "👍","👏","🤗","🦸","🎫","🚴","🏃","👀","💪","👻",
];

interface StepEditorProps {
  step: {
    title: string;
    emoji: string;
    description?: string;
    durationLabel?: string;
  };
  index: number;
  onChange: (index: number, field: string, value: string) => void;
  onRemove: (index: number) => void;
}

export function StepEditor({ step, index, onChange, onRemove }: StepEditorProps) {
  return (
    <div className="bg-gray-50 rounded-xl p-4 border">
      <div className="flex items-start gap-3">
        <div className="text-2xl cursor-default select-none">{step.emoji}</div>
        <div className="flex-1 space-y-3">
          <div>
            <Label className="text-xs">Step Title</Label>
            <Input
              value={step.title}
              onChange={(e) => onChange(index, "title", e.target.value)}
              placeholder="e.g. Brush Teeth"
              className="mt-1"
            />
          </div>
          <div>
            <Label className="text-xs">Choose Emoji</Label>
            <div className="flex flex-wrap gap-1 mt-1">
              {COMMON_EMOJIS.map((emoji) => (
                <button
                  key={emoji}
                  type="button"
                  onClick={() => onChange(index, "emoji", emoji)}
                  className={"text-xl p-1 rounded hover:bg-gray-200 " + (step.emoji === emoji ? "bg-teal-100 ring-1 ring-teal-400" : "")}
                >
                  {emoji}
                </button>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-2 gap-2">
            <div>
              <Label className="text-xs">Description (optional)</Label>
              <Input
                value={step.description || ""}
                onChange={(e) => onChange(index, "description", e.target.value)}
                placeholder="Add details..."
                className="mt-1"
              />
            </div>
            <div>
              <Label className="text-xs">Duration (optional)</Label>
              <Input
                value={step.durationLabel || ""}
                onChange={(e) => onChange(index, "durationLabel", e.target.value)}
                placeholder="e.g. 5 min"
                className="mt-1"
              />
            </div>
          </div>
        </div>
        <Button type="button" variant="ghost" size="sm" onClick={() => onRemove(index)} className="text-red-500 hover:text-red-700 hover:bg-red-50">×</Button>
      </div>
    </div>
  );
}
