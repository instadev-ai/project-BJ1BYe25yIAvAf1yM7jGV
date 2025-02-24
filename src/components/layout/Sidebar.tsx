import { Link } from "react-router-dom";
import {
  BarChart3,
  Users,
  ShoppingCart,
  Settings,
  LifeBuoy,
  Package,
  Home,
  ClipboardList,
} from "lucide-react";

import {
  Sidebar as ShadcnSidebar,
  SidebarProvider,
  SidebarContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarTrigger,
  SidebarFooter,
} from "@/components/ui/sidebar";

const Sidebar = () => {
  return (
    <SidebarProvider defaultOpen={true}>
      <ShadcnSidebar>
        <SidebarHeader className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-xl font-bold">StartupDash</span>
          </div>
          <SidebarTrigger />
        </SidebarHeader>
        
        <SidebarContent>
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton asChild tooltip="Dashboard">
                <Link to="/">
                  <Home className="h-4 w-4" />
                  <span>Dashboard</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
            
            <SidebarMenuItem>
              <SidebarMenuButton asChild tooltip="Analytics">
                <Link to="/analytics">
                  <BarChart3 className="h-4 w-4" />
                  <span>Analytics</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
            
            <SidebarMenuItem>
              <SidebarMenuButton asChild tooltip="Orders">
                <Link to="/orders">
                  <ClipboardList className="h-4 w-4" />
                  <span>Orders</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
            
            <SidebarMenuItem>
              <SidebarMenuButton asChild tooltip="Customers">
                <Link to="/customers">
                  <Users className="h-4 w-4" />
                  <span>Customers</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
            
            <SidebarMenuItem>
              <SidebarMenuButton asChild tooltip="Products">
                <Link to="/products">
                  <Package className="h-4 w-4" />
                  <span>Products</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
            
            <SidebarMenuItem>
              <SidebarMenuButton asChild tooltip="Settings">
                <Link to="/settings">
                  <Settings className="h-4 w-4" />
                  <span>Settings</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
            
            <SidebarMenuItem>
              <SidebarMenuButton asChild tooltip="Support">
                <Link to="/support">
                  <LifeBuoy className="h-4 w-4" />
                  <span>Support</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarContent>
        
        <SidebarFooter>
          <div className="text-xs text-muted-foreground p-2">
            StartupDash v1.0
          </div>
        </SidebarFooter>
      </ShadcnSidebar>
    </SidebarProvider>
  );
};

export default Sidebar;