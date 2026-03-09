import AppShell from "@/app/components/AppShell";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Input } from "@/components/ui/input";
import { motion, Variants } from "framer-motion";

const container: Variants = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.1 } }
};

const itemVariants: Variants = {
    hidden: { opacity: 0, y: 15 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 300, damping: 24 } }
};

const kpis = [
    { label: "Monthly Budget", value: "$1,250", sub: "$450 remaining", subColor: "text-emerald-600", icon: "account_balance_wallet", iconBg: "bg-primary/10 text-primary" },
    { label: "Applications Sent", value: "08", sub: "3 awaiting reply", subColor: "text-blue-600", icon: "send", iconBg: "bg-blue-100 text-blue-600" },
    { label: "Deadline Alerts", value: "02", sub: "Next: Oct 30", subColor: "text-rose-600", icon: "alarm", iconBg: "bg-rose-100 text-rose-500" },
    { label: "Shortlisted", value: "03", sub: "Awaiting decision", subColor: "text-amber-600", icon: "star", iconBg: "bg-amber-100 text-amber-500" },
];

const scholarships = [
    { name: "National STEM Excellence Award", amount: "$5,000", deadline: "Nov 01, 2023", status: "Applied", statusColor: "bg-blue-100 text-blue-700" },
    { name: "Future Leaders in Tech Grant", amount: "$3,500", deadline: "Nov 15, 2023", status: "In Progress", statusColor: "bg-amber-100 text-amber-700" },
    { name: "Green Innovation Scholarship Fund", amount: "$2,000", deadline: "Dec 01, 2023", status: "Not Started", statusColor: "bg-muted text-muted-foreground" },
];

const budget = [
    { category: "Textbooks & Materials", spent: 280, max: 350, color: "bg-blue-500" },
    { category: "Food & Groceries", spent: 320, max: 400, color: "bg-emerald-500" },
    { category: "Transportation", spent: 95, max: 100, color: "bg-rose-500" },
    { category: "Entertainment", spent: 60, max: 150, color: "bg-amber-500" },
];

