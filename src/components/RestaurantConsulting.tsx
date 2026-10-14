"use client";

import React, { useState } from "react";

interface ConsultingTier {
 id: string;
 name: string;
 badge: string;
 target: string;
 scope: string[];
 deliverables: string;
 icon: string;
}

const CONSULTING_TIERS: ConsultingTier[] = [
 {
 id: "menu-dev",
 name: "Healthy Menu Engineering & Recipe Formulation",
 badge: "Most Popular for Cafes",
 target: "Existing cafes, bistros, and restaurants wanting a profitable healthy/keto/vegan section.",
 scope: [
 "Custom recipe formulation (15 to 45 signature dishes)",
 "Ingredient portion specifications & yield testing",
 "Standard Operating Procedure (SOP) prep recipe cards",
 "Full macro & calorie laboratory calculation breakdown",
 "Allergen compliance mapping (Gluten, Dairy, Nuts, Vegan)"
 ],
 deliverables: "Comprehensive Recipe Binder + Kitchen Staff Training Session",
 icon: ""
 },
 {
 id: "turnkey-setup",
 name: "Turnkey Healthy Restaurant & Cloud Kitchen Launch",
 badge: "Full End-to-End Setup",
 target: "Hospitality investors and entrepreneurs launching a new healthy food brand in UAE.",
 scope: [
 "Concept definition, food identity & competitive benchmarking in Dubai",
 "Complete menu architecture: Breakfast, Mains, Bowls, Juices, Healthy Desserts",
 "Commercial kitchen workflow design & equipment sourcing consultation",
 "Supplier procurement networks & ingredient negotiation in UAE",
 "Executive Chef & culinary line-cook hands-on training",
 "Soft opening execution, plate styling & quality audits"
 ],
 deliverables: "Turnkey Kitchen Readiness + Launch Operations Playbook",
 icon: ""
 },
 {
 id: "macro-audit",
 name: "Macro Verification & Nutrition Labelling Compliance",
 badge: "Compliance & Trust",
 target: "Meal-prep companies and food delivery brands needing verified nutritional labels.",
 scope: [
 "Scientific nutritional analysis per serving",
 "Calories, Protein, Total Carbs, Net Carbs, Fats & Fiber certification",
 "Dubai Municipality & regulatory food labeling formatting",
 "Packaging suitability & shelf-life stability guidance"
 ],
 deliverables: "Certified Nutrition Facts Panels + Print-Ready Label Files",
 icon: ""
 }
];

