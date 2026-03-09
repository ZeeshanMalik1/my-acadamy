"use client";

import { useEffect, useRef } from "react";
import { useTheme } from "next-themes";
import gsap from "gsap";
import AppShell from "@/app/components/AppShell";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function SettingsPage() {
    const { theme, setTheme } = useTheme();
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(".settings-block", {
                y: 20,
                opacity: 0,
                duration: 0.6,
                stagger: 0.1,
                ease: "power2.out"
            });
        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <AppShell>
            <main className="flex-1 overflow-y-auto bg-background">
                {/* Header */}
                <header className="h-16 border-b border-border flex items-center justify-between px-8 bg-card/50 backdrop-blur-md sticky top-0 z-10">
                    <div className="flex items-center gap-4">
                        <h1 className="text-lg font-bold">Settings</h1>
                    </div>
                </header>

                <div ref={containerRef} className="max-w-4xl mx-auto px-8 py-10 pb-28">
                    {/* Title Section */}
                    <div className="mb-8 settings-block">
                        <h2 className="text-3xl font-black tracking-tight mb-2">Account Settings</h2>
                        <p className="text-muted-foreground">Manage your profile, security preferences, and experience on AcadHQ.</p>
                    </div>

                    {/* Tabs Navigation */}
                    <div className="flex border-b border-border mb-8 overflow-x-auto whitespace-nowrap scrollbar-hide settings-block">
                        {[
                            { icon: "person", label: "Account", active: true },
                            { icon: "lock", label: "Privacy" },
                            { icon: "notifications_active", label: "Notifications" },
                            { icon: "palette", label: "Appearance" },
                        ].map((t) => (
                            <button key={t.label} className={`px-6 py-3 text-sm font-bold flex items-center gap-2 border-b-2 transition-colors ${t.active ? "border-primary text-primary" : "border-transparent text-muted-foreground hover:text-foreground"}`}>
                                <span className="material-symbols-outlined text-sm">{t.icon}</span>
                                {t.label}
                            </button>
                        ))}
                    </div>

                    <div className="space-y-10">
                        {/* Account Section */}
                        <section className="settings-block">
                            <div className="flex items-center gap-2 mb-6">
                                <h3 className="text-xl font-bold">Profile Information</h3>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                <div className="md:col-span-1">
                                    <div className="flex flex-col items-center gap-4 p-6 bg-card border border-border rounded-xl shadow-sm">
                                        <Avatar className="w-32 h-32 rounded-full border-4 border-background shadow-md">
                                            <AvatarImage src="https://i.pravatar.cc/150?img=11" />
                                            <AvatarFallback>AS</AvatarFallback>
                                        </Avatar>
                                        <div className="text-center">
                                            <Button variant="link" className="font-bold p-0 h-auto">Change Photo</Button>
                                            <p className="text-[10px] text-muted-foreground mt-1 uppercase font-bold tracking-widest">JPG, PNG up to 2MB</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="md:col-span-2 space-y-4">
                                    <div className="grid grid-cols-2 gap-4">
                                        <div className="space-y-1.5">
                                            <label className="text-xs font-bold text-muted-foreground uppercase">First Name</label>
                                            <Input defaultValue="Alex" />
                                        </div>
                                        <div className="space-y-1.5">
                                            <label className="text-xs font-bold text-muted-foreground uppercase">Last Name</label>
                                            <Input defaultValue="Sterling" />
                                        </div>
                                    </div>
                                    <div className="space-y-1.5">
                                        <label className="text-xs font-bold text-muted-foreground uppercase">Email Address</label>
                                        <Input type="email" defaultValue="alex.sterling@university.edu" />
                                    </div>
                                    <div className="space-y-1.5">
                                        <label className="text-xs font-bold text-muted-foreground uppercase">Bio</label>
                                        <Textarea rows={3} defaultValue="Computer Science Major | Class of 2025 | Interested in UI design and machine learning." />
                                    </div>
                                </div>
                            </div>
                        </section>

                        <hr className="border-border settings-block" />

                        {/* Appearance / Multi Theme Controller */}
                        <section className="settings-block">
                            <div className="mb-6">
                                <h3 className="text-xl font-bold">Appearance</h3>
                                <p className="text-sm text-muted-foreground">Customize the look and feel of your workspace.</p>
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                <button
                                    onClick={() => setTheme("light")}
                                    className={`p-4 border-2 rounded-xl text-left flex items-center gap-4 transition-all ${theme === "light" ? "border-primary bg-card" : "border-border bg-card hover:border-border/80"}`}
                                >
                                    <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-600">
                                        <span className="material-symbols-outlined">light_mode</span>
                                    </div>
                                    <div className="flex-1">
                                        <p className="text-sm font-bold">Light Mode</p>
                                        <p className="text-[10px] text-muted-foreground">Clean and bright</p>
                                    </div>
                                    {theme === "light" && <span className="material-symbols-outlined text-primary">check_circle</span>}
                                </button>

                                <button
                                    onClick={() => setTheme("dark")}
                                    className={`p-4 border-2 rounded-xl text-left flex items-center gap-4 transition-all ${theme === "dark" || theme === "system" ? "border-primary bg-card" : "border-border bg-card hover:border-border/80"}`}
                                >
                                    <div className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center text-slate-200">
                                        <span className="material-symbols-outlined">dark_mode</span>
                                    </div>
                                    <div className="flex-1">
                                        <p className="text-sm font-bold">Dark Mode</p>
                                        <p className="text-[10px] text-muted-foreground">Easy on the eyes</p>
                                    </div>
                                    {(theme === "dark" || theme === "system") && <span className="material-symbols-outlined text-primary">check_circle</span>}
                                </button>
                            </div>
                        </section>

                        <hr className="border-border settings-block" />

                        {/* Danger Zone */}
                        <section className="pb-8 settings-block">
                            <div className="mb-6">
                                <h3 className="text-xl font-bold text-red-500">Danger Zone</h3>
                                <p className="text-sm text-muted-foreground">Irreversible actions related to your account.</p>
                            </div>
                            <div className="p-6 border border-red-500/20 bg-red-500/10 rounded-xl flex items-center justify-between">
                                <div>
                                    <p className="text-sm font-bold text-red-500">Delete Account</p>
                                    <p className="text-xs text-muted-foreground mt-1">Once you delete your account, there is no going back. Please be certain.</p>
                                </div>
                                <Button variant="destructive" className="font-bold shadow-sm">Delete Permanently</Button>
                            </div>
                        </section>
                    </div>
                </div>

                {/* Sticky Save Footer */}
                <div className="fixed bottom-0 right-0 w-[calc(100%-16rem)] border-t border-border bg-card/80 backdrop-blur-md px-8 py-4 flex items-center justify-end gap-3 z-20">
                    <Button variant="ghost" className="font-bold">Discard Changes</Button>
                    <Button className="font-bold shadow-md shadow-primary/20 hover:scale-105 transition-transform">Save Changes</Button>
                </div>
            </main>
        </AppShell>
    );
}
