import { notFound } from "next/navigation";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { TEMPLATES } from "@/lib/templates-data";

export async function generateStaticParams() {
  return TEMPLATES.map((t) => ({ slug: t.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const t = TEMPLATES.find((x) => x.slug === slug);
  if (!t) return {};
  return { title: t.seoTitle, description: t.seoDescription };
}

export default async function TemplatePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const template = TEMPLATES.find((t) => t.slug === slug);
  if (!template) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: template.faq.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <div className="py-12 px-4">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="max-w-4xl mx-auto">
        <div className="mb-6">
          <Link href="/" className="text-sm text-teal-600 hover:underline">← Back to home</Link>
        </div>
        <Badge className="mb-4 bg-teal-100 text-teal-800">{template.category}</Badge>
        <h1 className="text-4xl font-black mb-4 text-gray-900">{template.title}</h1>
        <p className="text-xl text-gray-600 mb-8">{template.description}</p>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div>
            <h2 className="text-2xl font-bold mb-4">Routine Steps</h2>
            <div className="space-y-3">
              {template.steps.map((step, i) => (
                <div key={i} className="flex items-center gap-4 bg-gray-50 rounded-xl p-4">
                  <span className="text-3xl">{step.emoji}</span>
                  <div className="flex-1">
                    <div className="font-semibold text-gray-900">{step.title}</div>
                    {step.description && <div className="text-sm text-gray-500">{step.description}</div>}
                  </div>
                  {step.durationLabel && (
                    <span className="text-sm text-teal-600 font-medium bg-teal-50 px-2 py-1 rounded">{step.durationLabel}</span>
                  )}
                </div>
              ))}
            </div>
          </div>
          <div>
            <div className="bg-teal-50 rounded-2xl p-8 text-center sticky top-24">
              <div className="text-6xl mb-4">{template.steps[0]?.emoji}</div>
              <h3 className="text-2xl font-bold mb-2">{template.title}</h3>
              <p className="text-gray-600 mb-6">{template.steps.length} steps • Free to customize</p>
              <Link href="/register">
                <Button className="w-full bg-teal-600 hover:bg-teal-700 mb-3" size="lg">
                  Use This Template Free
                </Button>
              </Link>
              <p className="text-xs text-gray-500">No credit card required</p>
            </div>
          </div>
        </div>

        {template.faq.length > 0 && (
          <div className="mt-12">
            <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
            <div className="space-y-4">
              {template.faq.map((item, i) => (
                <div key={i} className="bg-gray-50 rounded-xl p-6">
                  <h3 className="font-bold text-gray-900 mb-2">{item.q}</h3>
                  <p className="text-gray-600">{item.a}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}