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

const reels = [
    { title: "Campus Timelapse: Sunrise to Midnight", creator: "Sarah K.", views: "12K", img: "https://picsum.photos/seed/reel1/400/250", tag: "Film" },
    { title: "Acoustic Guitar Original Composition", creator: "Marcus W.", views: "8.2K", img: "https://picsum.photos/seed/reel2/400/250", tag: "Music" },
    { title: "Digital Art: The Abstract Mind", creator: "Priya N.", views: "5.6K", img: "https://picsum.photos/seed/reel3/400/250", tag: "Art" },
];

const jamSessions = [
    { title: "Visual Novel Story Jam", members: 6, status: "Recruiting", color: "bg-blue-100 text-blue-700" },
    { title: "Electronic Music Collab", members: 4, status: "In Progress", color: "bg-emerald-100 text-emerald-700" },
    { title: "Climate Change Poster Design", members: 8, status: "Open", color: "bg-primary/10 text-primary" },
];

export default function StudioPage() {
    return (
        <AppShell>
            <main className="flex-1 overflow-y-auto p-8">
                <motion.div variants={container} initial="hidden" animate="show" className="max-w-7xl mx-auto space-y-8">
                    {/* Header */}
                    <motion.div variants={itemVariants} className="flex items-end justify-between">
                        <div>
                            <h1 className="text-3xl font-black tracking-tight">Creative Studio</h1>
                            <p className="text-muted-foreground mt-1">Showcase your talent, discover student reels, and collaborate on creative projects.</p>
                        </div>
                        <Button className="bg-primary text-primary-foreground shadow-lg shadow-primary/20 h-11 hover:scale-[1.02] transition-transform">
                            <span className="material-symbols-outlined mr-2">upload</span>
                            Upload Reel
                        </Button>
                    </motion.div>

                    {/* Featured Reel */}
                    <motion.div variants={itemVariants} className="relative rounded-2xl overflow-hidden group cursor-pointer shadow-sm border border-border/50" style={{ height: "340px" }} whileHover={{ scale: 1.01 }}>
                        <img src="https://picsum.photos/seed/featured/1200/340" alt="Featured Reel" className="w-full h-full object-cover" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                            <div className="size-20 bg-primary/90 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform">
                                <span className="material-symbols-outlined text-5xl text-white" style={{ fontVariationSettings: "'FILL' 1" }}>play_arrow</span>
                            </div>
                        </div>
                        <div className="absolute bottom-6 left-6">
                            <Badge className="bg-primary text-primary-foreground mb-3 shadow-md">Featured Reel</Badge>
                            <h2 className="text-2xl font-bold text-white drop-shadow-md">Architecture of Tomorrow: A Visual Essay</h2>
                            <div className="flex items-center gap-3 mt-2 text-white/80 text-sm">
                                <div className="flex items-center gap-1.5">
                                    <Avatar className="size-6 border border-white/30"><AvatarImage src="https://i.pravatar.cc/150?img=9" /></Avatar>
                                    <span>Jordan Kim</span>
                                </div>
                                <span>·</span>
                                <span>21.4K views</span>
                            </div>
                        </div>
                    </motion.div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        {/* Reels Grid */}
                        <motion.div variants={itemVariants} className="lg:col-span-2 space-y-6">
                            <div className="flex items-center justify-between">
                                <h2 className="text-xl font-bold flex items-center gap-2">
                                    <span className="material-symbols-outlined text-primary">movie</span>
                                    Latest Student Reels
                                </h2>
                                <div className="flex gap-1 bg-muted p-1 rounded-lg">
                                    {["All", "Film", "Music", "Art"].map((t, i) => (
                                        <button key={t} className={`px-3 py-1 rounded text-xs font-bold ${i === 0 ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:text-foreground"}`}>{t}</button>
                                    ))}
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                {reels.map((r) => (
                                    <motion.div key={r.title} variants={itemVariants} whileHover={{ y: -5 }}>
                                        <Card className="overflow-hidden group cursor-pointer shadow-sm border-border/50 hover:shadow-md transition-shadow">
                                            <div className="relative">
                                                <img src={r.img} alt={r.title} className="w-full h-36 object-cover group-hover:scale-105 transition-transform duration-300" />
                                                <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                                    <span className="material-symbols-outlined text-white text-4xl" style={{ fontVariationSettings: "'FILL' 1" }}>play_circle</span>
                                                </div>
                                                <Badge className="absolute top-2 right-2 text-[10px] bg-card/90 text-foreground">{r.tag}</Badge>
                                            </div>
                                            <CardContent className="p-3">
                                                <p className="text-sm font-bold line-clamp-1">{r.title}</p>
                                                <div className="flex justify-between items-center mt-1">
                                                    <span className="text-[11px] text-muted-foreground">{r.creator}</span>
                                                    <span className="text-[11px] text-muted-foreground">{r.views} views</span>
                                                </div>
                                            </CardContent>
                                        </Card>
                                    </motion.div>
                                ))}
                            </div>

                            {/* Jam Sessions */}
                            <div>
                                <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
                                    <span className="material-symbols-outlined text-primary">people</span>
                                    Active Jam Sessions
                                </h2>
                                <div className="space-y-3">
                                    {jamSessions.map((j) => (
                                        <motion.div key={j.title} variants={itemVariants} whileHover={{ x: 5 }}>
                                            <Card className="shadow-sm border-border/50">
                                                <CardContent className="flex items-center justify-between p-4">
                                                    <div>
                                                        <h3 className="font-bold text-base">{j.title}</h3>
                                                        <p className="text-xs text-muted-foreground mt-1">{j.members} members joined</p>
                                                    </div>
                                                    <div className="flex items-center gap-3">
                                                        <Badge variant="secondary" className={j.color}>{j.status}</Badge>
                                                        <Button size="sm" className="bg-primary text-primary-foreground text-xs hover:scale-105 transition-transform">Join</Button>
                                                    </div>
                                                </CardContent>
                                            </Card>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>
                        </motion.div>

                        {/* Right Sidebar */}
                        <motion.div variants={itemVariants} className="space-y-6">
                            {/* Trending */}
                            <Card>
                                <CardContent className="p-6">
                                    <h3 className="font-bold mb-4 flex items-center gap-2">
                                        <span className="material-symbols-outlined text-primary">trending_up</span>
                                        Trending Topics
                                    </h3>
                                    <div className="flex flex-wrap gap-2">
                                        {["#DigitalArt", "#FilmFest23", "#MusicJam", "#Photography", "#Animation", "#ShortFilm"].map((tag) => (
                                            <span key={tag} className="text-xs font-bold bg-muted hover:bg-primary/10 hover:text-primary rounded-full px-3 py-1 cursor-pointer transition-colors">{tag}</span>
                                        ))}
                                    </div>
                                </CardContent>
                            </Card>

                            {/* Analytics */}
                            <Card>
                                <CardContent className="p-6">
                                    <h3 className="font-bold mb-4 flex items-center gap-2">
                                        <span className="material-symbols-outlined text-primary">analytics</span>
                                        Your Portfolio Stats
                                    </h3>
                                    <div className="grid grid-cols-2 gap-3">
                                        {[
                                            { label: "Total views", value: "14.3K", icon: "visibility", color: "text-blue-500" },
                                            { label: "Likes", value: "982", icon: "favorite", color: "text-rose-500" },
                                            { label: "Collaborations", value: "7", icon: "handshake", color: "text-emerald-500" },
                                            { label: "Reels Posted", value: "12", icon: "movie", color: "text-primary" },
                                        ].map((s) => (
                                            <div key={s.label} className="bg-muted rounded-xl p-4 text-center">
                                                <span className={`material-symbols-outlined ${s.color} text-2xl`}>{s.icon}</span>
                                                <p className="font-black text-xl mt-1">{s.value}</p>
                                                <p className="text-[10px] text-muted-foreground">{s.label}</p>
                                            </div>
                                        ))}
                                    </div>
                                </CardContent>
                            </Card>
                        </motion.div>
                    </div>
                </motion.div>
            </main>
        </AppShell >
    );
}
