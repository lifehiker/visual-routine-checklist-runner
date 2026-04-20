import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { PLANS } from "@/lib/stripe";

type PlanKey = keyof typeof PLANS;
const planKeys: PlanKey[] = ["free", "solo", "family", "classroom"];
const colors: Record<PlanKey, string> = { free: "bg-gray-50 border-gray-200", solo: "bg-teal-600 border-teal-600 text-white", family: "bg-purple-50 border-purple-200", classroom: "bg-orange-50 border-orange-200" };
const btnColors: Record<PlanKey, string> = { free: "bg-gray-800 hover:bg-gray-900 text-white", solo: "bg-white text-teal-700 hover:bg-teal-50", family: "bg-purple-600 hover:bg-purple-700 text-white", classroom: "bg-orange-600 hover:bg-orange-700 text-white" };

export default function PricingPage() {
  return (
    <div className="py-20 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-black mb-4">Simple, honest pricing</h1>
          <p className="text-xl text-gray-600">Start free. Upgrade when you need more.</p>
        </div>
        <div className="grid md:grid-cols-4 gap-4 mb-16">
          {planKeys.map((key) => {
            const plan = PLANS[key];
            const isSolo = key === "solo";
            return (
              <div key={key} className={"rounded-2xl border-2 p-6 relative " + colors[key]}>
                {isSolo && <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-amber-400 text-amber-900">Most Popular</Badge>}
                <h2 className={"font-bold text-xl mb-2 " + (isSolo ? "text-white" : "text-gray-900")}>{plan.name}</h2>
                <div className="mb-4">
                  <span className={"text-3xl font-black " + (isSolo ? "text-white" : "text-gray-900")}>
                    {plan.price === 0 ? "Free" : "$" + plan.price + "/mo"}
                  </span>
                </div>
                <ul className="space-y-2 mb-6">
                  {plan.features.map((f) => (
                    <li key={f} className={"text-sm flex gap-2 " + (isSolo ? "text-teal-100" : "text-gray-600")}>
                      <span>✓</span><span>{f}</span>
                    </li>
                  ))}
                </ul>
                <Link href="/register">
                  <Button className={"w-full " + btnColors[key]}>{plan.price === 0 ? "Get Started Free" : "Start Free Trial"}</Button>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}