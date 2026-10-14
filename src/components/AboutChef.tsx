"use client";

import React from "react";

export default function AboutChef() {
 return (
 <section id="about" className="section" style={{ background: "#ffffff" }}>
 <div className="container">
 
 <div style={{
 display: "grid",
 gridTemplateColumns: "0.95fr 1.05fr",
 gap: "54px",
 alignItems: "center"
 }} className="about-grid">

 {/* Left: Chef Portrait with Luxury Gold Accent */}
 <div style={{ position: "relative", display: "flex", justifyContent: "center" }}>
 <div style={{
 width: "100%",
 maxWidth: "460px",
 borderRadius: "var(--radius-lg)",
 overflow: "hidden",
 boxShadow: "var(--shadow-lg)",
 border: "1.5px solid var(--line-strong)",
 background: "var(--forest)",
 position: "relative"
 }}>
 <img
 src="/images/chef-radhey-suit.png"
 alt="Chef Radhey - Executive Culinary & Nutritionist Consultant"
 style={{
 width: "100%",
 height: "auto",
 objectFit: "cover",
 display: "block"
 }}
 />
 
 {/* Badge overlay */}
 <div style={{
 position: "absolute",
 bottom: "16px",
 left: "16px",
 right: "16px",
 background: "rgba(23, 61, 45, 0.94)",
 backdropFilter: "blur(12px)",
 padding: "16px 20px",
 borderRadius: "var(--radius-sm)",
 border: "1px solid rgba(185,155,98,0.4)",
 color: "#ffffff"
 }}>
 <div style={{ fontFamily: "var(--font-serif)", fontSize: "1.35rem", fontWeight: 700, color: "var(--gold-light)" }}>
 Chef Radhey
 </div>
 <div style={{ fontSize: "0.75rem", color: "#d2ded6" }}>
 Executive Chef · Nutrition Specialist · Restaurant Consultant (Dubai, UAE)
 </div>
 </div>
 </div>
 </div>

 {/* Right: Narrative & Philosophy */}
 <div>
 <div className="eyebrow">THE CULINARY ARCHITECT</div>
 <h2 style={{
 fontFamily: "var(--font-serif)",
 fontSize: "clamp(32px, 4vw, 50px)",
 color: "var(--forest)",
 fontWeight: 500,
 lineHeight: 1.1,
 marginTop: "12px",
 marginBottom: "20px"
 }}>
 A Chef&apos;s Soul.<br />
 <em style={{ color: "var(--gold-dark)", fontStyle: "italic" }}>A Nutritionist&apos;s Precision.</em>
 </h2>

 <p style={{ fontSize: "1.02rem", color: "var(--muted)", lineHeight: 1.65, marginBottom: "18px" }}>
 For over 18 years in Dubai&apos;s dynamic culinary world, Chef Radhey has championed a single uncompromising belief: <strong>healthy food must never taste like a compromise</strong>.
 </p>

 <p style={{ fontSize: "0.94rem", color: "var(--ink-light)", lineHeight: 1.6, marginBottom: "28px" }}>
 Too many fitness meal plans rely on bland boiled proteins and uninspired salads. Chef Radhey applies classic French and international culinary gastronomy—sous-vide moisture control, herb-infused reductions, artisan spice tempering, and delicate flavor pairing—all formulated within strict laboratory-calculated macronutrient parameters.
 </p>

 {/* 4 Core Pillars */}
 <div style={{
 display: "grid",
 gridTemplateColumns: "1fr 1fr",
 gap: "18px",
 marginBottom: "32px"
 }} className="about-points">
 <div style={{
 borderLeft: "2.5px solid var(--gold)",
 paddingLeft: "14px"
 }}>
 <strong style={{ display: "block", color: "var(--forest)", fontSize: "0.94rem", marginBottom: "3px" }}>
 Gourmet Formulation
 </strong>
 <span style={{ fontSize: "0.78rem", color: "var(--muted)", lineHeight: 1.4 }}>
 Dishes designed around genuine depth of flavor, umami, and vibrant textures.
 </span>
 </div>

 <div style={{
 borderLeft: "2.5px solid var(--forest)",
 paddingLeft: "14px"
 }}>
 <strong style={{ display: "block", color: "var(--forest)", fontSize: "0.94rem", marginBottom: "3px" }}>
 Verified Nutrition
 </strong>
 <span style={{ fontSize: "0.78rem", color: "var(--muted)", lineHeight: 1.4 }}>
 Transparent calorie, protein, carb, and lipid counts based on verified grams.
 </span>
 </div>

 <div style={{
 borderLeft: "2.5px solid var(--gold)",
 paddingLeft: "14px"
 }}>
 <strong style={{ display: "block", color: "var(--forest)", fontSize: "0.94rem", marginBottom: "3px" }}>
 Clinical Sensitivities
 </strong>
 <span style={{ fontSize: "0.78rem", color: "var(--muted)", lineHeight: 1.4 }}>
 Specialized culinary care for PCOS, diabetes, gut recovery, and prenatal nutrition.
 </span>
 </div>

 <div style={{
 borderLeft: "2.5px solid var(--forest)",
 paddingLeft: "14px"
 }}>
 <strong style={{ display: "block", color: "var(--forest)", fontSize: "0.94rem", marginBottom: "3px" }}>
 Commercial Viability
 </strong>
 <span style={{ fontSize: "0.78rem", color: "var(--muted)", lineHeight: 1.4 }}>
 Assisting restaurant partners to achieve consistent 25–30% food cost targets.
 </span>
 </div>
 </div>

 <div style={{ display: "flex", gap: "14px", flexWrap: "wrap" }}>
 <a href="#contact" className="btn btn-primary">
 Book Consultation with Chef Radhey ↗
 </a>
 <a
 href="https://wa.me/971569754492?text=Hi%20Chef%20Radhey,%20I%20would%20like%20to%20discuss%20a%20collaboration."
 target="_blank"
 rel="noopener noreferrer"
 className="btn btn-whatsapp"
 >
 Direct WhatsApp 
 </a>
 </div>

 </div>

 </div>

 </div>

 <style jsx>{`
 @media (max-width: 900px) {
 :global(.about-grid) {
 grid-template-columns: 1fr !important;
 }
 :global(.about-points) {
 grid-template-columns: 1fr !important;
 }
 }
 `}</style>
 </section>
 );
}
