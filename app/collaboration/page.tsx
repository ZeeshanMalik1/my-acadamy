"use client";
import AppShell from "@/app/components/AppShell";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Progress } from "@/components/ui/progress";
import { Textarea } from "@/components/ui/textarea";
import { motion, Variants } from "framer-motion";

const container: Variants = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.1 } }
};

const itemVariants: Variants = {
    hidden: { opacity: 0, y: 15 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 300, damping: 24 } }
};

const contributors = [
    { name: "Alex Johnson", pct: 42, avatar: "https://i.pravatar.cc/150?img=7" },
    { name: "Maria Chen", pct: 35, avatar: "https://i.pravatar.cc/150?img=5" },
    { name: "James Wilson", pct: 23, avatar: "https://i.pravatar.cc/150?img=12" },
];

const docs = [
    { name: "Phase_1_Proposal.pdf", updated: "2h ago by Maria", icon: "description", iconBg: "bg-blue-50 text-blue-500" },
    { name: "Budget_Calculations.xlsx", updated: "Yesterday by James", icon: "table_chart", iconBg: "bg-green-50 text-green-500" },
    { name: "Site_Design_Draft.jpg", updated: "3 days ago by Alex", icon: "image", iconBg: "bg-orange-50 text-orange-500" },
    { name: "Final_Presentation.pptx", updated: "1h ago", icon: "slideshow", iconBg: "bg-purple-50 text-purple-500" },
];

const messages = [
    { sender: "Alex J.", time: "10:45 AM", text: "Hey guys, I just uploaded the site design draft to the repo. Let me know what you think!", isMe: false },
    { sender: "Maria C.", time: "10:48 AM", text: "Looks great Alex! I'll update the Phase 1 proposal to include these graphics.", isMe: false },
    { sender: "You", time: "11:02 AM", text: "Awesome. I'm working on the budget sheet now, should have it done by the sync today.", isMe: true },
];

