import AppShell from "@/app/components/AppShell";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Progress } from "@/components/ui/progress";

const stats = [
  {
    label: "Current GPA",
    value: "3.85",
    sub: "+0.05 vs last sem",
    subColor: "text-emerald-600",
    icon: "school",
    trend: "trending_up",
  },
  {
    label: "Tasks Due",
    value: "12",
    sub: "3 high priority",
    subColor: "text-orange-500",
    icon: "task_alt",
    trend: "warning",
  },
  {
    label: "Upcoming Classes",
    value: "4",
    sub: "Next: CS301 at 2PM",
    subColor: "text-primary",
    icon: "event",
    trend: "schedule",
  },
  {
    label: "Resources Read",
    value: "28",
    sub: "+15% this week",
    subColor: "text-emerald-600",
    icon: "library_books",
    trend: "trending_up",
  },
];

const todayClasses = [
  { time: "9:00 AM", course: "CS301 – Algorithms", room: "Hall B", color: "border-primary" },
  { time: "11:30 AM", course: "MATH202 – Linear Algebra", room: "Room 204", color: "border-blue-500" },
  { time: "2:00 PM", course: "PHYS103 – Thermodynamics", room: "Lab 3", color: "border-emerald-500" },
];

const upcomingTasks = [
  { title: "Operating Systems Final", due: "Oct 12", priority: "Critical", color: "bg-rose-500" },
  { title: "Algorithm Analysis Quiz", due: "Oct 15", priority: "High", color: "bg-primary" },
  { title: "Database Project Draft", due: "Oct 18", priority: "Regular", color: "bg-blue-500" },
];

export default function DashboardPage() {
  return (
    <AppShell>
      <main className="flex-1 overflow-y-auto p-8">
        <div className="max-w-6xl mx-auto space-y-8">
          {/* Header */}
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <h1 className="text-3xl font-black tracking-tight">Command Center</h1>
              <p className="text-muted-foreground mt-1">Welcome back, Alex. You have 3 classes today.</p>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex -space-x-2">
                {[1, 2, 3].map((i) => (
                  <Avatar key={i} className="size-8 border-2 border-background">
                    <AvatarImage src={`https://i.pravatar.cc/150?img=${i + 10}`} />
                    <AvatarFallback>U{i}</AvatarFallback>
                  </Avatar>
                ))}
                <div className="size-8 rounded-full bg-muted border-2 border-background flex items-center justify-center text-xs font-bold">+3</div>
              </div>
              <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
                <span className="material-symbols-outlined text-[18px] mr-1">add</span>
                Add Task
              </Button>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {stats.map((s) => (
              <Card key={s.label} className="relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-4 opacity-[0.07] group-hover:opacity-[0.12] transition-opacity">
                  <span className="material-symbols-outlined text-6xl text-primary">{s.icon}</span>
                </div>
                <CardContent className="p-5">
                  <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">{s.label}</p>
                  <p className="text-3xl font-black mt-1">{s.value}</p>
                  <p className={`text-sm font-bold flex items-center gap-0.5 mt-1 ${s.subColor}`}>
                    <span className="material-symbols-outlined text-[14px]">{s.trend}</span>
                    {s.sub}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Today's Schedule */}
            <div className="lg:col-span-2 space-y-4">
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-bold flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary">today</span>
                  Today's Classes
                </h2>
                <Button variant="ghost" size="sm" className="text-primary hover:text-primary">
                  View Schedule
                </Button>
              </div>
              <div className="space-y-3">
                {todayClasses.map((c) => (
                  <Card key={c.course} className={`border-l-4 ${c.color}`}>
                    <CardContent className="p-4 flex items-center justify-between">
                      <div>
                        <p className="font-bold">{c.course}</p>
                        <p className="text-sm text-muted-foreground">{c.time} · {c.room}</p>
                      </div>
                      <Button variant="outline" size="sm">Join</Button>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* GPA Trend Placeholder */}
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-base">Academic Progress</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span>CS301 – Algorithms</span>
                      <span className="font-bold text-primary">88%</span>
                    </div>
                    <Progress value={88} className="h-2" />
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span>MATH202 – Linear Algebra</span>
                      <span className="font-bold text-emerald-500">92%</span>
                    </div>
                    <Progress value={92} className="h-2" />
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span>PHYS103 – Thermodynamics</span>
                      <span className="font-bold text-orange-500">74%</span>
                    </div>
                    <Progress value={74} className="h-2" />
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Upcoming Deadlines */}
            <div className="space-y-4">
              <h2 className="text-xl font-bold flex items-center gap-2">
                <span className="material-symbols-outlined text-primary">priority_high</span>
                Upcoming Deadlines
              </h2>
              <div className="space-y-3">
                {upcomingTasks.map((t) => (
                  <Card key={t.title} className="relative overflow-hidden">
                    <div className={`absolute left-0 top-0 bottom-0 w-1 ${t.color}`} />
                    <CardContent className="pl-5 p-4">
                      <div className="flex justify-between items-start mb-1">
                        <Badge
                          variant="secondary"
                          className={`text-[10px] font-bold uppercase ${t.color === "bg-rose-500" ? "bg-rose-50 text-rose-600" : t.color === "bg-primary" ? "bg-primary/10 text-primary" : "bg-blue-50 text-blue-600"}`}
                        >
                          {t.priority}
                        </Badge>
                        <span className="text-xs text-muted-foreground">{t.due}</span>
                      </div>
                      <p className="font-bold text-sm">{t.title}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Daily Progress */}
              <Card className="bg-primary/5 border-primary/10">
                <CardContent className="p-4">
                  <div className="flex items-center justify-between mb-3">
                    <span className="font-bold text-sm text-primary">Daily Progress</span>
                    <span className="text-xs font-bold text-primary">65%</span>
                  </div>
                  <Progress value={65} className="h-2" />
                  <p className="text-[10px] text-muted-foreground text-center font-bold uppercase tracking-widest mt-3">
                    3 tasks remaining today
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
    </AppShell>
  );
}