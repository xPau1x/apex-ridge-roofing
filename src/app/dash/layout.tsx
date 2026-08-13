"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
    LayoutDashboard,
    Users,
    Calculator,
    Settings,
    ChevronLeft,
    ChevronRight,
    Bell,
    Search,
    User,
    LogOut,
    Menu,
    X,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Geist, Geist_Mono } from "next/font/google";
import "@/styles/globals.css";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export default function DashLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const [collapsed, setCollapsed] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);
    const pathname = usePathname();

    const navItems = [
        { name: "Overview", href: "/dash", icon: LayoutDashboard },
        { name: "Leads", href: "/dash/leads", icon: Users },
        { name: "Estimator", href: "/dash/estimator", icon: Calculator },
        { name: "Settings", href: "/dash/settings", icon: Settings },
    ];

    return (
        <html
            lang="en"
            className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
        >
            <body className="min-h-full flex flex-col bg-background text-foreground">
                <div className="min-h-screen bg-secondary/30 text-foreground flex flex-col font-sans">
                    {/* Top Navigation / Mobile header */}
                    <header className="lg:hidden bg-card border-b border-border px-6 py-4 flex items-center justify-between sticky top-0 z-40">
                        <div className="flex items-center gap-2">
                            <div className="bg-primary text-accent p-1.5 rounded-md font-bold text-sm">
                                /\
                            </div>
                            <span className="font-extrabold text-sm tracking-tight text-primary">
                                APEX DASH
                            </span>
                        </div>
                        <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => setMobileOpen(!mobileOpen)}
                            className="text-muted-foreground hover:text-primary"
                        >
                            <Menu className="size-6" />
                        </Button>
                    </header>

                    <div className="flex flex-1 relative">
                        {/* Desktop Side Navigation Bar */}
                        <aside
                            className={`hidden lg:flex flex-col bg-card border-r border-border transition-all duration-300 ease-in-out shrink-0 sticky top-0 h-screen ${
                                collapsed ? "w-16" : "w-64"
                            }`}
                        >
                            {/* Brand Banner */}
                            <div className="p-4 flex items-center justify-between border-b border-border h-16">
                                {!collapsed && (
                                    <Link
                                        href="/"
                                        className="flex items-center gap-2 overflow-hidden whitespace-nowrap animate-in fade-in duration-300"
                                    >
                                        <div className="bg-primary text-accent p-2 rounded-lg font-bold flex items-center justify-center shrink-0">
                                            <span className="text-sm tracking-tighter">
                                                /\
                                            </span>
                                        </div>
                                        <div className="flex flex-col">
                                            <span className="font-extrabold text-sm tracking-tight text-primary leading-none">
                                                APEX RIDGE
                                            </span>
                                            <span className="text-[9px] tracking-widest text-muted-foreground uppercase font-bold">
                                                CRM System
                                            </span>
                                        </div>
                                    </Link>
                                )}
                                {collapsed && (
                                    <div className="bg-primary text-accent p-2 rounded-lg font-bold flex items-center justify-center mx-auto shrink-0">
                                        <span className="text-sm tracking-tighter">
                                            /\
                                        </span>
                                    </div>
                                )}
                            </div>

                            {/* Navigation list */}
                            <nav className="flex-1 p-3 space-y-1">
                                {navItems.map((item) => {
                                    const Icon = item.icon;
                                    const isActive =
                                        pathname === item.href ||
                                        (item.href !== "/dash" &&
                                            pathname.startsWith(item.href));

                                    return (
                                        <Link
                                            key={item.name}
                                            href={item.href}
                                            className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-semibold transition-all duration-200 group relative ${
                                                isActive
                                                    ? "bg-primary text-primary-foreground"
                                                    : "text-muted-foreground hover:text-primary hover:bg-secondary/50"
                                            }`}
                                        >
                                            <Icon
                                                className={`size-5 shrink-0 ${isActive ? "text-accent" : "text-muted-foreground group-hover:text-primary"}`}
                                            />
                                            {!collapsed && (
                                                <span className="animate-in fade-in duration-200">
                                                    {item.name}
                                                </span>
                                            )}

                                            {/* Tooltip for collapsed view */}
                                            {collapsed && (
                                                <div className="absolute left-full ml-2 px-2 py-1 bg-primary text-primary-foreground text-xs rounded-md opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap z-50 shadow-md">
                                                    {item.name}
                                                </div>
                                            )}
                                        </Link>
                                    );
                                })}
                            </nav>

                            {/* Footer / Toggle Action */}
                            <div className="p-3 border-t border-border space-y-1">
                                <Link
                                    href="/"
                                    className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-semibold text-muted-foreground hover:text-destructive hover:bg-destructive/5 transition-colors group relative"
                                >
                                    <LogOut className="size-5 shrink-0" />
                                    {!collapsed && (
                                        <span className="animate-in fade-in duration-200">
                                            Exit System
                                        </span>
                                    )}
                                    {collapsed && (
                                        <div className="absolute left-full ml-2 px-2 py-1 bg-destructive text-white text-xs rounded-md opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap z-50 shadow-md">
                                            Exit System
                                        </div>
                                    )}
                                </Link>

                                <button
                                    onClick={() => setCollapsed(!collapsed)}
                                    className="w-full flex items-center justify-center p-2 rounded-lg border border-border bg-secondary/30 hover:bg-secondary hover:text-primary text-muted-foreground transition-colors"
                                >
                                    {collapsed ? (
                                        <ChevronRight className="size-4" />
                                    ) : (
                                        <ChevronLeft className="size-4" />
                                    )}
                                </button>
                            </div>
                        </aside>

                        {/* Mobile Drawer (Overlay backdrop) */}
                        {mobileOpen && (
                            <div className="lg:hidden fixed inset-0 z-50 flex">
                                <div
                                    className="fixed inset-0 bg-primary/20 backdrop-blur-xs"
                                    onClick={() => setMobileOpen(false)}
                                />
                                <aside className="relative w-64 bg-card border-r border-border p-4 flex flex-col h-full z-10 animate-in slide-in-from-left">
                                    <div className="flex items-center justify-between border-b border-border pb-4 mb-4">
                                        <div className="flex items-center gap-2">
                                            <div className="bg-primary text-accent p-2 rounded-lg font-bold flex items-center justify-center">
                                                /\
                                            </div>
                                            <span className="font-extrabold text-sm tracking-tight text-primary">
                                                APEX RIDGE
                                            </span>
                                        </div>
                                        <Button
                                            variant="ghost"
                                            size="icon"
                                            onClick={() => setMobileOpen(false)}
                                        >
                                            <X className="size-5" />
                                        </Button>
                                    </div>
                                    <nav className="flex-1 space-y-1">
                                        {navItems.map((item) => {
                                            const Icon = item.icon;
                                            const isActive =
                                                pathname === item.href ||
                                                (item.href !== "/dash" &&
                                                    pathname.startsWith(item.href));
                                            return (
                                                <Link
                                                    key={item.name}
                                                    href={item.href}
                                                    onClick={() => setMobileOpen(false)}
                                                    className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-semibold transition-colors ${
                                                        isActive
                                                            ? "bg-primary text-primary-foreground"
                                                            : "text-muted-foreground hover:bg-secondary"
                                                    }`}
                                                >
                                                    <Icon
                                                        className={`size-5 ${isActive ? "text-accent" : ""}`}
                                                    />
                                                    <span>{item.name}</span>
                                                </Link>
                                            );
                                        })}
                                    </nav>
                                    <div className="border-t border-border pt-4">
                                        <Link
                                            href="/"
                                            onClick={() => setMobileOpen(false)}
                                            className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-semibold text-muted-foreground hover:text-destructive hover:bg-destructive/5"
                                        >
                                            <LogOut className="size-5" />
                                            <span>Exit System</span>
                                        </Link>
                                    </div>
                                </aside>
                            </div>
                        )}

                        {/* Main Workspace Frame */}
                        <div className="flex-1 flex flex-col min-w-0">
                            {/* Top panel bar */}
                            <header className="hidden lg:flex items-center justify-between px-8 bg-card border-b border-border h-16 sticky top-0 z-30 shrink-0">
                                <div className="flex items-center gap-4 w-96">
                                    <div className="relative w-full">
                                        <Search className="absolute left-3 top-2.5 size-4 text-muted-foreground" />
                                        <input
                                            type="text"
                                            placeholder="Search leads, projects, adjusters..."
                                            className="w-full bg-secondary/30 border border-border/80 rounded-full pl-9 pr-4 py-1.5 text-xs focus:outline-none focus:ring-1 focus:ring-accent focus:bg-background transition-all"
                                        />
                                    </div>
                                </div>

                                <div className="flex items-center gap-4">
                                    {/* Notification icon */}
                                    <Button
                                        variant="ghost"
                                        size="icon"
                                        className="relative text-muted-foreground hover:text-primary"
                                    >
                                        <Bell className="size-5" />
                                        <span className="absolute top-2 right-2 size-2 bg-accent rounded-full" />
                                    </Button>

                                    {/* Vertical divider */}
                                    <div className="h-6 w-px bg-border" />

                                    {/* Staff Avatar Profile */}
                                    <div className="flex items-center gap-2">
                                        <Avatar className="size-8 border border-border">
                                            <AvatarFallback className="bg-primary/10 text-primary text-xs font-bold">
                                                AD
                                            </AvatarFallback>
                                        </Avatar>
                                        <div className="text-left hidden xl:block">
                                            <p className="text-xs font-bold text-primary leading-none">
                                                Admin User
                                            </p>
                                            <span className="text-[9px] text-muted-foreground">
                                                Apex Ridge Staff
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </header>

                            {/* Workspace panel page view */}
                            <main className="flex-1 p-6 lg:p-8 overflow-y-auto max-w-7xl w-full mx-auto">
                                {children}
                            </main>
                        </div>
                    </div>
                </div>
            </body>
        </html>
    );
}
