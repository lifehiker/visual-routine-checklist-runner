import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "RoutineChart - Visual Routine Charts & Picture Schedules",
  description: "Create visual routine charts and picture schedules for kids. Perfect for parents, teachers, and therapists.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
