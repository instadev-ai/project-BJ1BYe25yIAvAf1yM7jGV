import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";

const ProductPerformance = () => {
  const products = [
    {
      name: "Premium Plan",
      sales: 621,
      growth: 12.5,
      progress: 75,
    },
    {
      name: "Basic Plan",
      sales: 1453,
      growth: 8.2,
      progress: 65,
    },
    {
      name: "Enterprise Solution",
      sales: 125,
      growth: 21.8,
      progress: 85,
    },
    {
      name: "Consulting Services",
      sales: 89,
      growth: -2.7,
      progress: 45,
    },
    {
      name: "Add-on Features",
      sales: 294,
      growth: 6.1,
      progress: 55,
    },
  ];

  return (
    <Card>
      <CardHeader>
        <CardTitle>Product Performance</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          {products.map((product, i) => (
            <div key={i} className="space-y-2">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">{product.name}</p>
                  <p className="text-sm text-muted-foreground">
                    {product.sales} sales
                  </p>
                </div>
                <Badge variant={product.growth > 0 ? "default" : "destructive"}>
                  {product.growth > 0 ? "+" : ""}
                  {product.growth}%
                </Badge>
              </div>
              <Progress value={product.progress} className="h-2" />
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default ProductPerformance;