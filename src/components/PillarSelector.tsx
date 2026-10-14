"use client";

import React from "react";

interface PillarSelectorProps {
 activePillar: "meals" | "consulting";
 onSelect: (pillar: "meals" | "consulting") => void;
}

export default function PillarSelector({ activePillar, onSelect }: PillarSelectorProps) {
 return (
 <div style={{
 background: "var(--surface)",
 borderBottom: "1px solid var(--line)",
 padding: "16px 0",
 position: "relative"
 }}>
 <div className="container" style={{
 display: "flex",
 flexDirection: "column",
 alignItems: "center",
 justifyContent: "center",
 gap: "12px"
 }}>
 <div style={{
 fontSize: "0.74rem",
 fontWeight: 700,
 letterSpacing: "0.16em",
 textTransform: "uppercase",
 color: "var(--muted)",
 display: "flex",
 alignItems: "center",
 gap: "8px"
 }}>
 <span>✦ CHEF RADHEY DUAL FOCUS · SELECT YOUR SERVICE PATH ✦</span>
 </div>

 <div style={{
 display: "inline-flex",
 background: "#ffffff",
 padding: "5px",
 borderRadius: "var(--radius-full)",
 boxShadow: "var(--shadow-sm)",
 border: "1px solid var(--line-strong)",
 maxWidth: "100%",
 flexWrap: "wrap",
 justifyContent: "center",
 gap: "6px"
 }}>
 {/* Part 1 Button */}
 <button
 onClick={() => onSelect("meals")}
 style={{
 display: "flex",
 alignItems: "center",
 gap: "10px",
 padding: "12px 24px",
 borderRadius: "var(--radius-full)",
 fontSize: "0.88rem",
 fontWeight: 700,
 cursor: "pointer",
 transition: "var(--transition)",
 background: activePillar === "meals" 
 ? "linear-gradient(135deg, var(--forest), var(--forest-light))" 
 : "transparent",
 color: activePillar === "meals" ? "#ffffff" : "var(--ink-light)",
 boxShadow: activePillar === "meals" ? "0 4px 16px rgba(23,61,45,0.25)" : "none"
 }}
 >
 <span style={{ fontSize: "1.1rem" }}></span>
 <span>Healthy Meal Plans</span>
 <span style={{
 fontSize: "0.68rem",
 background: activePillar === "meals" ? "rgba(255,255,255,0.22)" : "var(--surface-alt)",
 padding: "2px 8px",
 borderRadius: "10px",
 fontWeight: 700
 }}>
 For Individuals
 </span>
 </button>

 {/* Part 2 Button */}
 <button
 onClick={() => onSelect("consulting")}
 style={{
 display: "flex",
 alignItems: "center",
 gap: "10px",
 padding: "12px 24px",
 borderRadius: "var(--radius-full)",
 fontSize: "0.88rem",
 fontWeight: 700,
 cursor: "pointer",
 transition: "var(--transition)",
 background: activePillar === "consulting" 
 ? "linear-gradient(135deg, var(--gold-dark), var(--gold))" 
 : "transparent",
 color: activePillar === "consulting" ? "#ffffff" : "var(--ink-light)",
 boxShadow: activePillar === "consulting" ? "0 4px 16px rgba(185,155,98,0.3)" : "none"
 }}
 >
 <span style={{ fontSize: "1.1rem" }}>️</span>
 <span>Restaurant Setup & Consulting</span>
 <span style={{
 fontSize: "0.68rem",
 background: activePillar === "consulting" ? "rgba(255,255,255,0.25)" : "var(--surface-alt)",
 padding: "2px 8px",
 borderRadius: "10px",
 fontWeight: 700
 }}>
 For Businesses
 </span>
 </button>
 </div>
 </div>
 </div>
 );
}
