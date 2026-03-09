import AppShell from "@/app/components/AppShell";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";

const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const calendarDays = [
    { day: 27, prev: true }, { day: 28, prev: true }, { day: 29, prev: true }, { day: 30, prev: true },
    { day: 1 }, { day: 2 }, { day: 3 },
    { day: 4 }, { day: 5, events: [{ label: "CS 301 Lecture", color: "bg-primary/20 text-primary border-primary/30" }, { label: "Lab Session", color: "bg-blue-500/10 text-blue-600 border-blue-500/20" }] },
    { day: 6 }, { day: 7 }, { day: 8 },
    { day: 9, events: [{ label: "Exam Prep", color: "bg-rose-500/10 text-rose-600 border-rose-500/20" }] }, { day: 10 },
    { day: 11 }, { day: 12 }, { day: 13 }, { day: 14 }, { day: 15 }, { day: 16 }, { day: 17 },
    { day: 18 }, { day: 19 }, { day: 20 },
    { day: 21, events: [{ label: "History Essay", color: "bg-primary/20 text-primary border-primary/30" }, { label: "Peer Review", color: "bg-emerald-500/10 text-emerald-600 border-emerald-500/20" }] },
    { day: 22 }, { day: 23 }, { day: 24 },
];

const deadlines = [
    { title: "Operating Systems Final", course: "Chapter 4-8, Memory Mgmt...", date: "Oct 12", priority: "Critical", color: "bg-rose-500", badgeClass: "bg-rose-50 text-rose-500" },
    { title: "Algorithm Analysis Quiz", course: "Big O Notation & Complexity", date: "Oct 15", priority: "High", color: "bg-primary", badgeClass: "bg-primary/10 text-primary" },
    { title: "Database Project Draft", course: "ER Diagram & Schema Design", date: "Oct 18", priority: "Regular", color: "bg-blue-500", badgeClass: "bg-blue-50 text-blue-500" },
];

const reminders = [
    { text: "Email Professor regarding Lab 3", done: false },
    { text: "Return Library Books", done: false },
    { text: "Pick up graduation gown", done: true },
];

export default function SchedulePage() {
    return (
        <AppShell>
            <main className="flex-1 flex overflow-hidden">
                {/* Calendar Section */}
                <div className="flex-1 overflow-y-auto p-8">
                    <div className="flex items-center justify-between mb-8">
                        <div>
                            <h1 className="text-3xl font-black tracking-tight">Academic Schedule</h1>
                            <p className="text-muted-foreground">October 2023 · Fall Semester</p>
                        </div>
                        <div className="flex items-center gap-1 bg-muted p-1 rounded-xl">
                            {["Day", "Week", "Month"].map((v, i) => (
                                <Button
                                    key={v}
                                    variant={i === 2 ? "secondary" : "ghost"}
                                    size="sm"
                                    className={i === 2 ? "bg-card shadow-sm" : "text-muted-foreground"}
                                >
                                    {v}
                                </Button>
                            ))}
                        </div>
                    </div>

                    <Card>
                        <div className="flex items-center justify-between p-4 border-b">
                            <Button variant="ghost" size="icon">
                                <span className="material-symbols-outlined">chevron_left</span>
                            </Button>
                            <h3 className="font-bold text-lg">October 2023</h3>
                            <Button variant="ghost" size="icon">
                                <span className="material-symbols-outlined">chevron_right</span>
                            </Button>
                        </div>

                        {/* Day headers */}
                        <div className="grid grid-cols-7 border-b">
                            {daysOfWeek.map((d) => (
                                <div key={d} className="py-3 text-center text-xs font-bold text-muted-foreground uppercase tracking-widest">
                                    {d}
                                </div>
                            ))}
                        </div>

                        {/* Calendar grid */}
                        <div className="grid grid-cols-7 auto-rows-[100px]">
                            {calendarDays.map((cell, i) => (
                                <div
                                    key={i}
                                    className={`border-r border-b border-border p-2 text-sm font-medium overflow-hidden ${cell.prev ? "opacity-30 text-muted-foreground" : ""} ${i % 7 === 6 ? "border-r-0" : ""}`}
                                >
                                    <span>{cell.day}</span>
                                    {cell.events && (
                                        <div className="mt-1 space-y-0.5">
                                            {cell.events.map((ev) => (
                                                <div key={ev.label} className={`px-1.5 py-0.5 text-[10px] font-bold rounded border truncate ${ev.color}`}>
                                                    {ev.label}
                                                </div>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </Card>
                </div>

                {/* Side Panel */}
                <aside className="w-80 border-l bg-muted/30 flex flex-col overflow-y-auto p-6 space-y-8">
                    {/* Deadlines */}
                    <div>
                        <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
                            <span className="material-symbols-outlined text-primary">priority_high</span>
                            Upcoming Deadlines
                        </h2>
                        <div className="space-y-3">
                            {deadlines.map((d) => (
                                <Card key={d.title} className="relative overflow-hidden">
                                    <div className={`absolute left-0 top-0 bottom-0 w-1 ${d.color}`} />
                                    <CardContent className="pl-5 p-4">
                                        <div className="flex justify-between items-start mb-1">
                                            <Badge variant="secondary" className={`text-[10px] font-bold uppercase ${d.badgeClass}`}>{d.priority}</Badge>
                                            <span className="text-xs text-muted-foreground">{d.date}</span>
                                        </div>
                                        <p className="font-bold text-sm">{d.title}</p>
                                        <p className="text-xs text-muted-foreground line-clamp-1 mt-0.5">{d.course}</p>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </div>

                    {/* Reminders */}
                    <div>
                        <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
                            <span className="material-symbols-outlined text-emerald-500">sticky_note_2</span>
                            Reminders
                        </h2>
                        <div className="space-y-3">
                            {reminders.map((r) => (
                                <div key={r.text} className={`flex items-center gap-3 ${r.done ? "opacity-50" : ""}`}>
                                    <div className={`size-5 rounded border-2 flex items-center justify-center ${r.done ? "border-primary bg-primary text-primary-foreground" : "border-border"}`}>
                                        {r.done && <span className="material-symbols-outlined text-[12px]">check</span>}
                                    </div>
                                    <span className={`text-sm font-medium ${r.done ? "line-through" : ""}`}>{r.text}</span>
                                </div>
                            ))}
                            <Button variant="outline" className="w-full mt-4 border-dashed text-muted-foreground hover:text-primary hover:border-primary">
                                <span className="material-symbols-outlined">add</span>
                                Add Reminder
                            </Button>
                        </div>
                    </div>

                    {/* Daily Progress */}
                    <Card className="bg-primary/10 border-primary/20">
                        <CardContent className="p-4">
                            <div className="flex items-center justify-between mb-3">
                                <span className="font-bold text-sm text-primary">Daily Progress</span>
                                <span className="text-xs font-bold text-primary">65%</span>
                            </div>
                            <Progress value={65} className="h-2" />
                            <p className="text-[10px] text-muted-foreground text-center font-bold uppercase tracking-widest mt-3">3 tasks remaining today</p>
                        </CardContent>
                    </Card>
                </aside>
            </main>
        </AppShell>
    );
}
