"use client";
import AppShell from "@/app/components/AppShell";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
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

const buddies = [
    { name: "Elena Gilbert", major: "Psychology Major", shared: 3, match: 89, tag: "Research Design", avatar: "https://i.pravatar.cc/150?img=5" },
    { name: "Marcus Wright", major: "History Senior", shared: 1, match: 85, tag: "Thesis Writing", avatar: "https://i.pravatar.cc/150?img=12" },
];

export default function StudyBuddyPage() {
    return (
        <AppShell>
            <main className="max-w-7xl mx-auto px-4 py-8 flex gap-8 flex-1 overflow-y-auto">
                {/* Left Sidebar */}
                <motion.aside variants={container} initial="hidden" animate="show" className="hidden lg:flex flex-col w-64 shrink-0 gap-6">
                    <motion.div variants={itemVariants}>
                        <Card className="shadow-sm border-border/50">
                            <CardContent className="p-4">
                                <p className="text-xs font-bold text-muted-foreground uppercase tracking-widest mb-4">Main Menu</p>
                                <nav className="flex flex-col gap-1">
                                    {[
                                        { icon: "person_search", label: "Find Buddy", active: true },
                                        { icon: "chat_bubble", label: "Messages" },
                                        { icon: "event", label: "Study Sessions" },
                                        { icon: "settings", label: "Preferences" },
                                    ].map((item) => (
                                        <div key={item.label} className={`flex items-center gap-3 px-3 py-2 rounded-lg cursor-pointer transition-colors ${item.active ? "bg-primary text-primary-foreground shadow-sm" : "text-muted-foreground hover:bg-muted"}`}>
                                            <span className="material-symbols-outlined">{item.icon}</span>
                                            {item.label}
                                        </div>
                                    ))}
                                </nav>
                            </CardContent>
                        </Card>
                    </motion.div>
                    <motion.div variants={itemVariants}>
                        <Card className="bg-primary/5 border-primary/20 shadow-sm relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-24 h-24 bg-primary/10 rounded-full blur-2xl -mr-10 -mt-10" />
                            <CardContent className="p-5 relative z-10">
                                <h3 className="font-bold text-primary flex items-center gap-2">
                                    <span className="material-symbols-outlined text-[18px]">auto_awesome</span>
                                    AI Insights
                                </h3>
                                <p className="text-sm text-foreground mt-2 font-medium leading-relaxed">You&apos;re looking for a partner for <b className="text-primary">CS302: Algorithms</b>. We found 12 new matches today!</p>
                            </CardContent>
                        </Card>
                    </motion.div>
                </motion.aside>

                {/* Main Area */}
                <motion.div variants={container} initial="hidden" animate="show" className="flex-1 space-y-8">
                    {/* Header */}
                    <motion.div variants={itemVariants} className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                        <div>
                            <h1 className="text-3xl font-extrabold tracking-tight">Buddy Discovery</h1>
                            <p className="text-muted-foreground mt-1">AI-powered suggestions based on your courses and strengths.</p>
                        </div>
                        <div className="flex gap-2">
                            <Button variant="outline"><span className="material-symbols-outlined mr-2">tune</span> Filter</Button>
                            <Button variant="outline" className="text-primary border-primary/30">
                                <span className="material-symbols-outlined mr-2" style={{ fontVariationSettings: "'FILL' 1" }}>favorite</span>
                                Matches (4)
                            </Button>
                        </div>
                    </motion.div>

                    {/* Featured Card */}
                    <motion.div variants={itemVariants} className="relative flex justify-center items-center py-4">
                        <motion.div animate={{ rotate: 3, y: 16 }} transition={{ type: "spring", stiffness: 50, damping: 20 }} className="absolute w-full max-w-md h-[520px] bg-muted/80 backdrop-blur rounded-2xl border border-border/50 shadow-sm" />
                        <motion.div whileHover={{ y: -8, rotate: 1 }} transition={{ type: "spring", stiffness: 300, damping: 20 }} className="w-full max-w-md z-10">
                            <Card className="relative w-full overflow-hidden shadow-2xl border-border/50 bg-card/95 backdrop-blur-xl">
                                <div className="relative h-[280px]">
                                    <img
                                        src="https://i.pravatar.cc/400?img=11"
                                        alt="Liam Chen"
                                        className="w-full h-full object-cover"
                                    />
                                    <div className="absolute top-4 right-4 bg-card/90 backdrop-blur px-3 py-1.5 rounded-full flex items-center gap-1.5 shadow-lg border border-primary/20">
                                        <span className="material-symbols-outlined text-primary text-[20px]" style={{ fontVariationSettings: "'FILL' 1" }}>bolt</span>
                                        <span className="font-bold text-sm">94% Team Chemistry</span>
                                    </div>
                                    <div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-black/80 to-transparent text-white">
                                        <h3 className="text-2xl font-bold">Liam Chen, 21</h3>
                                        <p className="opacity-90">Data Science Junior · Stanford University</p>
                                    </div>
                                </div>

                                <CardContent className="p-6 space-y-6">
                                    <div className="grid grid-cols-2 gap-3">
                                        <div className="bg-emerald-50 p-3 rounded-xl border border-emerald-100">
                                            <div className="flex items-center gap-2 text-emerald-600 mb-1">
                                                <span className="material-symbols-outlined text-[18px]">add_circle</span>
                                                <span className="text-xs font-bold uppercase tracking-wider">His Strengths</span>
                                            </div>
                                            <p className="text-sm font-semibold text-foreground">Advanced Calculus, Python, Stats</p>
                                        </div>
                                        <div className="bg-amber-50 p-3 rounded-xl border border-amber-100">
                                            <div className="flex items-center gap-2 text-amber-600 mb-1">
                                                <span className="material-symbols-outlined text-[18px]">contact_support</span>
                                                <span className="text-xs font-bold uppercase tracking-wider">Seeking Help</span>
                                            </div>
                                            <p className="text-sm font-semibold text-foreground">Essay Writing, Philosophy 101</p>
                                        </div>
                                    </div>

                                    <div className="flex flex-wrap gap-2">
                                        <Badge variant="secondary">CS221: Machine Learning</Badge>
                                        <Badge variant="secondary">MATH150: Discrete Math</Badge>
                                    </div>

                                    <div className="flex items-center gap-4">
                                        <Button variant="secondary" className="flex-1 h-12">
                                            <span className="material-symbols-outlined mr-2">close</span>
                                            Pass
                                        </Button>
                                        <Button className="flex-[2] h-12 bg-primary text-primary-foreground shadow-lg shadow-primary/25 hover:scale-[1.02] transition-transform">
                                            <span className="material-symbols-outlined mr-2">chat</span>
                                            Quick Chat Invite
                                        </Button>
                                    </div>
                                </CardContent>
                            </Card>
                        </motion.div>
                    </motion.div>

                    {/* Recommended Buddies */}
                    <motion.section variants={itemVariants}>
                        <div className="flex items-center justify-between mb-6">
                            <h3 className="text-xl font-bold">Recommended Buddies</h3>
                            <Button variant="ghost" size="sm" className="text-primary hover:bg-primary/10">View All</Button>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {buddies.map((b) => (
                                <motion.div key={b.name} whileHover={{ y: -4, scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                                    <Card className="flex items-center gap-4 p-4 shadow-sm border-border/50 hover:shadow-md transition-shadow cursor-pointer h-full">
                                        <div className="relative">
                                            <Avatar className="size-16 rounded-xl border-2 border-background shadow-sm">
                                                <AvatarImage src={b.avatar} />
                                                <AvatarFallback className="rounded-xl bg-primary text-primary-foreground">{b.name[0]}</AvatarFallback>
                                            </Avatar>
                                            <div className="absolute -bottom-1 -right-1 size-4 bg-emerald-500 rounded-full border-2 border-background" />
                                        </div>
                                        <div className="flex-1 min-w-0">
                                            <div className="flex justify-between items-start">
                                                <h4 className="font-bold truncate text-foreground">{b.name}</h4>
                                                <span className="text-[10px] font-black uppercase tracking-wider text-emerald-500 bg-emerald-50 px-1.5 py-0.5 rounded">{b.match}% Match</span>
                                            </div>
                                            <p className="text-[11px] font-semibold text-muted-foreground truncate mb-1 mt-0.5">{b.major}</p>
                                            <div className="flex items-center gap-2 mt-2">
                                                <Badge variant="secondary" className="bg-primary/5 text-primary text-[10px] font-bold border-primary/10">{b.tag}</Badge>
                                                <span className="text-[10px] text-muted-foreground font-medium flex items-center gap-1"><span className="material-symbols-outlined text-[12px]">library_books</span>{b.shared} Shared</span>
                                            </div>
                                        </div>
                                        <Button size="icon" variant="ghost" className="text-primary hover:bg-primary hover:text-primary-foreground transition-colors shrink-0">
                                            <span className="material-symbols-outlined text-xl">add_circle</span>
                                        </Button>
                                    </Card>
                                </motion.div>
                            ))}
                        </div>
                    </motion.section>
                </motion.div>

                {/* Right Sidebar */}
                <motion.aside variants={container} initial="hidden" animate="show" className="hidden xl:flex flex-col w-72 shrink-0 gap-6">
                    <motion.div variants={itemVariants}>
                        <Card className="shadow-sm border-border/50">
                            <CardContent className="p-6">
                                <h3 className="font-bold mb-4">Your Study Profile</h3>
                                <div className="space-y-4">
                                    <div>
                                        <p className="text-xs font-bold uppercase text-muted-foreground mb-2">Strong In</p>
                                        <div className="flex flex-wrap gap-2">
                                            <Badge className="bg-emerald-50 text-emerald-600 border-emerald-100">Creative Writing</Badge>
                                            <Badge className="bg-emerald-50 text-emerald-600 border-emerald-100">History</Badge>
                                        </div>
                                    </div>
                                    <div>
                                        <p className="text-xs font-bold uppercase text-muted-foreground mb-2">Needs Work</p>
                                        <div className="flex flex-wrap gap-2">
                                            <Badge className="bg-amber-50 text-amber-600 border-amber-100">Calculus II</Badge>
                                            <Badge className="bg-amber-50 text-amber-600 border-amber-100">Linear Algebra</Badge>
                                        </div>
                                    </div>
                                    <Button variant="outline" className="w-full text-xs font-bold">Update Strengths</Button>
                                </div>
                            </CardContent>
                        </Card>
                    </motion.div>
                    <motion.div variants={itemVariants} whileHover={{ y: -4 }}>
                        <Card className="bg-gradient-to-br from-primary to-orange-600 text-primary-foreground shadow-xl shadow-primary/20 border-0 overflow-hidden relative">
                            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 mix-blend-overlay" />
                            <CardContent className="p-6 relative z-10">
                                <div className="flex items-center gap-2 mb-2">
                                    <span className="material-symbols-outlined text-[20px] text-amber-300" style={{ fontVariationSettings: "'FILL' 1" }}>workspace_premium</span>
                                    <h4 className="font-black text-lg tracking-tight">Elite Match Pass</h4>
                                </div>
                                <p className="text-sm font-medium opacity-90 leading-relaxed">Unlock unlimited Quick Chats and see exactly who liked your profile first.</p>
                                <Button className="w-full mt-6 bg-white text-primary hover:bg-white/90 font-bold shadow-lg hover:scale-[1.03] transition-transform active:scale-95">Upgrade Now</Button>
                            </CardContent>
                        </Card>
                    </motion.div>
                </motion.aside>
            </main>
        </AppShell >
    );
}
