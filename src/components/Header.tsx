"use client";

import React, { useState } from "react";

interface HeaderProps {
 activePillar: "meals" | "consulting";
 onPillarChange: (pillar: "meals" | "consulting") => void;
}

export default function Header({ activePillar, onPillarChange }: HeaderProps) {
 const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

 return (
 <>
 {/* Top utility bar */}
 <div style={{
 background: "var(--forest-dark)",
 color: "#d9e2db",
 fontSize: "0.76rem",
 padding: "8px 0",
 letterSpacing: "0.06em",
 borderBottom: "1px solid rgba(255,255,255,0.06)"
 }}>
 <div className="container" style={{
 display: "flex",
 justifyContent: "space-between",
 alignItems: "center",
 flexWrap: "wrap",
 gap: "10px"
 }}>
 <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
 <span> <strong>DUBAI, UAE</strong> · Nutrition & Culinary Excellence</span>
 <span style={{ color: "var(--gold)" }}>★ 18+ Years Experience</span>
 </div>
 <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
 <span> WhatsApp: <strong>+971 56 975 4492</strong></span>
 <span style={{ opacity: 0.6 }}>|</span>
 <span>⏱ Daily Delivery Across Dubai</span>
 </div>
 </div>
 </div>

 {/* Main navigation */}
 <header style={{
 position: "sticky",
 top: 0,
 zIndex: 50,
 background: "rgba(255, 255, 255, 0.94)",
 backdropFilter: "blur(18px)",
 borderBottom: "1px solid var(--line)",
 transition: "var(--transition)"
 }}>
 <div className="container" style={{
 display: "flex",
 alignItems: "center",
 justifyContent: "space-between",
 height: "82px",
 gap: "24px"
 }}>
 {/* Brand */}
 <a href="#top" style={{ display: "flex", alignItems: "center", gap: "14px" }}>
 <div style={{
 width: "48px",
 height: "48px",
 borderRadius: "50%",
 background: "linear-gradient(135deg, var(--forest), var(--forest-dark))",
 border: "1.5px solid var(--gold)",
 display: "grid",
 placeItems: "center",
 color: "var(--gold-light)",
 fontFamily: "var(--font-serif)",
 fontSize: "1.4rem",
 fontWeight: 700,
 boxShadow: "0 4px 12px rgba(23,61,45,0.18)"
 }}>
 CR
 </div>
 <div>
 <div style={{
 fontFamily: "var(--font-serif)",
 fontSize: "1.45rem",
 fontWeight: 700,
 color: "var(--forest)",
 lineHeight: 1.05,
 letterSpacing: "-0.01em"
 }}>
 Chef Radhey
 </div>
 <div style={{
 fontSize: "0.68rem",
 color: "var(--muted)",
 letterSpacing: "0.14em",
 textTransform: "uppercase",
 marginTop: "2px",
 fontWeight: 600
 }}>
 Nutrition · Meal Plans · Restaurant Setup
 </div>
 </div>
 </a>

 {/* Desktop Nav Links */}
 <nav style={{
 display: "flex",
 alignItems: "center",
 gap: "24px",
 fontSize: "0.88rem",
 fontWeight: 600,
 color: "var(--ink-light)"
 }} className="desktop-nav">
 <button
 onClick={() => {
 onPillarChange("meals");
 document.getElementById("meal-plans")?.scrollIntoView({ behavior: "smooth" });
 }}
 style={{
 color: activePillar === "meals" ? "var(--forest)" : "var(--muted)",
 fontWeight: activePillar === "meals" ? 700 : 500,
 display: "flex",
 alignItems: "center",
 gap: "6px",
 padding: "6px 10px",
 borderRadius: "var(--radius-xs)",
 background: activePillar === "meals" ? "var(--surface)" : "transparent",
 transition: "var(--transition)"
 }}
 >
 Healthy Meal Plans
 </button>

 <button
 onClick={() => {
 onPillarChange("consulting");
 document.getElementById("restaurant-setup")?.scrollIntoView({ behavior: "smooth" });
 }}
 style={{
 color: activePillar === "consulting" ? "var(--forest)" : "var(--muted)",
 fontWeight: activePillar === "consulting" ? 700 : 500,
 display: "flex",
 alignItems: "center",
 gap: "6px",
 padding: "6px 10px",
 borderRadius: "var(--radius-xs)",
 background: activePillar === "consulting" ? "var(--surface)" : "transparent",
 transition: "var(--transition)"
 }}
 >
 ️ Restaurant Setup
 </button>

 <a href="#calculator" style={{ transition: "color 0.2s" }} onMouseEnter={e => e.currentTarget.style.color = "var(--gold)"} onMouseLeave={e => e.currentTarget.style.color = "var(--ink-light)"}>
 Pricing Calculator
 </a>
 <a href="#dishes" style={{ transition: "color 0.2s" }} onMouseEnter={e => e.currentTarget.style.color = "var(--gold)"} onMouseLeave={e => e.currentTarget.style.color = "var(--ink-light)"}>
 Menu Gallery
 </a>
 <a href="#about" style={{ transition: "color 0.2s" }} onMouseEnter={e => e.currentTarget.style.color = "var(--gold)"} onMouseLeave={e => e.currentTarget.style.color = "var(--ink-light)"}>
 About Chef
 </a>
 </nav>

 {/* Action CTAs */}
 <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
 <a
 href="https://wa.me/971569754492?text=Hello%20Chef%20Radhey,%20I%20would%20like%20to%20enquire%20about%20your%20services"
 target="_blank"
 rel="noopener noreferrer"
 className="btn btn-whatsapp"
 style={{ padding: "10px 18px", fontSize: "0.82rem" }}
 >
 <span>WhatsApp Direct</span>
 <span>↗</span>
 </a>
 <a
 href="#contact"
 className="btn btn-primary"
 style={{ padding: "10px 18px", fontSize: "0.82rem" }}
 >
 Enquire Now
 </a>

 {/* Mobile Hamburger Button */}
 <button
 onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
 className="mobile-toggle"
 aria-label="Toggle navigation"
 style={{
 display: "none",
 width: "40px",
 height: "40px",
 border: "1px solid var(--line-strong)",
 borderRadius: "var(--radius-xs)",
 placeItems: "center",
 fontSize: "1.2rem",
 color: "var(--forest)"
 }}
 >
 {mobileMenuOpen ? "✕" : "☰"}
 </button>
 </div>
 </div>

 {/* Mobile menu dropdown */}
 {mobileMenuOpen && (
 <div style={{
 background: "#ffffff",
 borderBottom: "1px solid var(--line)",
 padding: "16px 24px 24px",
 display: "grid",
 gap: "14px",
 fontSize: "0.95rem"
 }}>
 <button
 onClick={() => {
 onPillarChange("meals");
 setMobileMenuOpen(false);
 document.getElementById("meal-plans")?.scrollIntoView({ behavior: "smooth" });
 }}
 style={{ textAlign: "left", padding: "8px 0", fontWeight: 700, color: "var(--forest)" }}
 >
 Healthy Meal Plans
 </button>
 <button
 onClick={() => {
 onPillarChange("consulting");
 setMobileMenuOpen(false);
 document.getElementById("restaurant-setup")?.scrollIntoView({ behavior: "smooth" });
 }}
 style={{ textAlign: "left", padding: "8px 0", fontWeight: 700, color: "var(--forest)" }}
 >
 ️ Restaurant Setup & Consulting
 </button>
 <a href="#calculator" onClick={() => setMobileMenuOpen(false)} style={{ padding: "8px 0" }}>
 Pricing Calculator
 </a>
 <a href="#dishes" onClick={() => setMobileMenuOpen(false)} style={{ padding: "8px 0" }}>
 Menu & Dishes Gallery
 </a>
 <a href="#about" onClick={() => setMobileMenuOpen(false)} style={{ padding: "8px 0" }}>
 About Chef Radhey
 </a>
 <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="btn btn-primary" style={{ width: "100%", marginTop: "8px" }}>
 Book Consultation ↗
 </a>
 </div>
 )}
 </header>

 <style jsx>{`
 @media (max-width: 980px) {
 :global(.desktop-nav) {
 display: none !important;
 }
 :global(.mobile-toggle) {
 display: grid !important;
 }
 }
 `}</style>
 </>
 );
}
