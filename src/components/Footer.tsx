import React from "react";
import Link from "next/link";
import { Phone, Mail, MapPin } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-primary text-primary-foreground/90 border-t border-white/10 pt-16 pb-8 px-6">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
                <div className="space-y-4">
                    <Link href="/" className="flex items-center gap-2">
                        <div className="bg-accent text-accent-foreground p-2 rounded-lg font-bold flex items-center justify-center">
                            <span className="text-xl tracking-tighter text-primary">/\</span>
                        </div>
                        <span className="font-extrabold text-lg tracking-tight text-white">APEX RIDGE</span>
                    </Link>
                    <p className="text-xs text-primary-foreground/60 max-w-xs leading-relaxed">
                        Apex Ridge Roofing is a premium mid-size general roofing contractor delivering slate, copper, standing seam, and shingle installations to clients nationwide.
                    </p>
                </div>

                <div className="space-y-3">
                    <h4 className="font-extrabold text-white text-sm uppercase tracking-wider">Services</h4>
                    <ul className="text-xs space-y-2 text-primary-foreground/60">
                        <li><Link href="/#services" className="hover:underline">Residential Asphalt Shingles</Link></li>
                        <li><Link href="/#services" className="hover:underline">Standing Seam Metal Systems</Link></li>
                        <li><Link href="/#services" className="hover:underline">Heritage Slate & Concrete Tile</Link></li>
                        <li><Link href="/#services" className="hover:underline">Commercial TPO & Coating Systems</Link></li>
                    </ul>
                </div>

                <div className="space-y-3">
                    <h4 className="font-extrabold text-white text-sm uppercase tracking-wider">Apex Standard</h4>
                    <ul className="text-xs space-y-2 text-primary-foreground/60">
                        <li><Link href="/#why-apex" className="hover:underline">GAF Elite Warranties</Link></li>
                        <li><Link href="/#why-apex" className="hover:underline">Leak Damage Inspection</Link></li>
                        <li><Link href="/#why-apex" className="hover:underline">Storm & Hail Claim Support</Link></li>
                        <li><Link href="/#why-apex" className="hover:underline">Rolling Nail Sweeper Guarantee</Link></li>
                    </ul>
                </div>

                <div className="space-y-3">
                    <h4 className="font-extrabold text-white text-sm uppercase tracking-wider">Contact Info</h4>
                    <ul className="text-xs space-y-2 text-primary-foreground/60">
                        <li className="flex items-center gap-2">
                            <Phone className="size-3.5 text-accent" /> <span>1-800-555-2739</span>
                        </li>
                        <li className="flex items-center gap-2">
                            <Mail className="size-3.5 text-accent" /> <span>estimates@apexridgeroofing.com</span>
                        </li>
                        <li className="flex items-center gap-2">
                            <MapPin className="size-3.5 text-accent" /> <span>248 Apex Summit Dr, Denver, CO</span>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="max-w-7xl mx-auto pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-xs text-primary-foreground/45 gap-4">
                <p>© {new Date().getFullYear()} Apex Ridge Roofing LLC. All Rights Reserved. All installations GAF Master Elite certified.</p>
                <div className="flex gap-4">
                    <a href="#" className="hover:underline">Privacy Policy</a>
                    <a href="#" className="hover:underline">Terms of Service</a>
                </div>
            </div>
        </footer>
    );
}
