"use client";

import React, { useState } from "react";
import {
 WhatsAppIcon,
 FireIcon,
 DumbbellIcon,
 HeartPulseIcon,
 LeafIcon,
 FlowerIcon,
 BabyMotherIcon,
 ScaleIcon,
 ChefHatIcon,
 SaladIcon
} from "./Icons";

export interface MealPlan {
 id: string;
 name: string;
 category: "fitness" | "weight" | "clinical";
 pricePerMeal: number;
 calories: string;
 macros: { p: string; c: string; f: string };
 tagline: string;
 benefits: string[];
 iconComponent: React.ComponentType<{ size?: number }>;
}

export const MEAL_PLANS: MealPlan[] = [
 {
 id: "muscle-gain",
 name: "High-Protein Muscle Gain",
 category: "fitness",
 pricePerMeal: 45,
 calories: "~1,815 – 2,200 kcal/day",
 macros: { p: "160-180g", c: "190-210g", f: "50-60g" },
 tagline: "Optimized protein pacing for athletic performance & lean hypertrophy.",
 benefits: ["Targeted 40g+ protein per main dish", "Clean complex carbohydrates", "Pre & post-workout nutrient timing"],
 iconComponent: DumbbellIcon
 },
 {
 id: "fat-loss",
 name: "Healthy Fat Loss",
 category: "weight",
 pricePerMeal: 40,
 calories: "~1,285 – 1,450 kcal/day",
 macros: { p: "115-130g", c: "90-110g", f: "40-45g" },
 tagline: "Calorie-controlled nutrient-dense meals engineered to preserve lean mass.",
 benefits: ["High satiety with low glycemic index", "Zero refined sugars or heavy oils", "Consistent metabolic deficit"],
 iconComponent: FireIcon
 },
 {
 id: "balanced",
 name: "Balanced Healthy Nutrition",
 category: "fitness",
 pricePerMeal: 45,
 calories: "~1,615 – 1,750 kcal/day",
 macros: { p: "125-140g", c: "150-170g", f: "50-55g" },
 tagline: "Everyday gourmet vitality focused on variety, gut health, and equilibrium.",
 benefits: ["Complete micronutrient profile", "Colorful antioxidant-rich produce", "Chef-crafted gourmet rotation"],
 iconComponent: SaladIcon
 },
 {
 id: "pcos-pcod",
 name: "PCOS / PCOD Nutrition Care",
 category: "clinical",
 pricePerMeal: 45,
 calories: "~1,360 – 1,500 kcal/day",
 macros: { p: "110-125g", c: "95-110g", f: "45-50g" },
 tagline: "Hormone-supportive, insulin-sensitizing anti-inflammatory formulation.",
 benefits: ["Low glycemic load ingredients", "Anti-inflammatory spices (turmeric, ginger)", "Zero endocrine disruptors"],
 iconComponent: FlowerIcon
 },
 {
 id: "gut-health",
 name: "Gut Health & Digestive Wellness",
 category: "clinical",
 pricePerMeal: 45,
 calories: "~1,405 – 1,550 kcal/day",
 macros: { p: "105-120g", c: "125-140g", f: "45-50g" },
 tagline: "Fermented additions, soluble fibers, and gentle prebiotic-rich foods.",
 benefits: ["Microbiome-nourishing fibers", "Easily digestible proteins", "No harsh preservatives or artificial sweeteners"],
 iconComponent: LeafIcon
 },
 {
 id: "diabetes",
 name: "Diabetes-Friendly Care",
 category: "clinical",
 pricePerMeal: 45,
 calories: "~1,290 – 1,420 kcal/day",
 macros: { p: "115-125g", c: "85-100g", f: "40-45g" },
 tagline: "Strict glycemic control with complex carbs and slow-release energy.",
 benefits: ["Measured carbohydrate counting", "High soluble beta-glucans and legumes", "Stabilized postprandial glucose curves"],
 iconComponent: HeartPulseIcon
 },
 {
 id: "pregnancy",
 name: "Pregnancy & Postpartum Nutrition",
 category: "clinical",
 pricePerMeal: 45,
 calories: "~1,620 – 1,850 kcal/day",
 macros: { p: "130-145g", c: "165-185g", f: "55-60g" },
 tagline: "Folate, iron, choline, and healthy fats tailored for maternal vitality.",
 benefits: ["Rich in bioavailable iron & DHA sources", "Clean pasteurized high-grade proteins", "Nutrient-dense lactation support"],
 iconComponent: BabyMotherIcon
 },
 {
 id: "joint-friendly",
 name: "Joint-Friendly Nutrition",
 category: "clinical",
 pricePerMeal: 45,
 calories: "~1,420 – 1,580 kcal/day",
 macros: { p: "120-135g", c: "115-130g", f: "45-50g" },
 tagline: "High omega-3, collagen peptides, and polyphenol-heavy ingredients.",
 benefits: ["Wild-caught omega-3 fish rotation", "Bone broth & collagen integration", "Anti-inflammatory phytonutrients"],
 iconComponent: ScaleIcon
 },
 {
 id: "lifestyle",
 name: "Healthy Lifestyle Plan",
 category: "weight",
 pricePerMeal: 40,
 calories: "~1,450 – 1,600 kcal/day",
 macros: { p: "110-125g", c: "135-150g", f: "45-50g" },
 tagline: "Designed for busy Dubai professionals seeking healthy, ready-to-eat luxury.",
 benefits: ["Convenient daily door-drop in cooler bags", "Chef-prepared microwave-safe boxes", "Flexible pause & resume options"],
 iconComponent: ChefHatIcon
 }
];

