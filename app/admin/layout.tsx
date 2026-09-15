import Sidebar from "@/components/admin/Sidebar";

export default function AdminLayout({ children }: LayoutProps<"/">) {
  return (
    <div className="flex min-h-screen">
      <div className="hidden md:block">
        <Sidebar />
      </div>
      <main className="flex-1 p-6 bg-[#F5F5F5]">{children}</main>
    </div>
  );
}
