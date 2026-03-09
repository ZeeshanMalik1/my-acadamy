"use client";

import { useTheme } from "next-themes";
import AppShell from "@/app/components/AppShell";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import { Separator } from "@/components/ui/separator";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function SettingsPage() {
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);
    const [colorTheme, setColorTheme] = useState("orange");

    useEffect(() => {
        setMounted(true);
        // Find custom color theme from html tag on load
        if (typeof document !== "undefined") {
            const current = document.documentElement.getAttribute("data-theme") || "orange";
            setColorTheme(current);
        }
    }, []);

    const handleColorChange = (color: string) => {
        setColorTheme(color);
        if (color === "orange") {
            document.documentElement.removeAttribute("data-theme");
        } else {
            document.documentElement.setAttribute("data-theme", color);
        }
    };

    if (!mounted) return null;

    return (
        <AppShell>
            <main className="flex-1 overflow-y-auto px-8 py-10">
                <div className="max-w-4xl mx-auto">
                    {/* Header */}
                    <div className="mb-8">
                        <h1 className="text-3xl font-extrabold tracking-tight mb-2">Account Settings</h1>
                        <p className="text-muted-foreground">Manage your profile, security preferences, and experience on AcadHQ.</p>
                    </div>

                    <div className="space-y-10">
                        {/* Account Section */}
                        <section>
                            <h2 className="text-xl font-bold mb-6">Profile Information</h2>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                <div className="md:col-span-1">
                                    <Card className="flex flex-col items-center gap-4 p-6 text-center border-dashed">
                                        <Avatar className="size-32 border-4 border-background shadow-sm">
                                            <AvatarImage src="https://i.pravatar.cc/150?img=11" />
                                            <AvatarFallback>AR</AvatarFallback>
                                        </Avatar>
                                        <div>
                                            <Button variant="link" className="text-primary font-bold">Change Photo</Button>
                                            <p className="text-[10px] text-muted-foreground mt-1 uppercase font-bold tracking-widest">JPG, PNG up to 2MB</p>
                                        </div>
                                    </Card>
                                </div>
                                <div className="md:col-span-2 space-y-4">
                                    <div className="grid grid-cols-2 gap-4">
                                        <div className="space-y-1.5">
                                            <label className="text-xs font-bold text-muted-foreground uppercase">First Name</label>
                                            <Input defaultValue="Alex" />
                                        </div>
                                        <div className="space-y-1.5">
                                            <label className="text-xs font-bold text-muted-foreground uppercase">Last Name</label>
                                            <Input defaultValue="Rivera" />
                                        </div>
                                    </div>
                                    <div className="space-y-1.5">
                                        <label className="text-xs font-bold text-muted-foreground uppercase">Email Address</label>
                                        <Input defaultValue="alex.rivera@university.edu" type="email" />
                                    </div>
                                    <div className="space-y-1.5">
                                        <label className="text-xs font-bold text-muted-foreground uppercase">Bio</label>
                                        <Textarea defaultValue="Computer Science Major | Class of 2025 | Interested in UI design and machine learning." rows={3} />
                                    </div>
                                </div>
                            </div>
                        </section>

                        <Separator />

                        {/* Appearance Theme Switcher */}
                        <section>
                            <h2 className="text-xl font-bold mb-6">Appearance & Theming</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                {/* Light/Dark Toggle */}
                                <div className="space-y-4">
                                    <p className="text-sm font-semibold">Mode</p>
                                    <div className="grid grid-cols-2 gap-4">
                                        <button
                                            onClick={() => setTheme("light")}
                                            className={`p-4 border-2 rounded-xl text-left flex items-center gap-4 transition-all ${theme === "light" ? "border-primary bg-primary/5" : "border-border hover:border-primary/50"}`}
                                        >
                                            <div className="size-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-600">
                                                <span className="material-symbols-outlined">light_mode</span>
                                            </div>
                                            <div className="flex-1">
                                                <p className="text-sm font-bold">Light</p>
                                                <p className="text-[10px] text-muted-foreground">Clean and bright</p>
                                            </div>
                                            {theme === "light" && <span className="material-symbols-outlined text-primary">check_circle</span>}
                                        </button>
                                        <button
                                            onClick={() => setTheme("dark")}
                                            className={`p-4 border-2 rounded-xl text-left flex items-center gap-4 transition-all ${theme === "dark" || theme === "system" ? "border-primary bg-primary/5" : "border-border hover:border-primary/50"}`}
                                        >
                                            <div className="size-8 rounded-full bg-slate-800 flex items-center justify-center text-slate-200">
                                                <span className="material-symbols-outlined">dark_mode</span>
                                            </div>
                                            <div className="flex-1">
                                                <p className="text-sm font-bold">Dark</p>
                                                <p className="text-[10px] text-muted-foreground">Easy on the eyes</p>
                                            </div>
                                            {(theme === "dark" || theme === "system") && <span className="material-symbols-outlined text-primary">check_circle</span>}
                                        </button>
                                    </div>
                                </div>

                                {/* Color Accent Picker */}
                                <div className="space-y-4">
                                    <p className="text-sm font-semibold">Color Accent</p>
                                    <div className="flex flex-wrap gap-4">
                                        {[
                                            { id: "orange", label: "AcadHQ Orange", bg: "bg-[#ec5b13]" },
                                            { id: "blue", label: "Electric Blue", bg: "bg-[#4f46e5]" },
                                            { id: "green", label: "Emerald Green", bg: "bg-[#10b981]" }
                                        ].map((c) => (
                                            <motion.button
                                                whileHover={{ scale: 1.05 }}
                                                whileTap={{ scale: 0.95 }}
                                                key={c.id}
                                                onClick={() => handleColorChange(c.id)}
                                                className={`size-12 rounded-full flex items-center justify-center transition-all ${c.bg} ${colorTheme === c.id ? "ring-4 ring-primary ring-offset-2 ring-offset-background" : "opacity-80 hover:opacity-100"}`}
                                                title={c.label}
                                            >
                                                {colorTheme === c.id && <span className="material-symbols-outlined text-white text-lg font-bold">check</span>}
                                            </motion.button>
                                        ))}
                                    </div>
                                    <p className="text-xs text-muted-foreground mt-2">All pages instantly sync to this globally applied theme.</p>
                                </div>
                            </div>
                        </section>

                        <Separator />

                        {/* Privacy Section */}
                        <section>
                            <h2 className="text-xl font-bold mb-6">Study Buddy Matcher Privacy</h2>
                            <Card className="divide-y">
                                <div className="p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                                    <div className="max-w-md">
                                        <p className="text-sm font-bold mb-1">Visible in Matcher</p>
                                        <p className="text-xs text-muted-foreground">When enabled, your profile will be shown to other students looking for study partners in your shared courses.</p>
                                    </div>
                                    <Switch defaultChecked />
                                </div>
                                <div className="p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                                    <div className="max-w-md">
                                        <p className="text-sm font-bold mb-1">Show Study Statistics</p>
                                        <p className="text-xs text-muted-foreground">Share your weekly focus hours and course progress on your public study profile.</p>
                                    </div>
                                    <Switch defaultChecked />
                                </div>
                            </Card>
                        </section>
                    </div>
                </div>
            </main>
        </AppShell>
    );
}
