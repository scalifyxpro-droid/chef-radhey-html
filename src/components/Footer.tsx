"use client";

import React from "react";

export default function Footer() {
 return (
 <footer style={{
 background: "var(--forest-dark)",
 color: "#f3f5ee",
 padding: "64px 0 32px",
 borderTop: "1px solid rgba(255,255,255,0.08)"
 }}>
 <div className="container">
 
 {/* Main Grid */}
 <div style={{
 display: "grid",
 gridTemplateColumns: "1.4fr 1fr 1fr 1.1fr",
 gap: "40px",
 marginBottom: "52px"
 }} className="footer-grid">

 {/* Col 1: Brand */}
 <div>
 <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "16px" }}>
 <div style={{
 width: "42px",
 height: "42px",
 borderRadius: "50%",
 background: "var(--forest)",
 border: "1.5px solid var(--gold)",
 display: "grid",
 placeItems: "center",
 color: "var(--gold-light)",
 fontFamily: "var(--font-serif)",
 fontSize: "1.2rem",
 fontWeight: 700
 }}>
 CR
 </div>
 <div>
 <div style={{ fontFamily: "var(--font-serif)", fontSize: "1.4rem", fontWeight: 700, color: "#ffffff", lineHeight: 1.1 }}>
 Chef Radhey
 </div>
 <div style={{ fontSize: "0.68rem", color: "var(--gold-light)", letterSpacing: "0.12em", textTransform: "uppercase" }}>
 Nutritionist & Executive Chef
 </div>
 </div>
 </div>

 <p style={{ fontSize: "0.85rem", color: "#b9c7bd", lineHeight: 1.6, marginBottom: "20px", maxWidth: "320px" }}>
 Dubai&apos;s premier destination for personalized healthy meal plan deliveries and turnkey healthy restaurant concept development.
 </p>

 <div style={{ fontSize: "0.82rem", color: "var(--gold-light)", fontWeight: 600 }}>
 <em>Healthy Eating. Better Living.</em>
 </div>
 </div>

 {/* Col 2: Part 1 Meal Plans */}
 <div>
 <h4 style={{
 fontFamily: "var(--font-serif)",
 fontSize: "1.15rem",
 fontWeight: 600,
 color: "#ffffff",
 marginBottom: "16px",
 borderBottom: "1px solid rgba(255,255,255,0.12)",
 paddingBottom: "8px"
 }}>
 Meal Plans
 </h4>
 <div style={{ display: "grid", gap: "9px", fontSize: "0.82rem", color: "#c1cec4" }}>
 <a href="#meal-plans" style={{ transition: "color 0.2s" }}>High-Protein Muscle Gain</a>
 <a href="#meal-plans" style={{ transition: "color 0.2s" }}>Healthy Fat Loss Plan</a>
 <a href="#meal-plans" style={{ transition: "color 0.2s" }}>Balanced Nutrition Program</a>
 <a href="#meal-plans" style={{ transition: "color 0.2s" }}>Diabetes-Friendly Care</a>
 <a href="#meal-plans" style={{ transition: "color 0.2s" }}>Gut Health & Digestive</a>
 <a href="#meal-plans" style={{ transition: "color 0.2s" }}>PCOS / PCOD Hormonal Care</a>
 <a href="#meal-plans" style={{ transition: "color 0.2s" }}>Pregnancy & Postpartum</a>
 </div>
 </div>

 {/* Col 3: Part 2 Restaurant Setup */}
 <div>
 <h4 style={{
 fontFamily: "var(--font-serif)",
 fontSize: "1.15rem",
 fontWeight: 600,
 color: "#ffffff",
 marginBottom: "16px",
 borderBottom: "1px solid rgba(255,255,255,0.12)",
 paddingBottom: "8px"
 }}>
 Restaurant Setup
 </h4>
 <div style={{ display: "grid", gap: "9px", fontSize: "0.82rem", color: "#c1cec4" }}>
 <a href="#restaurant-setup" style={{ transition: "color 0.2s" }}>Healthy Restaurant Concept</a>
 <a href="#restaurant-setup" style={{ transition: "color 0.2s" }}>Menu & Recipe Development</a>
 <a href="#restaurant-setup" style={{ transition: "color 0.2s" }}>Macro & Calorie Certification</a>
 <a href="#restaurant-setup" style={{ transition: "color 0.2s" }}>Kitchen Operations & SOPs</a>
 <a href="#restaurant-setup" style={{ transition: "color 0.2s" }}>Yield Costing (25-30% Target)</a>
 <a href="#restaurant-setup" style={{ transition: "color 0.2s" }}>Chef Crew Hands-On Training</a>
 </div>
 </div>

 {/* Col 4: Dubai Contact & Hours */}
 <div>
 <h4 style={{
 fontFamily: "var(--font-serif)",
 fontSize: "1.15rem",
 fontWeight: 600,
 color: "#ffffff",
 marginBottom: "16px",
 borderBottom: "1px solid rgba(255,255,255,0.12)",
 paddingBottom: "8px"
 }}>
 Dubai Location & Desk
 </h4>
 <div style={{ display: "grid", gap: "10px", fontSize: "0.82rem", color: "#c1cec4" }}>
 <div> Business Bay & Al Quoz, Dubai, UAE</div>
 <div> WhatsApp: +971 56 975 4492</div>
 <div> Daily morning delivery (5:00 AM – 9:00 AM)</div>
 <div>★ Deliveries across Dubai, Abu Dhabi & Sharjah</div>
 </div>

 <div style={{ marginTop: "18px" }}>
 <a
 href="https://wa.me/971569754492?text=Hello%20Chef%20Radhey!"
 target="_blank"
 rel="noopener noreferrer"
 className="btn btn-whatsapp"
 style={{ width: "100%", padding: "10px", fontSize: "0.82rem" }}
 >
 Chat on WhatsApp Direct 
 </a>
 </div>
 </div>

 </div>

 {/* SEO Keywords Tag Cloud (Directly from PDF page 9) */}
 <div style={{
 borderTop: "1px solid rgba(255,255,255,0.1)",
 paddingTop: "24px",
 marginBottom: "28px",
 fontSize: "0.72rem",
 color: "#8fa195",
 lineHeight: 1.8
 }}>
 <strong style={{ color: "var(--gold-light)" }}>Dubai Nutrition & Food Business Services: </strong>
 healthy meal plans Dubai • meal plan delivery Dubai • high-protein muscle gain meal plan • healthy fat loss meal plan • balanced nutrition meal plan • pregnancy and postpartum nutrition meals • joint-friendly meal plan • PCOS / PCOD meal plan • gut health meal plan • diabetes-friendly meal plan • nutritionist consultation Dubai • restaurant menu consulting UAE • healthy food brand launch Dubai.
 </div>

 {/* Copyright */}
 <div style={{
 borderTop: "1px solid rgba(255,255,255,0.06)",
 paddingTop: "20px",
 display: "flex",
 justifyContent: "space-between",
 alignItems: "center",
 flexWrap: "wrap",
 gap: "12px",
 fontSize: "0.76rem",
 color: "#7e9185"
 }}>
 <div>
 © 2026 Chef Radhey. All rights reserved. Dubai, United Arab Emirates.
 </div>
 <div style={{ display: "flex", gap: "18px" }}>
 <a href="#top" style={{ color: "var(--gold-light)" }}>Back to top ↑</a>
 </div>
 </div>

 </div>

 <style jsx>{`
 @media (max-width: 900px) {
 :global(.footer-grid) {
 grid-template-columns: 1fr 1fr !important;
 }
 }
 @media (max-width: 540px) {
 :global(.footer-grid) {
 grid-template-columns: 1fr !important;
 }
 }
 `}</style>
 </footer>
 );
}
