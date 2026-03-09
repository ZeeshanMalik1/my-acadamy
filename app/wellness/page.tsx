"use client";
import AppShell from "@/app/components/AppShell";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { motion, Variants } from "framer-motion";

const container: Variants = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.1 } }
};

const itemVariants: Variants = {
    hidden: { opacity: 0, y: 15 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 300, damping: 24 } }
};

const stressData = [
    { day: "Mon", level: 3 },
    { day: "Tue", level: 6 },
    { day: "Wed", level: 8 },
    { day: "Thu", level: 5 },
    { day: "Fri", level: 4 },
    { day: "Sat", level: 2 },
    { day: "Sun", level: 3 },
];

const sleepData = [
    { day: "Mon", sleep: 7, productivity: 80 },
    { day: "Tue", sleep: 5, productivity: 55 },
    { day: "Wed", sleep: 4, productivity: 40 },
    { day: "Thu", sleep: 6, productivity: 65 },
    { day: "Fri", sleep: 7, productivity: 78 },
];

const activities = [
    { icon: "self_improvement", iconBg: "bg-primary/10 text-primary", title: "Guided Meditation", desc: "5 min · 10 min · 20 min sessions", cta: "Start Now", ctaStyle: "bg-primary text-primary-foreground" },
    { icon: "headset", iconBg: "bg-blue-100 text-blue-600", title: "Counseling Services", desc: "Book a confidential session", cta: "Book Appointment", ctaStyle: "bg-blue-100 text-blue-600 hover:bg-blue-200" },
    { icon: "directions_run", iconBg: "bg-emerald-100 text-emerald-600", title: "Campus Yoga Class", desc: "Tuesday and Thursday 7:00 AM", cta: "Add to Schedule", ctaStyle: "bg-emerald-100 text-emerald-600 hover:bg-emerald-200" },
];

