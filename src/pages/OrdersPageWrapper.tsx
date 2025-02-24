import DashboardLayout from "@/components/layout/DashboardLayout";
import OrdersPage from "./Orders";

const OrdersPageWrapper = () => {
  return (
    <div className="w-full h-full">
      <DashboardLayout>
        <OrdersPage />
      </DashboardLayout>
    </div>
  );
};

export default OrdersPageWrapper;