export default function CollaborationPage() {
    return (
        <AppShell>
            <div className="flex flex-1 overflow-hidden">
                {/* Left sidebar */}
                <aside className="w-64 border-r bg-card p-4 flex flex-col justify-between shrink-0">
                    <div className="space-y-4">
                        <div>
                            <h1 className="text-base font-bold px-3">Project Alpha</h1>
                            <p className="text-xs text-muted-foreground px-3 font-medium uppercase tracking-wider mt-1">Sustainable Architecture 101</p>
                        </div>
                        <nav className="space-y-0.5">
                            {[
                                { icon: "dashboard", label: "Overview", active: true },
                                { icon: "calendar_month", label: "Team Calendar" },
                                { icon: "monitoring", label: "Contribution Tracker" },
                                { icon: "folder_open", label: "Document Repo" },
                                { icon: "assignment_turned_in", label: "Task Board" },
                            ].map((item) => (
                                <div key={item.label} className={`flex items-center gap-3 px-3 py-2.5 rounded-xl cursor-pointer ${item.active ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:bg-muted"}`}>
                                    <span className="material-symbols-outlined text-xl">{item.icon}</span>
                                    <span className="text-sm">{item.label}</span>
                                </div>
                            ))}
                        </nav>
                    </div>
                    <Button className="w-full bg-primary/10 text-primary hover:bg-primary/20">
                        <span className="material-symbols-outlined mr-2">add_circle</span>
                        New Deliverable
                    </Button>
                </aside>

                {/* Main content */}
                <main className="flex-1 overflow-y-auto bg-muted/20 p-6">
                    <motion.div variants={container} initial="hidden" animate="show" className="max-w-4xl mx-auto space-y-8">
                        {/* Stats */}
                        <motion.div variants={itemVariants} className="grid grid-cols-3 gap-6">
                            {[
                                { label: "Total Milestones", value: "12", badge: "85% Complete", badgeClass: "bg-emerald-100 text-emerald-700", icon: "video_call", barPct: 85 },
                                { label: "Next Sync", value: "Today, 4:00 PM", icon: "video_call", sub: "Main Zoom Room · Group 4" },
                                { label: "Days to Submission", value: "04", icon: "alarm", sub: "Phase 2 Deadline approaching", subColor: "text-orange-600" },
                            ].map((s, i) => (
                                <motion.div key={i} whileHover={{ y: -5 }}>
                                    <Card className="hover:shadow-md transition-shadow h-full border-border/50">
                                        <CardContent className="p-6">
                                            <div className="flex justify-between items-start">
                                                <div>
                                                    <p className="text-muted-foreground text-sm">{s.label}</p>
                                                    <h3 className="text-2xl font-extrabold mt-1">{s.value}</h3>
                                                </div>
                                                {s.badge ? (
                                                    <Badge variant="secondary" className="bg-emerald-100 text-emerald-700 text-xs">{s.badge}</Badge>
                                                ) : (
                                                    <div className={`p-2 rounded-lg ${i === 1 ? "bg-primary/10 text-primary" : "bg-orange-100 text-orange-600"}`}>
                                                        <span className="material-symbols-outlined">{s.icon}</span>
                                                    </div>
                                                )}
                                            </div>
                                            {s.barPct && <Progress value={s.barPct} className="h-1.5 mt-4" />}
                                            {s.sub && <p className={`text-xs mt-2 ${s.subColor || "text-muted-foreground"} ${s.subColor ? "font-bold italic" : ""}`}>{s.sub}</p>}
                                        </CardContent>
                                    </Card>
                                </motion.div>
                            ))}
                        </motion.div>

                        <div className="grid grid-cols-2 gap-8">
                            {/* Contribution Tracker */}
                            <motion.section variants={itemVariants} className="space-y-4">
                                <div className="flex items-center justify-between">
                                    <h2 className="text-xl font-bold flex items-center gap-2">
                                        <span className="material-symbols-outlined text-primary">analytics</span>
                                        Contribution Tracker
                                    </h2>
                                    <Button variant="ghost" size="sm" className="text-xs text-primary">View Report</Button>
                                </div>
                                <Card>
                                    <CardContent className="p-6 space-y-4">
                                        {contributors.map((c) => (
                                            <div key={c.name} className="flex items-center gap-4">
                                                <Avatar className="size-10">
                                                    <AvatarImage src={c.avatar} />
                                                    <AvatarFallback>{c.name[0]}</AvatarFallback>
                                                </Avatar>
                                                <div className="flex-1">
                                                    <div className="flex justify-between mb-1">
                                                        <span className="text-sm font-bold">{c.name}</span>
                                                        <span className="text-sm text-muted-foreground">{c.pct}%</span>
                                                    </div>
                                                    <Progress value={c.pct} className="h-2" />
                                                </div>
                                            </div>
                                        ))}
                                        <div className="pt-4 border-t flex justify-around">
                                            {[{ label: "Commits", val: 156 }, { label: "Files Edited", val: 24 }, { label: "Reviews", val: 12 }].map((s) => (
                                                <div key={s.label} className="text-center">
                                                    <span className="block text-xl font-bold text-primary">{s.val}</span>
                                                    <span className="text-[10px] text-muted-foreground uppercase">{s.label}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </CardContent>
                                </Card>
                            </motion.section>

                            {/* Document Repo */}
                            <motion.section variants={itemVariants} className="space-y-4">
                                <div className="flex items-center justify-between">
                                    <h2 className="text-xl font-bold flex items-center gap-2">
                                        <span className="material-symbols-outlined text-primary">cloud_done</span>
                                        Document Repo
                                    </h2>
                                    <Button size="sm" className="bg-primary text-primary-foreground text-xs">
                                        <span className="material-symbols-outlined text-xs mr-1">upload</span>
                                        Upload
                                    </Button>
                                </div>
                                <Card className="divide-y">
                                    {docs.map((d) => (
                                        <div key={d.name} className="p-4 flex items-center gap-4 hover:bg-muted/50 cursor-pointer group">
                                            <div className={`size-10 flex items-center justify-center rounded-lg ${d.iconBg}`}>
                                                <span className="material-symbols-outlined">{d.icon}</span>
                                            </div>
                                            <div className="flex-1">
                                                <p className="text-sm font-bold group-hover:text-primary transition-colors">{d.name}</p>
                                                <p className="text-xs text-muted-foreground">{d.updated}</p>
                                            </div>
                                            <span className="material-symbols-outlined text-muted-foreground/40">more_vert</span>
                                        </div>
                                    ))}
                                </Card>
                            </motion.section>
                        </div>
                    </motion.div>
                </main>

                {/* Group Chat sidebar */}
                <motion.aside variants={itemVariants} initial="hidden" animate="show" className="w-80 border-l bg-card flex flex-col shrink-0">
                    <div className="p-4 border-b flex justify-between items-center">
                        <h3 className="font-bold flex items-center gap-2">
                            <span className="material-symbols-outlined text-primary">chat_bubble</span>
                            Group Chat
                        </h3>
                        <div className="flex items-center gap-1">
                            <span className="size-2 bg-emerald-500 rounded-full" />
                            <span className="text-[10px] font-bold text-muted-foreground uppercase">4 Active</span>
                        </div>
                    </div>
                    <div className="flex-1 overflow-y-auto p-4 space-y-4">
                        {messages.map((m, i) => (
                            <div key={i} className={`flex flex-col gap-1 ${m.isMe ? "items-end" : ""}`}>
                                <div className={`flex items-center justify-between w-full ${m.isMe ? "flex-row-reverse" : ""}`}>
                                    <span className={`text-xs font-bold ${m.isMe ? "text-primary" : "text-muted-foreground"}`}>{m.sender}</span>
                                    <span className="text-[10px] text-muted-foreground">{m.time}</span>
                                </div>
                                <div className={`p-3 rounded-xl text-sm max-w-[90%] ${m.isMe ? "bg-primary text-primary-foreground rounded-tr-none" : "bg-muted rounded-tl-none"}`}>
                                    {m.text}
                                </div>
                                {m.isMe && <span className="text-[10px] text-muted-foreground">Read by 2 members</span>}
                            </div>
                        ))}
                        <div className="text-sm text-muted-foreground italic bg-muted p-3 rounded-xl rounded-tl-none">James is typing...</div>
                    </div>
                    <div className="p-4 border-t">
                        <div className="relative">
                            <Textarea placeholder="Send a message..." rows={2} className="pr-10 resize-none text-sm" />
                            <Button variant="ghost" size="icon" className="absolute right-2 bottom-2 size-7 text-primary">
                                <span className="material-symbols-outlined">send</span>
                            </Button>
                        </div>
                        <div className="flex gap-4 mt-2 px-1">
                            {["attach_file", "mood", "image"].map((icon) => (
                                <Button key={icon} variant="ghost" size="icon" className="size-7 text-muted-foreground hover:text-primary">
                                    <span className="material-symbols-outlined text-lg">{icon}</span>
                                </Button>
                            ))}
                        </div>
                    </div>
                </motion.aside>
            </div>
        </AppShell>
    );
}
