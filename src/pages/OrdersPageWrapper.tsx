import DashboardLayout from "@/components/layout/DashboardLayout";
import OrdersPage from "./Orders";

const OrdersPageWrapper = () => {
  return (
    <DashboardLayout>
      <OrdersPage />
    </DashboardLayout>
  );
};

export default OrdersPageWrapper;