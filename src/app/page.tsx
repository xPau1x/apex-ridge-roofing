import Link from "next/link";
import {
    ArrowUpRight,
    Code2,
    ExternalLink,
    Mail,
    Sparkles,
    Terminal,
    Briefcase,
    Building2,
    Calendar,
} from "lucide-react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";

const EXPERIENCES = [
    {
        role: "Senior Full-Stack Engineer",
        company: "Edge Computing Labs",
        period: "2024 — Present",
        description:
            "Leading the development of high-throughput edge routing interfaces and reactive serverless pipelines. Reduced client bundle sizes by 35% through framework optimization.",
        skills: [
            "SvelteKit",
            "Cloudflare Workers",
            "TypeScript",
            "Tailwind CSS",
        ],
    },
    {
        role: "Frontend Engineer",
        company: "Pulse Systems",
        period: "2022 — 2024",
        description:
            "Architected real-time dashboard interfaces consuming websocket telemetry feeds. Built reusable design system components using Radix primitives and Tailwind.",
        skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Zustand"],
    },
    {
        role: "Web Developer",
        company: "Apex Digital Studio",
        period: "2020 — 2022",
        description:
            "Delivered custom web applications and high-converting marketing sites for client accounts. Handled database design, CMS integrations, and end-to-end deployment workflows.",
        skills: ["TypeScript", "Node.js", "PostgreSQL", "REST APIs"],
    },
];

const SKILLS = [
    "TypeScript",
    "React",
    "Svelte",
    "Next.js",
    "SvelteKit",
    "Tailwind CSS",
    "Node.js",
    "Vercel Functions",
    "Cloudflare Workers",
    "SQLite",
    "PostgreSQL",
    "Drizzle ORM",
];

const PROJECTS = [
    {
        title: "EdgeFlow Studio",
        description:
            "A high-performance visual workflow builder for Cloudflare Workers and serverless pipelines.",
        tags: ["Next.js", "TypeScript", "Tailwind CSS", "Cloudflare"],
        link: "https://github.com",
        demo: "https://example.com",
    },
    {
        title: "PulseMetrics",
        description:
            "Real-time analytics engine processing lightweight telemetry with sub-millisecond edge latency.",
        tags: ["SvelteKit", "ClickHouse", "Tailwind CSS", "Vite"],
        link: "https://github.com",
        demo: "https://example.com",
    },
    {
        title: "DevDocs AI",
        description:
            "Local-first document indexing tool allowing natural language queries over codebase docs.",
        tags: ["React", "Base UI", "Vector DB", "Tailwind CSS"],
        link: "https://github.com",
        demo: "https://example.com",
    },
];

