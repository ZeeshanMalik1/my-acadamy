import AppShell from "@/app/components/AppShell";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const communities = [
    { name: "Open Source Warriors", members: 142, tag: "Tech", color: "bg-blue-600" },
    { name: "The Bookworm Collective", members: 89, tag: "Literature", color: "bg-purple-600" },
    { name: "Data Science Hub", members: 234, tag: "Analytics", color: "bg-primary" },
    { name: "Mindfulness & Wellness", members: 71, tag: "Wellbeing", color: "bg-emerald-600" },
    { name: "Entrepreneurship Society", members: 115, tag: "Business", color: "bg-amber-500" },
    { name: "Photography Guild", members: 58, tag: "Creative", color: "bg-rose-500" },
];

const skillExchanges = [
    { from: { name: "Marcus L.", img: "https://i.pravatar.cc/150?img=4" }, offering: "🎸 Guitar Lessons", seeking: "Spanish Conversation Practice" },
    { from: { name: "Priya N.", img: "https://i.pravatar.cc/150?img=6" }, offering: "💻 Python Basics", seeking: "Help with Graphic Design" },
];

const events = [
    { time: "Fri · Oct 27", title: "HackAthon Fall 2023", location: "Innovation Lab A", badge: "Tech", badgeColor: "bg-blue-100 text-blue-700" },
    { time: "Sat · Oct 28", title: "Campus Open Mic Night", location: "Student Lounge", badge: "Creative", badgeColor: "bg-purple-100 text-purple-700" },
    { time: "Mon · Oct 30", title: "CS Career Fair 2023", location: "Main Gymnasium", badge: "Career", badgeColor: "bg-primary/10 text-primary" },
];

export default function CommunitiesPage() {
    return (
        <AppShell>
            <main className="flex-1 overflow-y-auto p-8">
                <div className="max-w-6xl mx-auto space-y-10">
                    <div className="flex justify-between items-end">
                        <div>
                            <h1 className="text-3xl font-black tracking-tight">Hobbies & Communities</h1>
                            <p className="text-muted-foreground mt-1">Connect over shared interests and build lasting relationships.</p>
                        </div>
                        <Button className="bg-primary text-primary-foreground">
                            <span className="material-symbols-outlined mr-2">add</span>
                            Create Community
                        </Button>
                    </div>

                    {/* Community Cards */}
                    <section>
                        <div className="flex items-center justify-between mb-4">
                            <h2 className="text-xl font-bold">Your Communities</h2>
                            <div className="flex items-center gap-2">
                                <Badge variant="secondary" className="text-[10px] px-3">Explore All</Badge>
                            </div>
                        </div>
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                            {communities.map((c) => (
                                <Card key={c.name} className="cursor-pointer hover:shadow-md transition-shadow group">
                                    <CardContent className="p-5">
                                        <div className={`${c.color} h-20 rounded-lg mb-4 flex items-center justify-center opacity-80 group-hover:opacity-100 transition-opacity`}>
                                            <span className="material-symbols-outlined text-4xl text-white">groups</span>
                                        </div>
                                        <h3 className="font-bold">{c.name}</h3>
                                        <div className="flex justify-between items-center mt-2">
                                            <span className="text-xs text-muted-foreground">{c.members} Members</span>
                                            <Badge variant="secondary" className="text-[10px]">{c.tag}</Badge>
                                        </div>
                                        <Button variant="outline" className="w-full mt-4 text-xs font-bold h-8">Join Community</Button>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </section>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {/* Skill Exchange */}
                        <section>
                            <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
                                <span className="material-symbols-outlined text-primary">swap_horiz</span>
                                Skills Exchange Board
                            </h2>
                            <div className="space-y-3">
                                {skillExchanges.map((s) => (
                                    <Card key={s.from.name}>
                                        <CardContent className="p-5">
                                            <div className="flex items-center gap-3 mb-4">
                                                <Avatar className="size-11">
                                                    <AvatarImage src={s.from.img} />
                                                    <AvatarFallback>{s.from.name[0]}</AvatarFallback>
                                                </Avatar>
                                                <div>
                                                    <p className="font-bold text-sm">{s.from.name}</p>
                                                    <p className="text-xs text-muted-foreground">Active member</p>
                                                </div>
                                            </div>
                                            <div className="grid grid-cols-2 gap-3">
                                                <div className="bg-emerald-50 p-3 rounded-lg border border-emerald-100">
                                                    <p className="text-[10px] font-bold uppercase text-emerald-600 mb-1">Offering</p>
                                                    <p className="text-xs font-semibold">{s.offering}</p>
                                                </div>
                                                <div className="bg-blue-50 p-3 rounded-lg border border-blue-100">
                                                    <p className="text-[10px] font-bold uppercase text-blue-600 mb-1">Seeking</p>
                                                    <p className="text-xs font-semibold">{s.seeking}</p>
                                                </div>
                                            </div>
                                            <Button className="w-full mt-4 bg-primary text-primary-foreground text-xs">Connect</Button>
                                        </CardContent>
                                    </Card>
                                ))}
                                <Button variant="outline" className="w-full border-dashed text-muted-foreground hover:text-primary hover:border-primary">
                                    <span className="material-symbols-outlined mr-2">add</span>Post a Skill
                                </Button>
                            </div>
                        </section>

                        {/* Campus Events */}
                        <section>
                            <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
                                <span className="material-symbols-outlined text-primary">event</span>
                                Campus Events
                            </h2>
                            <div className="space-y-3">
                                {events.map((e) => (
                                    <Card key={e.title} className="relative overflow-hidden group hover:border-primary/50 transition-colors cursor-pointer">
                                        <div className="absolute left-0 top-0 bottom-0 w-1 bg-primary" />
                                        <CardContent className="pl-5 p-4 flex justify-between items-start">
                                            <div>
                                                <p className="text-[10px] font-bold uppercase text-muted-foreground">{e.time}</p>
                                                <h3 className="font-bold mt-0.5">{e.title}</h3>
                                                <p className="text-xs text-muted-foreground mt-1 flex items-center gap-1">
                                                    <span className="material-symbols-outlined text-xs">place</span>
                                                    {e.location}
                                                </p>
                                            </div>
                                            <Badge className={`text-[10px] ${e.badgeColor}`}>{e.badge}</Badge>
                                        </CardContent>
                                    </Card>
                                ))}
                                <Button className="w-full bg-primary text-primary-foreground mt-2">
                                    <span className="material-symbols-outlined mr-2">add_circle</span>
                                    Add Event to Calendar
                                </Button>
                            </div>
                        </section>
                    </div>
                </div>
            </main>
        </AppShell>
    );
}