export default function RestaurantConsulting() {
 const [selectedStep, setSelectedStep] = useState<number>(1);
 const [activeTierId, setActiveTierId] = useState<string>("turnkey-setup");

 const steps = [
 {
 num: "01",
 title: "Concept & Market Viability",
 desc: "We analyze Dubai's competitive healthy dining landscape, define your unique culinary proposition, target customer persona, and unit economics."
 },
 {
 num: "02",
 title: "Menu Architecture & Recipe R&D",
 desc: "Chef Radhey formulates proprietary dishes balancing mouthfeel, flavor, visual appeal, ingredient availability, and targeted gross margins (25-30% food cost)."
 },
 {
 num: "03",
 title: "Macro Calculations & Costing",
 desc: "Every gram of ingredient is weighed, verified for calories and macronutrients, and entered into standardized yield costing spreadsheets."
 },
 {
 num: "04",
 title: "Kitchen Workflow & Launch",
 desc: "Line layouts, prep stations, packaging protocols for delivery, and rigorous on-site training of your culinary crew prior to soft opening."
 }
 ];

 return (
 <section id="restaurant-setup" className="section" style={{
 background: "linear-gradient(180deg, var(--forest-dark) 0%, var(--forest) 100%)",
 color: "#ffffff"
 }}>
 <div className="container">
 
 {/* Section Head */}
 <div className="section-head center" style={{ color: "#ffffff" }}>
 <div className="eyebrow" style={{ color: "var(--gold-light)" }}>
 PART 2 · FOR RESTAURANTS, CAFES & FOOD ENTREPRENEURS
 </div>
 <h2 style={{ color: "#ffffff" }}>
 Turn Your Healthy Food Concept Into a Scalable, Market-Ready Reality.
 </h2>
 <p style={{ color: "#d2ded5" }}>
 Leverage Chef Radhey&apos;s 18+ years of culinary leadership in Dubai to launch, optimize, or scale high-margin healthy restaurants, meal-prep brands, and delivery cloud kitchens.
 </p>
 </div>

 {/* 4-Step Interactive Roadmap */}
 <div style={{ marginBottom: "64px" }}>
 <div style={{
 display: "grid",
 gridTemplateColumns: "repeat(4, 1fr)",
 gap: "16px"
 }} className="steps-grid">
 {steps.map((st, i) => {
 const isActive = selectedStep === i + 1;
 return (
 <div
 key={st.num}
 onClick={() => setSelectedStep(i + 1)}
 style={{
 background: isActive ? "rgba(185,155,98,0.18)" : "rgba(255,255,255,0.05)",
 border: "1.5px solid",
 borderColor: isActive ? "var(--gold)" : "rgba(255,255,255,0.12)",
 borderRadius: "var(--radius-md)",
 padding: "24px 20px",
 cursor: "pointer",
 transition: "var(--transition)",
 position: "relative"
 }}
 >
 <div style={{
 fontFamily: "var(--font-serif)",
 fontSize: "2rem",
 color: isActive ? "var(--gold-light)" : "#8fa597",
 fontWeight: 700,
 marginBottom: "12px"
 }}>
 {st.num}
 </div>
 <h4 style={{
 fontSize: "1.05rem",
 fontWeight: 700,
 color: "#ffffff",
 marginBottom: "8px",
 lineHeight: 1.25
 }}>
 {st.title}
 </h4>
 <p style={{
 fontSize: "0.82rem",
 color: "#d0dbd3",
 lineHeight: 1.55
 }}>
 {st.desc}
 </p>
 </div>
 );
 })}
 </div>
 </div>

 {/* Consulting Service Packages */}
 <div style={{
 display: "grid",
 gridTemplateColumns: "repeat(3, 1fr)",
 gap: "24px",
 marginBottom: "56px"
 }} className="tiers-grid">
 {CONSULTING_TIERS.map(tier => {
 const isSelected = activeTierId === tier.id;
 return (
 <div
 key={tier.id}
 onClick={() => setActiveTierId(tier.id)}
 style={{
 background: isSelected ? "rgba(255, 255, 255, 0.98)" : "rgba(255, 255, 255, 0.08)",
 color: isSelected ? "var(--ink)" : "#ffffff",
 borderRadius: "var(--radius-md)",
 border: "1.5px solid",
 borderColor: isSelected ? "var(--gold)" : "rgba(255, 255, 255, 0.15)",
 padding: "32px 26px",
 display: "flex",
 flexDirection: "column",
 cursor: "pointer",
 transition: "var(--transition)",
 boxShadow: isSelected ? "0 18px 45px rgba(0,0,0,0.35)" : "none"
 }}
 >
 <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "14px" }}>
 <span style={{ fontSize: "2rem" }}>{tier.icon}</span>
 <span style={{
 fontSize: "0.68rem",
 fontWeight: 800,
 textTransform: "uppercase",
 padding: "4px 10px",
 borderRadius: "var(--radius-full)",
 background: isSelected ? "var(--gold-light)" : "rgba(185,155,98,0.25)",
 color: isSelected ? "var(--gold-dark)" : "var(--gold-light)"
 }}>
 {tier.badge}
 </span>
 </div>

 <h3 style={{
 fontFamily: "var(--font-serif)",
 fontSize: "1.45rem",
 fontWeight: 600,
 marginBottom: "10px",
 lineHeight: 1.2,
 color: isSelected ? "var(--forest)" : "#ffffff"
 }}>
 {tier.name}
 </h3>

 <p style={{
 fontSize: "0.82rem",
 color: isSelected ? "var(--muted)" : "#b9c7bd",
 lineHeight: 1.5,
 marginBottom: "20px"
 }}>
 {tier.target}
 </p>

 <div style={{
 fontSize: "0.78rem",
 fontWeight: 700,
 textTransform: "uppercase",
 letterSpacing: "0.06em",
 marginBottom: "10px",
 color: isSelected ? "var(--forest2)" : "var(--gold-light)"
 }}>
 Core Consulting Scope:
 </div>

 <ul style={{
 listStyle: "none",
 padding: 0,
 margin: 0,
 display: "grid",
 gap: "8px",
 fontSize: "0.82rem",
 color: isSelected ? "var(--ink-light)" : "#d4ded7",
 marginBottom: "24px",
 flex: 1
 }}>
 {tier.scope.map((item, idx) => (
 <li key={idx} style={{ display: "flex", alignItems: "flex-start", gap: "8px" }}>
 <span style={{ color: "var(--gold)", fontWeight: 800 }}>✓</span>
 <span>{item}</span>
 </li>
 ))}
 </ul>

 <div style={{
 background: isSelected ? "var(--surface)" : "rgba(255,255,255,0.08)",
 padding: "12px 14px",
 borderRadius: "var(--radius-xs)",
 fontSize: "0.76rem",
 marginBottom: "20px",
 color: isSelected ? "var(--forest)" : "var(--gold-light)",
 fontWeight: 600
 }}>
 {tier.deliverables}
 </div>

 <a
 href={`https://wa.me/971569754492?text=Hi%20Chef%20Radhey,%20I%20am%20interested%20in%20Restaurant%20Consulting%20for:%20${encodeURIComponent(tier.name)}`}
 target="_blank"
 rel="noopener noreferrer"
 className={isSelected ? "btn btn-primary" : "btn btn-outline"}
 style={{
 width: "100%",
 padding: "12px",
 borderColor: isSelected ? "var(--forest)" : "rgba(255,255,255,0.3)",
 color: isSelected ? "#ffffff" : "#ffffff"
 }}
 >
 Schedule Strategy Session ↗
 </a>
 </div>
 );
 })}
 </div>

 {/* Feature strip */}
 <div style={{
 background: "rgba(255,255,255,0.06)",
 borderRadius: "var(--radius-md)",
 padding: "28px 36px",
 display: "flex",
 justifyContent: "space-between",
 alignItems: "center",
 flexWrap: "wrap",
 gap: "20px",
 border: "1px solid rgba(255,255,255,0.12)"
 }}>
 <div>
 <div style={{ fontFamily: "var(--font-serif)", fontSize: "1.4rem", color: "var(--gold-light)" }}>
 Planning to Launch in Dubai or GCC?
 </div>
 <div style={{ fontSize: "0.85rem", color: "#c6d3c9" }}>
 Book an initial 30-minute menu and concept assessment with Chef Radhey.
 </div>
 </div>
 <div style={{ display: "flex", gap: "12px" }}>
 <a
 href="#contact"
 className="btn btn-gold"
 style={{ padding: "12px 24px" }}
 >
 Request Proposal Form ↓
 </a>
 </div>
 </div>

 </div>

 <style jsx>{`
 @media (max-width: 950px) {
 :global(.steps-grid) {
 grid-template-columns: 1fr 1fr !important;
 }
 :global(.tiers-grid) {
 grid-template-columns: 1fr !important;
 }
 }
 @media (max-width: 580px) {
 :global(.steps-grid) {
 grid-template-columns: 1fr !important;
 }
 }
 `}</style>
 </section>
 );
}
