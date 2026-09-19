import { AdminSidebar } from "@/components/admin/AdminSidebar";

export default function AdminPortalLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen bg-ivory-200">
      <AdminSidebar />
      <main className="flex-1">{children}</main>
    </div>
  );
}
