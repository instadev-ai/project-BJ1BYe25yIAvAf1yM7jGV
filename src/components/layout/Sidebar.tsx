import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  BarChart3,
  Users,
  ShoppingCart,
  Settings,
  LifeBuoy,
  Package,
  Home,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

interface SidebarProps {
  className?: string;
}

const Sidebar = ({ className }: SidebarProps) => {
  const [collapsed, setCollapsed] = useState(false);
  const location = useLocation();

  const toggleSidebar = () => {
    setCollapsed(!collapsed);
  };

  return (
    <div
      className={cn(
        "h-screen flex-col border-r bg-background transition-all duration-300",
        collapsed ? "w-16" : "w-64",
        className
      )}
    >
      <div className="flex h-14 items-center border-b px-3">
        <Link to="/" className="flex items-center gap-2">
          {!collapsed && (
            <span className="text-xl font-bold">StartupDash</span>
          )}
          {collapsed && <span className="text-xl font-bold">SD</span>}
        </Link>
        <Button
          variant="ghost"
          size="icon"
          className="ml-auto"
          onClick={toggleSidebar}
        >
          {collapsed ? (
            <ChevronRight className="h-4 w-4" />
          ) : (
            <ChevronLeft className="h-4 w-4" />
          )}
        </Button>
      </div>
      <nav className="flex-1 space-y-2 p-2">
        <NavItem
          to="/"
          icon={<Home className="h-4 w-4" />}
          label="Dashboard"
          collapsed={collapsed}
          active={location.pathname === "/"}
        />
        <NavItem
          to="/analytics"
          icon={<BarChart3 className="h-4 w-4" />}
          label="Analytics"
          collapsed={collapsed}
          active={location.pathname === "/analytics"}
        />
        <NavItem
          to="/customers"
          icon={<Users className="h-4 w-4" />}
          label="Customers"
          collapsed={collapsed}
          active={location.pathname === "/customers"}
        />
        <NavItem
          to="/orders"
          icon={<ShoppingCart className="h-4 w-4" />}
          label="Orders"
          collapsed={collapsed}
          active={location.pathname === "/orders"}
        />
        <NavItem
          to="/products"
          icon={<Package className="h-4 w-4" />}
          label="Products"
          collapsed={collapsed}
          active={location.pathname === "/products"}
        />
        <NavItem
          to="/settings"
          icon={<Settings className="h-4 w-4" />}
          label="Settings"
          collapsed={collapsed}
          active={location.pathname === "/settings"}
        />
        <NavItem
          to="/support"
          icon={<LifeBuoy className="h-4 w-4" />}
          label="Support"
          collapsed={collapsed}
          active={location.pathname === "/support"}
        />
      </nav>
    </div>
  );
};

interface NavItemProps {
  to: string;
  icon: React.ReactNode;
  label: string;
  collapsed: boolean;
  active: boolean;
}

const NavItem = ({ to, icon, label, collapsed, active }: NavItemProps) => {
  return (
    <Link
      to={to}
      className={cn(
        "flex items-center rounded-md px-3 py-2 text-sm font-medium",
        active 
          ? "bg-accent text-accent-foreground" 
          : "text-muted-foreground hover:bg-accent hover:text-accent-foreground"
      )}
    >
      <span className="mr-2">{icon}</span>
      {!collapsed && <span>{label}</span>}
    </Link>
  );
};

export default Sidebar;