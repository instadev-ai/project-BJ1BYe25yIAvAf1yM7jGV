import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";

const TeamActivity = () => {
  const activities = [
    {
      user: {
        name: "Alex Johnson",
        avatar: null,
        initials: "AJ",
      },
      action: "Closed a deal with",
      target: "Acme Corp",
      time: "2 hours ago",
      type: "sale",
    },
    {
      user: {
        name: "Sarah Williams",
        avatar: null,
        initials: "SW",
      },
      action: "Added a new lead",
      target: "TechStart Inc",
      time: "4 hours ago",
      type: "lead",
    },
    {
      user: {
        name: "Michael Chen",
        avatar: null,
        initials: "MC",
      },
      action: "Scheduled a demo with",
      target: "Global Solutions",
      time: "Yesterday",
      type: "meeting",
    },
    {
      user: {
        name: "Emily Davis",
        avatar: null,
        initials: "ED",
      },
      action: "Resolved support ticket from",
      target: "John Smith",
      time: "Yesterday",
      type: "support",
    },
    {
      user: {
        name: "Robert Wilson",
        avatar: null,
        initials: "RW",
      },
      action: "Updated the proposal for",
      target: "Innovative Labs",
      time: "2 days ago",
      type: "document",
    },
  ];

  const getBadgeVariant = (type: string) => {
    switch (type) {
      case "sale":
        return "default";
      case "lead":
        return "secondary";
      case "meeting":
        return "outline";
      case "support":
        return "destructive";
      default:
        return "secondary";
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Team Activity</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-5">
          {activities.map((activity, i) => (
            <div key={i} className="flex items-start space-x-4">
              <Avatar className="h-9 w-9">
                {activity.user.avatar && (
                  <AvatarImage src={activity.user.avatar} alt={activity.user.name} />
                )}
                <AvatarFallback>{activity.user.initials}</AvatarFallback>
              </Avatar>
              <div className="space-y-1">
                <p className="text-sm font-medium leading-none">
                  <span className="font-semibold">{activity.user.name}</span>{" "}
                  {activity.action}{" "}
                  <span className="font-semibold">{activity.target}</span>
                </p>
                <div className="flex items-center pt-1">
                  <Badge variant={getBadgeVariant(activity.type)} className="mr-2">
                    {activity.type}
                  </Badge>
                  <span className="text-xs text-muted-foreground">
                    {activity.time}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default TeamActivity;