interface MealPlanCalculatorProps {
 onPlanSelected?: (planName: string, totalPrice: number) => void;
}

export default function MealPlanCalculator({ onPlanSelected }: MealPlanCalculatorProps) {
 const [selectedPlanId, setSelectedPlanId] = useState<string>("muscle-gain");
 const [categoryFilter, setCategoryFilter] = useState<string>("all");
 const [mealsPerDay, setMealsPerDay] = useState<number>(3);
 const [durationDays, setDurationDays] = useState<number>(30);
 
 // Add-ons from the PDF
 const [addDetoxJuice, setAddDetoxJuice] = useState<boolean>(false);
 const [addSnacks, setAddSnacks] = useState<boolean>(false);
 const [nutritionistConsult, setNutritionistConsult] = useState<"none" | "single" | "monthly">("none");

 const currentPlan = MEAL_PLANS.find(p => p.id === selectedPlanId) || MEAL_PLANS[0];

 const totalMeals = mealsPerDay * durationDays;
 const baseMealCost = totalMeals * currentPlan.pricePerMeal;

 const detoxCost = addDetoxJuice ? durationDays * 10 : 0;
 const snackCost = addSnacks ? durationDays * 5 : 0;
 const consultCost = nutritionistConsult === "single" ? 99 : nutritionistConsult === "monthly" ? 500 : 0;

 const grandTotal = baseMealCost + detoxCost + snackCost + consultCost;
 const perDayCost = Math.round(grandTotal / durationDays);

 const filteredPlans = MEAL_PLANS.filter(p => {
 if (categoryFilter === "all") return true;
 return p.category === categoryFilter;
 });

 const whatsappMessage = encodeURIComponent(
 `Hello Chef Radhey! I would like to order/enquire about:\n` +
 `• Plan: ${currentPlan.name} (AED ${currentPlan.pricePerMeal}/meal)\n` +
 `• Schedule: ${mealsPerDay} meals/day for ${durationDays} days (${totalMeals} total meals)\n` +
 (addDetoxJuice ? `• Add-on: Daily Detox Juice (+AED ${detoxCost})\n` : "") +
 (addSnacks ? `• Add-on: Healthy Bite Snacks (+AED ${snackCost})\n` : "") +
 (consultCost > 0 ? `• Add-on: Nutritionist Consultation (+AED ${consultCost})\n` : "") +
 `• Total Estimated Investment: AED ${grandTotal.toLocaleString()}\n` +
 `Please advise on starting date and delivery in Dubai.`
 );

 return (
 <section id="calculator" style={{ padding: "64px 0", background: "var(--soft)", borderTop: "1px solid var(--line)", borderBottom: "1px solid var(--line)" }}>
 <div className="container">
 
 {/* Section Header */}
 <div className="section-head center">
 <div className="eyebrow">CUSTOM PRICING GUIDE · DUBAI, UAE</div>
 <h2>Interactive Meal Plan Pricing Calculator</h2>
 <p>
 Choose your meal plan objective, number of daily meals, and package duration. All figures match Chef Radhey&apos;s official AED pricing guide.
 </p>
 </div>

 {/* Filter Pills */}
 <div style={{
 display: "flex",
 justifyContent: "center",
 gap: "8px",
 flexWrap: "wrap",
 marginBottom: "32px"
 }}>
 {[
 { id: "all", label: "All 9 Plans" },
 { id: "fitness", label: "Fitness & Muscle" },
 { id: "weight", label: "Weight Loss & Lifestyle" },
 { id: "clinical", label: "Clinical & Health-Focused" }
 ].map(f => (
 <button
 key={f.id}
 onClick={() => setCategoryFilter(f.id)}
 className={`filter-btn ${categoryFilter === f.id ? "active" : ""}`}
 >
 {f.label}
 </button>
 ))}
 </div>

 {/* Main 2-Column Calculator Grid */}
 <div style={{
 display: "grid",
 gridTemplateColumns: "1.15fr 0.85fr",
 gap: "32px",
 alignItems: "start"
 }}>

 {/* Left Column: Selectors */}
 <div style={{ display: "grid", gap: "22px" }}>
 
 {/* Step 1: Select Plan */}
 <div>
 <div style={{
 fontSize: "11px",
 fontWeight: 700,
 textTransform: "uppercase",
 letterSpacing: "0.1em",
 color: "var(--gold)",
 marginBottom: "10px"
 }}>
 Step 1: Choose Your Meal Plan Objective
 </div>

 <div style={{
 display: "grid",
 gridTemplateColumns: "repeat(auto-fill, minmax(210px, 1fr))",
 gap: "10px"
 }}>
 {filteredPlans.map(plan => {
 const isSelected = plan.id === selectedPlanId;
 const Icon = plan.iconComponent;
 return (
 <div
 key={plan.id}
 onClick={() => setSelectedPlanId(plan.id)}
 style={{
 padding: "14px",
 borderRadius: "6px",
 border: "1px solid",
 borderColor: isSelected ? "var(--forest2)" : "var(--line)",
 background: isSelected ? "var(--forest)" : "var(--paper)",
 color: isSelected ? "#fffdf5" : "var(--ink)",
 cursor: "pointer",
 transition: "0.2s"
 }}
 >
 <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "8px" }}>
 <div style={{ color: isSelected ? "var(--gold)" : "var(--forest)" }}>
 <Icon size={22} />
 </div>
 <span className={`pill ${isSelected ? "gold" : ""}`} style={{ fontSize: "9px" }}>
 AED {plan.pricePerMeal}/meal
 </span>
 </div>
 <div style={{ fontFamily: "Georgia, serif", fontSize: "16px", fontWeight: 400, marginBottom: "4px" }}>
 {plan.name}
 </div>
 <div style={{ fontSize: "11px", color: isSelected ? "#c7d8cb" : "var(--muted)" }}>
 {plan.calories}
 </div>
 </div>
 );
 })}
 </div>
 </div>

 {/* Step 2: Meals Per Day */}
 <div style={{
 background: "var(--paper)",
 padding: "18px",
 borderRadius: "6px",
 border: "1px solid var(--line)"
 }}>
 <div style={{
 display: "flex",
 justifyContent: "space-between",
 alignItems: "center",
 marginBottom: "12px"
 }}>
 <span style={{ fontSize: "11px", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em", color: "var(--gold)" }}>
 Step 2: Meals Per Day
 </span>
 <span style={{ fontSize: "11px", color: "var(--muted)" }}>
 Fresh daily delivery
 </span>
 </div>

 <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "8px" }}>
 {[2, 3, 4, 5].map(count => (
 <button
 key={count}
 onClick={() => setMealsPerDay(count)}
 style={{
 padding: "10px 0",
 textAlign: "center",
 borderRadius: "4px",
 border: "1px solid",
 borderColor: mealsPerDay === count ? "var(--forest2)" : "var(--line)",
 background: mealsPerDay === count ? "var(--forest)" : "transparent",
 color: mealsPerDay === count ? "#fff" : "var(--ink)",
 fontWeight: 650,
 fontSize: "13px",
 cursor: "pointer"
 }}
 >
 <div>{count} Meals</div>
 <div style={{ fontSize: "10px", opacity: 0.7 }}>
 {count === 2 ? "2 meals/day" : count === 3 ? "3 meals/day" : count === 4 ? "4 meals/day" : "5 meals/day"}
 </div>
 </button>
 ))}
 </div>
 </div>

 {/* Step 3: Duration */}
 <div style={{
 background: "var(--paper)",
 padding: "18px",
 borderRadius: "6px",
 border: "1px solid var(--line)"
 }}>
 <div style={{
 display: "flex",
 justifyContent: "space-between",
 alignItems: "center",
 marginBottom: "12px"
 }}>
 <span style={{ fontSize: "11px", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em", color: "var(--gold)" }}>
 Step 3: Package Duration
 </span>
 <span style={{ fontSize: "11px", color: "var(--muted)" }}>
 Per Official Pricing PDF
 </span>
 </div>

 <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "8px" }}>
 {[
 { days: 20, label: "20 Days", note: "4 Weeks" },
 { days: 24, label: "24 Days", note: "6d/Week" },
 { days: 30, label: "30 Days", note: "Monthly" },
 { days: 90, label: "90 Days", note: "Transformation" }
 ].map(d => (
 <button
 key={d.days}
 onClick={() => setDurationDays(d.days)}
 style={{
 padding: "10px 4px",
 textAlign: "center",
 borderRadius: "4px",
 border: "1px solid",
 borderColor: durationDays === d.days ? "var(--forest2)" : "var(--line)",
 background: durationDays === d.days ? "var(--forest)" : "transparent",
 color: durationDays === d.days ? "#fff" : "var(--ink)",
 fontWeight: 650,
 fontSize: "13px",
 cursor: "pointer"
 }}
 >
 <div>{d.label}</div>
 <div style={{ fontSize: "10px", opacity: 0.7 }}>{d.note}</div>
 </button>
 ))}
 </div>
 </div>

 {/* Step 4: Add-Ons */}
 <div style={{
 background: "var(--paper)",
 padding: "18px",
 borderRadius: "6px",
 border: "1px solid var(--line)"
 }}>
 <div style={{ fontSize: "11px", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em", color: "var(--gold)", marginBottom: "12px" }}>
 Add-Ons & Professional Services
 </div>

 <div style={{ display: "grid", gap: "8px" }}>
 <label style={{
 display: "flex",
 alignItems: "center",
 justifyContent: "space-between",
 padding: "10px 14px",
 borderRadius: "4px",
 border: "1px solid var(--line)",
 background: addDetoxJuice ? "var(--soft)" : "transparent",
 cursor: "pointer",
 fontSize: "13px"
 }}>
 <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
 <input
 type="checkbox"
 checked={addDetoxJuice}
 onChange={e => setAddDetoxJuice(e.target.checked)}
 style={{ accentColor: "var(--forest)" }}
 />
 <span>Detox Juice (Price per serving: AED 10)</span>
 </div>
 <strong style={{ color: "var(--forest2)" }}>+AED {durationDays * 10}</strong>
 </label>

 <label style={{
 display: "flex",
 alignItems: "center",
 justifyContent: "space-between",
 padding: "10px 14px",
 borderRadius: "4px",
 border: "1px solid var(--line)",
 background: addSnacks ? "var(--soft)" : "transparent",
 cursor: "pointer",
 fontSize: "13px"
 }}>
 <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
 <input
 type="checkbox"
 checked={addSnacks}
 onChange={e => setAddSnacks(e.target.checked)}
 style={{ accentColor: "var(--forest)" }}
 />
 <span>Bite-Size Snacks (Price per piece: AED 5)</span>
 </div>
 <strong style={{ color: "var(--forest2)" }}>+AED {durationDays * 5}</strong>
 </label>

 <div style={{
 padding: "10px 14px",
 borderRadius: "4px",
 border: "1px solid var(--line)",
 fontSize: "13px"
 }}>
 <div style={{ marginBottom: "6px", fontWeight: 650 }}>Nutritionist Consultation:</div>
 <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
 {[
 { id: "none", label: "None", cost: 0 },
 { id: "single", label: "Single (AED 99)", cost: 99 },
 { id: "monthly", label: "Monthly 5x (AED 500)", cost: 500 }
 ].map(c => (
 <button
 key={c.id}
 type="button"
 onClick={() => setNutritionistConsult(c.id as any)}
 style={{
 padding: "6px 12px",
 borderRadius: "20px",
 fontSize: "11px",
 border: "1px solid",
 borderColor: nutritionistConsult === c.id ? "var(--forest)" : "var(--line)",
 background: nutritionistConsult === c.id ? "var(--forest)" : "transparent",
 color: nutritionistConsult === c.id ? "#fff" : "var(--muted)"
 }}
 >
 {c.label}
 </button>
 ))}
 </div>
 </div>
 </div>
 </div>

 </div>

 {/* Right Column: Order Summary Card */}
 <div style={{
 background: "var(--paper)",
 border: "1px solid var(--line)",
 borderRadius: "8px",
 padding: "26px",
 boxShadow: "var(--shadow)",
 position: "sticky",
 top: "90px"
 }}>
 <span className="pill gold" style={{ marginBottom: "12px" }}>
 Live Package Pricing
 </span>

 <h3 style={{ fontFamily: "Georgia, serif", fontSize: "24px", fontWeight: 400, margin: "8px 0 6px" }}>
 {currentPlan.name}
 </h3>

 <p style={{ fontSize: "12px", color: "var(--muted)", margin: "0 0 16px" }}>
 {currentPlan.tagline}
 </p>

 {/* Macros */}
 <div className="macro-row" style={{ marginTop: 0, marginBottom: "16px", paddingTop: "10px" }}>
 <div className="macro">
 <strong>{currentPlan.macros.p}</strong>
 Protein
 </div>
 <div className="macro">
 <strong>{currentPlan.macros.c}</strong>
 Carbs
 </div>
 <div className="macro">
 <strong>{currentPlan.macros.f}</strong>
 Fats
 </div>
 <div className="macro">
 <strong>{currentPlan.calories}</strong>
 Daily Energy
 </div>
 </div>

 {/* Line items */}
 <div style={{ display: "grid", gap: "8px", fontSize: "12px", borderTop: "1px solid var(--line)", padding: "14px 0" }}>
 <div style={{ display: "flex", justifyContent: "space-between" }}>
 <span style={{ color: "var(--muted)" }}>Meals per day:</span>
 <strong>{mealsPerDay} meals</strong>
 </div>
 <div style={{ display: "flex", justifyContent: "space-between" }}>
 <span style={{ color: "var(--muted)" }}>Package duration:</span>
 <strong>{durationDays} days</strong>
 </div>
 <div style={{ display: "flex", justifyContent: "space-between" }}>
 <span style={{ color: "var(--muted)" }}>Total meals prepared:</span>
 <strong>{totalMeals} meals</strong>
 </div>
 <div style={{ display: "flex", justifyContent: "space-between" }}>
 <span style={{ color: "var(--muted)" }}>Price per meal:</span>
 <strong>AED {currentPlan.pricePerMeal}</strong>
 </div>
 <div style={{ display: "flex", justifyContent: "space-between" }}>
 <span style={{ color: "var(--muted)" }}>Base meal cost:</span>
 <strong>AED {baseMealCost.toLocaleString()}</strong>
 </div>
 {addDetoxJuice && (
 <div style={{ display: "flex", justifyContent: "space-between", color: "var(--forest2)" }}>
 <span>+ Detox Juice ({durationDays} servings):</span>
 <strong>AED {detoxCost.toLocaleString()}</strong>
 </div>
 )}
 {addSnacks && (
 <div style={{ display: "flex", justifyContent: "space-between", color: "var(--forest2)" }}>
 <span>+ Bite-Size Snacks ({durationDays} pcs):</span>
 <strong>AED {snackCost.toLocaleString()}</strong>
 </div>
 )}
 {consultCost > 0 && (
 <div style={{ display: "flex", justifyContent: "space-between", color: "var(--forest2)" }}>
 <span>+ Nutritionist Consultation:</span>
 <strong>AED {consultCost.toLocaleString()}</strong>
 </div>
 )}
 </div>

 {/* Total */}
 <div style={{
 display: "flex",
 justifyContent: "space-between",
 alignItems: "baseline",
 padding: "16px 0",
 borderTop: "1px solid var(--line)",
 marginBottom: "16px"
 }}>
 <div>
 <div style={{ fontSize: "11px", color: "var(--muted)", textTransform: "uppercase", letterSpacing: "0.06em" }}>
 Total Package Total
 </div>
 <div style={{ fontSize: "11px", color: "var(--forest2)", fontWeight: 700 }}>
 ~AED {perDayCost} / day
 </div>
 </div>
 <div style={{ fontFamily: "Georgia, serif", fontSize: "30px", fontWeight: 400, color: "var(--forest)" }}>
 AED {grandTotal.toLocaleString()}
 </div>
 </div>

 {/* Order action: Only WhatsApp Button */}
 <div style={{ marginTop: "8px" }}>
 <a
 href={`https://wa.me/971569754492?text=${whatsappMessage}`}
 target="_blank"
 rel="noopener noreferrer"
 className="btn-whatsapp-full"
 >
 <WhatsAppIcon size={18} color="#fff" />
 <span>Book This Plan via WhatsApp</span>
 </a>
 </div>

 <p style={{ fontSize: "10px", color: "var(--muted)", marginTop: "14px", textAlign: "center", lineHeight: 1.4 }}>
 *Prices in AED as supplied in the official pricing guide before discounts. Delivery across Dubai.
 </p>
 </div>

 </div>

 </div>
 </section>
 );
}
