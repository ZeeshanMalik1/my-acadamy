"use client";
import AppShell from "@/app/components/AppShell";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { motion, Variants } from "framer-motion";

const container: Variants = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.1 } }
};

const itemVariants: Variants = {
    hidden: { opacity: 0, y: 15 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 300, damping: 24 } }
};

const channels = [
    { name: "Campus-Life", active: true },
    { name: "Research-Swap", active: false },
    { name: "Study-Groups", active: false },
];

const directMessages = [
    { name: "Alex Rivers", img: "https://i.pravatar.cc/150?img=5", online: true },
    { name: "Sam Lee", img: "https://i.pravatar.cc/150?img=11", online: true },
];

const messages = [
    {
        sender: "Alex Rivers",
        time: "11:24 AM",
        avatar: "https://i.pravatar.cc/150?img=5",
        text: "Has anyone started the research for the new Psych project? I'm finding some really interesting papers on social dynamics in digital spaces! 📚",
        isMe: false,
    },
    {
        sender: "You",
        time: "11:26 AM",
        avatar: "https://i.pravatar.cc/150?img=3",
        text: "Just started gathering sources for the swap. Check out the #Research-Swap channel! I've uploaded a few PDFs there already.",
        isMe: true,
    },
    {
        sender: "Sam Lee",
        time: "11:30 AM",
        avatar: "https://i.pravatar.cc/150?img=11",
        text: "Found a great paper on cognitive biases. Sharing the link here. It covers some ground-breaking stuff from the 2024 Psychology Summit.",
        isMe: false,
        attachment: { name: "Cognitive_Bias_Research_2024.pdf", size: "2.4 MB", type: "PDF Document" }
    }
];

const studyBuddies = [
    { name: "Sarah Chen", img: "https://i.pravatar.cc/150?img=9", status: "Studying Advanced Calculus", active: true, color: "bg-emerald-500" },
    { name: "Marcus J.", img: "https://i.pravatar.cc/150?img=12", status: "Preparing for Finals", active: true, color: "bg-emerald-500" },
    { name: "Elena Rossi", img: "https://i.pravatar.cc/150?img=1", status: "In a Deep Focus session", active: true, color: "bg-amber-500" },
];

const trending = [
    { tag: "Upcoming Event", title: "Annual Tech Symposium 2024", metric: "450 interested", icon: "group" },
    { tag: "Hot Discussion", title: "Hybrid Learning vs In-Person", metric: "89 replies today", icon: "mode_comment" },
    { tag: "Scholarship", title: "The Innovators Grant Deadlines", metric: "Ends in 3 days", icon: "schedule" },
];

