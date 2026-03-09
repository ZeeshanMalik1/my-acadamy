import AppShell from "@/app/components/AppShell";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

const folders = [
    { name: "Algorithms CS101", desc: "CS Foundation Course", files: 24, updated: "2d ago", color: "bg-blue-100 text-blue-600", icon: "folder" },
    { name: "Statistics 202", desc: "Data Science Core", files: 18, updated: "5h ago", color: "bg-orange-100 text-orange-600", icon: "folder" },
    { name: "Machine Learning", desc: "Advanced Elective", files: 42, updated: "Active", color: "bg-primary/20 text-primary", icon: "folder_open", active: true },
    { name: "UI/UX Design", desc: "Interaction Lab", files: 12, updated: "1w ago", color: "bg-purple-100 text-purple-600", icon: "folder" },
];

const files = [
    { name: "Lecture_01_Intro_to_NN.pdf", date: "Oct 12, 2023", size: "4.2 MB", icon: "picture_as_pdf", iconColor: "text-red-500" },
    { name: "Neural_Network_Architectures.pptx", date: "Oct 14, 2023", size: "12.8 MB", icon: "slideshow", iconColor: "text-blue-500" },
    { name: "Lab_Assignment_2_Pytorch.zip", date: "Oct 16, 2023", size: "256 KB", icon: "code", iconColor: "text-amber-500" },
    { name: "Midterm_Reading_List.txt", date: "Yesterday", size: "12 KB", icon: "description", iconColor: "text-emerald-500" },
];

