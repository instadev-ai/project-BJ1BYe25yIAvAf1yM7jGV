import DashboardLayout from "@/components/layout/DashboardLayout";
import Analytics from "./Analytics";

const AnalyticsPageWrapper = () => {
  return (
    <div className="w-full h-full">
      <DashboardLayout>
        <Analytics />
      </DashboardLayout>
    </div>
  );
};

export default AnalyticsPageWrapper;