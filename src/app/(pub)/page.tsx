"use client";

import React, { useState } from "react";
import {
    ShieldCheck,
    Home,
    Wrench,
    Sparkles,
    Phone,
    Mail,
    MapPin,
    ArrowRight,
    CheckCircle2,
    Building2,
    ChevronRight,
    Star,
    Award
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
    Card,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";

// ==========================================
// Main Homepage Component
// ==========================================
export default function Homepage() {
    const [estimateSubmitted, setEstimateSubmitted] = useState(false);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        serviceType: "Residential",
        details: ""
    });

    const handleFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleFormSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setEstimateSubmitted(true);
        setTimeout(() => {
            setEstimateSubmitted(false);
            setFormData({ name: "", email: "", phone: "", serviceType: "Residential", details: "" });
        }, 5000);
    };

    return (
        <div className="space-y-0">
            <HeroSection 
                formData={formData} 
                estimateSubmitted={estimateSubmitted} 
                handleFormChange={handleFormChange} 
                handleFormSubmit={handleFormSubmit} 
            />
            <StatsSection />
            <ServicesSection />
            <WhyApexSection />
            <GallerySection />
            <TestimonialsSection />
            <EstimateSection 
                formData={formData} 
                estimateSubmitted={estimateSubmitted} 
                handleFormChange={handleFormChange} 
                handleFormSubmit={handleFormSubmit} 
            />
        </div>
    );
}

// ==========================================
// Sub-components
// ==========================================

interface FormSectionProps {
    formData: {
        name: string;
        email: string;
        phone: string;
        serviceType: string;
        details: string;
    };
    estimateSubmitted: boolean;
    handleFormChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => void;
    handleFormSubmit: (e: React.FormEvent) => void;
}

export function HeroSection({ formData, estimateSubmitted, handleFormChange, handleFormSubmit }: FormSectionProps) {
    return (
        <section className="relative min-h-[85vh] flex items-center justify-center bg-primary text-primary-foreground py-20 px-6 overflow-hidden">
            {/* Background Image and Overlays */}
            <div className="absolute inset-0 z-0">
                <img 
                    src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1920&q=80" 
                    alt="Beautiful high-end residential roof" 
                    className="w-full h-full object-cover object-center opacity-30 select-none pointer-events-none" 
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-primary via-primary/95 to-transparent" />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-12 gap-12 items-center">
                <div className="lg:col-span-7 space-y-6 text-left">
                    <Badge className="bg-accent/20 text-accent border border-accent/30 px-3 py-1 text-sm font-semibold rounded-full uppercase tracking-wider">
                        Elite Craftsmanship Guarantee
                    </Badge>
                    <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-[1.1] text-white">
                        Built to Endure. <br />
                        <span className="text-accent">Styled for Architecture.</span>
                    </h1>
                    <p className="text-lg md:text-xl text-primary-foreground/80 max-w-2xl font-light leading-relaxed">
                        Apex Ridge Roofing provides premium residential, metal, and commercial roofing systems. Engineered for maximum weather resilience and visual perfection.
                    </p>
                    <div className="flex flex-wrap items-center gap-4 pt-4">
                        <Button render={<a href="#estimate" />} size="lg" className="bg-accent text-accent-foreground hover:opacity-95 text-base px-8 py-6 font-bold shadow-lg shadow-accent/20">
                            Get a Free Estimate <ArrowRight className="ml-2 size-5" />
                        </Button>
                        <Button render={<a href="#services" />} variant="outline" size="lg" className="border-white/20 text-white hover:bg-white/10 text-base px-8 py-6 font-bold">
                            Our Services
                        </Button>
                    </div>
                    <div className="flex flex-wrap items-center gap-6 pt-6 text-sm text-primary-foreground/70">
                        <span className="flex items-center gap-2">
                            <CheckCircle2 className="size-5 text-accent" /> Lifetime Warranty
                        </span>
                        <span className="flex items-center gap-2">
                            <CheckCircle2 className="size-5 text-accent" /> Certified Master Roofers
                        </span>
                        <span className="flex items-center gap-2">
                            <CheckCircle2 className="size-5 text-accent" /> Hail & Storm Specialists
                        </span>
                    </div>
                </div>

                {/* Quick Contact Form Banner Overlay */}
                <div className="lg:col-span-5 bg-card text-card-foreground p-8 rounded-2xl shadow-2xl border border-border/80">
                    <h3 className="text-2xl font-extrabold text-primary tracking-tight">Rapid Inspection Request</h3>
                    <p className="text-sm text-muted-foreground mt-1">Need immediate assistance or looking for a quote? Fill out the quick form below.</p>
                    
                    <form className="space-y-4 mt-6" onSubmit={handleFormSubmit}>
                        <div>
                            <label className="text-xs font-bold text-muted-foreground uppercase tracking-wider block mb-1">Full Name</label>
                            <input 
                                type="text" 
                                name="name" 
                                required 
                                value={formData.name}
                                onChange={handleFormChange}
                                className="w-full bg-background border border-border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-accent transition-colors" 
                                placeholder="John Doe" 
                            />
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <label className="text-xs font-bold text-muted-foreground uppercase tracking-wider block mb-1">Phone</label>
                                <input 
                                    type="tel" 
                                    name="phone" 
                                    required 
                                    value={formData.phone}
                                    onChange={handleFormChange}
                                    className="w-full bg-background border border-border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-accent transition-colors" 
                                    placeholder="(555) 000-0000" 
                                />
                            </div>
                            <div>
                                <label className="text-xs font-bold text-muted-foreground uppercase tracking-wider block mb-1">Service Type</label>
                                <select 
                                    name="serviceType" 
                                    value={formData.serviceType}
                                    onChange={handleFormChange}
                                    className="w-full bg-background border border-border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-accent transition-colors"
                                >
                                    <option value="Residential">Residential</option>
                                    <option value="Metal Roofing">Standing Metal</option>
                                    <option value="Commercial">Commercial</option>
                                    <option value="Repair">Leak Repair</option>
                                </select>
                            </div>
                        </div>
                        <Button type="submit" className="w-full bg-primary text-primary-foreground hover:bg-primary/95 font-bold py-3 mt-2 rounded-lg">
                            Submit Request
                        </Button>
                        {estimateSubmitted && (
                            <div className="text-xs text-center text-emerald-600 bg-emerald-50 border border-emerald-100 rounded-lg p-2 font-semibold">
                                Thank you! Our roofing specialist will call you shortly.
                            </div>
                        )}
                    </form>
                </div>
            </div>
        </section>
    );
}

