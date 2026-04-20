import { auth } from "@/auth";
import { redirect } from "next/navigation";
import { AppSidebar } from "@/components/layout/app-sidebar";
import { signOut } from "@/auth";
import { Button } from "@/components/ui/button";

export default async function AppLayout({ children }: { children: React.ReactNode }) {
  const session = await auth();
  if (!session?.user) redirect("/login");

  return (
    <div className="min-h-screen flex bg-gray-50">
      <AppSidebar />
      <div className="flex-1 flex flex-col min-h-screen">
        <header className="bg-white border-b h-14 flex items-center justify-between px-6">
          <div className="text-sm text-gray-600">
            Hi, {session.user.name || session.user.email}
          </div>
          <form action={async () => { "use server"; await signOut({ redirectTo: "/" }); }}>
            <Button type="submit" variant="ghost" size="sm">Sign out</Button>
          </form>
        </header>
        <main className="flex-1 p-6">{children}</main>
      </div>
    </div>
  );
}