export default function ResourcesPage() {
    return (
        <AppShell>
            <main className="flex-1 flex flex-col overflow-hidden">
                <header className="p-8 pb-0">
                    <div className="flex justify-between items-end mb-6">
                        <div>
                            <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                                <span>Resources</span>
                                <span className="material-symbols-outlined text-xs">chevron_right</span>
                                <span className="font-medium text-foreground">Course Folders</span>
                            </div>
                            <h1 className="text-4xl font-black tracking-tight">Resource Library</h1>
                            <p className="text-muted-foreground mt-1">Central repository for all your academic materials.</p>
                        </div>
                        <div className="flex gap-3">
                            <Button variant="outline">
                                <span className="material-symbols-outlined text-lg mr-2">filter_list</span>
                                Filter
                            </Button>
                            <Button className="bg-primary text-primary-foreground shadow-lg shadow-primary/20">
                                <span className="material-symbols-outlined text-lg mr-2">upload</span>
                                Upload New
                            </Button>
                        </div>
                    </div>

                    <Tabs defaultValue="all" className="border-b">
                        <TabsList className="bg-transparent h-auto p-0 gap-8">
                            {["All Files", "Recent", "Starred", "Archived"].map((t, i) => (
                                <TabsTrigger
                                    key={t}
                                    value={i === 0 ? "all" : t.toLowerCase()}
                                    className="pb-4 rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:text-primary bg-transparent text-sm font-bold data-[state=active]:shadow-none"
                                >
                                    {t}
                                </TabsTrigger>
                            ))}
                        </TabsList>
                    </Tabs>
                </header>

                <div className="flex-1 overflow-y-auto p-8 pt-6 space-y-8">
                    {/* Course Folders */}
                    <section>
                        <div className="flex justify-between items-center mb-4">
                            <h3 className="text-xl font-bold">Course Folders</h3>
                            <Button variant="ghost" size="sm" className="text-primary">
                                View All <span className="material-symbols-outlined text-sm ml-1">arrow_forward</span>
                            </Button>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {folders.map((f) => (
                                <Card key={f.name} className={`cursor-pointer hover:border-primary/50 transition-all ${f.active ? "border-primary bg-primary/5" : ""}`}>
                                    <CardContent className="p-5">
                                        <div className="flex justify-between items-start mb-4">
                                            <div className={`size-12 rounded-xl flex items-center justify-center ${f.color}`}>
                                                <span className="material-symbols-outlined text-3xl">{f.icon}</span>
                                            </div>
                                            <Button variant="ghost" size="icon" className="size-8">
                                                <span className={`material-symbols-outlined ${f.active ? "text-primary" : "text-muted-foreground"}`}>{f.active ? "star" : "more_vert"}</span>
                                            </Button>
                                        </div>
                                        <h4 className="font-bold text-lg mb-1">{f.name}</h4>
                                        <p className="text-xs text-muted-foreground mb-4">{f.desc}</p>
                                        <div className={`flex justify-between text-[11px] font-medium uppercase tracking-wider border-t pt-4 ${f.active ? "border-primary/10 text-primary" : "border-border text-muted-foreground"}`}>
                                            <span>{f.files} Files</span>
                                            <span>{f.updated}</span>
                                        </div>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </section>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        {/* File List */}
                        <div className="lg:col-span-2">
                            <div className="flex items-center justify-between mb-4">
                                <h3 className="text-xl font-bold flex items-center gap-2">
                                    <span className="material-symbols-outlined text-primary">folder_open</span>
                                    Contents of Machine Learning
                                </h3>
                                <div className="flex items-center gap-1 text-sm text-muted-foreground">
                                    <span>Sorted by Name</span>
                                    <span className="material-symbols-outlined text-sm">expand_more</span>
                                </div>
                            </div>
                            <Card>
                                <div className="overflow-hidden">
                                    <table className="w-full text-left">
                                        <thead>
                                            <tr className="border-b bg-muted/30">
                                                <th className="px-4 py-3 text-xs font-bold uppercase tracking-wider text-muted-foreground">Name</th>
                                                <th className="px-4 py-3 text-xs font-bold uppercase tracking-wider text-muted-foreground">Size</th>
                                                <th className="px-4 py-3 text-xs font-bold uppercase tracking-wider text-muted-foreground text-right">Actions</th>
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-border/50">
                                            {files.map((f) => (
                                                <tr key={f.name} className="hover:bg-muted/40 transition-colors">
                                                    <td className="px-4 py-4">
                                                        <div className="flex items-center gap-3">
                                                            <span className={`material-symbols-outlined ${f.iconColor}`}>{f.icon}</span>
                                                            <div>
                                                                <p className="text-sm font-bold">{f.name}</p>
                                                                <p className="text-[10px] text-muted-foreground">Added {f.date}</p>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td className="px-4 py-4 text-xs text-muted-foreground font-medium">{f.size}</td>
                                                    <td className="px-4 py-4">
                                                        <div className="flex items-center justify-end gap-1">
                                                            <Button variant="ghost" size="icon" className="size-8 text-muted-foreground">
                                                                <span className="material-symbols-outlined text-lg">visibility</span>
                                                            </Button>
                                                            <Button variant="ghost" size="icon" className="size-8 text-primary">
                                                                <span className="material-symbols-outlined text-lg">download</span>
                                                            </Button>
                                                        </div>
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                    <div className="p-4 bg-muted/20 flex justify-center border-t">
                                        <Button variant="ghost" size="sm" className="text-xs text-muted-foreground hover:text-primary">Load 38 more files</Button>
                                    </div>
                                </div>
                            </Card>
                        </div>

                        {/* Widgets */}
                        <div className="space-y-6">
                            {/* Upload */}
                            <div className="border-2 border-dashed border-primary/30 rounded-xl p-8 text-center hover:bg-primary/5 cursor-pointer group transition-colors">
                                <div className="mb-4 inline-flex items-center justify-center size-16 rounded-full bg-primary/10 text-primary group-hover:scale-110 transition-transform">
                                    <span className="material-symbols-outlined text-4xl">cloud_upload</span>
                                </div>
                                <h4 className="font-bold mb-2">Upload Files</h4>
                                <p className="text-sm text-muted-foreground mb-6 px-4">Drag and drop your papers, slides or assignments here.</p>
                                <Button className="w-full bg-primary text-primary-foreground">Select Files</Button>
                                <p className="text-[10px] text-muted-foreground mt-4">PDF, DOCX, PPTX, ZIP · Max 100MB</p>
                            </div>

                            {/* Storage */}
                            <Card>
                                <CardHeader className="pb-2">
                                    <CardTitle className="text-sm">Storage Used</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <div className="flex items-end gap-2 mb-2">
                                        <span className="text-2xl font-black">2.4 GB</span>
                                        <span className="text-xs text-muted-foreground mb-1">of 10 GB</span>
                                    </div>
                                    <Progress value={24} className="h-2 mb-4" />
                                    <div className="space-y-2">
                                        {[
                                            { label: "Documents", size: "1.1 GB", color: "bg-red-500" },
                                            { label: "Presentations", size: "0.8 GB", color: "bg-blue-500" },
                                            { label: "Media", size: "0.5 GB", color: "bg-amber-500" },
                                        ].map((s) => (
                                            <div key={s.label} className="flex justify-between items-center text-xs">
                                                <div className="flex items-center gap-2">
                                                    <span className={`size-2 rounded-full ${s.color}`} />
                                                    <span className="text-muted-foreground">{s.label}</span>
                                                </div>
                                                <span className="font-bold">{s.size}</span>
                                            </div>
                                        ))}
                                    </div>
                                    <Button variant="outline" className="w-full mt-4 text-xs font-bold">Upgrade Storage</Button>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </div>
            </main>
        </AppShell>
    );
}
