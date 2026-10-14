"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowUpRightIcon, CloseIcon, WhatsAppIcon } from "@/components/Icons";

interface NavbarProps {
 currentPath?: string;
}

export default function Navbar({ currentPath }: NavbarProps) {
 const pathname = usePathname() || currentPath || "/";
 const [mobileOpen, setMobileOpen] = useState(false);

 const navLinks = [
 { label: "Meal Plans", href: "/meal-plans" },
 { label: "Pricing Calculator", href: "/calculator" },
 { label: "Recipes", href: "/recipes" },
 { label: "Gallery", href: "/gallery" },
 { label: "Business Consulting", href: "/consulting" },
 { label: "About", href: "/about" },
 ];

 return (
 <>
 {/* Topbar */}
 <div className="topbar">
 <div className="container topbar-inner">
 <div className="topbar-left">
 <span className="location-dot"></span>
 <strong>CHEF RADHEY · DUBAI, UAE</strong>
 <span className="sep">|</span>
 <span>PERSONAL NUTRITION & HEALTHY FOOD BUSINESS DEVELOPMENT</span>
 </div>
 <div className="topbar-right">
 <a
 href="https://wa.me/971569754492?text=Hello%20Chef%20Radhey!%20I%20would%20like%20to%20inquire%20about%20your%20services."
 target="_blank"
 rel="noopener noreferrer"
 className="topbar-wa"
 >
 <WhatsAppIcon size={13} color="currentColor" />
 <span>WhatsApp: +971 56 975 4492</span>
 </a>
 </div>
 </div>
 </div>

 {/* Main Nav Header */}
 <header className="nav-header">
 <div className="container nav-inner">
 {/* Brand */}
 <Link href="/" className="brand" aria-label="Chef Radhey Home">
 <span className="brand-mark">CR</span>
 <span className="brand-info">
 <span className="brand-name">Chef Radhey</span>
 <span className="brand-sub">Nutrition · Culinary · Consulting</span>
 </span>
 </Link>

 {/* Desktop Nav Links */}
 <nav className="desktop-nav-links" aria-label="Main Navigation">
 {navLinks.map((link) => {
 const isActive = pathname === link.href;
 return (
 <Link
 key={link.href}
 href={link.href}
 className={`nav-link-item ${isActive ? "active" : ""}`}
 >
 {link.label}
 {isActive && <span className="active-dot" />}
 </Link>
 );
 })}
 </nav>

 {/* Right Header Action: Work With Chef Radhey -> /contact */}
 <div className="header-actions">
 <Link href="/contact" className="btn btn-primary nav-cta">
 <span>Work With Chef Radhey</span>
 <ArrowUpRightIcon size={14} />
 </Link>

 {/* Mobile Hamburger Button */}
 <button
 className="mobile-toggle"
 aria-label={mobileOpen ? "Close menu" : "Open menu"}
 aria-expanded={mobileOpen}
 onClick={() => setMobileOpen(!mobileOpen)}
 >
 {mobileOpen ? (
 <CloseIcon size={20} />
 ) : (
 <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
 <line x1="3" y1="6" x2="21" y2="6" />
 <line x1="3" y1="12" x2="21" y2="12" />
 <line x1="3" y1="18" x2="21" y2="18" />
 </svg>
 )}
 </button>
 </div>
 </div>

 {/* Mobile Navigation Drawer */}
 {mobileOpen && (
 <div className="mobile-drawer">
 <div className="container mobile-drawer-inner">
 <div className="mobile-nav-list">
 {navLinks.map((link) => {
 const isActive = pathname === link.href;
 return (
 <Link
 key={link.href}
 href={link.href}
 className={`mobile-nav-item ${isActive ? "active" : ""}`}
 onClick={() => setMobileOpen(false)}
 >
 <span>{link.label}</span>
 <ArrowUpRightIcon size={15} />
 </Link>
 );
 })}
 </div>

 <div className="mobile-drawer-cta">
 <Link
 href="/contact"
 className="btn btn-primary btn-block"
 onClick={() => setMobileOpen(false)}
 >
 <span>Work With Chef Radhey</span>
 <ArrowUpRightIcon size={15} />
 </Link>
 <a
 href="https://wa.me/971569754492?text=Hello%20Chef%20Radhey!%20I%20would%20like%20to%20inquire%20about%20your%20services."
 target="_blank"
 rel="noopener noreferrer"
 className="btn btn-whatsapp btn-block"
 onClick={() => setMobileOpen(false)}
 >
 <WhatsAppIcon size={16} color="#fff" />
 <span>Chat on WhatsApp</span>
 </a>
 </div>
 </div>
 </div>
 )}
 </header>
 </>
 );
}
