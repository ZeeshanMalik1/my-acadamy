"use client";

import { useEffect, useRef } from "react";
import AppShell from "@/app/components/AppShell";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { motion } from "framer-motion";
import gsap from "gsap";

export default function ProfilePage() {
    const badgeContainerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        // GSAP Stagger Animation for Achievement Badges
        if (badgeContainerRef.current) {
            const badges = badgeContainerRef.current.children;
            gsap.fromTo(
                badges,
                { opacity: 0, scale: 0.5, y: 20 },
                {
                    opacity: 1,
                    scale: 1,
                    y: 0,
                    duration: 0.6,
                    stagger: 0.15,
                    ease: "back.out(1.5)",
                    delay: 0.3
                }
            );
        }
    }, []);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.1
            }
        }
    };

    const itemVariants: import("framer-motion").Variants = {
        hidden: { y: 20, opacity: 0 },
        visible: { y: 0, opacity: 1, transition: { type: "spring", stiffness: 100 } }
    };

    return (
        <AppShell>
            <main className="flex-1 overflow-y-auto p-8">
                <motion.div
                    className="max-w-5xl mx-auto space-y-8"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    {/* Profile Header */}
                    <motion.div variants={itemVariants}>
                        <Card className="rounded-3xl p-8 flex flex-col md:flex-row items-center gap-8 shadow-sm bg-card/60 backdrop-blur-xl border-border/50">
                            <div className="relative">
                                <Avatar className="size-32 border-4 border-background shadow-xl">
                                    <AvatarImage src="https://i.pravatar.cc/150?img=3" />
                                    <AvatarFallback>AM</AvatarFallback>
                                </Avatar>
                                <div className="absolute -bottom-2 -right-2 bg-primary text-primary-foreground p-2 rounded-xl shadow-lg flex items-center justify-center">
                                    <span className="material-symbols-outlined text-sm">verified</span>
                                </div>
                            </div>

                            <div className="flex-1 text-center md:text-left">
                                <h2 className="text-3xl font-extrabold text-foreground">Alex Morgan</h2>
                                <p className="text-primary font-bold mt-1 tracking-tight">B.S. Computer Science | Senior Year</p>

                                <div className="flex flex-wrap justify-center md:justify-start gap-4 mt-4 text-muted-foreground text-sm font-medium">
                                    <span className="flex items-center gap-1.5">
                                        <span className="material-symbols-outlined text-base">location_on</span>
                                        Main Campus, Seattle
                                    </span>
                                    <span className="flex items-center gap-1.5">
                                        <span className="material-symbols-outlined text-base">mail</span>
                                        alex.morgan@acadhq.edu
                                    </span>
                                </div>
                            </div>

                            <div className="flex gap-3 mt-4 md:mt-0">
                                <Button className="font-bold shadow-md hover:scale-105 transition-transform">Edit Profile</Button>
                                <Button variant="outline" size="icon" className="shadow-sm hover:scale-105 transition-transform">
                                    <span className="material-symbols-outlined text-muted-foreground">share</span>
                                </Button>
                            </div>
                        </Card>
                    </motion.div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        {/* Left Column: Stats and Achievements */}
                        <div className="lg:col-span-2 space-y-8">

                            {/* Quick Stats */}
                            <motion.div className="grid grid-cols-1 sm:grid-cols-3 gap-4" variants={itemVariants}>
                                {[
                                    { label: "Current GPA", value: "3.92", border: "border-primary", sub: "+0.05 from last sem", subIcon: "trending_up", subColor: "text-emerald-500" },
                                    { label: "Semester Credits", value: "15", border: "border-blue-500", sub: "Full-time Status", subColor: "text-muted-foreground" },
                                    { label: "Dean's List", value: "4x", border: "border-amber-500", sub: "Consistent Excellence", subColor: "text-muted-foreground" },
                                ].map((stat, i) => (
                                    <Card key={i} className={`rounded-2xl shadow-sm border-l-4 ${stat.border} hover:-translate-y-1 transition-transform`}>
                                        <CardContent className="p-6">
                                            <p className="text-muted-foreground text-[10px] font-black uppercase tracking-widest">{stat.label}</p>
                                            <h3 className="text-4xl font-black mt-1 tracking-tighter">{stat.value}</h3>
                                            <div className={`flex items-center gap-1 mt-3 text-xs font-bold ${stat.subColor}`}>
                                                {stat.subIcon && <span className="material-symbols-outlined text-sm">{stat.subIcon}</span>}
                                                {stat.sub}
                                            </div>
                                        </CardContent>
                                    </Card>
                                ))}
                            </motion.div>

                            {/* Bio Section */}
                            <motion.div variants={itemVariants}>
                                <Card className="rounded-3xl shadow-sm overflow-hidden">
                                    <CardContent className="p-8">
                                        <div className="flex items-center gap-2 mb-4">
                                            <span className="material-symbols-outlined text-primary text-2xl">history_edu</span>
                                            <h3 className="text-xl font-bold">Professional Bio</h3>
                                        </div>
                                        <p className="text-muted-foreground leading-relaxed">
                                            Senior Computer Science student with a passion for software architecture and artificial intelligence. Currently focusing on research regarding decentralized systems and machine learning optimization. I enjoy building tools that bridge the gap between academic theory and practical application. Seeking opportunities in full-stack development and system design.
                                        </p>
                                    </CardContent>
                                </Card>
                            </motion.div>

                            {/* Academic Achievements / GSAP Animation Target */}
                            <motion.div variants={itemVariants}>
                                <Card className="rounded-3xl shadow-sm">
                                    <CardContent className="p-8">
                                        <div className="flex items-center justify-between mb-6">
                                            <div className="flex items-center gap-2">
                                                <span className="material-symbols-outlined text-primary text-2xl">military_tech</span>
                                                <h3 className="text-xl font-bold">Academic Achievements</h3>
                                            </div>
                                            <Button variant="link" className="text-primary font-bold">View All</Button>
                                        </div>

                                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4" ref={badgeContainerRef}>
                                            {[
                                                { title: "Honor Roll", sub: "Spring 2023", icon: "emoji_events", color: "text-amber-600", bg: "bg-amber-100" },
                                                { title: "Code Master", sub: "Hackathon Winner", icon: "code", color: "text-blue-600", bg: "bg-blue-100" },
                                                { title: "Research Fellow", sub: "Published Author", icon: "science", color: "text-purple-600", bg: "bg-purple-100" },
                                                { title: "Top 5%", sub: "Department Rank", icon: "star", color: "text-emerald-600", bg: "bg-emerald-100" },
                                            ].map((badge, i) => (
                                                <div key={i} className="flex flex-col items-center p-4 bg-muted/50 rounded-2xl text-center group transition-colors hover:bg-primary/5 border border-transparent hover:border-primary/20">
                                                    <div className={`size-14 ${badge.bg} ${badge.color} rounded-full flex items-center justify-center mb-3 shadow-inner group-hover:scale-110 transition-transform duration-300`}>
                                                        <span className="material-symbols-outlined text-2xl" style={{ fontVariationSettings: "'FILL' 1" }}>{badge.icon}</span>
                                                    </div>
                                                    <p className="text-sm font-bold">{badge.title}</p>
                                                    <p className="text-[10px] text-muted-foreground mt-1 font-semibold">{badge.sub}</p>
                                                </div>
                                            ))}
                                        </div>
                                    </CardContent>
                                </Card>
                            </motion.div>

                        </div>

                        {/* Right Column: Sidebar Info */}
                        <motion.div className="space-y-8" variants={itemVariants}>

                            {/* Current Courses */}
                            <Card className="rounded-3xl shadow-sm">
                                <CardContent className="p-6">
                                    <h4 className="text-lg font-bold mb-4">Current Courses</h4>
                                    <div className="space-y-4">
                                        {[
                                            { code: "CS402", name: "Cloud Architecture", progress: 85 },
                                            { code: "CS488", name: "Deep Learning II", progress: 62 },
                                            { code: "MATH301", name: "Discrete Structures", progress: 94 },
                                        ].map((course) => (
                                            <div key={course.code} className="p-4 bg-muted/30 rounded-xl border border-border/50 hover:bg-muted/50 transition-colors">
                                                <p className="text-[10px] font-bold text-primary mb-1 uppercase tracking-widest">{course.code}</p>
                                                <h5 className="text-sm font-bold">{course.name}</h5>
                                                <Progress value={course.progress} className="h-2 mt-3" />
                                            </div>
                                        ))}
                                    </div>
                                    <Button variant="outline" className="w-full mt-6 font-bold border-dashed hover:text-primary hover:border-primary">View Curriculum</Button>
                                </CardContent>
                            </Card>

                            {/* Upcoming Deadlines */}
                            <Card className="rounded-3xl shadow-sm">
                                <CardContent className="p-6">
                                    <h4 className="text-lg font-bold mb-4">Upcoming</h4>
                                    <div className="space-y-4">
                                        {[
                                            { day: "24", month: "Oct", title: "Final Project Proposal", sub: "CS402 • 11:59 PM", color: "bg-rose-100 text-rose-600" },
                                            { day: "27", month: "Oct", title: "Quiz: Neural Nets", sub: "CS488 • In Class", color: "bg-muted text-foreground" },
                                        ].map((event, i) => (
                                            <div key={i} className="flex gap-4 group">
                                                <div className={`shrink-0 size-12 ${event.color} rounded-xl flex flex-col items-center justify-center font-bold tracking-tighter group-hover:scale-105 transition-transform`}>
                                                    <span className="text-[10px] uppercase">{event.month}</span>
                                                    <span className="text-lg leading-none">{event.day}</span>
                                                </div>
                                                <div>
                                                    <p className="text-sm font-bold group-hover:text-primary transition-colors">{event.title}</p>
                                                    <p className="text-[11px] text-muted-foreground mt-0.5 font-medium">{event.sub}</p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </CardContent>
                            </Card>

                            {/* Location Widget */}
                            <Card className="rounded-3xl shadow-sm overflow-hidden">
                                <CardContent className="p-0 border-b relative aspect-video bg-muted flex items-center justify-center">
                                    <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-primary/5" />
                                    <motion.div
                                        animate={{ y: [0, -8, 0] }}
                                        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                                        className="bg-background p-2 rounded-full shadow-lg border-2 border-primary z-10"
                                    >
                                        <span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>location_on</span>
                                    </motion.div>
                                </CardContent>
                                <div className="p-4 bg-card">
                                    <p className="text-xs text-muted-foreground font-medium flex items-center gap-1.5">
                                        <span className="material-symbols-outlined text-sm text-primary">info</span>
                                        Currently: Engineering Building, Room 402
                                    </p>
                                </div>
                            </Card>

                        </motion.div>
                    </div>
                </motion.div>
            </main>
        </AppShell>
    );
}
