import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function ComparePage() {
  return (
    <div className="py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="mb-6"><Link href="/" className="text-sm text-teal-600 hover:underline">← Back to home</Link></div>
        <h1 className="text-4xl font-black mb-6 text-gray-900">RoutineChart vs First Then Visual Schedule App</h1>
        <p className="text-xl text-gray-600 mb-12">RoutineChart handles first-then boards AND full multi-step routines in one place. No need for separate apps.</p>
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          <div className="bg-gray-50 rounded-2xl p-6">
            <div className="text-3xl mb-3">📋</div>
            <h3 className="font-bold text-lg mb-2">Multi-Step Routines</h3>
            <p className="text-gray-600">Go beyond first-then with full morning routines, bedtime routines, classroom schedules, and more.</p>
          </div>
          <div className="bg-gray-50 rounded-2xl p-6">
            <div className="text-3xl mb-3">🔗</div>
            <h3 className="font-bold text-lg mb-2">Share Anywhere</h3>
            <p className="text-gray-600">Share routines via link. No app required for the person running the routine.</p>
          </div>
          <div className="bg-gray-50 rounded-2xl p-6">
            <div className="text-3xl mb-3">📱</div>
            <h3 className="font-bold text-lg mb-2">Cross-Platform</h3>
            <p className="text-gray-600">Works on any device with a browser. iOS, Android, desktop - all covered.</p>
          </div>
          <div className="bg-gray-50 rounded-2xl p-6">
            <div className="text-3xl mb-3">⭐</div>
            <h3 className="font-bold text-lg mb-2">Free to Start</h3>
            <p className="text-gray-600">Get started with 3 full routines completely free. No credit card needed.</p>
          </div>
        </div>
        <div className="bg-teal-50 rounded-2xl p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Try RoutineChart Free</h2>
          <p className="text-gray-600 mb-6">No credit card required. 3 full routines free forever.</p>
          <Link href="/register"><Button className="bg-teal-600 hover:bg-teal-700" size="lg">Get Started Free</Button></Link>
        </div>
      </div>
    </div>
  );
}