export default function FinancePage() {
    return (
        <AppShell>
            <main className="flex-1 overflow-y-auto p-8">
                <motion.div variants={container} initial="hidden" animate="show" className="max-w-6xl mx-auto space-y-8">
                    <motion.div variants={itemVariants} className="flex justify-between items-end">
                        <div>
                            <h1 className="text-3xl font-black tracking-tight">Opportunities & Finance</h1>
                            <p className="text-muted-foreground mt-1">Track scholarships, grants, and your budget in one place.</p>
                        </div>
                        <Button className="bg-primary text-primary-foreground shadow-sm hover:scale-[1.02] transition-transform">
                            <span className="material-symbols-outlined mr-2">add_circle</span>
                            Monitor New Grant
                        </Button>
                    </motion.div>

                    {/* KPI Cards */}
                    <motion.div variants={itemVariants} className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {kpis.map((k) => (
                            <Card key={k.label}>
                                <CardContent className="p-6">
                                    <div className={`size-11 rounded-xl flex items-center justify-center mb-4 ${k.iconBg}`}>
                                        <span className="material-symbols-outlined text-xl">{k.icon}</span>
                                    </div>
                                    <p className="text-sm text-muted-foreground font-medium">{k.label}</p>
                                    <p className="text-2xl font-black mt-1">{k.value}</p>
                                    <p className={`text-xs mt-1 font-bold ${k.subColor}`}>{k.sub}</p>
                                </CardContent>
                            </Card>
                        ))}
                    </motion.div>

                    <motion.div variants={itemVariants} className="grid grid-cols-1 lg:grid-cols-5 gap-8">
                        {/* Scholarship Tracker */}
                        <section className="lg:col-span-3 space-y-4">
                            <div className="flex items-center justify-between">
                                <h2 className="text-xl font-bold flex items-center gap-2">
                                    <span className="material-symbols-outlined text-primary">emoji_events</span>
                                    Scholarship Tracker
                                </h2>
                                <Button variant="outline" size="sm" className="text-xs">
                                    <span className="material-symbols-outlined text-xs mr-1">filter_list</span>
                                    Filter
                                </Button>
                            </div>
                            <Card>
                                <div className="overflow-hidden">
                                    <table className="w-full text-left">
                                        <thead>
                                            <tr className="border-b bg-muted/30">
                                                <th className="p-4 text-[10px] font-bold uppercase tracking-widest text-muted-foreground">Scholarship</th>
                                                <th className="p-4 text-[10px] font-bold uppercase tracking-widest text-muted-foreground">Amount</th>
                                                <th className="p-4 text-[10px] font-bold uppercase tracking-widest text-muted-foreground">Deadline</th>
                                                <th className="p-4 text-[10px] font-bold uppercase tracking-widest text-muted-foreground">Status</th>
                                                <th className="p-4" />
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y">
                                            {scholarships.map((s) => (
                                                <motion.tr variants={itemVariants} key={s.name} className="hover:bg-muted/30 transition-colors">
                                                    <td className="p-4 font-semibold text-sm max-w-[200px]">
                                                        <p className="truncate">{s.name}</p>
                                                    </td>
                                                    <td className="p-4">
                                                        <span className="font-bold text-emerald-600">{s.amount}</span>
                                                    </td>
                                                    <td className="p-4 text-xs text-muted-foreground">{s.deadline}</td>
                                                    <td className="p-4">
                                                        <Badge className={`text-[10px] ${s.statusColor}`}>{s.status}</Badge>
                                                    </td>
                                                    <td className="p-4">
                                                        <Button variant="ghost" size="icon" className="size-8 text-muted-foreground hover:text-primary">
                                                            <span className="material-symbols-outlined text-lg">more_vert</span>
                                                        </Button>
                                                    </td>
                                                </motion.tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </Card>

                            {/* AI Grant Finder */}
                            <Card className="bg-primary/5 border-primary/20">
                                <CardContent className="p-5">
                                    <h3 className="font-bold flex items-center gap-2 mb-3 text-primary">
                                        <span className="material-symbols-outlined">auto_awesome</span>
                                        Smart Grant Finder
                                    </h3>
                                    <p className="text-sm text-muted-foreground mb-4">Enter your field of study and GPA to discover matching grants and scholarships automatically.</p>
                                    <div className="flex gap-2">
                                        <Input placeholder="e.g. Computer Science, GPA 3.8" className="flex-1" />
                                        <Button className="bg-primary text-primary-foreground whitespace-nowrap">Search Grants</Button>
                                    </div>
                                </CardContent>
                            </Card>
                        </section>

                        {/* Budget Sidebar */}
                        <section className="lg:col-span-2 space-y-4">
                            <h2 className="text-xl font-bold flex items-center gap-2">
                                <span className="material-symbols-outlined text-primary">pie_chart</span>
                                Budget Overview
                            </h2>
                            <Card>
                                <CardContent className="p-6">
                                    <div className="text-center mb-6">
                                        <div className="text-4xl font-black text-primary">$800</div>
                                        <div className="text-sm text-muted-foreground font-medium">Spent of $1,250 monthly</div>
                                        <Progress value={64} className="h-3 mt-4" />
                                    </div>
                                    <div className="space-y-4">
                                        {budget.map((b) => (
                                            <div key={b.category}>
                                                <div className="flex justify-between text-xs font-bold mb-1">
                                                    <div className="flex items-center gap-2">
                                                        <span className={`size-2 rounded-full ${b.color}`} />
                                                        <span>{b.category}</span>
                                                    </div>
                                                    <span>${b.spent} / ${b.max}</span>
                                                </div>
                                                <div className="h-2 bg-muted rounded-full overflow-hidden">
                                                    <div
                                                        className={`${b.color} h-full rounded-full transition-all`}
                                                        style={{ width: `${Math.min((b.spent / b.max) * 100, 100)}%` }}
                                                    />
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                    <Button variant="outline" className="w-full mt-6 text-xs font-bold">
                                        <span className="material-symbols-outlined mr-2">add</span>
                                        Log Expense
                                    </Button>
                                </CardContent>
                            </Card>
                        </section>
                    </motion.div>
                </motion.div>
            </main>
        </AppShell>
    );
}
