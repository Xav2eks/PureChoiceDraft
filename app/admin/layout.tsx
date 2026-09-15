import Sidebar from "@/components/admin/Sidebar";

export default function AdminLayout({ children }: LayoutProps<"/">) {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <main className="flex-1 p-6 bg-[#F5F5F5]">{children}</main>
    </div>
  );
}
