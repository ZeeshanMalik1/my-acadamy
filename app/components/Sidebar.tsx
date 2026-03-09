"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
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
    <aside className="flex h-screen w-56 shrink-0 flex-col border-r border-border bg-card">
      {/* Logo */}
      <div className="flex items-center gap-3 px-5 py-4 shrink-0">
        <div className="flex size-7 items-center justify-center rounded-lg bg-primary text-primary-foreground shadow-sm">
          <span className="material-symbols-outlined text-[16px]">school</span>
        </div>
        <h2 className="text-[15px] font-black tracking-tight">AcadHQ</h2>
      </div>

      {/* User Profile */}
      <Link href="/profile" className={cn("mx-3 mb-3 flex items-center gap-2.5 rounded-xl p-2.5 transition-colors shrink-0", pathname === "/profile" ? "bg-primary/10 text-primary" : "bg-muted hover:bg-muted/80")}>
        <Avatar className="size-8 shadow-sm">
          <AvatarImage src="https://i.pravatar.cc/150?img=3" alt="Alex Morgan" />
          <AvatarFallback className="bg-primary text-primary-foreground font-bold text-[10px]">AM</AvatarFallback>
        </Avatar>
        <div className="flex flex-col overflow-hidden text-foreground">
          <span className="truncate text-xs font-bold leading-tight">Alex Morgan</span>
          <span className="truncate text-[10px] text-muted-foreground">Computer Science</span>
        </div>
      </Link>

      {/* Navigation */}
      <div className="flex-1 px-3 overflow-y-auto custom-scrollbar">
        <nav className="space-y-0.5">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "flex items-center gap-2.5 rounded-lg px-2.5 py-2 text-xs font-semibold transition-colors mb-0.5",
                  isActive
                    ? "bg-primary/10 text-primary"
                    : "text-muted-foreground hover:bg-muted hover:text-foreground"
                )}
              >
                <span className="material-symbols-outlined text-[18px]">
                  {item.icon}
                </span>
                <span className="flex-1 truncate">{item.label}</span>
                {item.badge && (
                  <Badge className="bg-primary text-primary-foreground text-[9px] h-4 min-w-[16px] px-1 rounded-sm shadow-sm">
                    {item.badge}
                  </Badge>
                )}
              </Link>
            );
          })}
        </nav>
      </div>

      <div className="p-3 space-y-3 shrink-0 border-t border-border mt-2">
        {/* AI Assistant Card */}
        <div className="rounded-xl border border-primary/20 bg-primary/5 p-2.5">
          <div className="flex items-center gap-1.5 mb-1 text-primary">
            <span className="material-symbols-outlined text-[14px]">smart_toy</span>
            <span className="text-[11px] font-bold uppercase tracking-wider">AI Assistant</span>
          </div>
          <p className="text-[10px] text-muted-foreground mb-2 leading-tight">Ask about syllabus or notes.</p>
          <Button variant="outline" size="sm" className="w-full h-6 text-[10px] font-bold border-primary/30 text-primary hover:bg-primary/10 px-2 shadow-sm">
            Chat Now
          </Button>
        </div>

        {/* Bottom nav */}
        <nav className="space-y-0.5">
          {bottomItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="flex items-center gap-2.5 rounded-lg px-2.5 py-1.5 text-xs font-semibold text-muted-foreground hover:bg-muted hover:text-foreground transition-colors"
            >
              <span className="material-symbols-outlined text-[18px]">{item.icon}</span>
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </aside>
  );
}
