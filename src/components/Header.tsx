"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Phone, Clock, ShieldCheck, Menu, X, User } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <>
            {/* Top Info Bar */}
            <div className="bg-primary text-primary-foreground py-2 px-6 text-xs sm:text-sm font-medium flex flex-col sm:flex-row justify-between items-center gap-2 border-b border-white/10">
                <div className="flex items-center gap-4">
                    <span className="flex items-center gap-1">
                        <Phone className="size-3.5 text-accent" />
                        <a href="tel:18005552739" className="hover:underline">1-800-555-APEX (2739)</a>
                    </span>
                    <span className="hidden md:flex items-center gap-1">
                        <Clock className="size-3.5 text-accent" />
                        Mon - Sat: 7:00 AM - 6:00 PM
                    </span>
                </div>
                <div className="flex items-center gap-4">
                    <span className="flex items-center gap-1">
                        <ShieldCheck className="size-3.5 text-accent" />
                        Licensed, Bonded & Insured
                    </span>
                </div>
            </div>

            {/* Header / Navigation */}
            <header className="sticky top-0 z-50 bg-background/90 backdrop-blur-md border-b border-border transition-all">
                <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
                    <Link href="/" className="flex items-center gap-2">
                        <div className="bg-primary text-accent p-2 rounded-lg font-bold flex items-center justify-center">
                            <span className="text-xl tracking-tighter">/\</span>
                        </div>
                        <div className="flex flex-col">
                            <span className="font-extrabold text-lg tracking-tight text-primary leading-none">APEX RIDGE</span>
                            <span className="text-[10px] tracking-[0.25em] text-muted-foreground uppercase font-bold">Roofing Excellence</span>
                        </div>
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden lg:flex items-center gap-8 text-sm font-semibold">
                        <Link href="/#services" className="text-muted-foreground hover:text-primary transition-colors">Services</Link>
                        <Link href="/#why-apex" className="text-muted-foreground hover:text-primary transition-colors">The Apex Standard</Link>
                        <Link href="/#testimonials" className="text-muted-foreground hover:text-primary transition-colors">Reviews</Link>
                        <Link href="/#estimate" className="text-muted-foreground hover:text-primary transition-colors">Get Estimate</Link>
                    </nav>

                    <div className="hidden lg:flex items-center gap-4">
                        <Button variant="outline" className="font-semibold text-primary border-primary/20 hover:bg-secondary">
                            Our Portfolio
                        </Button>
                        <Button render={<a href="/#estimate" />} className="bg-accent text-accent-foreground font-semibold hover:opacity-95 shadow-md">
                            Schedule Estimate
                        </Button>
                        <Link href="/dash/leads" title="CRM Login">
                            <Button variant="ghost" size="icon" className="rounded-full border border-border hover:bg-secondary size-10 flex items-center justify-center text-primary shrink-0">
                                <User className="size-5" />
                            </Button>
                        </Link>
                    </div>

                    {/* Mobile Menu Button / Login */}
                    <div className="lg:hidden flex items-center gap-3">
                        <Link href="/dash/leads" title="CRM Login">
                            <Button variant="ghost" size="icon" className="rounded-full border border-border hover:bg-secondary size-9 flex items-center justify-center text-primary shrink-0">
                                <User className="size-4.5" />
                            </Button>
                        </Link>
                        <button className="p-2 text-primary focus:outline-none" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
                            {mobileMenuOpen ? <X className="size-6" /> : <Menu className="size-6" />}
                        </button>
                    </div>
                </div>

                {/* Mobile Navigation Dropdown */}
                {mobileMenuOpen && (
                    <div className="lg:hidden bg-background border-b border-border py-4 px-6 space-y-4 animate-in fade-in slide-in-from-top-2">
                        <nav className="flex flex-col gap-3 font-semibold">
                            <Link href="/#services" onClick={() => setMobileMenuOpen(false)} className="text-muted-foreground hover:text-primary py-1">Services</Link>
                            <Link href="/#why-apex" onClick={() => setMobileMenuOpen(false)} className="text-muted-foreground hover:text-primary py-1">The Apex Standard</Link>
                            <Link href="/#testimonials" onClick={() => setMobileMenuOpen(false)} className="text-muted-foreground hover:text-primary py-1">Reviews</Link>
                            <Link href="/#estimate" onClick={() => setMobileMenuOpen(false)} className="text-muted-foreground hover:text-primary py-1">Get Estimate</Link>
                        </nav>
                        <div className="flex flex-col gap-2 pt-2 border-t border-border">
                            <Button variant="outline" className="w-full">Our Portfolio</Button>
                            <Button render={<a href="/#estimate" />} onClick={() => setMobileMenuOpen(false)} className="w-full bg-accent text-accent-foreground">
                                Schedule Estimate
                            </Button>
                        </div>
                    </div>
                )}
            </header>
        </>
    );
}
