import { Sidebar } from "@/components/dashboard/Sidebar";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen bg-ivory-200">
      <Sidebar />
      <main className="flex-1">{children}</main>
    </div>
  );
}
