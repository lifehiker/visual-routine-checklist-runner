"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const navItems = [
  { href: "/app", label: "My Routines", icon: "📋" },
  { href: "/app/templates", label: "Templates", icon: "✨" },
  { href: "/app/billing", label: "Billing", icon: "💳" },
];

export function AppSidebar() {
  const pathname = usePathname();
  return (
    <aside className="w-56 bg-white border-r h-full flex flex-col">
      <div className="p-4 border-b">
        <Link href="/" className="flex items-center gap-2">
          <span className="text-xl">📋</span>
          <span className="font-black text-teal-700 text-lg" style={{fontFamily:"Nunito, sans-serif"}}>RoutineChart</span>
        </Link>
      </div>
      <nav className="flex-1 p-3 space-y-1">
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={cn(
              "flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors",
              pathname === item.href
                ? "bg-teal-50 text-teal-700"
                : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
            )}
          >
            <span>{item.icon}</span>
            <span>{item.label}</span>
          </Link>
        ))}
      </nav>
    </aside>
  );
}