import Sidebar from "@/components/layout/Sidebar";
import Navbar from "@/components/layout/Navbar";
import { SidebarInset } from "@/components/ui/sidebar";

interface DashboardLayoutProps {
  children: React.ReactNode;
}

const DashboardLayout = ({ children }: DashboardLayoutProps) => {
  return (
    <div className="flex h-screen bg-background">
      <Sidebar />
      <SidebarInset>
        <Navbar />
        <main className="flex-1 overflow-y-auto">
          {children}
        </main>
      </SidebarInset>
    </div>
  );
};

export default DashboardLayout;