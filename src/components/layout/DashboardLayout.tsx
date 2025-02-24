import Sidebar from "@/components/layout/Sidebar";
import Navbar from "@/components/layout/Navbar";
import DashboardContent from "@/components/dashboard/DashboardContent";

const DashboardLayout = () => {
  return (
    <div className="flex h-screen w-full overflow-hidden">
      <Sidebar />
      <div className="flex flex-col w-full">
        <Navbar />
        <main className="w-full overflow-y-auto">
          <DashboardContent />
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;