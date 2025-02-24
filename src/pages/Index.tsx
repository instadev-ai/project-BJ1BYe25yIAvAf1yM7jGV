import DashboardLayout from "@/components/layout/DashboardLayout";
import DashboardContent from "@/components/dashboard/DashboardContent";

const Index = () => {
  return (
    <div className="w-full h-full">
      <DashboardLayout>
        <DashboardContent />
      </DashboardLayout>
    </div>
  );
};

export default Index;