export function StatsSection() {
    const stats = [
        { value: "25+", label: "Years Experience" },
        { value: "12,000+", label: "Roofs Installed" },
        { value: "100%", label: "Satisfaction Rate" },
        { value: "A+", label: "BBB Rating" }
    ];

    return (
        <section className="bg-secondary/40 border-y border-border py-12 px-6">
            <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                {stats.map((stat, i) => (
                    <div key={i} className="space-y-1">
                        <h4 className="text-3xl md:text-4xl font-extrabold text-primary">{stat.value}</h4>
                        <p className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">{stat.label}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}

export function ServicesSection() {
    const services = [
        {
            title: "Architectural Shingles",
            description: "Premium asphalt fiberglass shingles featuring deep shadow lines, maximum wind resistance, and a lifetime structural guarantee.",
            image: "https://images.unsplash.com/photo-1628744448840-55bdb2497bd4?auto=format&fit=crop&w=600&q=80",
            badge: "Popular"
        },
        {
            title: "Standing Seam Metal",
            description: "Ultra-durable, sleek, and energy-efficient metal roof solutions custom-engineered for modern residential and mountain architecture.",
            image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=600&q=80",
            badge: "Premium"
        },
        {
            title: "Slate & Tile Roofing",
            description: "Timeless concrete tiles and natural slate. Unparalleled elegance with a 100+ year service life, expertly installed by hand.",
            image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=600&q=80",
            badge: "Heritage"
        },
        {
            title: "Commercial Systems",
            description: "Single-ply TPO, EPDM, and flat-roof coating solutions engineered for warehouses, multi-family assets, and medical centers.",
            image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=600&q=80",
            badge: "Industrial"
        }
    ];

    return (
        <section id="services" className="py-24 px-6 max-w-7xl mx-auto space-y-16">
            <div className="text-center max-w-3xl mx-auto space-y-4">
                <Badge className="bg-primary/10 text-primary border-primary/20 px-3 py-1 text-xs font-bold rounded-full uppercase tracking-wider">
                    What We Do
                </Badge>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-primary tracking-tight">
                    Engineered To Protect, <br className="sm:hidden" /> Crafted To Impress.
                </h2>
                <p className="text-muted-foreground text-lg">
                    Whether you need a minor storm damage repair or a custom architectural masterpiece, our team utilizes elite materials to deliver long-term peace of mind.
                </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {services.map((service, i) => (
                    <Card key={i} className="group overflow-hidden border border-border/80 bg-card hover:border-accent/40 hover:shadow-lg transition-all duration-300">
                        <div className="h-48 overflow-hidden relative">
                            <img 
                                src={service.image} 
                                alt={service.title} 
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                            />
                            <div className="absolute top-4 left-4">
                                <Badge className="bg-primary/90 text-primary-foreground hover:bg-primary font-bold">
                                    {service.badge}
                                </Badge>
                            </div>
                        </div>
                        <CardHeader className="space-y-2 p-6">
                            <CardTitle className="text-xl font-bold text-primary group-hover:text-accent transition-colors">
                                {service.title}
                            </CardTitle>
                            <CardDescription className="text-sm text-muted-foreground leading-relaxed">
                                {service.description}
                            </CardDescription>
                        </CardHeader>
                    </Card>
                ))}
            </div>
        </section>
    );
}

export function WhyApexSection() {
    return (
        <section id="why-apex" className="bg-primary text-primary-foreground py-24 px-6 relative overflow-hidden">
            <div className="absolute inset-0 bg-radial-gradient(ellipse_60%_60%_at_50%_50%,rgba(255,255,255,0.05),transparent)" />
            
            <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-12 gap-16 items-center">
                <div className="lg:col-span-5 space-y-6">
                    <Badge className="bg-accent/20 text-accent border border-accent/30 px-3 py-1 text-sm font-semibold rounded-full uppercase tracking-wider">
                        The Apex Standard
                    </Badge>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
                        Why Homeowners & Managers Trust Apex.
                    </h2>
                    <p className="text-primary-foreground/80 leading-relaxed font-light text-lg">
                        Operating as an elite-certified team, we bridge the gap between massive roofing corporations and smaller local handymen. You get commercial-level warranties with family-owned reliability.
                    </p>
                    
                    <div className="space-y-4 pt-4">
                        <div className="flex items-start gap-4">
                            <div className="bg-accent/20 p-2 rounded-lg text-accent mt-1">
                                <Award className="size-6" />
                            </div>
                            <div>
                                <h4 className="font-extrabold text-lg text-white">GAF Master Elite Contractor</h4>
                                <p className="text-sm text-primary-foreground/75 mt-0.5">Placing us in the top 2% of North American roofing specialists.</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-4">
                            <div className="bg-accent/20 p-2 rounded-lg text-accent mt-1">
                                <ShieldCheck className="size-6" />
                            </div>
                            <div>
                                <h4 className="font-extrabold text-lg text-white">25-Year Workmanship Warranty</h4>
                                <p className="text-sm text-primary-foreground/75 mt-0.5">Fully-backed system protection that transfers to future buyers.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="lg:col-span-7 grid sm:grid-cols-2 gap-8">
                    <div className="bg-white/5 border border-white/10 p-8 rounded-2xl space-y-4 backdrop-blur-xs">
                        <Home className="size-8 text-accent" />
                        <h3 className="text-xl font-bold text-white">Comprehensive Inspections</h3>
                        <p className="text-sm text-primary-foreground/70 leading-relaxed">
                            We utilize advanced drones and thermal imaging technology to detect microscopic moisture retention before it leads to structural wood rot.
                        </p>
                    </div>
                    <div className="bg-white/5 border border-white/10 p-8 rounded-2xl space-y-4 backdrop-blur-xs">
                        <Wrench className="size-8 text-accent" />
                        <h3 className="text-xl font-bold text-white">Elite-Grade Materials</h3>
                        <p className="text-sm text-primary-foreground/70 leading-relaxed">
                            From Owens Corning Cool Roof systems to high-grade zinc-treated metals, we only utilize materials engineered to withstand severe environments.
                        </p>
                    </div>
                    <div className="bg-white/5 border border-white/10 p-8 rounded-2xl space-y-4 backdrop-blur-xs">
                        <Building2 className="size-8 text-accent" />
                        <h3 className="text-xl font-bold text-white">Insurance Support</h3>
                        <p className="text-sm text-primary-foreground/70 leading-relaxed">
                            Our internal adjusting team collaborates directly with major insurance providers to guarantee hail or wind claims cover full repair values.
                        </p>
                    </div>
                    <div className="bg-white/5 border border-white/10 p-8 rounded-2xl space-y-4 backdrop-blur-xs">
                        <Sparkles className="size-8 text-accent" />
                        <h3 className="text-xl font-bold text-white">Clean Site Guarantee</h3>
                        <p className="text-sm text-primary-foreground/70 leading-relaxed">
                            We employ rolling magnetic debris sweepers across your property multiple times daily, ensuring zero stray roofing nails left behind.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export function GallerySection() {
    return (
        <section className="py-24 px-6 max-w-7xl mx-auto space-y-16">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                <div className="space-y-4">
                    <Badge className="bg-primary/10 text-primary border-primary/20 px-3 py-1 text-xs font-bold rounded-full uppercase tracking-wider">
                        Showcase Portfolio
                    </Badge>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-primary tracking-tight">
                        Visual Integrity in Every Ridge.
                    </h2>
                </div>
                <Button variant="outline" className="font-semibold text-primary group border-primary/20 hover:bg-secondary">
                    View All Projects <ChevronRight className="ml-1 size-4 group-hover:translate-x-0.5 transition-transform" />
                </Button>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
                <div className="group relative overflow-hidden rounded-2xl aspect-[4/3] shadow-md border border-border/80">
                    <img 
                        src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80" 
                        alt="Modern architectural shingle roof" 
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 text-white" >
                        <h4 className="font-bold text-lg">Slate Grey Shingles</h4>
                        <p className="text-xs text-white/80">Residential replacement - Golden, CO</p>
                    </div>
                </div>
                <div className="group relative overflow-hidden rounded-2xl aspect-[4/3] shadow-md border border-border/80">
                    <img 
                        src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=800&q=80" 
                        alt="Standing seam copper metal roof" 
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 text-white" >
                        <h4 className="font-bold text-lg">Matte Black Standing Seam</h4>
                        <p className="text-xs text-white/80">Custom Modern Home - Boulder, CO</p>
                    </div>
                </div>
                <div className="group relative overflow-hidden rounded-2xl aspect-[4/3] shadow-md border border-border/80">
                    <img 
                        src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80" 
                        alt="Clay tile villa roof" 
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 text-white" >
                        <h4 className="font-bold text-lg">Spanish Clay Tile Restoration</h4>
                        <p className="text-xs text-white/80">Historic Villa - Cherry Hills, CO</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export function TestimonialsSection() {
    const testimonials = [
        {
            name: "Sarah Jenkins",
            role: "Homeowner in Denver, CO",
            quote: "Apex Ridge replaced our entire shingle roof with premium standing seam metal. The craftsmanship is flawless, and the copper accents look gorgeous.",
            rating: 5
        },
        {
            name: "David Vance",
            role: "Commercial Property Manager",
            quote: "We hired them for a 45,000 sq ft TPO roof overlay. Excellent project management, zero business disruption, and transparent daily drone updates.",
            rating: 5
        },
        {
            name: "The Miller Family",
            role: "Homeowners in Golden, CO",
            quote: "Following the historic hailstorm, Apex guided us through the insurance process and completed the installation in just two days. Absolutely professional.",
            rating: 5
        }
    ];

    return (
        <section id="testimonials" className="bg-secondary/30 border-y border-border py-24 px-6">
            <div className="max-w-7xl mx-auto space-y-16">
                <div className="text-center max-w-2xl mx-auto space-y-4">
                    <Badge className="bg-primary/10 text-primary border-primary/20 px-3 py-1 text-xs font-bold rounded-full uppercase tracking-wider">
                        Client Feedback
                    </Badge>
                    <h2 className="text-3xl sm:text-4xl font-extrabold text-primary tracking-tight">
                        What Our Clients Say About Us.
                    </h2>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {testimonials.map((test, i) => (
                        <Card key={i} className="border border-border/80 bg-card p-8 flex flex-col justify-between hover:shadow-md transition-shadow">
                            <div className="space-y-4">
                                <div className="flex gap-1 text-accent">
                                    {[...Array(test.rating)].map((_, idx) => (
                                        <Star key={idx} className="size-4 fill-accent" />
                                    ))}
                                </div>
                                <p className="text-base text-muted-foreground italic leading-relaxed">
                                    &ldquo;{test.quote}&rdquo;
                                </p>
                            </div>
                            <div className="pt-6 border-t border-border/50 mt-6">
                                <h4 className="font-extrabold text-primary text-base">{test.name}</h4>
                                <p className="text-xs text-muted-foreground">{test.role}</p>
                            </div>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}

export function EstimateSection({ formData, estimateSubmitted, handleFormChange, handleFormSubmit }: FormSectionProps) {
    return (
        <section id="estimate" className="py-24 px-6 max-w-7xl mx-auto">
            <div className="bg-primary text-primary-foreground rounded-3xl overflow-hidden relative shadow-2xl">
                <div className="absolute inset-0 bg-radial-gradient(ellipse_60%_60%_at_80%_20%,rgba(255,255,255,0.06),transparent)" />
                
                <div className="relative z-10 grid lg:grid-cols-12 gap-12 p-10 md:p-16 items-center">
                    <div className="lg:col-span-6 space-y-6">
                        <Badge className="bg-accent/20 text-accent border border-accent/30 px-3 py-1 text-sm font-semibold rounded-full uppercase tracking-wider">
                            Get In Touch
                        </Badge>
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-[1.1]">
                            Ready to Elevate Your Roofing Project?
                        </h2>
                        <p className="text-primary-foreground/80 leading-relaxed font-light text-lg">
                            Whether you need to request a complimentary visual inspection, ask detailed warranty questions, or discuss material options, our dedicated design-and-estimation specialists are ready to consult with you.
                        </p>
                        <div className="space-y-4 text-sm pt-4">
                            <div className="flex items-center gap-3">
                                <Phone className="size-5 text-accent" />
                                <span>1-800-555-APEX (2739)</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <Mail className="size-5 text-accent" />
                                <span>estimates@apexridgeroofing.com</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <MapPin className="size-5 text-accent" />
                                <span>248 Apex Summit Dr, Denver, CO 80202</span>
                            </div>
                        </div>
                    </div>

                    <div className="lg:col-span-6 bg-white text-primary p-8 md:p-10 rounded-2xl shadow-xl">
                        <h3 className="text-2xl font-extrabold tracking-tight">Request Free Consultation</h3>
                        <p className="text-sm text-muted-foreground mt-1">We respond within 2 business hours with a clear scheduling availability.</p>
                        
                        <form className="space-y-4 mt-6" onSubmit={handleFormSubmit}>
                            <div className="grid sm:grid-cols-2 gap-4">
                                <div>
                                    <label className="text-xs font-bold text-muted-foreground uppercase tracking-wider block mb-1">Full Name</label>
                                    <input 
                                        type="text" 
                                        name="name" 
                                        required 
                                        value={formData.name}
                                        onChange={handleFormChange}
                                        className="w-full bg-secondary/50 border border-border/80 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-accent transition-colors" 
                                        placeholder="Sarah Jenkins" 
                                    />
                                </div>
                                <div>
                                    <label className="text-xs font-bold text-muted-foreground uppercase tracking-wider block mb-1">Phone Number</label>
                                    <input 
                                        type="tel" 
                                        name="phone" 
                                        required 
                                        value={formData.phone}
                                        onChange={handleFormChange}
                                        className="w-full bg-secondary/50 border border-border/80 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-accent transition-colors" 
                                        placeholder="(303) 555-0192" 
                                    />
                                </div>
                            </div>
                            <div>
                                <label className="text-xs font-bold text-muted-foreground uppercase tracking-wider block mb-1">Email Address</label>
                                <input 
                                    type="email" 
                                    name="email" 
                                    required 
                                    value={formData.email}
                                    onChange={handleFormChange}
                                    className="w-full bg-secondary/50 border border-border/80 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-accent transition-colors" 
                                    placeholder="sarah@example.com" 
                                />
                            </div>
                            <div>
                                <label className="text-xs font-bold text-muted-foreground uppercase tracking-wider block mb-1">Project Details</label>
                                <textarea 
                                    name="details" 
                                    rows={3}
                                    value={formData.details}
                                    onChange={handleFormChange}
                                    className="w-full bg-secondary/50 border border-border/80 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-accent transition-colors resize-none" 
                                    placeholder="Tell us about your roof size, storm damage history, or materials preference..." 
                                />
                            </div>
                            <Button type="submit" className="w-full bg-accent text-accent-foreground hover:opacity-95 font-bold py-3 mt-2 rounded-lg shadow-md shadow-accent/20">
                                Send Request
                            </Button>
                            {estimateSubmitted && (
                                <div className="text-sm text-center text-emerald-600 bg-emerald-50 border border-emerald-100 rounded-lg p-2 font-semibold">
                                    Thank you! Our estimates department will contact you shortly.
                                </div>
                            )}
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}
