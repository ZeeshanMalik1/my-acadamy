"use client";

import { useEffect, useRef } from "react";
import { useTheme } from "next-themes";
import { useColorTheme } from "@/app/components/ThemeProvider";
import gsap from "gsap";
import AppShell from "@/app/components/AppShell";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function SettingsPage() {
    const { theme, setTheme } = useTheme();
    const { colorTheme, setColorTheme } = useColorTheme();
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
                            <div className="mb-6 flex items-center justify-between">
                                <div>
                                    <h3 className="text-xl font-bold">Appearance</h3>
                                    <p className="text-sm text-muted-foreground">Customize the look and feel of your workspace.</p>
                                </div>
                                <div className="flex bg-muted p-1 rounded-lg">
                                    <button
                                        onClick={() => setTheme("light")}
                                        className={`px-4 py-1.5 text-xs font-bold rounded-md flex items-center gap-2 transition-all ${theme !== "dark" ? "bg-background text-foreground shadow-sm" : "text-muted-foreground hover:text-foreground"}`}
                                    >
                                        <span className="material-symbols-outlined text-[14px]">light_mode</span>
                                        Light
                                    </button>
                                    <button
                                        onClick={() => setTheme("dark")}
                                        className={`px-4 py-1.5 text-xs font-bold rounded-md flex items-center gap-2 transition-all ${theme === "dark" ? "bg-background text-foreground shadow-sm" : "text-muted-foreground hover:text-foreground"}`}
                                    >
                                        <span className="material-symbols-outlined text-[14px]">dark_mode</span>
                                        Dark
                                    </button>
                                </div>
                            </div>

                            <div className="mb-4">
                                <h4 className="text-sm font-bold mb-4">Theme Templates</h4>
                                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                                    {/* Default Orange */}
                                    <button
                                        onClick={() => setColorTheme('')}
                                        className={`relative p-4 border rounded-xl text-left transition-colors bg-card flex flex-col gap-4 group ${colorTheme === '' ? 'border-primary ring-1 ring-primary' : 'border-border hover:border-primary/50'}`}
                                    >
                                        <div className="flex items-center justify-between w-full">
                                            <p className="text-sm font-bold">Default Light</p>
                                            {colorTheme === '' && <span className="material-symbols-outlined text-[16px] text-primary">check_circle</span>}
                                        </div>
                                        <p className="text-[10px] text-muted-foreground -mt-3">Warm student-focused theme</p>
                                        <div className="w-full flex gap-2">
                                            <div style={{ backgroundColor: '#ec5b13' }} className="h-6 flex-1 rounded shadow-sm"></div>
                                            <div style={{ backgroundColor: '#ffffff' }} className="h-6 flex-[2] rounded shadow-sm border border-border/50"></div>
                                            <div style={{ backgroundColor: '#f1f5f9' }} className="h-6 flex-[2] rounded shadow-sm"></div>
                                            <div style={{ backgroundColor: '#e2e8f0' }} className="h-6 flex-[2] rounded shadow-sm"></div>
                                        </div>
                                    </button>

                                    {/* Blue Template */}
                                    <button
                                        onClick={() => setColorTheme('blue')}
                                        className={`relative p-4 border rounded-xl text-left transition-colors bg-card flex flex-col gap-4 group ${colorTheme === 'blue' ? 'border-blue-500 ring-1 ring-blue-500' : 'border-border hover:border-blue-500/50'}`}
                                    >
                                        <div className="flex items-center justify-between w-full">
                                            <p className="text-sm font-bold">Blue Light</p>
                                            {colorTheme === 'blue' && <span className="material-symbols-outlined text-[16px] text-blue-500">check_circle</span>}
                                        </div>
                                        <p className="text-[10px] text-muted-foreground -mt-3">Clean theme with oceanic accents</p>
                                        <div className="w-full flex gap-2">
                                            <div style={{ backgroundColor: '#3b82f6' }} className="h-6 flex-1 rounded shadow-sm"></div>
                                            <div style={{ backgroundColor: '#ffffff' }} className="h-6 flex-[2] rounded shadow-sm border border-border/50"></div>
                                            <div style={{ backgroundColor: '#eff6ff' }} className="h-6 flex-[2] rounded shadow-sm"></div>
                                            <div style={{ backgroundColor: '#dbeafe' }} className="h-6 flex-[2] rounded shadow-sm"></div>
                                        </div>
                                    </button>

                                    {/* Green Template */}
                                    <button
                                        onClick={() => setColorTheme('green')}
                                        className={`relative p-4 border rounded-xl text-left transition-colors bg-card flex flex-col gap-4 group ${colorTheme === 'green' ? 'border-green-500 ring-1 ring-green-500' : 'border-border hover:border-green-500/50'}`}
                                    >
                                        <div className="flex items-center justify-between w-full">
                                            <p className="text-sm font-bold">Green Light</p>
                                            {colorTheme === 'green' && <span className="material-symbols-outlined text-[16px] text-green-500">check_circle</span>}
                                        </div>
                                        <p className="text-[10px] text-muted-foreground -mt-3">Fresh theme with forest accents</p>
                                        <div className="w-full flex gap-2">
                                            <div style={{ backgroundColor: '#22c55e' }} className="h-6 flex-1 rounded shadow-sm"></div>
                                            <div style={{ backgroundColor: '#ffffff' }} className="h-6 flex-[2] rounded shadow-sm border border-border/50"></div>
                                            <div style={{ backgroundColor: '#f0fdf4' }} className="h-6 flex-[2] rounded shadow-sm"></div>
                                            <div style={{ backgroundColor: '#dcfce7' }} className="h-6 flex-[2] rounded shadow-sm"></div>
                                        </div>
                                    </button>

                                    {/* Purple Template */}
                                    <button
                                        onClick={() => setColorTheme('purple')}
                                        className={`relative p-4 border rounded-xl text-left transition-colors bg-card flex flex-col gap-4 group ${colorTheme === 'purple' ? 'border-purple-500 ring-1 ring-purple-500' : 'border-border hover:border-purple-500/50'}`}
                                    >
                                        <div className="flex items-center justify-between w-full">
                                            <p className="text-sm font-bold">Purple Light</p>
                                            {colorTheme === 'purple' && <span className="material-symbols-outlined text-[16px] text-purple-500">check_circle</span>}
                                        </div>
                                        <p className="text-[10px] text-muted-foreground -mt-3">Royal theme with violet accents</p>
                                        <div className="w-full flex gap-2">
                                            <div style={{ backgroundColor: '#a855f7' }} className="h-6 flex-1 rounded shadow-sm"></div>
                                            <div style={{ backgroundColor: '#ffffff' }} className="h-6 flex-[2] rounded shadow-sm border border-border/50"></div>
                                            <div style={{ backgroundColor: '#faf5ff' }} className="h-6 flex-[2] rounded shadow-sm"></div>
                                            <div style={{ backgroundColor: '#f3e8ff' }} className="h-6 flex-[2] rounded shadow-sm"></div>
                                        </div>
                                    </button>
                                </div>
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
