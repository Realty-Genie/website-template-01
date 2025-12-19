"use client";

import Link from "next/link";
import { Facebook, Instagram, Linkedin, Twitter, Youtube } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-black text-white pt-32 pb-12 border-t border-white/10">
            <div className="container mx-auto px-6 md:px-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                    {/* Column 1: Bio */}
                    <div className="space-y-6">
                        <h3 className="text-xl font-serif font-bold text-primary">
                            Meet Denise Mai PREC*
                        </h3>
                        <p className="text-white/60 text-sm leading-relaxed font-light">
                            Denise Mai is a top real estate expert in Greater Vancouver and Burnaby, BC, celebrated for elite accolades including Top 1% and Medallion Club honors. Trusted for exceptional results, she’s recognized as one of the best Realtors in the region and beyond.
                        </p>
                    </div>

                    {/* Column 2: Quick Links */}
                    <div className="space-y-6">
                        <h3 className="text-sm font-medium tracking-widest uppercase text-white/40">
                            Quick Links
                        </h3>
                        <nav className="flex flex-col space-y-3">
                            <Link href="#" className="text-white/70 hover:text-primary transition-colors text-sm">
                                Home
                            </Link>
                            <Link href="#" className="text-white/70 hover:text-primary transition-colors text-sm">
                                About Denise
                            </Link>
                            <Link href="#" className="text-white/70 hover:text-primary transition-colors text-sm">
                                Buyers
                            </Link>
                            <Link href="#" className="text-white/70 hover:text-primary transition-colors text-sm">
                                Sellers
                            </Link>
                            <Link href="#" className="text-white/70 hover:text-primary transition-colors text-sm">
                                Active Listings
                            </Link>
                        </nav>
                    </div>

                    {/* Column 3: Contact */}
                    <div className="space-y-6">
                        <h3 className="text-sm font-medium tracking-widest uppercase text-white/40">
                            Contact
                        </h3>
                        <div className="space-y-4 text-sm text-white/70 font-light">
                            <div>
                                <strong className="block text-white font-medium mb-1">EXP REALTY</strong>
                                <p>License #: 160106</p>
                            </div>
                            <p>701 W Georgia St #1500, Vancouver, BC, V6B 1H4</p>
                            <div className="space-y-1">
                                <p>
                                    <span className="text-white/40 uppercase text-xs tracking-wider mr-2">Phone</span>
                                    778-858-0996
                                </p>
                                <p>
                                    <span className="text-white/40 uppercase text-xs tracking-wider mr-2">Office</span>
                                    778-743-8188
                                </p>
                            </div>
                            <a
                                href="mailto:denise@mairealestategroup.com"
                                className="block text-primary hover:underline mt-2"
                            >
                                denise@mairealestategroup.com
                            </a>
                        </div>
                    </div>

                    {/* Column 4: Social */}
                    <div className="space-y-6">
                        <h3 className="text-sm font-medium tracking-widest uppercase text-white/40">
                            Social
                        </h3>
                        <div className="flex space-x-4">
                            <Link href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/60 hover:text-primary hover:border-primary transition-all duration-300">
                                <Facebook size={18} />
                            </Link>
                            <Link href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/60 hover:text-primary hover:border-primary transition-all duration-300">
                                <Instagram size={18} />
                            </Link>
                            <Link href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/60 hover:text-primary hover:border-primary transition-all duration-300">
                                <Linkedin size={18} />
                            </Link>
                            <Link href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/60 hover:text-primary hover:border-primary transition-all duration-300">
                                <Youtube size={18} />
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-white/30 font-light">
                    <p>© 2025 Denise Mai Real Estate. All rights reserved.</p>
                    <div className="flex space-x-6 mt-4 md:mt-0">
                        <Link href="#" className="hover:text-white">Privacy Policy</Link>
                        <Link href="#" className="hover:text-white">Terms of Service</Link>
                        <Link href="#" className="hover:text-white">Cookie Policy</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
