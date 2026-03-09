import AppShell from "@/app/components/AppShell";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";

const notes = [
    {
        course: "CS101 - Lecture 12",
        title: "Data Structures: Linked Lists",
        preview: "Today we covered the fundamentals of singly linked lists and their implementation in memory...",
        time: "2h ago",
        tags: [{ label: "Exam Prep", color: "bg-blue-100 text-blue-600" }, { label: "Algorithm", color: "bg-emerald-100 text-emerald-600" }],
        active: true,
    },
    {
        course: "MATH202",
        title: "Linear Algebra: Eigenvectors",
        preview: "Visualizing transformations and finding the vectors that only scale during linear maps...",
        time: "Yesterday",
        tags: [{ label: "Lecture", color: "bg-muted text-muted-foreground" }],
        active: false,
    },
    {
        course: "PHYS103",
        title: "Thermodynamics: Second Law",
        preview: "Review of entropy and heat engine efficiency. Calculations for Carnot cycle...",
        time: "3 days ago",
        tags: [{ label: "Project", color: "bg-orange-100 text-orange-600" }],
        active: false,
    },
];

export default function NotesPage() {
    return (
        <AppShell>
            <div className="flex h-full overflow-hidden">
                {/* Left sidebar: Notes list */}
                <aside className="w-80 border-r bg-card flex flex-col">
                    <div className="p-4 border-b">
                        <div className="flex gap-2 overflow-x-auto pb-1 no-scrollbar">
                            {["All", "CS101", "MATH202", "PHYS103"].map((t, i) => (
                                <button key={t} className={`px-3 py-1.5 rounded-full text-xs font-bold whitespace-nowrap ${i === 0 ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground hover:bg-primary/10 hover:text-primary"}`}>
                                    {t}
                                </button>
                            ))}
                        </div>
                    </div>
                    <ScrollArea className="flex-1 px-2 py-2">
                        <div className="space-y-1">
                            {notes.map((n) => (
                                <div key={n.title} className={`p-4 rounded-xl cursor-pointer transition-all ${n.active ? "bg-card shadow-sm border border-primary/20" : "hover:bg-muted"}`}>
                                    <div className="flex justify-between items-start mb-1">
                                        <span className={`text-[10px] font-bold uppercase tracking-wider ${n.active ? "text-primary" : "text-muted-foreground"}`}>{n.course}</span>
                                        <span className="text-[10px] text-muted-foreground">{n.time}</span>
                                    </div>
                                    <h4 className="font-bold text-sm mb-1 line-clamp-1">{n.title}</h4>
                                    <p className="text-xs text-muted-foreground line-clamp-2 leading-relaxed">{n.preview}</p>
                                    <div className="mt-2 flex gap-1">
                                        {n.tags.map((tag) => (
                                            <span key={tag.label} className={`px-2 py-0.5 rounded text-[10px] font-medium ${tag.color}`}>{tag.label}</span>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </ScrollArea>
                </aside>

                {/* Main note editor */}
                <main className="flex-1 flex flex-col overflow-y-auto bg-card">
                    {/* Top bar */}
                    <header className="h-16 flex items-center justify-between px-8 border-b bg-card/80 backdrop-blur-md sticky top-0 z-10">
                        <div className="relative flex-1 max-w-xl">
                            <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">search</span>
                            <Input placeholder="Search notes, tags, or content..." className="pl-10 bg-muted border-none focus-visible:ring-primary/50" />
                        </div>
                        <div className="flex items-center gap-2 ml-4">
                            <Button variant="ghost" size="icon" className="relative">
                                <span className="material-symbols-outlined">notifications</span>
                                <span className="absolute top-2 right-2 w-2 h-2 bg-primary rounded-full" />
                            </Button>
                            <Button variant="ghost" size="icon">
                                <span className="material-symbols-outlined">settings</span>
                            </Button>
                        </div>
                    </header>

                    {/* Note content */}
                    <div className="max-w-3xl mx-auto w-full px-8 py-12 flex-1">
                        <div className="mb-8">
                            <div className="flex items-center gap-4 mb-4">
                                <Badge variant="secondary" className="bg-primary/10 text-primary font-bold uppercase tracking-widest text-xs">Computer Science 101</Badge>
                                <span className="text-muted-foreground text-sm">Last edited Oct 24, 2023</span>
                            </div>
                            <h1 className="text-4xl font-extrabold border-none outline-none w-full bg-transparent">Data Structures: Linked Lists</h1>
                            <div className="mt-6 flex items-center gap-3">
                                <span className="material-symbols-outlined text-muted-foreground text-lg">local_offer</span>
                                <div className="flex gap-2">
                                    {["Exam Prep", "Algorithm"].map((tag) => (
                                        <span key={tag} className="px-2 py-1 rounded-lg border text-xs text-muted-foreground flex items-center gap-1">
                                            {tag}
                                            <button className="material-symbols-outlined text-[14px]">close</button>
                                        </span>
                                    ))}
                                    <Button variant="ghost" size="icon" className="size-7 rounded-lg">
                                        <span className="material-symbols-outlined text-sm">add</span>
                                    </Button>
                                </div>
                            </div>
                        </div>

                        <div className="prose prose-slate max-w-none space-y-6 text-muted-foreground">
                            <h2 className="text-2xl font-bold text-foreground flex items-center gap-2">
                                <span className="text-primary opacity-50">#</span> Overview
                            </h2>
                            <p className="leading-relaxed">A linked list is a linear data structure, in which the elements are not stored at contiguous memory locations. The elements in a linked list are linked using pointers.</p>

                            <div className="my-8 rounded-xl overflow-hidden border bg-muted">
                                <div className="p-4 border-b flex items-center justify-between">
                                    <span className="text-xs font-mono text-muted-foreground">linked_list.py</span>
                                    <Button variant="ghost" size="icon" className="size-7">
                                        <span className="material-symbols-outlined text-sm text-muted-foreground">content_copy</span>
                                    </Button>
                                </div>
                                <pre className="p-6 text-sm font-mono overflow-x-auto text-primary">{`class Node:
    def __init__(self, data):
        self.data = data
        self.next = None

class LinkedList:
    def __init__(self):
        self.head = None`}</pre>
                            </div>

                            <h2 className="text-2xl font-bold text-foreground flex items-center gap-2">
                                <span className="text-primary opacity-50">#</span> Types of Linked Lists
                            </h2>
                            <ul className="list-disc list-inside space-y-2 marker:text-primary">
                                <li><strong className="text-foreground">Singly Linked List:</strong> Navigation is forward only.</li>
                                <li><strong className="text-foreground">Doubly Linked List:</strong> Navigation is both forward and backward.</li>
                                <li><strong className="text-foreground">Circular Linked List:</strong> Last element is linked to the first.</li>
                            </ul>

                            <div className="p-6 bg-primary/5 border-l-4 border-primary rounded-r-xl">
                                <p className="italic text-foreground font-medium">
                                    "Think of a linked list like a scavenger hunt where each clue leads you to the location of the next clue."
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Floating Toolbar */}
                    <div className="fixed bottom-10 left-1/2 -translate-x-1/2 flex items-center gap-2 bg-card shadow-2xl border rounded-2xl px-4 py-2 z-50" style={{ left: "calc(50% + 128px)" }}>
                        {["format_bold", "format_italic", "format_list_bulleted"].map((icon) => (
                            <Button key={icon} variant="ghost" size="icon" className="rounded-xl">
                                <span className="material-symbols-outlined">{icon}</span>
                            </Button>
                        ))}
                        <div className="w-px h-6 bg-border mx-1" />
                        {["image", "code"].map((icon) => (
                            <Button key={icon} variant="ghost" size="icon" className="rounded-xl">
                                <span className="material-symbols-outlined">{icon}</span>
                            </Button>
                        ))}
                        <div className="w-px h-6 bg-border mx-1" />
                        <Button className="px-4 ml-2 bg-primary text-primary-foreground text-sm font-bold">Save Changes</Button>
                    </div>
                </main>
            </div>
        </AppShell>
    );
}
