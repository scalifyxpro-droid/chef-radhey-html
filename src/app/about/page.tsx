"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import SiteFooter from "@/components/SiteFooter";
import Link from "next/link";
import { WhatsAppIcon, ArrowUpRightIcon, CheckIcon } from "@/components/Icons";

export default function AboutPage() {
 return (
 <div className="site-root">
 <Navbar currentPath="/about" />

 {/* Subpage Hero */}
 <section className="subpage-hero">
 <div className="container">
 <div className="subpage-badge">Executive Chef & Nutrition Strategist · Dubai</div>
 <h1>About Chef Radhey</h1>
 <p>
 18+ years of culinary mastery in Dubai, UAE. Bridging the gap between high-end gastronomy and disciplined clinical nutritional science for discerning individuals and visionary food brands.
 </p>
 </div>
 </section>

 {/* Main Story & Portraits Grid */}
 <section style={{ padding: "80px 0", background: "var(--paper)" }}>
 <div className="container">
 <div style={{
 display: "grid",
 gridTemplateColumns: "1fr 1fr",
 gap: "55px",
 alignItems: "center"
 }}>
 {/* Left: Chef Portraits */}
 <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "18px" }}>
 <div style={{
 borderRadius: "10px",
 overflow: "hidden",
 background: "radial-gradient(circle at 50% 35%, #e2d1ae, #9db49a 70%)",
 boxShadow: "var(--shadow)",
 height: "380px"
 }}>
 <img
 src="/images/chef-radhey-uniform.png"
 alt="Chef Radhey in Executive Uniform"
 style={{ width: "100%", height: "100%", objectFit: "cover" }}
 />
 </div>

 <div style={{
 borderRadius: "10px",
 overflow: "hidden",
 background: "radial-gradient(circle at 50% 35%, #dfd1b8, #8ea78f 70%)",
 boxShadow: "var(--shadow)",
 height: "380px",
 marginTop: "30px"
 }}>
 <img
 src="/images/chef-radhey-suit.png"
 alt="Chef Radhey in Formal Suit"
 style={{ width: "100%", height: "100%", objectFit: "cover" }}
 />
 </div>
 </div>

 {/* Right: Biography & Philosophy */}
 <div>
 <div className="eyebrow" style={{ marginBottom: "10px" }}>The Philosophy</div>
 <h2 style={{ fontFamily: "Georgia, serif", fontSize: "38px", fontWeight: 400, lineHeight: "1.15", margin: "0 0 18px 0" }}>
 Healthy Food Should Taste Exceptional. Period.
 </h2>
 <p style={{ color: "var(--muted)", fontSize: "14.5px", lineHeight: "1.7", marginBottom: "16px" }}>
 For nearly two decades in Dubai, Chef Radhey has observed a recurring disconnect in the food landscape: meals were either gourmet but nutrient-poor, or strictly healthy but bland, uninspiring, and unsustainable.
 </p>
 <p style={{ color: "#4a594f", fontSize: "14.5px", lineHeight: "1.7", marginBottom: "24px" }}>
 Chef Radhey eliminated that compromise. By applying French culinary techniques, slow-simmered reductions, whole spices, and precise temperature control to organic lean proteins and complex produce, every dish delivers deep culinary satisfaction with strictly calculated macros.
 </p>

 {/* 4 Pillars of Excellence */}
 <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px", marginBottom: "32px" }}>
 <div style={{ borderLeft: "2px solid var(--gold, #24A170)", paddingLeft: "14px" }}>
 <strong style={{ display: "block", fontSize: "15px", color: "#17281f", marginBottom: "4px" }}>18+ Years Experience</strong>
 <span style={{ fontSize: "12.5px", color: "#4a594f" }}>Executive chef leadership across top Dubai culinary establishments.</span>
 </div>
 <div style={{ borderLeft: "2px solid var(--gold, #24A170)", paddingLeft: "14px" }}>
 <strong style={{ display: "block", fontSize: "15px", color: "#17281f", marginBottom: "4px" }}>1,000+ Recipe Vault</strong>
 <span style={{ fontSize: "12.5px", color: "#4a594f" }}>Proprietary dishes tested for taste, yield, and macro accuracy.</span>
 </div>
 <div style={{ borderLeft: "2px solid var(--gold, #24A170)", paddingLeft: "14px" }}>
 <strong style={{ display: "block", fontSize: "15px", color: "#17281f", marginBottom: "4px" }}>Zero Industrial Oils</strong>
 <span style={{ fontSize: "12.5px", color: "#4a594f" }}>Only extra virgin olive oil, cold-pressed coconut, and grass-fed fats.</span>
 </div>
 <div style={{ borderLeft: "2px solid var(--gold, #24A170)", paddingLeft: "14px" }}>
 <strong style={{ display: "block", fontSize: "15px", color: "#17281f", marginBottom: "4px" }}>Turnkey B2B Advisory</strong>
 <span style={{ fontSize: "12.5px", color: "#4a594f" }}>Helping food startups and cafes build scalable, profitable concepts.</span>
 </div>
 </div>

 <div style={{ display: "flex", gap: "14px", flexWrap: "wrap" }}>
 <Link href="/contact" className="btn btn-primary" style={{ padding: "12px 24px" }}>
 <span>Work With Chef Radhey</span>
 <ArrowUpRightIcon size={14} />
 </Link>
 <a
 href="https://wa.me/971569754492?text=Hello%20Chef%20Radhey!%20I%20would%20like%20to%20connect%20and%20discuss%20your%20services."
 target="_blank"
 rel="noopener noreferrer"
 className="btn btn-whatsapp"
 style={{ padding: "12px 24px" }}
 >
 <WhatsAppIcon size={16} color="#fff" />
 <span>Connect on WhatsApp</span>
 </a>
 </div>
 </div>
 </div>
 </div>
 </section>

 {/* Core Values / Standards */}
 <section style={{ padding: "70px 0", background: "var(--forest)", color: "#ffffff" }}>
 <div className="container">
 <div className="section-head center">
 <div className="eyebrow" style={{ color: "var(--gold-light)" }}>The Chef Radhey Standard</div>
 <h2 style={{ color: "#ffffff" }}>Guiding Principles of Our Kitchen</h2>
 <p style={{ color: "#d2ded5" }}>
 Every client meal and every restaurant consulting manual is governed by three non-negotiable culinary tenets.
 </p>
 </div>

 <div style={{
 display: "grid",
 gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
 gap: "28px",
 marginTop: "40px"
 }}>
 <div style={{ background: "rgba(255,255,255,0.06)", padding: "30px", borderRadius: "8px", border: "1px solid rgba(255,255,255,0.12)" }}>
 <div style={{ color: "var(--gold-light)", marginBottom: "14px" }}>
 <CheckIcon size={26} />
 </div>
 <h3 style={{ fontFamily: "Georgia, serif", fontSize: "22px", color: "#ffffff", margin: "0 0 10px 0" }}>
 1. Whole Ingredients, Zero Fillers
 </h3>
 <p style={{ color: "#d2ded5", fontSize: "13.5px", lineHeight: "1.6", margin: 0 }}>
 We refuse to use synthetic thickeners, artificial sweeteners, or cheap refined seed oils. If an ingredient cannot be found in nature, it has no place in Chef Radhey&apos;s kitchen.
 </p>
 </div>

 <div style={{ background: "rgba(255,255,255,0.06)", padding: "30px", borderRadius: "8px", border: "1px solid rgba(255,255,255,0.12)" }}>
 <div style={{ color: "var(--gold-light)", marginBottom: "14px" }}>
 <CheckIcon size={26} />
 </div>
 <h3 style={{ fontFamily: "Georgia, serif", fontSize: "22px", color: "#ffffff", margin: "0 0 10px 0" }}>
 2. Clinical Nutritional Precision
 </h3>
 <p style={{ color: "#d2ded5", fontSize: "13.5px", lineHeight: "1.6", margin: 0 }}>
 A meal plan is only as effective as its accuracy. Protein portions are weighed raw and cooked with precision, ensuring that clients targeting fat loss or athletic hypertrophy reach their exact metrics.
 </p>
 </div>

 <div style={{ background: "rgba(255,255,255,0.06)", padding: "30px", borderRadius: "8px", border: "1px solid rgba(255,255,255,0.12)" }}>
 <div style={{ color: "var(--gold-light)", marginBottom: "14px" }}>
 <CheckIcon size={26} />
 </div>
 <h3 style={{ fontFamily: "Georgia, serif", fontSize: "22px", color: "#ffffff", margin: "0 0 10px 0" }}>
 3. Operational Repeatability
 </h3>
 <p style={{ color: "#d2ded5", fontSize: "13.5px", lineHeight: "1.6", margin: 0 }}>
 For restaurant consulting clients, greatness is measured by consistency. We build strict kitchen SOPs and visual plating guidelines so that dish #1,000 tastes identical to dish #1.
 </p>
 </div>
 </div>
 </div>
 </section>

 <SiteFooter />
 </div>
 );
}
