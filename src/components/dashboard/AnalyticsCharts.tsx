import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const AnalyticsCharts = () => {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      <Card className="col-span-1 lg:col-span-2">
        <CardHeader>
          <CardTitle>Monthly Revenue</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-[300px]">
            <div className="h-full w-full bg-muted/20 rounded-md flex items-end p-4">
              <div className="w-full flex items-end gap-2">
                {[40, 30, 70, 50, 60, 80, 65, 75, 40, 55, 70, 90].map(
                  (height, i) => (
                    <div key={i} className="relative group w-full">
                      <div
                        className="bg-primary/80 rounded-t w-full transition-all duration-200 hover:bg-primary"
                        style={{ height: `${height}%` }}
                      ></div>
                      <div className="absolute bottom-full mb-2 left-1/2 transform -translate-x-1/2 bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                        ${Math.floor(height * 120)}
                      </div>
                      <div className="text-xs text-center mt-1">
                        {['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'][i]}
                      </div>
                    </div>
                  )
                )}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Customer Acquisition</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-[300px] flex items-center justify-center">
            <div className="relative w-40 h-40">
              {/* Donut chart simulation */}
              <svg className="w-full h-full" viewBox="0 0 100 100">
                <circle
                  cx="50"
                  cy="50"
                  r="40"
                  fill="transparent"
                  stroke="#e2e8f0"
                  strokeWidth="15"
                />
                <circle
                  cx="50"
                  cy="50"
                  r="40"
                  fill="transparent"
                  stroke="hsl(var(--primary))"
                  strokeWidth="15"
                  strokeDasharray="251.2"
                  strokeDashoffset="62.8"
                  transform="rotate(-90 50 50)"
                />
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <span className="text-2xl font-bold">75%</span>
                  <p className="text-xs text-muted-foreground">Retention</p>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-4 space-y-2">
            <div className="flex items-center">
              <div className="w-3 h-3 rounded-full bg-primary mr-2"></div>
              <span className="text-sm">Returning Users (75%)</span>
            </div>
            <div className="flex items-center">
              <div className="w-3 h-3 rounded-full bg-muted mr-2"></div>
              <span className="text-sm">New Users (25%)</span>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default AnalyticsCharts;