export default function WellnessPage() {
    return (
        <AppShell>
            <main className="flex-1 overflow-y-auto p-8">
                <motion.div variants={container} initial="hidden" animate="show" className="max-w-6xl mx-auto space-y-8">
                    {/* Header */}
                    <motion.div variants={itemVariants} className="flex justify-between items-end">
                        <div>
                            <h1 className="text-3xl font-black tracking-tight">Wellness & Burnout Tracker</h1>
                            <p className="text-muted-foreground mt-1">Your mental health matters. Track your well-being and recharge daily.</p>
                        </div>
                        <Button className="bg-primary text-primary-foreground shadow-sm hover:scale-[1.02] transition-transform">
                            <span className="material-symbols-outlined mr-2">add</span>
                            Log Mood
                        </Button>
                    </motion.div>

                    <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
                        {/* Left Sidebar */}
                        <motion.aside variants={itemVariants} className="flex flex-col gap-6">
                            <Card>
                                <CardContent className="p-5 flex flex-col items-center">
                                    <Avatar className="size-20 mb-4">
                                        <AvatarImage src="https://i.pravatar.cc/150?img=3" />
                                        <AvatarFallback className="bg-primary text-primary-foreground font-bold text-2xl">AM</AvatarFallback>
                                    </Avatar>
                                    <h3 className="font-bold text-lg">Alex Morgan</h3>
                                    <Badge className="bg-emerald-100 text-emerald-700 mt-2">Wellness Goal: Active</Badge>
                                    <div className="w-full mt-4 space-y-2">
                                        <div className="flex justify-between text-xs font-bold">
                                            <span>Weekly Goal Streak</span>
                                            <span className="text-primary">🔥 4 days</span>
                                        </div>
                                        <Progress value={57} className="h-2" />
                                        <p className="text-[10px] text-muted-foreground text-center">4 of 7 wellness goals met</p>
                                    </div>
                                </CardContent>
                            </Card>

                            <Card>
                                <CardHeader className="pb-2">
                                    <CardTitle className="text-sm">Weekly Check-In Goals</CardTitle>
                                </CardHeader>
                                <CardContent className="space-y-3">
                                    {[
                                        { label: "Meditate 3x", done: true },
                                        { label: "Exercise 4x", done: true },
                                        { label: "8 hrs sleep/night", done: false },
                                        { label: "Journal once", done: false },
                                        { label: "No late-night study", done: true },
                                    ].map((g) => (
                                        <div key={g.label} className="flex items-center gap-3">
                                            <div className={`size-5 rounded border-2 flex items-center justify-center shrink-0 ${g.done ? "border-primary bg-primary text-primary-foreground" : "border-border"}`}>
                                                {g.done && <span className="material-symbols-outlined text-[12px]">check</span>}
                                            </div>
                                            <span className={`text-sm ${g.done ? "line-through text-muted-foreground" : "font-medium"}`}>{g.label}</span>
                                        </div>
                                    ))}
                                </CardContent>
                            </Card>
                        </motion.aside>

                        {/* Main Content */}
                        <motion.div variants={container} className="lg:col-span-3 space-y-6">
                            {/* Stress Level */}
                            <motion.div variants={itemVariants}>
                                <Card className="hover:shadow-md transition-shadow border-border/50">
                                    <CardContent className="p-6">
                                        <h3 className="text-lg font-bold mb-6 flex items-center gap-2">
                                            <span className="material-symbols-outlined text-primary">show_chart</span>
                                            Weekly Stress Level
                                        </h3>
                                        <div className="flex items-end justify-between h-28 gap-2 px-4">
                                            {stressData.map((d) => (
                                                <div key={d.day} className="flex flex-col items-center gap-2 flex-1">
                                                    <div className="text-[10px] font-bold text-muted-foreground">{d.level}/10</div>
                                                    <div
                                                        className="w-full rounded-t-lg transition-all"
                                                        style={{
                                                            height: `${d.level * 10}%`,
                                                            backgroundColor: d.level >= 7 ? "oklch(0.58 0.22 27)" : d.level >= 5 ? "oklch(0.62 0.19 38)" : "oklch(0.55 0.18 150)"
                                                        }}
                                                    />
                                                    <span className="text-[10px] text-muted-foreground font-medium">{d.day}</span>
                                                </div>
                                            ))}
                                        </div>

                                        {/* Burnout Alert */}
                                        <div className="mt-6 p-4 bg-rose-50 border border-rose-200 rounded-xl flex gap-3">
                                            <span className="material-symbols-outlined text-rose-500 shrink-0">warning</span>
                                            <div>
                                                <p className="text-sm font-bold text-rose-700">Burnout Indicator: Moderate</p>
                                                <p className="text-xs text-rose-600 mt-1">Your stress levels spiked mid-week. Consider a short break or counseling session.</p>
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>
                            </motion.div>

                            {/* Sleep vs Productivity */}
                            <motion.div variants={itemVariants}>
                                <Card className="hover:shadow-md transition-shadow border-border/50">
                                    <CardContent className="p-6">
                                        <h3 className="text-lg font-bold mb-6 flex items-center gap-2">
                                            <span className="material-symbols-outlined text-primary">bedtime</span>
                                            Sleep vs. Productivity
                                        </h3>
                                        <div className="space-y-4">
                                            {sleepData.map((d) => (
                                                <div key={d.day} className="flex items-center gap-6">
                                                    <span className="text-xs font-bold w-6 text-muted-foreground">{d.day}</span>
                                                    <div className="flex-1 space-y-1.5">
                                                        <div className="flex justify-between text-[10px] font-bold text-muted-foreground">
                                                            <span className="flex items-center gap-1"><span className="size-1.5 inline-block rounded-full bg-blue-500" /> Sleep {d.sleep}h</span>
                                                            <span className="flex items-center gap-1"><span className="size-1.5 inline-block rounded-full bg-primary" /> Productivity {d.productivity}%</span>
                                                        </div>
                                                        <div className="flex gap-1.5">
                                                            <div className="flex-1 h-2 bg-muted rounded-full overflow-hidden">
                                                                <div className="bg-blue-500 h-full rounded-full" style={{ width: `${(d.sleep / 10) * 100}%` }} />
                                                            </div>
                                                        </div>
                                                        <div className="flex gap-1.5">
                                                            <div className="flex-1 h-2 bg-muted rounded-full overflow-hidden">
                                                                <div className="bg-primary h-full rounded-full" style={{ width: `${d.productivity}%` }} />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </CardContent>
                                </Card>
                            </motion.div>

                            {/* Mental Recharge */}
                            <motion.div variants={itemVariants}>
                                <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
                                    <span className="material-symbols-outlined text-primary">spa</span>
                                    Mental Recharge Activities
                                </h2>
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                    {activities.map((a) => (
                                        <motion.div key={a.title} whileHover={{ y: -5 }}>
                                            <Card className="hover:border-primary/50 hover:shadow-md transition-all h-full">
                                                <CardContent className="p-5 flex flex-col items-center text-center gap-3">
                                                    <div className={`size-14 rounded-2xl flex items-center justify-center ${a.iconBg}`}>
                                                        <span className="material-symbols-outlined text-3xl">{a.icon}</span>
                                                    </div>
                                                    <div>
                                                        <h3 className="font-bold">{a.title}</h3>
                                                        <p className="text-xs text-muted-foreground mt-1">{a.desc}</p>
                                                    </div>
                                                    <Button className={`w-full text-xs font-bold ${a.ctaStyle}`}>
                                                        {a.cta}
                                                    </Button>
                                                </CardContent>
                                            </Card>
                                        </motion.div>
                                    ))}
                                </div>
                            </motion.div>
                        </motion.div>
                    </div>
                </motion.div>
            </main>
        </AppShell>
    );
}
