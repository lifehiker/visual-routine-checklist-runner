import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { TEMPLATES } from "@/lib/templates-data";

const features = [
  { icon: "📱", title: "Distraction-Free Run Mode", desc: "Full-screen step-by-step mode designed for kids. One step at a time, big emoji or photo, tap to advance." },
  { icon: "📸", title: "Custom Photos", desc: "Upload your own photos for each step so your child sees familiar objects, people, and places." },
  { icon: "🖨️", title: "Print Ready", desc: "Generate a clean, printable checklist in one click. Laminate it and hang it on the wall." },
  { icon: "🔗", title: "Share Links", desc: "Send a link so grandparents, teachers, or babysitters can run the routine on any device." },
  { icon: "🔒", title: "Lock Sequence", desc: "Enable lock mode so steps can only be completed in order. Great for ADHD and executive function support." },
  { icon: "📊", title: "Track Progress", desc: "See how many times a routine has been completed and when it was last run." },
];

const testimonials = [
  { quote: "My daughter used to melt down every morning. Since we started using a visual chart, she does her routine completely independently!", author: "Sarah T., mom of 2", emoji: "👩‍👧" },
  { quote: "I teach special ed and this is the first visual schedule app that actually works on a classroom iPad without confusion.", author: "Mr. Rodriguez, 3rd grade teacher", emoji: "👨‍🏫" },
  { quote: "The lock sequence feature is a game changer for my ADHD kiddo. He can't skip brushing teeth anymore!", author: "Jordan K., parent", emoji: "🌟" },
];

export default function HomePage() {
  const featuredTemplates = TEMPLATES.slice(0, 6);
  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-b from-teal-50 to-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <Badge className="mb-4 bg-teal-100 text-teal-800 hover:bg-teal-100">Free to get started</Badge>
          <h1 className="text-5xl md:text-6xl font-black text-gray-900 mb-6 leading-tight" style={{fontFamily:'Nunito, sans-serif'}}>
            Visual Routine Charts<br />
            <span className="text-teal-600">Your Kids Can Actually Follow</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Create beautiful picture schedules and visual routines for children. Perfect for autism, ADHD, special education, and any child who thrives on predictability.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/register">
              <Button size="lg" className="bg-teal-600 hover:bg-teal-700 text-lg px-8 py-6">
                Create Your First Routine Free
              </Button>
            </Link>
            <Link href="/templates/morning-routine-chart-for-kids">
              <Button size="lg" variant="outline" className="text-lg px-8 py-6 border-teal-600 text-teal-600 hover:bg-teal-50">
                Browse Templates
              </Button>
            </Link>
          </div>
          <p className="mt-4 text-sm text-gray-500">No credit card required • Works on any device • Print or run digitally</p>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4" style={{fontFamily:'Nunito, sans-serif'}}>Everything you need for successful routines</h2>
          <p className="text-center text-gray-600 mb-12">Built by parents for parents, teachers, therapists, and caregivers</p>
          <div className="grid md:grid-cols-3 gap-6">
            {features.map((f) => (
              <div key={f.title} className="bg-gray-50 rounded-2xl p-6 hover:shadow-md transition-shadow">
                <div className="text-4xl mb-3">{f.icon}</div>
                <h3 className="font-bold text-lg mb-2" style={{fontFamily:'Nunito, sans-serif'}}>{f.title}</h3>
                <p className="text-gray-600 text-sm">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Templates */}
      <section className="py-20 px-4 bg-teal-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4" style={{fontFamily:'Nunito, sans-serif'}}>Start with a proven template</h2>
          <p className="text-center text-gray-600 mb-12">10+ templates designed by educators and therapists. Customize them in minutes.</p>
          <div className="grid md:grid-cols-3 gap-4">
            {featuredTemplates.map((t) => (
              <Link key={t.slug} href={'/templates/'+t.slug} className="bg-white rounded-2xl p-5 hover:shadow-lg transition-all hover:-translate-y-1 border border-teal-100">
                <div className="text-3xl mb-3">{t.steps[0]?.emoji || '📋'}</div>
                <Badge className="mb-2 bg-teal-100 text-teal-700 hover:bg-teal-100 text-xs">{t.category}</Badge>
                <h3 className="font-bold text-gray-900 mb-1" style={{fontFamily:'Nunito, sans-serif'}}>{t.title}</h3>
                <p className="text-sm text-gray-500">{t.steps.length} steps</p>
              </Link>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link href="/register">
              <Button className="bg-teal-600 hover:bg-teal-700">View All Templates</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12" style={{fontFamily:'Nunito, sans-serif'}}>Loved by families and educators</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <div key={i} className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
                <div className="text-3xl mb-3">{t.emoji}</div>
                <p className="text-gray-700 italic mb-4">&quot;{t.quote}&quot;</p>
                <p className="text-sm font-semibold text-teal-700">{t.author}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing teaser */}
      <section className="py-20 px-4 bg-teal-600">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4" style={{fontFamily:'Nunito, sans-serif'}}>Start free. Upgrade when ready.</h2>
          <p className="text-teal-100 mb-8 text-lg">Free plan includes 3 routines, print mode, and run mode. Upgrade to Solo for just $12/month and get unlimited everything.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/register">
              <Button size="lg" className="bg-white text-teal-700 hover:bg-teal-50 text-lg px-8">
                Get Started Free
              </Button>
            </Link>
            <Link href="/pricing">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-teal-700 text-lg px-8">
                See Pricing
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