export default function ChatPage() {
    return (
        <AppShell>
            <div className="flex h-full w-full overflow-hidden">
                {/* Left Sidebar - Chat Navigation */}
                <aside className="w-64 flex-shrink-0 bg-card border-r border-border flex flex-col hidden md:flex">
                    <ScrollArea className="flex-1 px-4 py-6">
                        <div className="space-y-6">
                            {/* Global Channels */}
                            <div>
                                <h3 className="px-2 mb-2 text-xs font-bold uppercase tracking-wider text-muted-foreground">Global Channels</h3>
                                <div className="space-y-0.5">
                                    {channels.map((c) => (
                                        <button key={c.name} className={`w-full flex items-center justify-between px-3 py-2 rounded-lg transition-colors ${c.active ? "bg-muted text-foreground" : "text-muted-foreground hover:bg-muted"}`}>
                                            <div className="flex items-center gap-3">
                                                <span className={`text-lg leading-none ${c.active ? "text-primary font-black" : "text-muted-foreground font-black"}`}>#</span>
                                                <span className="text-sm font-medium">{c.name}</span>
                                            </div>
                                            {c.active && <span className="size-2 rounded-full bg-primary" />}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {/* Direct Messages */}
                            <div>
                                <h3 className="px-2 mb-2 text-xs font-bold uppercase tracking-wider text-muted-foreground">Direct Messages</h3>
                                <div className="space-y-0.5">
                                    {directMessages.map((dm) => (
                                        <button key={dm.name} className="w-full flex items-center gap-3 px-3 py-2 rounded-lg text-muted-foreground hover:bg-muted transition-colors">
                                            <div className="relative">
                                                <Avatar className="size-7">
                                                    <AvatarImage src={dm.img} />
                                                    <AvatarFallback>{dm.name[0]}</AvatarFallback>
                                                </Avatar>
                                                {dm.online && <span className="absolute bottom-0 right-0 size-2.5 bg-emerald-500 border-2 border-background rounded-full" />}
                                            </div>
                                            <span className="text-sm font-medium">{dm.name}</span>
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </ScrollArea>

                    <div className="p-4 border-t border-border">
                        <Button className="w-full font-bold shadow-md hover:scale-[1.02] transition-transform">
                            <span className="material-symbols-outlined mr-2">add</span>
                            New Message
                        </Button>
                    </div>
                </aside>

                {/* Main Chat Area */}
                <main className="flex-1 flex flex-col bg-background relative">
                    {/* Main Context Header */}
                    <header className="h-16 flex items-center justify-between px-6 border-b border-border bg-card/80 backdrop-blur-md z-10 shrink-0">
                        <div className="flex items-center gap-2">
                            <span className="text-muted-foreground text-xl font-black">#</span>
                            <h2 className="font-bold text-lg tracking-tight">Campus-Life</h2>
                            <span className="text-xs px-2.5 py-0.5 rounded-full bg-muted font-medium ml-2 text-muted-foreground hidden sm:inline-block">1.2k members</span>
                        </div>
                        <div className="flex items-center gap-4">
                            <span className="material-symbols-outlined text-muted-foreground hover:text-primary cursor-pointer transition-colors">search</span>
                            <span className="material-symbols-outlined text-muted-foreground hover:text-primary cursor-pointer transition-colors hidden sm:block">notifications</span>
                            <span className="material-symbols-outlined text-muted-foreground hover:text-primary cursor-pointer transition-colors hidden sm:block">group</span>
                        </div>
                    </header>

                    {/* Messages */}
                    <ScrollArea className="flex-1 p-6">
                        <div className="space-y-6 max-w-4xl mx-auto">

                            {/* Date Divider */}
                            <div className="relative flex items-center py-4">
                                <div className="flex-grow border-t border-border" />
                                <span className="flex-shrink mx-4 text-[10px] font-bold text-muted-foreground uppercase tracking-widest">Today</span>
                                <div className="flex-grow border-t border-border" />
                            </div>

                            <motion.div variants={container} initial="hidden" animate="show" className="space-y-6">
                                {messages.map((m, i) => (
                                    <motion.div variants={itemVariants} key={i} className={`flex items-start gap-4 ${m.isMe ? "flex-row-reverse" : ""}`}>
                                        <Avatar className="size-10 mt-1 shrink-0">
                                            <AvatarImage src={m.avatar} />
                                            <AvatarFallback>{m.sender[0]}</AvatarFallback>
                                        </Avatar>
                                        <div className={`space-y-1 ${m.isMe ? "flex flex-col items-end" : ""}`}>
                                            <div className={`flex items-baseline gap-2 ${m.isMe ? "flex-row-reverse" : ""}`}>
                                                <span className="font-bold text-sm">{m.sender}</span>
                                                <span className="text-[10px] text-muted-foreground">{m.time}</span>
                                            </div>

                                            <div className={`p-4 shadow-sm max-w-xl text-sm leading-relaxed ${m.isMe ? "bg-primary text-primary-foreground rounded-l-2xl rounded-br-2xl" : "bg-card border rounded-r-2xl rounded-bl-2xl"}`}>
                                                {m.text}
                                            </div>

                                            {m.attachment && (
                                                <div className="bg-card border rounded-xl p-3 flex items-center gap-4 mt-2 max-w-sm shadow-sm hover:border-primary transition-colors cursor-pointer group">
                                                    <div className="size-12 rounded-lg bg-rose-50 dark:bg-rose-900/20 flex items-center justify-center text-rose-500 shrink-0">
                                                        <span className="material-symbols-outlined text-3xl">description</span>
                                                    </div>
                                                    <div className="flex-1 overflow-hidden">
                                                        <p className="text-sm font-semibold truncate group-hover:text-primary transition-colors">{m.attachment.name}</p>
                                                        <p className="text-[10px] text-muted-foreground mt-0.5">{m.attachment.size} • {m.attachment.type}</p>
                                                    </div>
                                                    <span className="material-symbols-outlined text-muted-foreground group-hover:text-primary transition-colors">download</span>
                                                </div>
                                            )}
                                        </div>
                                    </motion.div>
                                ))}
                            </motion.div>
                        </div>
                    </ScrollArea>

                    {/* Input Area */}
                    <div className="p-4 bg-card border-t border-border shrink-0">
                        <div className="max-w-4xl mx-auto flex items-center gap-3 bg-muted rounded-2xl p-2 border border-border focus-within:border-primary/50 focus-within:ring-1 focus-within:ring-primary/20 transition-all">
                            <button className="p-2 text-muted-foreground hover:text-primary transition-colors shrink-0">
                                <span className="material-symbols-outlined">add_circle</span>
                            </button>
                            <Input className="flex-1 bg-transparent border-none focus-visible:ring-0 text-sm placeholder:text-muted-foreground shadow-none px-0" placeholder="Message #Campus-Life..." />
                            <div className="flex items-center gap-1 sm:gap-2 pr-1 shrink-0">
                                <button className="p-2 text-muted-foreground hover:text-primary transition-colors hidden sm:block">
                                    <span className="material-symbols-outlined">sticky_note_2</span>
                                </button>
                                <button className="p-2 text-muted-foreground hover:text-primary transition-colors hidden sm:block">
                                    <span className="material-symbols-outlined">sentiment_satisfied</span>
                                </button>
                                <Button size="icon" className="size-10 rounded-xl shadow-lg shrink-0 hover:scale-105 transition-transform">
                                    <span className="material-symbols-outlined">send</span>
                                </Button>
                            </div>
                        </div>
                        <p className="text-center text-[10px] text-muted-foreground mt-2 font-medium uppercase tracking-tighter">Press Enter to send message</p>
                    </div>
                </main>

                {/* Right Sidebar - Context Panel */}
                <aside className="w-80 flex-shrink-0 bg-card border-l border-border flex flex-col hidden lg:flex">
                    <ScrollArea className="flex-1 p-6">
                        <div className="space-y-8">

                            {/* Study Buddies */}
                            <section>
                                <div className="flex items-center justify-between mb-4">
                                    <h3 className="font-bold text-sm">Study Buddies</h3>
                                    <Badge variant="secondary" className="text-[10px] font-bold text-primary bg-primary/10 uppercase tracking-widest">12 Online</Badge>
                                </div>
                                <motion.div variants={container} initial="hidden" animate="show" className="space-y-4">
                                    {studyBuddies.map((buddy) => (
                                        <motion.div variants={itemVariants} key={buddy.name} className="flex items-center gap-3 group cursor-pointer hover:bg-muted/50 p-2 -mx-2 rounded-xl transition-colors">
                                            <div className="relative size-10 shrink-0">
                                                <Avatar className="size-full rounded-xl">
                                                    <AvatarImage src={buddy.img} />
                                                    <AvatarFallback>{buddy.name[0]}</AvatarFallback>
                                                </Avatar>
                                                {buddy.active && <span className={`absolute -bottom-1 -right-1 size-3 ${buddy.color} border-2 border-card rounded-full`} />}
                                            </div>
                                            <div className="flex-1 overflow-hidden">
                                                <p className="text-sm font-semibold truncate group-hover:text-primary transition-colors">{buddy.name}</p>
                                                <p className="text-[11px] text-muted-foreground truncate">{buddy.status}</p>
                                            </div>
                                            <span className="material-symbols-outlined text-muted-foreground text-sm opacity-0 group-hover:opacity-100 transition-opacity">more_horiz</span>
                                        </motion.div>
                                    ))}
                                </motion.div>
                                <Button variant="link" className="w-full mt-2 text-xs text-muted-foreground hover:text-primary">View All Buddies</Button>
                            </section>

                            <div className="border-t border-border" />

                            {/* Trending Topics */}
                            <section>
                                <h3 className="font-bold text-sm mb-4">Trending Campus Topics</h3>
                                <motion.div variants={container} initial="hidden" animate="show" className="space-y-3">
                                    {trending.map((item, i) => (
                                        <motion.div variants={itemVariants} key={i} whileHover={{ y: -3 }}>
                                            <div className="bg-muted/50 p-4 rounded-xl border border-transparent hover:border-primary/20 hover:bg-muted transition-all cursor-pointer group h-full">
                                                <p className="text-[10px] font-bold text-primary uppercase mb-1 tracking-widest">{item.tag}</p>
                                                <h4 className="text-sm font-bold group-hover:text-primary transition-colors">{item.title}</h4>
                                                <div className="flex items-center gap-1.5 mt-2">
                                                    <span className="material-symbols-outlined text-xs text-muted-foreground">{item.icon}</span>
                                                    <span className="text-[10px] text-muted-foreground font-medium">{item.metric}</span>
                                                </div>
                                            </div>
                                        </motion.div>
                                    ))}
                                </motion.div>
                            </section>

                            {/* Call to Action */}
                            <div className="rounded-2xl bg-gradient-to-br from-primary to-orange-600 p-6 text-primary-foreground text-center shadow-xl shadow-primary/20">
                                <span className="material-symbols-outlined text-3xl mb-2">auto_awesome</span>
                                <h4 className="font-bold text-sm mb-1">Ready to study?</h4>
                                <p className="text-xs opacity-90 leading-relaxed mb-4">Join a focus room now and get 2x productivity points.</p>
                                <Button className="w-full bg-background text-primary hover:bg-background/90 font-bold text-xs shadow-md">
                                    Start Focus Session
                                </Button>
                            </div>

                        </div>
                    </ScrollArea>
                </aside>
            </div>
        </AppShell>
    );
}
