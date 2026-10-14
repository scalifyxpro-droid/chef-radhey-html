"use client";

import React from "react";
import Image from "next/image";
import { ScaleIcon } from "@/components/Icons";

interface HeroProps {
 onSelectPillar: (pillar: "meals" | "consulting") => void;
}

export default function Hero({ onSelectPillar }: HeroProps) {
 return (
 <section style={{
 position: "relative",
 background: "radial-gradient(ellipse at 85% 20%, rgba(185, 155, 98, 0.22), transparent 45%), radial-gradient(ellipse at 15% 90%, rgba(35, 84, 61, 0.35), transparent 45%), var(--forest)",
 color: "#ffffff",
 overflow: "hidden",
 padding: "70px 0 85px"
 }}>
 <div className="container hero-grid" style={{
 display: "grid",
 gridTemplateColumns: "1.1fr 0.9fr",
 gap: "48px",
 alignItems: "center"
 }}>
 
 {/* Left Copy */}
 <div>
 <div className="eyebrow" style={{ color: "var(--gold-light)", marginBottom: "18px" }}>
 18+ YEARS CULINARY AUTHORITY · DUBAI, UAE
 </div>

 <h1 style={{
 fontFamily: "var(--font-serif)",
 fontSize: "clamp(42px, 5.2vw, 68px)",
 fontWeight: 400,
 lineHeight: 1.05,
 letterSpacing: "-0.03em",
 marginBottom: "22px",
 color: "#ffffff"
 }}>
 Better Food.<br />
 <em style={{ color: "var(--gold-light)", fontStyle: "italic" }}>Better Health.</em><br />
 Better Food Businesses.
 </h1>

 <p style={{
 fontSize: "1.08rem",
 color: "#d7e2d9",
 lineHeight: 1.65,
 maxWidth: "540px",
 marginBottom: "32px"
 }}>
 Chef Radhey bridges gourmet gastronomy and clinical nutritional science. Delivering personalized daily meal plans across Dubai and engineering scalable healthy menus for restaurants and food startups.
 </p>

 {/* Dual CTAs */}
 <div style={{ display: "flex", gap: "14px", flexWrap: "wrap", marginBottom: "36px" }}>
 <button
 onClick={() => {
 onSelectPillar("meals");
 document.getElementById("meal-plans")?.scrollIntoView({ behavior: "smooth" });
 }}
 className="btn btn-gold"
 style={{ padding: "14px 28px", fontSize: "0.95rem" }}
 >
 <span>Explore Meal Plans</span>
 <span>↓</span>
 </button>

 <button
 onClick={() => {
 onSelectPillar("consulting");
 document.getElementById("restaurant-setup")?.scrollIntoView({ behavior: "smooth" });
 }}
 className="btn btn-outline"
 style={{
 borderColor: "rgba(255,255,255,0.35)",
 color: "#ffffff",
 padding: "14px 28px",
 fontSize: "0.95rem"
 }}
 >
 <span>Restaurant Setup & Consulting</span>
 <span>↗</span>
 </button>
 </div>

 {/* Quick Metrics */}
 <div style={{
 display: "grid",
 gridTemplateColumns: "repeat(3, 1fr)",
 gap: "18px",
 borderTop: "1px solid rgba(255,255,255,0.12)",
 paddingTop: "24px",
 maxWidth: "520px"
 }}>
 <div>
 <div style={{ fontFamily: "var(--font-serif)", fontSize: "1.9rem", color: "var(--gold-light)", fontWeight: 700 }}>
 18+
 </div>
 <div style={{ fontSize: "0.75rem", color: "#b9c7bd", textTransform: "uppercase", letterSpacing: "0.06em" }}>
 Years Experience
 </div>
 </div>
 <div>
 <div style={{ fontFamily: "var(--font-serif)", fontSize: "1.9rem", color: "var(--gold-light)", fontWeight: 700 }}>
 1,000+
 </div>
 <div style={{ fontSize: "0.75rem", color: "#b9c7bd", textTransform: "uppercase", letterSpacing: "0.06em" }}>
 Gourmet Recipes
 </div>
 </div>
 <div>
 <div style={{ fontFamily: "var(--font-serif)", fontSize: "1.9rem", color: "var(--gold-light)", fontWeight: 700 }}>
 40 AED
 </div>
 <div style={{ fontSize: "0.75rem", color: "#b9c7bd", textTransform: "uppercase", letterSpacing: "0.06em" }}>
 Starting per meal
 </div>
 </div>
 </div>
 </div>

 {/* Right Hero Image Card */}
 <div style={{ position: "relative", display: "flex", justifyContent: "center" }}>
 
 {/* Main Photo Frame */}
 <div style={{
 position: "relative",
 width: "100%",
 maxWidth: "460px",
 borderRadius: "var(--radius-lg)",
 overflow: "hidden",
 boxShadow: "0 25px 60px rgba(0,0,0,0.45)",
 border: "1px solid rgba(255,255,255,0.15)",
 background: "#122a1f"
 }}>
 <img
 src="/images/chef-radhey-uniform.png"
 alt="Chef Radhey with Nutrichef balanced meal boxes and gourmet healthy dishes"
 style={{
 width: "100%",
 height: "auto",
 objectFit: "cover",
 display: "block"
 }}
 />
 </div>

 {/* Floating Pill Top Right */}
 <div style={{
 position: "absolute",
 top: "20px",
 right: "-12px",
 background: "rgba(255, 255, 255, 0.94)",
 backdropFilter: "blur(12px)",
 color: "var(--forest)",
 padding: "12px 18px",
 borderRadius: "var(--radius-md)",
 boxShadow: "var(--shadow-lg)",
 border: "1px solid var(--gold-light)",
 display: "flex",
 alignItems: "center",
 gap: "12px",
 animation: "floatSlow 4s ease-in-out infinite"
 }}>
 <div style={{
 width: "36px",
 height: "36px",
 borderRadius: "50%",
 background: "var(--forest)",
 color: "var(--gold)",
 display: "grid",
 placeItems: "center",
 fontSize: "1.1rem"
 }}>
 <ScaleIcon size={18} />
 </div>
 <div>
 <div style={{ fontWeight: 800, fontSize: "0.85rem", lineHeight: 1.2 }}>
 100% Calculated Macros
 </div>
 <div style={{ fontSize: "0.72rem", color: "var(--muted)" }}>
 Calories, Protein, Carbs & Fats
 </div>
 </div>
 </div>

 {/* Floating Pill Bottom Left */}
 <div style={{
 position: "absolute",
 bottom: "24px",
 left: "-14px",
 background: "rgba(23, 61, 45, 0.96)",
 backdropFilter: "blur(12px)",
 color: "#ffffff",
 padding: "14px 20px",
 borderRadius: "var(--radius-md)",
 boxShadow: "0 15px 40px rgba(0,0,0,0.35)",
 border: "1px solid rgba(185,155,98,0.4)",
 display: "flex",
 alignItems: "center",
 gap: "14px"
 }}>
 <div style={{
 width: "40px",
 height: "40px",
 borderRadius: "50%",
 background: "linear-gradient(135deg, var(--gold), var(--gold-dark))",
 color: "#ffffff",
 display: "grid",
 placeItems: "center",
 fontSize: "1.2rem"
 }}>
 
 </div>
 <div>
 <div style={{ fontWeight: 800, fontSize: "0.92rem", color: "var(--gold-light)" }}>
 Personalized Meal Plans
 </div>
 <div style={{ fontSize: "0.74rem", color: "#d2ded5" }}>
 Starting at AED 40 / meal in Dubai
 </div>
 </div>
 </div>
 </div>

 </div>

 <style jsx>{`
 @media (max-width: 900px) {
 :global(.hero-grid) {
 grid-template-columns: 1fr !important;
 gap: 36px !important;
 }
 }
 `}</style>
 </section>
 );
}
