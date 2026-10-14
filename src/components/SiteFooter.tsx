import React from "react";
import Link from "next/link";
import { WhatsAppIcon, ArrowUpRightIcon, MailIcon, PinIcon } from "@/components/Icons";

export default function SiteFooter() {
 return (
 <footer className="footer">
 <div className="container" style={{ display: "flex", flexDirection: "column", gap: "36px" }}>
 
 {/* Top Footer Row */}
 <div style={{
 display: "grid",
 gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
 gap: "36px",
 borderBottom: "1px solid rgba(255, 255, 255, 0.08)",
 paddingBottom: "36px"
 }}>
 {/* Brand Info */}
 <div>
 <Link href="/" className="brand" style={{ marginBottom: "16px", display: "inline-flex" }}>
 <span className="brand-mark">CR</span>
 <span className="brand-info">
 <span className="brand-name" style={{ color: "#ffffff" }}>Chef Radhey</span>
 <span className="brand-sub" style={{ color: "var(--gold-light)" }}>Nutrition · Culinary · Consulting</span>
 </span>
 </Link>
 <p style={{ color: "#b8c7bc", fontSize: "13px", lineHeight: "1.6", maxWidth: "340px", marginTop: "12px" }}>
 Personalized gourmet nutrition meal plans and high-performance commercial restaurant setup consulting across Dubai, UAE.
 </p>
 <div style={{ marginTop: "16px" }}>
 <a
 href="https://wa.me/971569754492?text=Hello%20Chef%20Radhey!%20I%20would%20like%20to%20inquire%20about%20your%20services."
 target="_blank"
 rel="noopener noreferrer"
 className="btn btn-whatsapp"
 style={{ padding: "8px 16px", fontSize: "12px" }}
 >
 <WhatsAppIcon size={14} color="#fff" />
 <span>+971 56 975 4492</span>
 </a>
 </div>
 </div>

 {/* Quick Links */}
 <div>
 <div style={{ color: "#ffffff", fontWeight: 700, fontSize: "14px", marginBottom: "14px", letterSpacing: "0.04em" }}>
 EXPLORE
 </div>
 <div style={{ display: "flex", flexDirection: "column", gap: "10px", fontSize: "13px" }}>
 <Link href="/meal-plans" style={{ color: "#c6d4ca", textDecoration: "none" }}>Meal Plans (14 Options)</Link>
 <Link href="/calculator" style={{ color: "#c6d4ca", textDecoration: "none" }}>Pricing Calculator (AED)</Link>
 <Link href="/recipes" style={{ color: "#c6d4ca", textDecoration: "none" }}>1,000+ Recipe Library</Link>
 <Link href="/gallery" style={{ color: "#c6d4ca", textDecoration: "none" }}>Photo & Concept Gallery</Link>
 <Link href="/consulting" style={{ color: "#c6d4ca", textDecoration: "none" }}>Restaurant Consulting</Link>
 <Link href="/about" style={{ color: "#c6d4ca", textDecoration: "none" }}>About Chef Radhey</Link>
 </div>
 </div>

 {/* Service Areas */}
 <div>
 <div style={{ color: "#ffffff", fontWeight: 700, fontSize: "14px", marginBottom: "14px", letterSpacing: "0.04em" }}>
 SERVICES
 </div>
 <div style={{ display: "flex", flexDirection: "column", gap: "10px", fontSize: "13px", color: "#c6d4ca" }}>
 <span>Fat Loss & Muscle Gain Plans</span>
 <span>Diabetic & Gut-Health Meals</span>
 <span>Commercial Menu Engineering</span>
 <span>Cloud Kitchen & Setup Advisory</span>
 <span>Portion & Calorie Verification</span>
 </div>
 </div>

 {/* Dubai Details */}
 <div>
 <div style={{ color: "#ffffff", fontWeight: 700, fontSize: "14px", marginBottom: "14px", letterSpacing: "0.04em" }}>
 LOCATION & CONTACT
 </div>
 <div style={{ display: "flex", flexDirection: "column", gap: "12px", fontSize: "13px", color: "#c6d4ca" }}>
 <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
 <PinIcon size={14} />
 <span>Dubai, United Arab Emirates</span>
 </div>
 <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
 <MailIcon size={14} />
 <span>enquiries@chefradhey.com</span>
 </div>
 <div style={{ marginTop: "6px" }}>
 <Link href="/contact" className="btn btn-outline" style={{ borderColor: "rgba(255,255,255,0.25)", color: "#fff", fontSize: "12px", padding: "8px 16px" }}>
 <span>Book Consultation</span>
 <ArrowUpRightIcon size={13} />
 </Link>
 </div>
 </div>
 </div>
 </div>

 {/* Bottom Bar */}
 <div style={{
 display: "flex",
 justifyContent: "space-between",
 alignItems: "center",
 flexWrap: "wrap",
 gap: "14px",
 fontSize: "12px",
 color: "#9db0a2"
 }}>
 <div>
 © 2026 Chef Radhey. All rights reserved. Healthy Eating. Better Living.
 </div>
 <div style={{ display: "flex", gap: "18px" }}>
 <Link href="/meal-plans" style={{ color: "#9db0a2", textDecoration: "none" }}>Meal Plans</Link>
 <Link href="/calculator" style={{ color: "#9db0a2", textDecoration: "none" }}>Calculator</Link>
 <Link href="/consulting" style={{ color: "#9db0a2", textDecoration: "none" }}>Consulting</Link>
 <Link href="/contact" style={{ color: "#9db0a2", textDecoration: "none" }}>Contact</Link>
 </div>
 </div>

 </div>
 </footer>
 );
}
