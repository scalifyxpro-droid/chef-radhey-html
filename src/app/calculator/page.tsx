"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import SiteFooter from "@/components/SiteFooter";
import MealPlanCalculator from "@/components/MealPlanCalculator";
import { CheckIcon, WhatsAppIcon, ArrowUpRightIcon } from "@/components/Icons";
import Link from "next/link";

export default function CalculatorPage() {
 return (
 <div className="site-root">
 <Navbar currentPath="/calculator" />

 {/* Subpage Hero */}
 <section className="subpage-hero">
 <div className="container">
 <div className="subpage-badge">Interactive Investment Tool · Dubai UAE</div>
 <h1>Meal Plan Pricing Calculator</h1>
 <p>
 Choose your health or fitness goal, select daily meal count and package duration, and view real-time transparent pricing based on the official Chef Radhey AED rates with temperature-controlled daily Dubai delivery included.
 </p>
 </div>
 </section>

 {/* Interactive Calculator Section */}
 <MealPlanCalculator />

 {/* Transparent Pricing Guide & Standards */}
 <section style={{ padding: "70px 0", background: "var(--paper)", borderTop: "1px solid var(--line)" }}>
 <div className="container">
 <div className="section-head center">
 <div className="eyebrow">Chef Radhey Standards</div>
 <h2>What is Included in Every Package</h2>
 <p>
 Gourmet culinary execution meets nutritional precision. Here is why high-performing professionals and health-conscious Dubai residents choose Chef Radhey.
 </p>
 </div>

 <div style={{
 display: "grid",
 gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
 gap: "24px",
 marginTop: "36px"
 }}>
 <div style={{
 background: "var(--soft)",
 padding: "26px",
 borderRadius: "8px",
 border: "1px solid var(--line)"
 }}>
 <div style={{ color: "var(--forest)", marginBottom: "12px" }}>
 <CheckIcon size={24} />
 </div>
 <h3 style={{ fontFamily: "Georgia, serif", fontSize: "20px", fontWeight: 400, margin: "0 0 8px 0" }}>
 Temperature-Controlled Daily Delivery
 </h3>
 <p style={{ color: "var(--muted)", fontSize: "13px", lineHeight: "1.6", margin: 0 }}>
 Delivered every morning between 5:00 AM – 8:30 AM in specialized insulated packaging, preserving crisp texture and optimal nutrition throughout the day across all Dubai areas.
 </p>
 </div>

 <div style={{
 background: "var(--soft)",
 padding: "26px",
 borderRadius: "8px",
 border: "1px solid var(--line)"
 }}>
 <div style={{ color: "var(--forest)", marginBottom: "12px" }}>
 <CheckIcon size={24} />
 </div>
 <h3 style={{ fontFamily: "Georgia, serif", fontSize: "20px", fontWeight: 400, margin: "0 0 8px 0" }}>
 Verified Macro & Calorie Precision
 </h3>
 <p style={{ color: "var(--muted)", fontSize: "13px", lineHeight: "1.6", margin: 0 }}>
 Every meal portion is weighed to the gram with clear nutrition labeling for protein, carbohydrates, fats, and total calories, ensuring your fitness or clinical progress is predictable.
 </p>
 </div>

 <div style={{
 background: "var(--soft)",
 padding: "26px",
 borderRadius: "8px",
 border: "1px solid var(--line)"
 }}>
 <div style={{ color: "var(--forest)", marginBottom: "12px" }}>
 <CheckIcon size={24} />
 </div>
 <h3 style={{ fontFamily: "Georgia, serif", fontSize: "20px", fontWeight: 400, margin: "0 0 8px 0" }}>
 Zero Refined Sugars or Seed Oils
 </h3>
 <p style={{ color: "var(--muted)", fontSize: "13px", lineHeight: "1.6", margin: 0 }}>
 Only extra virgin olive oil, cold-pressed coconut oil, grass-fed butter, and unrefined natural ingredients are utilized in Chef Radhey&apos;s kitchen. No commercial fillers or cheap seed oils.
 </p>
 </div>

 <div style={{
 background: "var(--soft)",
 padding: "26px",
 borderRadius: "8px",
 border: "1px solid var(--line)"
 }}>
 <div style={{ color: "var(--forest)", marginBottom: "12px" }}>
 <CheckIcon size={24} />
 </div>
 <h3 style={{ fontFamily: "Georgia, serif", fontSize: "20px", fontWeight: 400, margin: "0 0 8px 0" }}>
 Flexible Travel & Pause Policy
 </h3>
 <p style={{ color: "var(--muted)", fontSize: "13px", lineHeight: "1.6", margin: 0 }}>
 Traveling or dining out? Pause your subscription anytime with 24 hours advance notice via WhatsApp. Your remaining days will freeze and roll over seamlessly.
 </p>
 </div>

 <div style={{
 background: "var(--soft)",
 padding: "26px",
 borderRadius: "8px",
 border: "1px solid var(--line)"
 }}>
 <div style={{ color: "var(--forest)", marginBottom: "12px" }}>
 <CheckIcon size={24} />
 </div>
 <h3 style={{ fontFamily: "Georgia, serif", fontSize: "20px", fontWeight: 400, margin: "0 0 8px 0" }}>
 Allergy & Taste Exclusions
 </h3>
 <p style={{ color: "var(--muted)", fontSize: "13px", lineHeight: "1.6", margin: 0 }}>
 Specify up to 3 individual ingredient exclusions (e.g. no shellfish, no dairy, no cilantro). Chef Radhey customizes recipe substitutions without altering your caloric target.
 </p>
 </div>

 <div style={{
 background: "var(--soft)",
 padding: "26px",
 borderRadius: "8px",
 border: "1px solid var(--line)"
 }}>
 <div style={{ color: "var(--forest)", marginBottom: "12px" }}>
 <CheckIcon size={24} />
 </div>
 <h3 style={{ fontFamily: "Georgia, serif", fontSize: "20px", fontWeight: 400, margin: "0 0 8px 0" }}>
 Direct Chef WhatsApp Concierge
 </h3>
 <p style={{ color: "var(--muted)", fontSize: "13px", lineHeight: "1.6", margin: 0 }}>
 Direct messaging access to Chef Radhey and our Dubai operations desk for fast menu customization, delivery address updates, and nutritional guidance.
 </p>
 </div>
 </div>

 {/* Quick Consultation CTA */}
 <div style={{
 marginTop: "60px",
 background: "var(--forest)",
 color: "#ffffff",
 padding: "36px 32px",
 borderRadius: "10px",
 display: "flex",
 alignItems: "center",
 justifyContent: "space-between",
 flexWrap: "wrap",
 gap: "24px",
 boxShadow: "var(--shadow)"
 }}>
 <div style={{ maxWidth: "620px" }}>
 <div style={{ color: "var(--gold-light)", fontSize: "11px", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: "8px" }}>
 Need Custom Calorie Calculation?
 </div>
 <h2 style={{ fontFamily: "Georgia, serif", fontSize: "28px", fontWeight: 400, color: "#ffffff", margin: "0 0 8px 0" }}>
 Have Specific Medical or Dietary Targets?
 </h2>
 <p style={{ color: "#d2ded5", fontSize: "14px", margin: 0, lineHeight: "1.5" }}>
 Send your details to Chef Radhey for a customized consultation on macros, allergies, and clinical nutrition requirements.
 </p>
 </div>

 <Link href="/contact" className="btn btn-gold" style={{ padding: "14px 28px", fontSize: "14px", whiteSpace: "nowrap" }}>
 <span>Work With Chef Radhey</span>
 <ArrowUpRightIcon size={15} />
 </Link>
 </div>
 </div>
 </section>

 <SiteFooter />
 </div>
 );
}
