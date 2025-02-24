import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  ArrowDown,
  ArrowUp,
  CreditCard,
  DollarSign,
  Users,
  Activity,
} from "lucide-react";
import AnalyticsCharts from "./AnalyticsCharts";
import ProductPerformance from "./ProductPerformance";
import TeamActivity from "./TeamActivity";

interface StatCardProps {
  title: string;
  value: string;
  icon: React.ReactNode;
  change?: {
    value: string;
    positive: boolean;
  };
}

const StatCard = ({ title, value, icon, change }: StatCardProps) => {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">{title}</CardTitle>
        <div className="h-4 w-4 text-muted-foreground">{icon}</div>
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{value}</div>
        {change && (
          <p className="text-xs text-muted-foreground">
            <span
              className={`inline-flex items-center ${
                change.positive ? "text-green-500" : "text-red-500"
              }`}
            >
              {change.positive ? (
                <ArrowUp className="mr-1 h-3 w-3" />
              ) : (
                <ArrowDown className="mr-1 h-3 w-3" />
              )}
              {change.value}
            </span>{" "}
            from last month
          </p>
        )}
      </CardContent>
    </Card>
  );
};

const DashboardContent = () => {
  return (
    <div className="flex-1 w-full">
      <div className="px-4 py-6 md:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-3xl font-bold tracking-tight">Dashboard</h2>
        </div>
        <Tabs defaultValue="overview" className="w-full">
          <TabsList className="mb-4">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
            <TabsTrigger value="reports">Reports</TabsTrigger>
            <TabsTrigger value="notifications">Notifications</TabsTrigger>
          </TabsList>
          <TabsContent value="overview" className="space-y-6 w-full">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              <StatCard
                title="Total Revenue"
                value="$45,231.89"
                icon={<DollarSign className="h-4 w-4" />}
                change={{ value: "20.1%", positive: true }}
              />
              <StatCard
                title="Subscriptions"
                value="2,350"
                icon={<Users className="h-4 w-4" />}
                change={{ value: "10.1%", positive: true }}
              />
              <StatCard
                title="Sales"
                value="12,234"
                icon={<CreditCard className="h-4 w-4" />}
                change={{ value: "5.1%", positive: false }}
              />
              <StatCard
                title="Active Users"
                value="573"
                icon={<Activity className="h-4 w-4" />}
                change={{ value: "12.2%", positive: true }}
              />
            </div>
            
            <AnalyticsCharts />
            
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
              <div className="col-span-4">
                <ProductPerformance />
              </div>
              <div className="col-span-3">
                <TeamActivity />
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="analytics" className="space-y-4 w-full">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              <Card className="col-span-1 md:col-span-2">
                <CardHeader>
                  <CardTitle>Performance Analytics</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="h-[400px] w-full bg-muted/20 rounded-md flex items-center justify-center">
                    <p className="text-muted-foreground">Detailed analytics charts will appear here</p>
                  </div>
                </CardContent>
              </Card>
              <div className="space-y-4">
                <Card>
                  <CardHeader>
                    <CardTitle>Top Metrics</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {[
                        { label: "Conversion Rate", value: "3.2%" },
                        { label: "Avg. Session Duration", value: "2m 45s" },
                        { label: "Bounce Rate", value: "42.3%" },
                        { label: "Customer Acquisition Cost", value: "$25.40" },
                      ].map((metric, i) => (
                        <div key={i} className="flex justify-between">
                          <span className="text-sm text-muted-foreground">{metric.label}</span>
                          <span className="font-medium">{metric.value}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle>Growth Trends</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {[
                        { label: "MRR Growth", value: "+15.3%" },
                        { label: "User Growth", value: "+22.1%" },
                        { label: "Retention", value: "78.5%" },
                        { label: "Churn Rate", value: "3.2%" },
                      ].map((metric, i) => (
                        <div key={i} className="flex justify-between">
                          <span className="text-sm text-muted-foreground">{metric.label}</span>
                          <span className="font-medium">{metric.value}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

// Import for Avatar component
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

export default DashboardContent;