export default function PortfolioPage() {
    return (
        <div className="min-h-screen bg-background text-foreground selection:bg-primary selection:text-primary-foreground">
            {/* Background Radial Glow */}
            <div className="fixed inset-0 -z-10 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.15),rgba(255,255,255,0))]" />

            <div className="mx-auto max-w-4xl px-6 py-16 md:py-28 space-y-28 md:space-y-36">
                {/* Header / Hero Section */}
                <section className="flex flex-col-reverse items-start justify-between gap-10 md:flex-row md:items-center">
                    <div className="space-y-6 max-w-2xl">
                        {/* Status Badge */}
                        <div className="inline-flex items-center gap-2.5 rounded-full border border-border bg-muted/50 px-4 py-2 text-sm font-medium backdrop-blur-xs">
                            <span className="relative flex size-2.5">
                                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                                <span className="relative inline-flex size-2.5 rounded-full bg-emerald-500" />
                            </span>
                            Available for full-time & contract roles
                        </div>

                        <h1 className="text-5xl font-bold tracking-tight sm:text-6xl leading-[0.95] w-[14ch]">
                            Building scalable web applications & dev tools.
                        </h1>

                        <p className="text-muted-foreground text-xl leading-[1.5]">
                            Full-stack software engineer specializing in
                            high-performance frontends, modern reactive
                            architecture, and edge computing systems.
                        </p>

                        {/* Action Buttons */}
                        <div className="flex flex-wrap items-center gap-4 pt-4">
                            <Button
                                render={<a href="#contact" />}
                                variant="default"
                                size="lg"
                                className="text-base px-6 py-5"
                            >
                                <Mail className="size-5" /> Get in touch
                            </Button>

                            <Button
                                render={
                                    <a
                                        href="https://github.com"
                                        target="_blank"
                                        rel="noreferrer"
                                    />
                                }
                                variant="outline"
                                size="lg"
                                className="text-base px-6 py-5"
                            >
                                <Mail className="size-5" /> GitHub
                            </Button>

                            <Button
                                render={
                                    <a
                                        href="https://linkedin.com"
                                        target="_blank"
                                        rel="noreferrer"
                                    />
                                }
                                variant="ghost"
                                size="icon"
                                className="size-11"
                            >
                                <Mail className="size-5" />
                            </Button>
                        </div>
                    </div>

                    <Avatar className="size-32 md:size-40 border-2 border-border shadow-sm shrink-0">
                        <AvatarImage
                            src="https://github.com/shadcn.png"
                            alt="Developer Avatar"
                        />
                        <AvatarFallback className="text-2xl font-bold">
                            DEV
                        </AvatarFallback>
                    </Avatar>
                </section>

                {/* Skills & Tech Stack */}
                <section className="space-y-6">
                    <h2 className="text-2xl font-semibold tracking-tight flex items-center gap-2.5">
                        <Terminal className="size-6 text-primary" /> Tech Stack
                        & Tools
                    </h2>
                    <div className="flex flex-wrap gap-3">
                        {SKILLS.map((skill) => (
                            <Badge
                                key={skill}
                                variant="secondary"
                                className="px-4 py-2 text-sm font-medium"
                            >
                                {skill}
                            </Badge>
                        ))}
                    </div>
                </section>

                {/* Featured Projects Section */}
                <section className="space-y-8">
                    <div className="flex items-center justify-between">
                        <h2 className="text-2xl font-semibold tracking-tight flex items-center gap-2.5">
                            <Code2 className="size-6 text-primary" /> Featured
                            Projects
                        </h2>
                        <Link
                            href="https://github.com"
                            target="_blank"
                            className="text-sm font-medium text-muted-foreground hover:text-foreground inline-flex items-center gap-1.5 transition-colors"
                        >
                            View all on GitHub{" "}
                            <ArrowUpRight className="size-4" />
                        </Link>
                    </div>

                    <div className="grid gap-8 sm:grid-cols-2">
                        {PROJECTS.map((project) => (
                            <Card
                                key={project.title}
                                className="group relative flex flex-col justify-between border-border/60 bg-card/50 backdrop-blur-xs p-2 transition-all hover:border-border hover:shadow-md"
                            >
                                <CardHeader className="space-y-3 p-6">
                                    <CardTitle className="text-xl flex items-center justify-between">
                                        <span>{project.title}</span>
                                        <a
                                            href={project.demo}
                                            target="_blank"
                                            rel="noreferrer"
                                            className="text-muted-foreground hover:text-foreground transition-colors"
                                        >
                                            <ExternalLink className="size-5" />
                                        </a>
                                    </CardTitle>
                                    <CardDescription className="text-base leading-relaxed">
                                        {project.description}
                                    </CardDescription>
                                </CardHeader>

                                <CardContent className="px-6 pb-6 pt-0">
                                    <div className="flex flex-wrap gap-2">
                                        {project.tags.map((tag) => (
                                            <Badge
                                                key={tag}
                                                variant="outline"
                                                className="text-xs px-3 py-1"
                                            >
                                                {tag}
                                            </Badge>
                                        ))}
                                    </div>
                                </CardContent>

                                <CardFooter className="px-6 pb-6 pt-0 text-sm text-muted-foreground">
                                    <a
                                        href={project.link}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="inline-flex items-center gap-1.5 font-medium hover:underline"
                                    >
                                        Source Code{" "}
                                        <ArrowUpRight className="size-4" />
                                    </a>
                                </CardFooter>
                            </Card>
                        ))}
                    </div>
                </section>

                <ExperienceSection />

                {/* Contact Section */}
                <section
                    id="contact"
                    className="space-y-8 pt-8 border-t border-border"
                >
                    <div className="rounded-3xl border border-border bg-muted/30 p-10 md:p-16 text-center space-y-6">
                        <div className="inline-flex size-14 items-center justify-center rounded-full bg-primary/10 text-primary">
                            <Sparkles className="size-7" />
                        </div>
                        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                            Let&apos;s work together
                        </h2>
                        <p className="text-muted-foreground max-w-xl mx-auto text-lg leading-relaxed">
                            Have a project in mind, need technical advice, or
                            interested in collaborating? Drop me a message
                            anytime.
                        </p>
                        <div className="pt-4">
                            <Button
                                render={<a href="mailto:dev@example.com" />}
                                size="lg"
                                className="text-base px-8 py-6"
                            >
                                <Mail className="size-5" /> Send an Email
                            </Button>
                        </div>
                    </div>
                </section>

                {/* Footer */}
                <footer className="flex flex-col items-center justify-between gap-6 border-t border-border/40 pt-12 text-sm text-muted-foreground sm:flex-row">
                    <p>
                        © {new Date().getFullYear()} Alex Dev. Built with
                        Next.js & Tailwind CSS.
                    </p>
                    <div className="flex items-center gap-6">
                        <a
                            href="https://github.com"
                            className="hover:text-foreground transition-colors"
                        >
                            GitHub
                        </a>
                        <a
                            href="https://twitter.com"
                            className="hover:text-foreground transition-colors"
                        >
                            Twitter
                        </a>
                        <a
                            href="https://linkedin.com"
                            className="hover:text-foreground transition-colors"
                        >
                            LinkedIn
                        </a>
                    </div>
                </footer>
            </div>
        </div>
    );
}

