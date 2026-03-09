"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import AppShell from "@/app/components/AppShell";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function ProfilePage() {
    const headerRef = useRef<HTMLDivElement>(null);
    const statsRef = useRef<HTMLDivElement>(null);
    const rightSidebarRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Hero entrance
            gsap.from(headerRef.current, {
                y: 50,
                opacity: 0,
                duration: 0.8,
                ease: "power3.out",
            });

            // Staggered stats
            gsap.from(".stat-card", {
                y: 30,
                opacity: 0,
                duration: 0.6,
                stagger: 0.1,
                ease: "back.out(1.7)",
                delay: 0.2,
            });

            // Right sidebar fade in
            gsap.from(rightSidebarRef.current, {
                x: 30,
                opacity: 0,
                duration: 0.8,
                ease: "power2.out",
                delay: 0.4,
            });
        });

        return () => ctx.revert();
    }, []);

    return (
        <AppShell>
            <main className="flex-1 overflow-y-auto bg-muted/20 p-8">
                <div className="max-w-5xl mx-auto space-y-8">
                    {/* Profile Header */}
                    <Card ref={headerRef} className="rounded-3xl border-border/50 shadow-sm overflow-hidden relative">
                        {/* Wavy background - React Bits style inspiration */}
                        <div className="absolute top-0 left-0 right-0 h-32 bg-primary/10 overflow-hidden">
                            <svg className="absolute w-full h-full text-primary/10" preserveAspectRatio="none" viewBox="0 0 1440 320" xmlns="http://www.w3.org/2000/svg">
                                <path fill="currentColor" fillOpacity="1" d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,112C672,96,768,96,864,112C960,128,1056,160,1152,176C1248,192,1344,192,1392,192L1440,192L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path>
                            </svg>
                        </div>

                        <CardContent className="p-8 pt-16 flex flex-col md:flex-row items-center gap-8 relative z-10">
                            <div className="relative">
                                <Avatar className="w-32 h-32 rounded-3xl border-4 border-background shadow-xl shrink-0">
                                    <AvatarImage src="https://i.pravatar.cc/150?img=11" />
                                    <AvatarFallback>AS</AvatarFallback>
                                </Avatar>
                                <div className="absolute -bottom-2 -right-2 bg-primary text-primary-foreground p-1.5 rounded-xl shadow-lg flex items-center justify-center">
                                    <span className="material-symbols-outlined text-sm">verified</span>
                                </div>
                            </div>

                            <div className="flex-1 text-center md:text-left">
                                <h2 className="text-3xl font-black tracking-tight">Alex Sterling</h2>
                                <p className="text-primary font-bold mt-1">B.S. Computer Science | Senior Year</p>
                                <div className="flex flex-wrap justify-center md:justify-start gap-4 mt-4 text-muted-foreground text-sm font-medium">
                                    <span className="flex items-center gap-1">
                                        <span className="material-symbols-outlined text-base">location_on</span>
                                        Main Campus, Seattle
                                    </span>
                                    <span className="flex items-center gap-1">
                                        <span className="material-symbols-outlined text-base">mail</span>
                                        alex.sterling@university.edu
                                    </span>
                                </div>
                            </div>

                            <div className="flex gap-3">
                                <Button className="font-bold shadow-md hover:scale-105 transition-transform rounded-xl">
                                    Edit Profile
                                </Button>
                                <Button variant="outline" size="icon" className="rounded-xl border-border/50">
                                    <span className="material-symbols-outlined">share</span>
                                </Button>
                            </div>
                        </CardContent>
                    </Card>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        {/* Left Column: Stats and Achievements */}
                        <div ref={statsRef} className="lg:col-span-2 space-y-8">
                            {/* Quick Stats Summary */}
                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                                <Card className="stat-card rounded-2xl border-l-4 border-l-primary shadow-sm hover:shadow-md transition-shadow">
                                    <CardContent className="p-6">
                                        <p className="text-muted-foreground text-[10px] font-bold uppercase tracking-wider">Current GPA</p>
                                        <h3 className="text-3xl font-black mt-1">3.92</h3>
                                        <div className="flex items-center gap-1 text-emerald-500 mt-2 text-xs font-bold">
                                            <span className="material-symbols-outlined text-sm">trending_up</span>
                                            +0.05 from last sem
                                        </div>
                                    </CardContent>
                                </Card>
                                <Card className="stat-card rounded-2xl border-l-4 border-l-blue-500 shadow-sm hover:shadow-md transition-shadow">
                                    <CardContent className="p-6">
                                        <p className="text-muted-foreground text-[10px] font-bold uppercase tracking-wider">Semester Credits</p>
                                        <h3 className="text-3xl font-black mt-1">15</h3>
                                        <div className="text-muted-foreground mt-2 text-xs font-medium">
                                            Full-time Status
                                        </div>
                                    </CardContent>
                                </Card>
                                <Card className="stat-card rounded-2xl border-l-4 border-l-amber-500 shadow-sm hover:shadow-md transition-shadow">
                                    <CardContent className="p-6">
                                        <p className="text-muted-foreground text-[10px] font-bold uppercase tracking-wider">Dean's List</p>
                                        <h3 className="text-3xl font-black mt-1">4x</h3>
                                        <div className="text-muted-foreground mt-2 text-xs font-medium">
                                            Consistent Excellence
                                        </div>
                                    </CardContent>
                                </Card>
                            </div>

                            {/* Bio Section */}
                            <Card className="rounded-3xl shadow-sm border-border/50">
                                <CardContent className="p-8">
                                    <div className="flex items-center gap-2 mb-4">
                                        <span className="material-symbols-outlined text-primary">history_edu</span>
                                        <h3 className="text-xl font-bold">Professional Bio</h3>
                                    </div>
                                    <p className="text-muted-foreground leading-relaxed">
                                        Senior Computer Science student with a passion for software architecture and artificial intelligence. Currently focusing on research regarding decentralized systems and machine learning optimization. I enjoy building tools that bridge the gap between academic theory and practical application. Seeking opportunities in full-stack development and system design.
                                    </p>
                                </CardContent>
                            </Card>

                            {/* Academic Achievements/Badges */}
                            <Card className="rounded-3xl shadow-sm border-border/50">
                                <CardContent className="p-8">
                                    <div className="flex items-center justify-between mb-6">
                                        <div className="flex items-center gap-2">
                                            <span className="material-symbols-outlined text-primary">military_tech</span>
                                            <h3 className="text-xl font-bold">Academic Achievements</h3>
                                        </div>
                                        <Button variant="link" className="text-primary text-xs font-bold p-0">View All</Button>
                                    </div>

                                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                                        {[
                                            { title: "Honor Roll", sub: "Spring 2023", icon: "emoji_events", iconColor: "text-amber-600 bg-amber-100" },
                                            { title: "Code Master", sub: "Hackathon Winner", icon: "code", iconColor: "text-blue-600 bg-blue-100 dark:bg-blue-900/30 dark:text-blue-400" },
                                            { title: "Research Fellow", sub: "Published Author", icon: "science", iconColor: "text-purple-600 bg-purple-100 dark:bg-purple-900/30 dark:text-purple-400" },
                                            { title: "Top 5%", sub: "Department Rank", icon: "star", iconColor: "text-emerald-600 bg-emerald-100 dark:bg-emerald-900/30 dark:text-emerald-400" }
                                        ].map((badge) => (
                                            <div key={badge.title} className="flex flex-col items-center p-4 bg-muted/50 rounded-2xl text-center group transition-all hover:bg-primary/10 cursor-pointer">
                                                <div className={`w-12 h-12 rounded-full flex items-center justify-center mb-3 ${badge.iconColor}`}>
                                                    <span className="material-symbols-outlined">{badge.icon}</span>
                                                </div>
                                                <p className="text-xs font-bold">{badge.title}</p>
                                                <p className="text-[10px] text-muted-foreground mt-1">{badge.sub}</p>
                                            </div>
                                        ))}
                                    </div>
                                </CardContent>
                            </Card>
                        </div>

                        {/* Right Column: Sidebar info */}
                        <div ref={rightSidebarRef} className="space-y-8">
                            {/* Current Courses */}
                            <Card className="rounded-3xl shadow-sm border-border/50">
                                <CardContent className="p-6">
                                    <h4 className="text-lg font-bold mb-4">Current Courses</h4>
                                    <div className="space-y-3">
                                        {[
                                            { code: "CS402", name: "Cloud Architecture", pct: 85 },
                                            { code: "CS488", name: "Deep Learning II", pct: 62 },
                                            { code: "MATH301", name: "Discrete Structures", pct: 94 },
                                        ].map((c) => (
                                            <div key={c.code} className="p-4 bg-muted/50 rounded-xl border border-border/50 group cursor-pointer hover:border-primary/30 transition-colors">
                                                <p className="text-[10px] font-bold text-primary mb-1 uppercase tracking-widest">{c.code}</p>
                                                <h5 className="text-sm font-bold group-hover:text-primary transition-colors">{c.name}</h5>
                                                <div className="w-full bg-background h-1.5 rounded-full mt-3 overflow-hidden">
                                                    <div className="bg-primary h-full rounded-full transition-all duration-1000 ease-out" style={{ width: `${c.pct}%` }}></div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                    <Button variant="outline" className="w-full mt-6 rounded-xl border-border/50 shadow-sm text-xs font-bold">
                                        View Curriculum
                                    </Button>
                                </CardContent>
                            </Card>

                            {/* Campus Map / Location */}
                            <Card className="rounded-3xl shadow-sm border-border/50 overflow-hidden group">
                                <div className="aspect-video w-full bg-muted relative">
                                    <div className="absolute inset-0 opacity-50 bg-gradient-to-br from-primary/20 to-card"></div>
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <div className="bg-background p-2 rounded-full shadow-lg border-2 border-primary group-hover:scale-110 transition-transform duration-300">
                                            <span className="material-symbols-outlined text-primary">location_on</span>
                                        </div>
                                    </div>
                                </div>
                                <CardContent className="p-4 bg-card">
                                    <p className="text-xs text-muted-foreground font-medium flex items-center gap-1.5 justify-center">
                                        <span className="material-symbols-outlined text-sm">info</span>
                                        Engineering Building, Room 402
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
