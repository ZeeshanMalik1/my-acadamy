import AppShell from "@/app/components/AppShell";
import { Card, CardContent } from "@/components/ui/card";
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

const skills = [
    { label: "Frontend Development", pct: 90, color: "bg-emerald-500" },
    { label: "Backend Systems", pct: 45, color: "bg-primary" },
    { label: "Soft Skills", pct: 75, color: "bg-blue-500" },
];

const roadmapSteps = [
    { icon: "school", iconBg: "bg-primary/10 text-primary", title: "AWS Developer Associate", desc: "Critical gap for Senior Full Stack roles at top companies.", cta: "View Course Path", ctaColor: "text-primary" },
    { icon: "terminal", iconBg: "bg-blue-500/10 text-blue-500", title: "Scalable Microservices API", desc: "Strengthen backend skills with hands-on architectural project.", cta: "Get Starter Code", ctaColor: "text-blue-500" },
];

export default function CareerPage() {
    return (
        <AppShell>
            <main className="max-w-7xl mx-auto px-4 py-8 flex-1 overflow-y-auto">
                <motion.div variants={container} initial="hidden" animate="show" className="space-y-8">
                    {/* Profile Header */}
                    <motion.div variants={itemVariants} className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                        <Card className="lg:col-span-2 shadow-sm border-border/50">
                            <CardContent className="p-6 flex items-start gap-4">
                                <Avatar className="size-16 rounded-xl">
                                    <AvatarImage src="https://i.pravatar.cc/150?img=8" />
                                    <AvatarFallback className="rounded-xl bg-primary text-primary-foreground font-bold">AC</AvatarFallback>
                                </Avatar>
                                <div className="flex-1">
                                    <div className="flex items-center justify-between">
                                        <h2 className="text-2xl font-bold">Alex Carter</h2>
                                        <Badge className="bg-primary/10 text-primary">LEVEL 14</Badge>
                                    </div>
                                    <p className="text-muted-foreground mb-4">Aspiring Full Stack Lead · Member since 2023</p>
                                    <div className="space-y-2">
                                        <div className="flex justify-between text-sm">
                                            <span className="font-medium">Path Readiness: Full Stack Developer</span>
                                            <span className="font-bold text-primary">68%</span>
                                        </div>
                                        <Progress value={68} className="h-2.5" />
                                    </div>
                                </div>
                            </CardContent>
                        </Card>

                        {/* Job Match Meter */}
                        <Card className="flex flex-col justify-center items-center text-center p-6">
                            <div className="relative size-32 flex items-center justify-center mb-4">
                                <svg className="size-full -rotate-90">
                                    <circle className="text-muted stroke-current" cx="64" cy="64" fill="transparent" r="58" strokeWidth="8" />
                                    <circle className="text-primary stroke-current" cx="64" cy="64" fill="transparent" r="58" strokeDasharray="364.4" strokeDashoffset="65.6" strokeWidth="8" />
                                </svg>
                                <div className="absolute inset-0 flex flex-col items-center justify-center">
                                    <span className="text-3xl font-black">82%</span>
                                    <span className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground">Match</span>
                                </div>
                            </div>
                            <h3 className="font-bold">Senior Web Engineer</h3>
                            <p className="text-xs text-muted-foreground">Target Role at TechCorp</p>
                        </Card>
                    </motion.div>

                    <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
                        {/* Skill Progress Sidebar */}
                        <div className="space-y-6">
                            <h3 className="font-bold text-lg flex items-center gap-2">
                                <span className="material-symbols-outlined text-primary">analytics</span>
                                Core Proficiencies
                            </h3>
                            <div className="space-y-3">
                                {skills.map((s) => (
                                    <motion.div key={s.label} variants={itemVariants} whileHover={{ x: 5 }}>
                                        <Card className="shadow-sm border-border/50">
                                            <CardContent className="p-3">
                                                <div className="flex justify-between text-xs font-bold mb-2">
                                                    <span>{s.label}</span>
                                                    <span>{s.pct}%</span>
                                                </div>
                                                <div className="h-1.5 bg-muted rounded-full overflow-hidden">
                                                    <div className={`${s.color} h-full rounded-full`} style={{ width: `${s.pct}%` }} />
                                                </div>
                                            </CardContent>
                                        </Card>
                                    </motion.div>
                                ))}
                            </div>

                            <motion.div variants={itemVariants} className="pt-4">
                                <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
                                    <span className="material-symbols-outlined text-primary">history</span>
                                    Recent Activity
                                </h3>
                                <div className="space-y-4">
                                    {[
                                        { icon: "check_circle", iconBg: "bg-primary/10 text-primary", title: "Completed React Advanced Patterns", time: "2 hours ago" },
                                        { icon: "star", iconBg: "bg-muted text-muted-foreground", title: "Earned 'Logic Master' Badge", time: "Yesterday" },
                                    ].map((a) => (
                                        <div key={a.title} className="flex gap-3">
                                            <div className={`size-8 rounded flex items-center justify-center shrink-0 ${a.iconBg}`}>
                                                <span className="material-symbols-outlined text-lg">{a.icon}</span>
                                            </div>
                                            <div>
                                                <p className="text-sm font-semibold leading-tight">{a.title}</p>
                                                <p className="text-xs text-muted-foreground">{a.time}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </motion.div>
                        </div>

                        {/* Skill Tree + Roadmap */}
                        <motion.div variants={container} className="lg:col-span-3 space-y-6">
                            <motion.div variants={itemVariants}>
                                <Card className="min-h-[400px] relative overflow-hidden shadow-sm border-border/50">
                                    <CardContent className="p-8">
                                        <div className="flex items-center justify-between mb-8">
                                            <div>
                                                <h3 className="text-xl font-bold">Interactive Skill Tree</h3>
                                                <p className="text-sm text-muted-foreground">Explore and click on nodes to see gap analysis</p>
                                            </div>
                                            <div className="flex gap-2">
                                                <Button variant="outline" size="sm" className="text-xs">Zoom Out</Button>
                                                <Button size="sm" className="bg-primary text-primary-foreground text-xs">Reset View</Button>
                                            </div>
                                        </div>

                                        <div className="flex flex-col items-center gap-12 relative">
                                            {/* Root */}
                                            <div className="p-4 bg-primary text-primary-foreground rounded-xl shadow-lg cursor-pointer flex flex-col items-center min-w-[140px] hover:scale-105 transition-transform">
                                                <span className="material-symbols-outlined mb-1">code</span>
                                                <span className="text-xs font-bold uppercase tracking-widest">Full Stack</span>
                                            </div>

                                            <div className="grid grid-cols-2 gap-24 relative">
                                                <div className="p-4 bg-card border-2 border-emerald-500 rounded-xl shadow-md cursor-pointer flex flex-col items-center min-w-[140px] hover:scale-105 transition-transform">
                                                    <span className="material-symbols-outlined text-emerald-500 mb-1">html</span>
                                                    <span className="text-xs font-bold uppercase">Frontend</span>
                                                    <span className="text-[10px] text-emerald-500 font-bold mt-1">MASTERED</span>
                                                </div>
                                                <div className="p-4 bg-card border-2 border-primary/40 rounded-xl shadow-md cursor-pointer flex flex-col items-center min-w-[140px] hover:scale-105 transition-transform">
                                                    <span className="material-symbols-outlined text-primary mb-1">database</span>
                                                    <span className="text-xs font-bold uppercase">Backend</span>
                                                    <span className="text-[10px] text-primary font-bold mt-1">45% IN PROGRESS</span>
                                                </div>
                                            </div>

                                            <div className="grid grid-cols-3 gap-8 w-full">
                                                <div className="p-3 bg-muted/50 border rounded-lg text-center opacity-70 hover:opacity-100 transition-opacity cursor-pointer">
                                                    <p className="text-[10px] font-bold uppercase text-muted-foreground">React.js</p>
                                                </div>
                                                <div className="p-3 bg-muted/50 border rounded-lg text-center opacity-70 hover:opacity-100 transition-opacity cursor-pointer">
                                                    <p className="text-[10px] font-bold uppercase text-muted-foreground">Node.js</p>
                                                </div>
                                                <div className="p-3 bg-primary/5 border-2 border-dashed border-primary rounded-lg text-center cursor-pointer hover:bg-primary/10 transition-colors">
                                                    <p className="text-[10px] font-bold uppercase text-primary">PostgreSQL</p>
                                                    <p className="text-[8px] text-primary/60">GAP DETECTED</p>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Grid background */}
                                        <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
                                            <svg height="100%" width="100%">
                                                <defs><pattern id="grid" patternUnits="userSpaceOnUse" height="40" width="40"><path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1" /></pattern></defs>
                                                <rect fill="url(#grid)" height="100%" width="100%" />
                                            </svg>
                                        </div>
                                    </CardContent>
                                </Card>
                            </motion.div>

                            {/* Roadmap */}
                            <motion.div variants={itemVariants}>
                                <h3 className="text-lg font-bold flex items-center gap-2 mb-4">
                                    <span className="material-symbols-outlined text-primary">route</span>
                                    Recommended Roadmap Steps
                                </h3>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    {roadmapSteps.map((step) => (
                                        <motion.div key={step.title} whileHover={{ y: -4 }}>
                                            <Card className="h-full shadow-sm hover:shadow-md transition-shadow border-border/50">
                                                <CardContent className="p-5 flex gap-4">
                                                    <div className={`size-12 shrink-0 rounded-lg flex items-center justify-center ${step.iconBg}`}>
                                                        <span className="material-symbols-outlined">{step.icon}</span>
                                                    </div>
                                                    <div>
                                                        <h4 className="font-bold text-sm">{step.title}</h4>
                                                        <p className="text-xs text-muted-foreground mt-1 mb-3">{step.desc}</p>
                                                        <button className={`text-xs font-bold hover:underline ${step.ctaColor}`}>{step.cta}</button>
                                                    </div>
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
