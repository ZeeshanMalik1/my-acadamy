import AppShell from "@/app/components/AppShell";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Progress } from "@/components/ui/progress";
import { motion, Variants } from "framer-motion";

const container: Variants = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.1 } }
};

const itemVariants: Variants = {
    hidden: { opacity: 0, y: 15 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 300, damping: 24 } }
};

const kanbanTasks = {
    todo: [
        { id: 1, tag: "Research", tagColor: "bg-blue-100 text-blue-600", title: "Literature Review: AI Ethics", due: "Oct 24" },
        { id: 2, tag: "Design", tagColor: "bg-orange-100 text-orange-600", title: "Figma Mockups: Thesis Portal", due: "Oct 25" },
    ],
    inProgress: [
        { id: 3, tag: "Writing", tagColor: "bg-purple-100 text-purple-600", title: "Data Collection: User Surveys", due: "Oct 21", progress: 65 },
    ],
    done: [
        { id: 4, tag: "Approved", tagColor: "bg-green-100 text-green-600", title: "Project Proposal Submission", due: "Completed yesterday" },
    ],
};

export default function TasksPage() {
    return (
        <AppShell>
            <header className="flex items-center justify-between border-b bg-background px-8 py-4">
                <div>
                    <h1 className="text-3xl font-black tracking-tight">Tasks & Focus</h1>
                    <p className="text-muted-foreground text-sm">Manage your deep work sessions and academic deadlines.</p>
                </div>
                <div className="flex items-center gap-2 bg-muted p-1 rounded-xl shadow-sm border">
                    <Button size="sm" className="bg-primary text-primary-foreground">Tasks</Button>
                    <Button size="sm" variant="ghost" className="text-muted-foreground">Stats</Button>
                </div>
            </header>

            <main className="flex-1 flex overflow-hidden">
                {/* Left Sidebar */}
                <aside className="w-60 border-r p-6 flex flex-col gap-8">
                    <motion.div variants={container} initial="hidden" animate="show" className="flex flex-col gap-2">
                        <motion.p variants={itemVariants} className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest px-3 mb-2">Main Menu</motion.p>
                        {[
                            { icon: "dashboard", label: "Dashboard" },
                            { icon: "check_circle", label: "Tasks & Focus", active: true },
                            { icon: "auto_stories", label: "Projects" },
                            { icon: "calendar_month", label: "Calendar" },
                        ].map((item) => (
                            <motion.div
                                variants={itemVariants}
                                whileHover={{ x: 4, backgroundColor: "var(--muted)" }}
                                key={item.label}
                                className={`flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-semibold cursor-pointer transition-colors ${item.active ? "bg-primary/10 text-primary border border-primary/20" : "text-muted-foreground"}`}
                            >
                                <span className="material-symbols-outlined text-[20px]">{item.icon}</span>
                                {item.label}
                            </motion.div>
                        ))}
                    </motion.div>

                    {/* Daily Focus */}
                    <div className="bg-muted rounded-xl p-4 border">
                        <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest mb-3">Today's Big Goal</p>
                        <Input placeholder="What's your focus today?" className="mb-2 text-sm" />
                        <Button size="sm" className="w-full bg-primary text-primary-foreground text-xs">Set Intention</Button>
                    </div>
                </aside>

                {/* Main Content */}
                <div className="flex-1 overflow-y-auto p-8">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                        {/* Kanban Board */}
                        <div className="lg:col-span-8">
                            <div className="flex items-center justify-between mb-6">
                                <h3 className="text-lg font-bold flex items-center gap-2">
                                    <span className="material-symbols-outlined text-primary">view_kanban</span>
                                    Academic Projects
                                </h3>
                                <Button variant="ghost" size="sm" className="text-primary">
                                    <span className="material-symbols-outlined text-sm mr-1">add</span>
                                    Add Project
                                </Button>
                            </div>

                            <motion.div variants={container} initial="hidden" animate="show" className="grid grid-cols-3 gap-6">
                                {/* To Do */}
                                <div>
                                    <div className="flex items-center gap-2 mb-4 px-1">
                                        <div className="size-2 rounded-full bg-muted-foreground" />
                                        <span className="text-sm font-bold text-muted-foreground uppercase tracking-wider">To Do</span>
                                        <Badge variant="secondary" className="ml-auto text-xs">{kanbanTasks.todo.length}</Badge>
                                    </div>
                                    <div className="space-y-3">
                                        {kanbanTasks.todo.map((t) => (
                                            <motion.div key={t.id} variants={itemVariants} whileHover={{ y: -4, scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                                                <Card className="cursor-grab hover:shadow-md transition-shadow">
                                                    <CardContent className="p-4">
                                                        <div className="flex justify-between items-start mb-2">
                                                            <Badge variant="secondary" className={`text-[10px] font-black uppercase ${t.tagColor}`}>{t.tag}</Badge>
                                                            <span className="material-symbols-outlined text-muted-foreground/40 text-sm">more_horiz</span>
                                                        </div>
                                                        <p className="font-bold text-sm mb-3">{t.title}</p>
                                                        <div className="flex items-center text-muted-foreground text-[11px]">
                                                            <span className="material-symbols-outlined text-xs mr-1">calendar_today</span>
                                                            {t.due}
                                                        </div>
                                                    </CardContent>
                                                </Card>
                                            </motion.div>
                                        ))}
                                    </div>
                                </div>

                                {/* In Progress */}
                                <div>
                                    <div className="flex items-center gap-2 mb-4 px-1">
                                        <div className="size-2 rounded-full bg-primary" />
                                        <span className="text-sm font-bold text-muted-foreground uppercase tracking-wider">In Progress</span>
                                        <Badge variant="secondary" className="ml-auto bg-primary/20 text-primary text-xs">1</Badge>
                                    </div>
                                    <div className="space-y-3">
                                        {kanbanTasks.inProgress.map((t) => (
                                            <motion.div key={t.id} variants={itemVariants} whileHover={{ y: -4, scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                                                <Card className="border-2 border-primary shadow-lg ring-4 ring-primary/5 cursor-grab">
                                                    <CardContent className="p-4">
                                                        <div className="flex justify-between items-start mb-2">
                                                            <Badge variant="secondary" className={`text-[10px] font-black uppercase ${t.tagColor}`}>{t.tag}</Badge>
                                                            <span className="material-symbols-outlined text-primary text-sm">bolt</span>
                                                        </div>
                                                        <p className="font-bold text-sm mb-3">{t.title}</p>
                                                        <div className="flex items-center text-muted-foreground text-[11px] mb-2">
                                                            <span className="material-symbols-outlined text-xs mr-1">calendar_today</span>
                                                            {t.due}
                                                        </div>
                                                        <Progress value={t.progress} className="h-1.5 mb-1" />
                                                        <p className="text-[10px] font-bold text-muted-foreground text-right">{t.progress}% complete</p>
                                                    </CardContent>
                                                </Card>
                                            </motion.div>
                                        ))}
                                    </div>
                                </div>

                                {/* Done */}
                                <div>
                                    <div className="flex items-center gap-2 mb-4 px-1">
                                        <div className="size-2 rounded-full bg-emerald-500" />
                                        <span className="text-sm font-bold text-muted-foreground uppercase tracking-wider">Done</span>
                                        <Badge variant="secondary" className="ml-auto bg-emerald-100 text-emerald-600 text-xs">12</Badge>
                                    </div>
                                    <div className="opacity-60 grayscale-[0.5] space-y-3">
                                        {kanbanTasks.done.map((t) => (
                                            <motion.div key={t.id} variants={itemVariants} whileHover={{ y: -2, scale: 1.01 }} whileTap={{ scale: 0.98 }}>
                                                <Card className="cursor-grab">
                                                    <CardContent className="p-4">
                                                        <div className="flex justify-between items-start mb-2">
                                                            <Badge variant="secondary" className={`text-[10px] font-black uppercase ${t.tagColor}`}>{t.tag}</Badge>
                                                            <span className="material-symbols-outlined text-emerald-500 text-sm">check_circle</span>
                                                        </div>
                                                        <p className="font-bold text-sm mb-3 line-through">{t.title}</p>
                                                        <p className="text-muted-foreground text-[11px]">{t.due}</p>
                                                    </CardContent>
                                                </Card>
                                            </motion.div>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        </div>

                        {/* Focus Widget */}
                        <div className="lg:col-span-4 flex flex-col gap-6">
                            {/* Pomodoro Timer */}
                            <motion.div
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ type: "spring", stiffness: 300, delay: 0.2 }}
                                className="bg-[#221610] text-white rounded-3xl p-8 shadow-2xl relative overflow-hidden group"
                            >
                                <div className="absolute top-0 right-0 p-4 opacity-20">
                                    <span className="material-symbols-outlined text-6xl">timer</span>
                                </div>
                                <div className="relative z-10 flex flex-col items-center gap-6">
                                    <Badge className="bg-primary text-primary-foreground text-xs font-black uppercase tracking-widest px-3 py-1 rounded-full">
                                        Deep Work Session
                                    </Badge>
                                    <div className="flex items-baseline gap-2">
                                        <span className="text-7xl font-black tracking-tighter">25</span>
                                        <span className="text-4xl font-light text-white/50">:</span>
                                        <span className="text-7xl font-black tracking-tighter">00</span>
                                    </div>
                                    <div className="flex gap-4 w-full">
                                        <Button className="flex-1 h-14 bg-primary hover:bg-primary/90 transition-transform hover:scale-[1.02] active:scale-[0.98]">
                                            <span className="material-symbols-outlined mr-2">play_arrow</span>
                                            Start Session
                                        </Button>
                                        <Button variant="ghost" size="icon" className="size-14 bg-white/10 hover:bg-white/20 text-white rounded-2xl hover:rotate-180 transition-all duration-500">
                                            <span className="material-symbols-outlined">restart_alt</span>
                                        </Button>
                                    </div>
                                    <div className="flex gap-4 text-xs font-bold">
                                        <button className="text-primary underline">Pomodoro</button>
                                        <button className="text-white/50 hover:text-white transition-colors">Short Break</button>
                                        <button className="text-white/50 hover:text-white transition-colors">Long Break</button>
                                    </div>
                                </div>
                            </motion.div>

                            {/* Soundscapes */}
                            <Card>
                                <CardHeader className="pb-2">
                                    <CardTitle className="text-sm flex items-center gap-2">
                                        <span className="material-symbols-outlined text-primary">headset</span>
                                        Focus Soundscapes
                                    </CardTitle>
                                </CardHeader>
                                <CardContent className="space-y-3">
                                    <div className="flex items-center gap-4">
                                        <div className="size-14 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center">
                                            <span className="material-symbols-outlined text-white">music_note</span>
                                        </div>
                                        <div className="flex-1">
                                            <p className="text-sm font-bold">Midnight Study Beats</p>
                                            <p className="text-xs text-muted-foreground">Lofi Girl · 2.4k listeners</p>
                                        </div>
                                        <Button variant="outline" size="icon" className="size-8 rounded-full">
                                            <span className="material-symbols-outlined text-sm">pause</span>
                                        </Button>
                                    </div>
                                    <div className="grid grid-cols-2 gap-2">
                                        {[
                                            { icon: "rainy", label: "Rainy Day", color: "text-blue-500" },
                                            { icon: "coffee", label: "Cafe Ambience", color: "text-orange-400" },
                                            { icon: "waves", label: "White Noise", color: "text-indigo-400" },
                                            { icon: "forest", label: "Deep Woods", color: "text-green-500" },
                                        ].map((s) => (
                                            <button key={s.label} className="flex items-center gap-2 p-2 rounded-lg bg-muted border border-border hover:border-primary transition-colors text-xs font-bold">
                                                <span className={`material-symbols-outlined text-sm ${s.color}`}>{s.icon}</span>
                                                {s.label}
                                            </button>
                                        ))}
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </div>
            </main>
        </AppShell>
    );
}
