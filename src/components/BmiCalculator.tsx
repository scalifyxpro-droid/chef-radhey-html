"use client";

import React, { useState } from "react";

interface BmiCalculatorProps {
 onRecommendPlan?: (planId: string) => void;
}

export default function BmiCalculator({ onRecommendPlan }: BmiCalculatorProps) {
 const [height, setHeight] = useState<number>(175);
 const [weight, setWeight] = useState<number>(75);
 const [gender, setGender] = useState<"male" | "female">("male");
 const [goal, setGoal] = useState<"loss" | "muscle" | "maintain" | "clinical">("loss");

 // Calculate BMI
 const heightM = height / 100;
 const bmi = heightM > 0 ? parseFloat((weight / (heightM * heightM)).toFixed(1)) : 0;

 // Classify BMI
 let bmiCategory = "Normal Weight";
 let bmiColor = "var(--forest2)";
 if (bmi < 18.5) {
 bmiCategory = "Underweight";
 bmiColor = "#c59a34";
 } else if (bmi >= 25 && bmi < 30) {
 bmiCategory = "Overweight";
 bmiColor = "#d67d26";
 } else if (bmi >= 30) {
 bmiCategory = "Obese";
 bmiColor = "#c94a38";
 }

 // Recommended Calories & Protein
 let targetCalories = 1800;
 let targetProtein = 130;
 let suggestedPlan = "Healthy Fat Loss";
 let suggestedPlanId = "fat-loss";

 if (goal === "loss") {
 targetCalories = Math.round(weight * 22);
 targetProtein = Math.round(weight * 1.8);
 suggestedPlan = "Healthy Fat Loss (AED 40/meal)";
 suggestedPlanId = "fat-loss";
 } else if (goal === "muscle") {
 targetCalories = Math.round(weight * 32);
 targetProtein = Math.round(weight * 2.2);
 suggestedPlan = "High-Protein Muscle Gain (AED 45/meal)";
 suggestedPlanId = "muscle-gain";
 } else if (goal === "clinical") {
 targetCalories = Math.round(weight * 24);
 targetProtein = Math.round(weight * 1.6);
 suggestedPlan = "PCOS / Diabetes / Gut Health Care (AED 45/meal)";
 suggestedPlanId = "pcos-pcod";
 } else {
 targetCalories = Math.round(weight * 27);
 targetProtein = Math.round(weight * 1.7);
 suggestedPlan = "Balanced Healthy Nutrition (AED 45/meal)";
 suggestedPlanId = "balanced";
 }

 return (
 <section className="section" style={{ background: "var(--surface)", borderTop: "1px solid var(--line)", borderBottom: "1px solid var(--line)" }}>
 <div className="container">
 
 <div style={{
 background: "#ffffff",
 borderRadius: "var(--radius-lg)",
 border: "1.5px solid var(--line-strong)",
 padding: "40px",
 boxShadow: "var(--shadow-md)"
 }}>
 
 <div style={{ textAlign: "center", maxWidth: "640px", margin: "0 auto 32px" }}>
 <div className="badge badge-green" style={{ marginBottom: "10px" }}>
 ✦ Interactive Nutritional Assessment
 </div>
 <h3 style={{
 fontFamily: "var(--font-serif)",
 fontSize: "clamp(26px, 3.2vw, 38px)",
 color: "var(--forest)",
 fontWeight: 600,
 marginBottom: "8px"
 }}>
 Calculate Your Daily Target & Recommended Plan
 </h3>
 <p style={{ fontSize: "0.9rem", color: "var(--muted)" }}>
 Adjust your metrics below to calculate your BMI, estimated daily caloric requirement, and optimal Chef Radhey meal plan.
 </p>
 </div>

 <div style={{
 display: "grid",
 gridTemplateColumns: "1.2fr 0.8fr",
 gap: "36px",
 alignItems: "center"
 }} className="bmi-grid">

 {/* Inputs Column */}
 <div style={{ display: "grid", gap: "20px" }}>
 
 {/* Gender & Goal row */}
 <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "14px" }}>
 <div>
 <label style={{ display: "block", fontSize: "0.78rem", fontWeight: 700, color: "var(--forest)", marginBottom: "6px" }}>
 Gender
 </label>
 <div style={{ display: "flex", gap: "8px" }}>
 {(["male", "female"] as const).map(g => (
 <button
 key={g}
 type="button"
 onClick={() => setGender(g)}
 style={{
 flex: 1,
 padding: "10px",
 borderRadius: "var(--radius-xs)",
 border: "1px solid",
 borderColor: gender === g ? "var(--forest)" : "var(--line)",
 background: gender === g ? "var(--forest)" : "var(--surface)",
 color: gender === g ? "#ffffff" : "var(--ink-light)",
 fontWeight: 700,
 fontSize: "0.82rem",
 textTransform: "capitalize"
 }}
 >
 {g === "male" ? "♂ Male" : "♀ Female"}
 </button>
 ))}
 </div>
 </div>

 <div>
 <label style={{ display: "block", fontSize: "0.78rem", fontWeight: 700, color: "var(--forest)", marginBottom: "6px" }}>
 Primary Goal
 </label>
 <select
 value={goal}
 onChange={e => setGoal(e.target.value as any)}
 style={{
 width: "100%",
 padding: "10px 12px",
 borderRadius: "var(--radius-xs)",
 border: "1px solid var(--line-strong)",
 fontSize: "0.85rem",
 background: "var(--surface)",
 fontWeight: 600,
 color: "var(--ink)"
 }}
 >
 <option value="loss">Fat Loss & Leaning</option>
 <option value="muscle">Muscle Hypertrophy & Fitness</option>
 <option value="maintain">Everyday Vitality & Balance</option>
 <option value="clinical">Clinical (PCOS / Gut / Diabetes)</option>
 </select>
 </div>
 </div>

 {/* Height Slider */}
 <div style={{
 background: "var(--surface)",
 padding: "16px 20px",
 borderRadius: "var(--radius-sm)",
 border: "1px solid var(--line)"
 }}>
 <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "8px" }}>
 <span style={{ fontSize: "0.82rem", fontWeight: 700, color: "var(--forest)" }}>Your Height</span>
 <span style={{ fontSize: "0.95rem", fontWeight: 800, color: "var(--forest)" }}>{height} cm</span>
 </div>
 <input
 type="range"
 min="140"
 max="210"
 value={height}
 onChange={e => setHeight(Number(e.target.value))}
 style={{ width: "100%", accentColor: "var(--forest)", cursor: "pointer" }}
 />
 </div>

 {/* Weight Slider */}
 <div style={{
 background: "var(--surface)",
 padding: "16px 20px",
 borderRadius: "var(--radius-sm)",
 border: "1px solid var(--line)"
 }}>
 <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "8px" }}>
 <span style={{ fontSize: "0.82rem", fontWeight: 700, color: "var(--forest)" }}>Your Current Weight</span>
 <span style={{ fontSize: "0.95rem", fontWeight: 800, color: "var(--forest)" }}>{weight} kg</span>
 </div>
 <input
 type="range"
 min="40"
 max="140"
 value={weight}
 onChange={e => setWeight(Number(e.target.value))}
 style={{ width: "100%", accentColor: "var(--forest)", cursor: "pointer" }}
 />
 </div>

 </div>

 {/* Results Display */}
 <div style={{
 background: "linear-gradient(135deg, var(--forest), var(--forest-dark))",
 color: "#ffffff",
 padding: "28px",
 borderRadius: "var(--radius-md)",
 border: "1px solid rgba(185,155,98,0.3)",
 boxShadow: "var(--shadow-md)"
 }}>
 <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: "16px" }}>
 <div>
 <div style={{ fontSize: "0.72rem", color: "var(--gold-light)", textTransform: "uppercase", letterSpacing: "0.08em" }}>
 Your Body Mass Index (BMI)
 </div>
 <div style={{ fontFamily: "var(--font-serif)", fontSize: "2.5rem", fontWeight: 700, lineHeight: 1.1 }}>
 {bmi}
 </div>
 </div>
 <div style={{
 background: "rgba(255,255,255,0.12)",
 padding: "6px 14px",
 borderRadius: "var(--radius-full)",
 fontSize: "0.78rem",
 fontWeight: 700,
 color: "#ffffff"
 }}>
 {bmiCategory}
 </div>
 </div>

 <div style={{
 display: "grid",
 gridTemplateColumns: "1fr 1fr",
 gap: "12px",
 padding: "14px 0",
 borderTop: "1px solid rgba(255,255,255,0.15)",
 borderBottom: "1px solid rgba(255,255,255,0.15)",
 marginBottom: "20px"
 }}>
 <div>
 <div style={{ fontSize: "0.7rem", color: "#c1cfc5" }}>Estimated Target Calories</div>
 <div style={{ fontSize: "1.15rem", fontWeight: 800, color: "var(--gold-light)" }}>
 ~{targetCalories} kcal / day
 </div>
 </div>
 <div>
 <div style={{ fontSize: "0.7rem", color: "#c1cfc5" }}>Target Protein Pacing</div>
 <div style={{ fontSize: "1.15rem", fontWeight: 800, color: "var(--gold-light)" }}>
 ~{targetProtein}g / day
 </div>
 </div>
 </div>

 <div style={{ marginBottom: "18px" }}>
 <div style={{ fontSize: "0.72rem", color: "#c1cfc5", marginBottom: "4px" }}>
 ✦ Recommended Plan for You:
 </div>
 <div style={{ fontSize: "1.02rem", fontWeight: 700, color: "#ffffff" }}>
 {suggestedPlan}
 </div>
 </div>

 <a
 href="#meal-plans"
 onClick={() => {
 if (onRecommendPlan) onRecommendPlan(suggestedPlanId);
 }}
 className="btn btn-gold"
 style={{ width: "100%", padding: "12px", fontSize: "0.86rem" }}
 >
 Configure This Plan in Calculator ↓
 </a>
 </div>

 </div>

 </div>

 </div>

 <style jsx>{`
 @media (max-width: 850px) {
 :global(.bmi-grid) {
 grid-template-columns: 1fr !important;
 }
 }
 `}</style>
 </section>
 );
}
