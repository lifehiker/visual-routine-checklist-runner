import { auth } from "@/auth";
import { prisma } from "@/lib/prisma";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { getUserPlan } from "@/lib/plan-limits";

export default async function DashboardPage() {
  const session = await auth();
  const userId = (session!.user as { id: string }).id;

  const [routines, plan] = await Promise.all([
    prisma.routine.findMany({
      where: { userId, isArchived: false },
      include: { steps: true },
      orderBy: { updatedAt: "desc" },
    }),
    getUserPlan(userId),
  ]);

  const atLimit = plan === "free" && routines.length >= 3;

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-black text-gray-900" style={{fontFamily:"Nunito, sans-serif"}}>My Routines</h1>
          {plan === "free" && (
            <p className="text-sm text-gray-500 mt-1">{routines.length}/3 routines used on free plan</p>
          )}
        </div>
        <div className="flex gap-2">
          <Link href="/app/templates"><Button variant="outline" size="sm">✨ Use Template</Button></Link>
          {!atLimit ? (
            <Link href="/app/routines/new"><Button className="bg-teal-600 hover:bg-teal-700" size="sm">+ New Routine</Button></Link>
          ) : (
            <Link href="/app/billing"><Button className="bg-amber-500 hover:bg-amber-600" size="sm">🚀 Upgrade to Add More</Button></Link>
          )}
        </div>
      </div>

      {routines.length === 0 ? (
        <div className="text-center py-20 bg-white rounded-2xl border border-dashed border-gray-200">
          <div className="text-6xl mb-4">📋</div>
          <h2 className="text-xl font-bold mb-2" style={{fontFamily:"Nunito, sans-serif"}}>No routines yet</h2>
          <p className="text-gray-500 mb-6">Create your first visual routine or start from a template.</p>
          <div className="flex gap-3 justify-center">
            <Link href="/app/templates"><Button variant="outline">✨ Browse Templates</Button></Link>
            <Link href="/app/routines/new"><Button className="bg-teal-600 hover:bg-teal-700">+ Create Routine</Button></Link>
          </div>
        </div>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {routines.map((r) => (
            <div key={r.id} className="bg-white rounded-2xl border p-5 hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between mb-2">
                <h3 className="font-bold text-gray-900 text-lg" style={{fontFamily:"Nunito, sans-serif"}}>{r.title}</h3>
                {r.category && <Badge variant="secondary" className="text-xs">{r.category}</Badge>}
              </div>
              <p className="text-sm text-gray-500 mb-1">{r.steps.length} steps</p>
              {r.lastRunAt && (
                <p className="text-xs text-gray-400 mb-3">
                  Last run: {new Date(r.lastRunAt).toLocaleDateString()}
                  {r.completionCount > 0 && <span> • {r.completionCount} completions</span>}
                </p>
              )}
              <div className="flex gap-2 mt-4">
                <Link href={`/app/routines/${r.id}/run`} className="flex-1">
                  <Button size="sm" className="w-full bg-teal-600 hover:bg-teal-700">▶ Run</Button>
                </Link>
                <Link href={`/app/routines/${r.id}/print`}>
                  <Button size="sm" variant="outline">🖨</Button>
                </Link>
                <Link href={`/app/routines/${r.id}/edit`}>
                  <Button size="sm" variant="outline">✏</Button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}