export function ExperienceSection() {
    return (
        <section className="space-y-8">
            <h2 className="text-2xl font-semibold tracking-tight flex items-center gap-2.5">
                <Briefcase className="size-6 text-primary" /> Work Experience
            </h2>

            {/* Timeline Wrapper */}
            <div className="relative border-l-2 border-border/70 ml-3 pl-6 md:ml-4 md:pl-8 space-y-10">
                {EXPERIENCES.map((exp) => (
                    <div
                        key={`${exp.company}-${exp.role}`}
                        className="relative group"
                    >
                        {/* Timeline Node Dot */}
                        <div className="absolute -left-[31px] md:-left-[39px] top-1.5 size-3.5 rounded-full border-2 border-background bg-muted-foreground/40 group-hover:bg-primary group-hover:scale-125 transition-all" />

                        <div className="space-y-3">
                            {/* Role & Period */}
                            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 sm:gap-4">
                                <h3 className="text-xl font-bold tracking-tight text-foreground">
                                    {exp.role}
                                </h3>
                                <div className="inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground shrink-0">
                                    <Calendar className="size-4" />
                                    <span>{exp.period}</span>
                                </div>
                            </div>

                            {/* Company Name */}
                            <div className="inline-flex items-center gap-1.5 text-base font-medium text-muted-foreground">
                                <Building2 className="size-4" />
                                <span>{exp.company}</span>
                            </div>

                            {/* Role Description */}
                            <p className="text-muted-foreground text-base leading-relaxed max-w-2xl">
                                {exp.description}
                            </p>

                            {/* Skill Badges */}
                            <div className="flex flex-wrap gap-2 pt-1">
                                {exp.skills.map((skill) => (
                                    <Badge
                                        key={skill}
                                        variant="outline"
                                        className="text-xs px-3 py-1 bg-background/50"
                                    >
                                        {skill}
                                    </Badge>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
