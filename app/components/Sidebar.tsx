"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";

const navItems = [
  { href: "/", icon: "grid_view", label: "Dashboard" },
  { href: "/chat", icon: "chat_bubble", label: "Social Hub", badge: "New" },
  { href: "/schedule", icon: "calendar_month", label: "Schedule" },
  { href: "/tasks", icon: "task_alt", label: "Tasks & Focus", badge: "12" },
  { href: "/notes", icon: "description", label: "Course Notes" },
  { href: "/resources", icon: "folder_open", label: "Resources" },
  { href: "/study-buddy", icon: "person_search", label: "Study Buddy" },
  { href: "/career", icon: "trending_up", label: "Career Roadmap" },
  { href: "/collaboration", icon: "hub", label: "Collaboration" },
  { href: "/communities", icon: "groups", label: "Communities" },
  { href: "/studio", icon: "palette", label: "Creative Studio" },
  { href: "/finance", icon: "account_balance_wallet", label: "Finance" },
  { href: "/wellness", icon: "favorite", label: "Wellness" },
];

const bottomItems = [
  { href: "/settings", icon: "settings", label: "Settings" },
  { href: "/logout", icon: "logout", label: "Log Out" },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="flex h-screen w-64 shrink-0 flex-col border-r border-border bg-card">
      {/* Logo */}
      <div className="flex items-center gap-3 px-6 py-4">
        <div className="flex size-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
          <span className="material-symbols-outlined text-[18px]">school</span>
        </div>
        <h2 className="text-lg font-bold tracking-tight">AcadHQ</h2>
      </div>

      {/* User Profile */}
      <Link href="/profile" className={cn("mx-4 mb-4 flex items-center gap-3 rounded-xl p-3 transition-colors", pathname === "/profile" ? "bg-primary/10 text-primary" : "bg-muted hover:bg-muted/80")}>
        <Avatar className="size-10">
          <AvatarImage src="https://i.pravatar.cc/150?img=3" alt="Alex Morgan" />
          <AvatarFallback className="bg-primary text-primary-foreground font-bold">AM</AvatarFallback>
        </Avatar>
        <div className="flex flex-col overflow-hidden text-foreground">
          <span className="truncate text-sm font-bold">Alex Morgan</span>
          <span className="truncate text-xs text-muted-foreground">Computer Science</span>
        </div>
      </Link>

      {/* Navigation */}
      <ScrollArea className="flex-1 px-3">
        <nav className="space-y-0.5">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium transition-colors",
                  isActive
                    ? "bg-primary/10 text-primary"
                    : "text-muted-foreground hover:bg-muted hover:text-foreground"
                )}
              >
                <span className="material-symbols-outlined text-[20px]">
                  {item.icon}
                </span>
                <span className="flex-1">{item.label}</span>
                {item.badge && (
                  <Badge className="bg-primary text-primary-foreground text-[10px] h-5 min-w-5 px-1.5">
                    {item.badge}
                  </Badge>
                )}
              </Link>
            );
          })}
        </nav>
      </ScrollArea>

      <div className="p-4 space-y-3">
        {/* AI Assistant Card */}
        <div className="rounded-xl border border-primary/20 bg-primary/5 p-3">
          <div className="flex items-center gap-2 mb-1.5 text-primary">
            <span className="material-symbols-outlined text-[16px]">smart_toy</span>
            <span className="text-xs font-bold">AI Assistant</span>
          </div>
          <p className="text-xs text-muted-foreground mb-2">Ask about your syllabus or notes.</p>
          <Button variant="outline" size="sm" className="w-full h-7 text-xs border-primary/30 text-primary hover:bg-primary/10">
            Chat Now
          </Button>
        </div>

        <Separator />

        {/* Bottom nav */}
        <nav className="space-y-0.5">
          {bottomItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="flex items-center gap-3 rounded-xl px-3 py-2 text-sm font-medium text-muted-foreground hover:bg-muted hover:text-foreground transition-colors"
            >
              <span className="material-symbols-outlined text-[20px]">{item.icon}</span>
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </aside>
  );
}
