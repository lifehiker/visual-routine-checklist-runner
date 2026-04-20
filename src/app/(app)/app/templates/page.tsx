import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { TEMPLATES } from "@/lib/templates-data";

export default function TemplatesPage() {
  return (
    <div>
      <h1 className="text-2xl font-black mb-2" style={{fontFamily:"Nunito, sans-serif"}}>Template Library</h1>
      <p className="text-gray-600 mb-6">Start with a proven template, then customize it for your child.</p>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {TEMPLATES.map((t) => (
          <div key={t.slug} className="bg-white rounded-2xl border p-5 hover:shadow-md transition-shadow">
            <div className="text-3xl mb-3">{t.steps[0]?.emoji}</div>
            <Badge className="mb-2 bg-teal-100 text-teal-700 hover:bg-teal-100 text-xs">{t.category}</Badge>
            <h3 className="font-bold text-gray-900 mb-2" style={{fontFamily:"Nunito, sans-serif"}}>{t.title}</h3>
            <p className="text-sm text-gray-500 mb-4">{t.description}</p>
            <p className="text-xs text-gray-400 mb-4">{t.steps.length} steps</p>
            <Link href={"//app/routines/new"}>
              <Button size="sm" className="w-full bg-teal-600 hover:bg-teal-700">Use This Template</Button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}