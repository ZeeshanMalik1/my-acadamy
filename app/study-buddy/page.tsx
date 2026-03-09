import AppShell from "@/app/components/AppShell";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const buddies = [
    { name: "Elena Gilbert", major: "Psychology Major", shared: 3, match: 89, tag: "Research Design", avatar: "https://i.pravatar.cc/150?img=5" },
    { name: "Marcus Wright", major: "History Senior", shared: 1, match: 85, tag: "Thesis Writing", avatar: "https://i.pravatar.cc/150?img=12" },
];

export default function StudyBuddyPage() {
    return (
        <AppShell>
            <main className="max-w-7xl mx-auto px-4 py-8 flex gap-8 flex-1 overflow-y-auto">
                {/* Left Sidebar */}
                <aside className="hidden lg:flex flex-col w-64 shrink-0 gap-6">
                    <Card>
                        <CardContent className="p-4">
                            <p className="text-xs font-bold text-muted-foreground uppercase tracking-widest mb-4">Main Menu</p>
                            <nav className="flex flex-col gap-1">
                                {[
                                    { icon: "person_search", label: "Find Buddy", active: true },
                                    { icon: "chat_bubble", label: "Messages" },
                                    { icon: "event", label: "Study Sessions" },
                                    { icon: "settings", label: "Preferences" },
                                ].map((item) => (
                                    <div key={item.label} className={`flex items-center gap-3 px-3 py-2 rounded-lg cursor-pointer ${item.active ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:bg-muted"}`}>
                                        <span className="material-symbols-outlined">{item.icon}</span>
                                        {item.label}
                                    </div>
                                ))}
                            </nav>
                        </CardContent>
                    </Card>
                    <Card className="bg-primary/5 border-primary/20">
                        <CardContent className="p-5">
                            <h3 className="font-bold text-primary flex items-center gap-2">
                                <span className="material-symbols-outlined text-[18px]">auto_awesome</span>
                                AI Insights
                            </h3>
                            <p className="text-sm text-muted-foreground mt-2">You&apos;re looking for a partner for <b>CS302: Algorithms</b>. We found 12 new matches today!</p>
                        </CardContent>
                    </Card>
                </aside>

                {/* Main Area */}
                <div className="flex-1 space-y-8">
                    {/* Header */}
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                        <div>
                            <h1 className="text-3xl font-extrabold">Buddy Discovery</h1>
                            <p className="text-muted-foreground mt-1">AI-powered suggestions based on your courses and strengths.</p>
                        </div>
                        <div className="flex gap-2">
                            <Button variant="outline"><span className="material-symbols-outlined mr-2">tune</span> Filter</Button>
                            <Button variant="outline" className="text-primary border-primary/30">
                                <span className="material-symbols-outlined mr-2" style={{ fontVariationSettings: "'FILL' 1" }}>favorite</span>
                                Matches (4)
                            </Button>
                        </div>
                    </div>

                    {/* Featured Card */}
                    <div className="relative flex justify-center items-center py-4">
                        <div className="absolute w-full max-w-md h-[520px] bg-muted rounded-2xl rotate-3 translate-y-4" />
                        <Card className="relative w-full max-w-md overflow-hidden shadow-xl">
                            <div className="relative h-[280px]">
                                <img
                                    src="https://i.pravatar.cc/400?img=11"
                                    alt="Liam Chen"
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute top-4 right-4 bg-card/90 backdrop-blur px-3 py-1.5 rounded-full flex items-center gap-1.5 shadow-lg border border-primary/20">
                                    <span className="material-symbols-outlined text-primary text-[20px]" style={{ fontVariationSettings: "'FILL' 1" }}>bolt</span>
                                    <span className="font-bold text-sm">94% Team Chemistry</span>
                                </div>
                                <div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-black/80 to-transparent text-white">
                                    <h3 className="text-2xl font-bold">Liam Chen, 21</h3>
                                    <p className="opacity-90">Data Science Junior · Stanford University</p>
                                </div>
                            </div>

                            <CardContent className="p-6 space-y-6">
                                <div className="grid grid-cols-2 gap-3">
                                    <div className="bg-emerald-50 p-3 rounded-xl border border-emerald-100">
                                        <div className="flex items-center gap-2 text-emerald-600 mb-1">
                                            <span className="material-symbols-outlined text-[18px]">add_circle</span>
                                            <span className="text-xs font-bold uppercase tracking-wider">His Strengths</span>
                                        </div>
                                        <p className="text-sm font-semibold text-foreground">Advanced Calculus, Python, Stats</p>
                                    </div>
                                    <div className="bg-amber-50 p-3 rounded-xl border border-amber-100">
                                        <div className="flex items-center gap-2 text-amber-600 mb-1">
                                            <span className="material-symbols-outlined text-[18px]">contact_support</span>
                                            <span className="text-xs font-bold uppercase tracking-wider">Seeking Help</span>
                                        </div>
                                        <p className="text-sm font-semibold text-foreground">Essay Writing, Philosophy 101</p>
                                    </div>
                                </div>

                                <div className="flex flex-wrap gap-2">
                                    <Badge variant="secondary">CS221: Machine Learning</Badge>
                                    <Badge variant="secondary">MATH150: Discrete Math</Badge>
                                </div>

                                <div className="flex items-center gap-4">
                                    <Button variant="secondary" className="flex-1 h-12">
                                        <span className="material-symbols-outlined mr-2">close</span>
                                        Pass
                                    </Button>
                                    <Button className="flex-[2] h-12 bg-primary text-primary-foreground shadow-lg shadow-primary/25 hover:scale-[1.02] transition-transform">
                                        <span className="material-symbols-outlined mr-2">chat</span>
                                        Quick Chat Invite
                                    </Button>
                                </div>
                            </CardContent>
                        </Card>
                    </div>

                    {/* Recommended Buddies */}
                    <section>
                        <div className="flex items-center justify-between mb-6">
                            <h3 className="text-xl font-bold">Recommended Buddies</h3>
                            <Button variant="ghost" size="sm" className="text-primary">View All</Button>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {buddies.map((b) => (
                                <Card key={b.name} className="flex items-center gap-4 p-4">
                                    <Avatar className="size-16 rounded-xl">
                                        <AvatarImage src={b.avatar} />
                                        <AvatarFallback className="rounded-xl bg-primary text-primary-foreground">{b.name[0]}</AvatarFallback>
                                    </Avatar>
                                    <div className="flex-1 min-w-0">
                                        <div className="flex justify-between items-start">
                                            <h4 className="font-bold truncate">{b.name}</h4>
                                            <span className="text-xs font-bold text-emerald-500">{b.match}% Match</span>
                                        </div>
                                        <p className="text-xs text-muted-foreground truncate mb-2">{b.major} · {b.shared} Shared Courses</p>
                                        <Badge variant="secondary" className="bg-primary/10 text-primary text-[10px] font-bold">{b.tag}</Badge>
                                    </div>
                                    <Button size="icon" className="bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground transition-colors">
                                        <span className="material-symbols-outlined">add</span>
                                    </Button>
                                </Card>
                            ))}
                        </div>
                    </section>
                </div>

                {/* Right Sidebar */}
                <aside className="hidden xl:flex flex-col w-72 shrink-0 gap-6">
                    <Card>
                        <CardContent className="p-6">
                            <h3 className="font-bold mb-4">Your Study Profile</h3>
                            <div className="space-y-4">
                                <div>
                                    <p className="text-xs font-bold uppercase text-muted-foreground mb-2">Strong In</p>
                                    <div className="flex flex-wrap gap-2">
                                        <Badge className="bg-emerald-50 text-emerald-600 border-emerald-100">Creative Writing</Badge>
                                        <Badge className="bg-emerald-50 text-emerald-600 border-emerald-100">History</Badge>
                                    </div>
                                </div>
                                <div>
                                    <p className="text-xs font-bold uppercase text-muted-foreground mb-2">Needs Work</p>
                                    <div className="flex flex-wrap gap-2">
                                        <Badge className="bg-amber-50 text-amber-600 border-amber-100">Calculus II</Badge>
                                        <Badge className="bg-amber-50 text-amber-600 border-amber-100">Linear Algebra</Badge>
                                    </div>
                                </div>
                                <Button variant="outline" className="w-full text-xs font-bold">Update Strengths</Button>
                            </div>
                        </CardContent>
                    </Card>
                    <Card className="bg-gradient-to-br from-primary to-orange-600 text-primary-foreground shadow-xl shadow-primary/20">
                        <CardContent className="p-6">
                            <h4 className="font-bold text-lg">Elite Match Pass</h4>
                            <p className="text-sm opacity-90 mt-2">Unlock unlimited Quick Chats and see who liked your profile first.</p>
                            <Button className="w-full mt-4 bg-white text-primary hover:bg-white/90 font-bold">Upgrade Now</Button>
                        </CardContent>
                    </Card>
                </aside>
            </main>
        </AppShell>
    );
}
