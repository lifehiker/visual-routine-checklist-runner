import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function MarketingLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="border-b bg-white sticky top-0 z-50 shadow-sm">
        <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <span className="text-2xl">📋</span>
            <span className="font-bold text-xl text-teal-700" style={{fontFamily:'Nunito, sans-serif'}}>RoutineChart</span>
          </Link>
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-gray-600">
            <Link href="/templates/morning-routine-chart-for-kids" className="hover:text-teal-600 transition-colors">Templates</Link>
            <Link href="/pricing" className="hover:text-teal-600 transition-colors">Pricing</Link>
          </nav>
          <div className="flex items-center gap-3">
            <Link href="/login"><Button variant="ghost" size="sm">Log in</Button></Link>
            <Link href="/register"><Button size="sm" className="bg-teal-600 hover:bg-teal-700">Get Started Free</Button></Link>
          </div>
        </div>
      </header>
      <main className="flex-1">{children}</main>
      <footer className="bg-gray-50 border-t py-12 mt-16">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="text-xl">📋</span>
              <span className="font-bold text-teal-700" style={{fontFamily:'Nunito, sans-serif'}}>RoutineChart</span>
            </div>
            <p className="text-sm text-gray-500">Visual routine charts and picture schedules for parents, teachers, and therapists.</p>
          </div>
          <div>
            <h3 className="font-semibold text-sm mb-3">Templates</h3>
            <ul className="space-y-2 text-sm text-gray-500">
              <li><Link href="/templates/morning-routine-chart-for-kids" className="hover:text-teal-600">Morning Routine</Link></li>
              <li><Link href="/templates/bedtime-routine-chart" className="hover:text-teal-600">Bedtime Routine</Link></li>
              <li><Link href="/templates/classroom-visual-schedule" className="hover:text-teal-600">Classroom Schedule</Link></li>
              <li><Link href="/templates/visual-schedule-app-for-autism" className="hover:text-teal-600">Autism Visual Schedule</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-sm mb-3">Product</h3>
            <ul className="space-y-2 text-sm text-gray-500">
              <li><Link href="/pricing" className="hover:text-teal-600">Pricing</Link></li>
              <li><Link href="/register" className="hover:text-teal-600">Sign Up Free</Link></li>
              <li><Link href="/compare/choiceworks-alternative" className="hover:text-teal-600">vs Choiceworks</Link></li>
              <li><Link href="/compare/first-then-visual-schedule-alternative" className="hover:text-teal-600">vs First Then</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-sm mb-3">Company</h3>
            <ul className="space-y-2 text-sm text-gray-500">
              <li><Link href="/privacy" className="hover:text-teal-600">Privacy Policy</Link></li>
              <li><Link href="/terms" className="hover:text-teal-600">Terms of Service</Link></li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
}
