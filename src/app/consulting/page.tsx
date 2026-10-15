"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import SiteFooter from "@/components/SiteFooter";
import Link from "next/link";
import {
 WhatsAppIcon,
 RestaurantIcon,
 CheckIcon,
 ArrowUpRightIcon
} from "@/components/Icons";

export default function ConsultingPage() {
 const [businessName, setBusinessName] = useState("");
 const [contactName, setContactName] = useState("");
 const [phone, setPhone] = useState("+971 ");
 const [conceptType, setConceptType] = useState("Healthy Restaurant / Dine-in");
 const [projectTimeline, setProjectTimeline] = useState("Immediate (Within 30 Days)");
 const [notes, setNotes] = useState("");

 const whatsappMessage = encodeURIComponent(
 `Hello Chef Radhey! I am inquiring about Food Business / Restaurant Consulting in the UAE:\n` +
 `• Business / Project: ${businessName || "New Venture"}\n` +
 `• Contact Person: ${contactName || "Founder"}\n` +
 `• WhatsApp / Phone: ${phone}\n` +
 `• Concept Type: ${conceptType}\n` +
 `• Target Timeline: ${projectTimeline}\n` +
 `• Details / Scope: ${notes || "General consulting discussion"}\n\n` +
 `*Healthy Eating. Better Living.* `
 );

 const services = [
 {
 num: "01",
 title: "Healthy Restaurant & Cloud Kitchen Launch",
 desc: "Turnkey operational setup for food startups and hospitality entrepreneurs. From initial culinary positioning to commercial equipment procurement and health inspection sign-off across Dubai and the UAE.",
 points: ["Concept viability and differentiation analysis", "Back-of-house kitchen workflow design", "Supplier procurement & ingredient cold-chain setup"]
 },
 {
 num: "02",
 title: "Menu Engineering & Nutritional Macro Verification",
 desc: "Transforming recipes into standardized commercial menus. We calculate verified calories, protein, carbohydrates, and fats while preserving unforgettable gourmet taste and optimal plate presentation.",
 points: ["Laboratory-grade macro & allergen calculations", "High-margin signature dish engineering", "Keto, diabetic, vegan, and fitness menu extensions"]
 },
 {
 num: "03",
 title: "Recipe Costing, Yield Management & Margin Control",
 desc: "Stop margin leakage. We calculate exact gram-level ingredient yields, plate cost percentages, and bulk preparation economics to guarantee your food cost remains consistently between 24%–28%.",
 points: ["Granular plate cost sheets & ERP recipes", "Yield testing on proteins, produce & dry goods", "Menu pricing strategy for maximum profitability"]
 },
 {
 num: "04",
 title: "Kitchen Workflow SOPs & Culinary Staff Training",
 desc: "Empower your brigade to cook with precision regardless of staff turnover. We write detailed Standard Operating Procedures (SOPs) with photographic step-by-step plating and prep guides.",
 points: ["Station prep sheets & master culinary manuals", "Hands-on brigade training in your commercial kitchen", "Sanitation, HACCP & Dubai Municipality compliance"]
 },
 {
 num: "05",
 title: "Healthy Meal Plan Subscription Brand Setup",
 desc: "Launch your own daily meal-prep delivery company in Dubai. We architect high-efficiency packaging, batch cooling lines, thermal courier dispatch routines, and recurring subscription rotation menus.",
 points: ["14-day & 28-day rotational menu architecture", "Sealed container selection & labeling standards", "Cold-chain dispatch timing & delivery route optimization"]
 },
 {
 num: "06",
 title: "Existing Restaurant Menu Optimization & Turnaround",
 desc: "Have an existing venue that needs healthy, wellness, or macro-focused offerings? Chef Radhey revamps slow-moving menus into vibrant, healthy bestsellers that attract high-spending Dubai diners.",
 points: ["Customer feedback & sales velocity analysis", "Signature healthy dish development", "Marketing storytelling and calorie transparency"]
 }
 ];

 return (
 <div className="site-root">
 <Navbar currentPath="/consulting" />

 {/* Subpage Hero */}
 <section className="subpage-hero">
 <div className="container">
 <div className="subpage-badge">B2B Hospitality Advisory · UAE</div>
 <h1>Healthy Restaurant & Food Business Consulting</h1>
 <p>
 18+ years of commercial kitchen leadership in Dubai. Chef Radhey partners with restaurant groups, cloud kitchens, wellness cafes, and meal plan startups to design profitable menus, streamline line workflows, and calculate verified nutrition.
 </p>
 </div>
 </section>

 {/* Commercial Showcase Strip */}
 <section style={{ padding: "40px 0", background: "var(--paper)", borderBottom: "1px solid var(--line)" }}>
 <div className="container">
 <div style={{
 display: "grid",
 gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
 gap: "20px"
 }}>
 <div style={{ borderRadius: "8px", overflow: "hidden", height: "180px", background: "#e0e6df" }}>
 <img
 src="/images/gallery/gal-commercial-line-1.jpg"
 alt="Commercial Kitchen Line"
 style={{ width: "100%", height: "100%", objectFit: "cover" }}
 />
 </div>
 <div style={{ borderRadius: "8px", overflow: "hidden", height: "180px", background: "#e0e6df" }}>
 <img
 src="/images/gallery/gal-bistro-table.jpg"
 alt="Restaurant Dining Setup"
 style={{ width: "100%", height: "100%", objectFit: "cover" }}
 />
 </div>
 <div style={{ borderRadius: "8px", overflow: "hidden", height: "180px", background: "#e0e6df" }}>
 <img
 src="/images/gallery/gal-kitchen-prep.jpg"
 alt="Chef Line Prep"
 style={{ width: "100%", height: "100%", objectFit: "cover" }}
 />
 </div>
 <div style={{ borderRadius: "8px", overflow: "hidden", height: "180px", background: "#e0e6df" }}>
 <img
 src="/images/gallery/gal-plating-art.jpg"
 alt="Artisan Plating"
 style={{ width: "100%", height: "100%", objectFit: "cover" }}
 />
 </div>
 </div>
 </div>
 </section>

 {/* 6 Key Consulting Services */}
 <section style={{ padding: "70px 0", background: "var(--soft)" }}>
 <div className="container">
 <div className="section-head center">
 <div className="eyebrow">End-to-End Culinary Advisory</div>
 <h2>Commercial Services Tailored for Growth</h2>
 <p>
 Combining Michelin-grade culinary technique with hard operational discipline to ensure your food concept thrives in Dubai&apos;s competitive dining market.
 </p>
 </div>

 <div style={{
 display: "grid",
 gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))",
 gap: "24px",
 marginTop: "40px"
 }}>
 {services.map((s, idx) => (
 <div
 key={idx}
 style={{
 background: "var(--paper)",
 border: "1px solid var(--line)",
 borderRadius: "8px",
 padding: "32px",
 display: "flex",
 flexDirection: "column",
 boxShadow: "0 2px 10px rgba(0,0,0,0.02)"
 }}
 >
 <div style={{
 display: "flex",
 justifyContent: "space-between",
 alignItems: "baseline",
 marginBottom: "14px"
 }}>
 <span style={{
 fontFamily: "Georgia, serif",
 fontSize: "24px",
 color: "var(--gold)",
 fontWeight: 700
 }}>
 {s.num}
 </span>
 <div style={{ color: "var(--forest)" }}>
 <RestaurantIcon size={22} />
 </div>
 </div>

 <h3 style={{
 fontFamily: "Georgia, serif",
 fontSize: "22px",
 fontWeight: 400,
 color: "#17281f",
 margin: "0 0 12px 0",
 lineHeight: "1.25"
 }}>
 {s.title}
 </h3>

 <p style={{ fontSize: "13.5px", color: "#4a594f", lineHeight: "1.6", margin: "0 0 20px 0", flex: 1 }}>
 {s.desc}
 </p>

 <div style={{ borderTop: "1px solid var(--line)", paddingTop: "16px" }}>
 <div style={{ fontSize: "11px", fontWeight: 700, color: "var(--gold-dark, #24A170)", textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: "8px" }}>
 Deliverables & Focus:
 </div>
 <ul style={{ paddingLeft: "18px", margin: 0, fontSize: "12.5px", color: "#4a594f", display: "grid", gap: "6px" }}>
 {s.points.map((pt, pIdx) => (
 <li key={pIdx}>{pt}</li>
 ))}
 </ul>
 </div>
 </div>
 ))}
 </div>
 </div>
 </section>

 {/* Business Inquiry Questionnaire (ONLY WhatsApp Button, Zero Emojis) */}
 <section style={{ padding: "80px 0", background: "var(--cream)" }}>
 <div className="container" style={{ maxWidth: "860px" }}>
 <div className="section-head center">
 <div className="eyebrow" style={{ color: "var(--gold-dark, #24A170)", fontWeight: 800, letterSpacing: "0.15em", textTransform: "uppercase", fontSize: "11px", marginBottom: "8px" }}>
 Direct Commercial Consultation
 </div>
 <h2 style={{ color: "#17281f", fontFamily: "Georgia, serif", fontSize: "clamp(30px, 4vw, 44px)", margin: "10px 0 14px", fontWeight: 400 }}>
 Schedule a Business Discovery Meeting
 </h2>
 <p style={{ color: "#526257", fontSize: "15px", lineHeight: "1.65", maxWidth: "680px", margin: "0 auto" }}>
 Share your project scope, location, and target launch date. Chef Radhey will review your requirements and connect directly on WhatsApp to explore how we can build your culinary vision.
 </p>
 </div>

 <form
 onSubmit={e => e.preventDefault()}
 className="contact-form"
 style={{ marginTop: "32px" }}
 >
 {/* 1. Business / Project Name */}
 <div className="field">
 <label htmlFor="bizName">
 <span className="form-num">1</span> Restaurant or Business Name *
 </label>
 <input
 id="bizName"
 required
 placeholder="e.g. Green Bowl Cafe / Cloud Kitchen Launch"
 value={businessName}
 onChange={e => setBusinessName(e.target.value)}
 />
 </div>

 {/* 2. Contact Person */}
 <div className="field">
 <label htmlFor="contName">
 <span className="form-num">2</span> Founder / Key Contact Name *
 </label>
 <input
 id="contName"
 required
 placeholder="Your full name"
 value={contactName}
 onChange={e => setContactName(e.target.value)}
 />
 </div>

 {/* 3. Phone / WhatsApp */}
 <div className="field">
 <label htmlFor="bizPhone">
 <span className="form-num">3</span> WhatsApp / Phone Number *
 </label>
 <input
 id="bizPhone"
 type="tel"
 required
 placeholder="+971…"
 value={phone}
 onChange={e => setPhone(e.target.value)}
 />
 </div>

 {/* 4. Concept Type */}
 <div className="field">
 <label htmlFor="bizConcept">
 <span className="form-num">4</span> Project Concept *
 </label>
 <select
 id="bizConcept"
 value={conceptType}
 onChange={e => setConceptType(e.target.value)}
 >
 <option value="Healthy Restaurant / Dine-in">Healthy Restaurant / Dine-in</option>
 <option value="Cloud Kitchen / Ghost Kitchen">Cloud Kitchen / Ghost Kitchen</option>
 <option value="Meal Plan Subscription Brand">Meal Plan Subscription Brand</option>
 <option value="Wellness Cafe & Juice Bar">Wellness Cafe & Juice Bar</option>
 <option value="Existing Menu Overhaul">Existing Menu Overhaul</option>
 <option value="Macro / Nutrition Verification Only">Macro / Nutrition Verification Only</option>
 </select>
 </div>

 {/* 5. Timeline */}
 <div className="field full">
 <label htmlFor="bizTimeline">
 <span className="form-num">5</span> Desired Timeline *
 </label>
 <select
 id="bizTimeline"
 value={projectTimeline}
 onChange={e => setProjectTimeline(e.target.value)}
 >
 <option value="Immediate (Within 30 Days)">Immediate (Within 30 Days)</option>
 <option value="1 to 3 Months">1 to 3 Months</option>
 <option value="3 to 6 Months">3 to 6 Months</option>
 <option value="Planning / Concept Stage">Planning / Concept Stage</option>
 </select>
 </div>

 {/* Scope / Notes */}
 <div className="field full">
 <label htmlFor="bizNotes">Brief Project Scope or Key Challenges</label>
 <textarea
 id="bizNotes"
 placeholder="Describe your location, seating capacity, target cuisine, or specific kitchen challenges..."
 value={notes}
 onChange={e => setNotes(e.target.value)}
 ></textarea>
 </div>

 {/* ONLY WhatsApp Button (Zero Submit Button) */}
 <div className="field full" style={{ marginTop: "8px" }}>
 <a
 href={`https://wa.me/971569754492?text=${whatsappMessage}`}
 target="_blank"
 rel="noopener noreferrer"
 className="btn-whatsapp-full"
 >
 <WhatsAppIcon size={18} color="#fff" />
 <span>Send Consulting Enquiry via WhatsApp</span>
 </a>
 </div>
 </form>
 </div>
 </section>

 <SiteFooter />
 </div>
 );
}
