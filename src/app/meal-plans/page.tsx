"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import SiteFooter from "@/components/SiteFooter";
import Link from "next/link";
import {
 WhatsAppIcon,
 CloseIcon,
 SearchIcon,
 ArrowUpRightIcon,
 FireIcon,
 DumbbellIcon,
 SaladIcon,
 HeartPulseIcon,
 LeafIcon,
 ClockIcon,
 ChefHatIcon,
 FlowerIcon,
 ButterflyIcon,
 BabyMotherIcon,
 ScaleIcon
} from "@/components/Icons";

interface MealPlan {
 id: string;
 name: string;
 category: "fitness" | "health" | "custom";
 categoryLabel: string;
 kcal: string;
 protein: string;
 carbFat: string;
 icon: React.ComponentType<{ size?: number }>;
 desc: string;
 image: string;
 popularDish: string;
 highlights: string[];
}

const mealPlansList: MealPlan[] = [
 {
 id: "fat-loss",
 name: "Fat Loss & Weight Management",
 category: "fitness",
 categoryLabel: "Fitness · Body Recomposition",
 kcal: "~1,285 kcal/day",
 protein: "125g Protein",
 carbFat: "Low-GI Carbs · Clean Fats",
 icon: FireIcon,
 desc: "A calorie-controlled, nutrient-dense nutrition structure engineered to preserve lean muscle while accelerating visceral fat reduction.",
 image: "/images/gallery/gal-chicken-mexican.jpg",
 popularDish: "Flame-Grilled Mexican Chicken with Roasted Peppers & Lime Quinoa",
 highlights: ["Satiety-optimized fiber balance", "Zero refined sugars or seed oils", "Portion-calculated thermogenic herbs"]
 },
 {
 id: "muscle-gain",
 name: "Hypertrophy & Muscle Gain",
 category: "fitness",
 categoryLabel: "Fitness · Athletic Performance",
 kcal: "~1,815 kcal/day",
 protein: "165g Protein",
 carbFat: "Complex Carbs · Recovery Nutrition",
 icon: DumbbellIcon,
 desc: "High-protein gourmet culinary programming to support muscle protein synthesis, intense gym recovery, and metabolic strength.",
 image: "/images/gallery/gal-beef-steak.jpg",
 popularDish: "Grass-Fed Beef Tenderloin Steak with Portobello Mushroom Reduction",
 highlights: ["Complete leucine amino-acid profile", "Pre & post workout nutrient timing", "Clean complex carbohydrates"]
 },
 {
 id: "balanced-diet",
 name: "Everyday Balanced Nutrition",
 category: "fitness",
 categoryLabel: "Maintenance · Lifestyle Longevity",
 kcal: "~1,615 kcal/day",
 protein: "110g Protein",
 carbFat: "Harmonious Mediterranean Ratio",
 icon: SaladIcon,
 desc: "A sustainable, vibrant daily eating routine focused on colorful whole foods, sustained all-day energy, and digestive lightness.",
 image: "/images/gallery/gal-fresh-bowl.jpg",
 popularDish: "Artisan Edamame & Avocado Superfood Bowl with Sesame Citrus Dressing",
 highlights: ["Diverse micronutrient density", "Anti-inflammatory olive oil bases", "Zero kitchen prep or meal shopping"]
 },
 {
 id: "diabetic-friendly",
 name: "Diabetic & Glycemic Control",
 category: "health",
 categoryLabel: "Clinical Nutrition · Blood Sugar",
 kcal: "~1,290 kcal/day",
 protein: "120g Protein",
 carbFat: "Ultra Low Glycemic Index",
 icon: HeartPulseIcon,
 desc: "Formulated to minimize glycemic spikes, supporting steady insulin sensitivity through high fiber, lean proteins, and low-carb culinary techniques.",
 image: "/images/gallery/gal-herbs-salmon.jpg",
 popularDish: "Fresh Herb-Crusted Norwegian Salmon with Steamed Bok Choy & Asparagus",
 highlights: ["Strict glycemic load validation", "Soluble prebiotic fiber sources", "Clinician-aligned macro ratios"]
 },
 {
 id: "gut-health",
 name: "Microbiome & Gut Restoration",
 category: "health",
 categoryLabel: "Health · Digestive Wellness",
 kcal: "~1,405 kcal/day",
 protein: "105g Protein",
 carbFat: "Prebiotic & Probiotic Rich",
 icon: LeafIcon,
 desc: "Designed to soothe digestive irritation, reduce bloating, and feed beneficial flora using soothing broths, lacto-ferments, and low-FODMAP techniques.",
 image: "/images/gallery/gal-lentil-soup.jpg",
 popularDish: "Slow-Simmered Golden Turmeric & Red Lentil Soup with Ginger Cold-Pressed Oil",
 highlights: ["Elimination of common inflammatory triggers", "Naturally soothing digestive herbs", "Gentle fiber sources"]
 },
 {
 id: "age-reverse",
 name: "Cellular Longevity & Anti-Ageing",
 category: "health",
 categoryLabel: "Healthy Ageing · Vitality",
 kcal: "~1,370 kcal/day",
 protein: "115g Protein",
 carbFat: "High Polyphenol & Antioxidant",
 icon: ClockIcon,
 desc: "A cellular-health meal pattern rich in resveratrol, anthocyanins, omega-3 fatty acids, and collagen-boosting nutrients to optimize long-term vitality.",
 image: "/images/gallery/gal-overnight-oats.jpg",
 popularDish: "Coconut Chia & Wild Mountain Berry Overnight Parfait with Raw Cacao Nibs",
 highlights: ["Deep botanical antioxidant matrix", "Wild-caught marine omega-3s", "Telomere-supportive micronutrients"]
 },
 {
 id: "customized-chef",
 name: "Fully Bespoke Chef Plan",
 category: "custom",
 categoryLabel: "1-on-1 Personalized Plan",
 kcal: "Tailored to Your Target",
 protein: "Custom Macro Ratio",
 carbFat: "Allergies & Preferences Handled",
 icon: ChefHatIcon,
 desc: "A direct collaborative meal plan personally calibrated by Chef Radhey to your specific bloodwork, DEXA scan, caloric deficit, or culinary palate.",
 image: "/images/gallery/gal-plating-art.jpg",
 popularDish: "Custom Plated Menu Engineered Exclusively Around Your Goal",
 highlights: ["Direct WhatsApp consultation with Chef", "100% custom ingredient exclusions", "Weekly macro adjustments based on weigh-ins"]
 },
 {
 id: "pcod-pcos",
 name: "PCOD / PCOS Hormonal Care",
 category: "health",
 categoryLabel: "Health · Endocrine Support",
 kcal: "~1,360 kcal/day",
 protein: "118g Protein",
 carbFat: "Anti-Androgenic Formulation",
 icon: FlowerIcon,
 desc: "Nutritional therapy focusing on reducing insulin resistance, lowering systemic inflammation, and supporting hormonal equilibrium for women with PCOS.",
 image: "/images/gallery/gal-avocado-salmon-salad.jpg",
 popularDish: "Avocado & Cured Smoked Salmon Salad with Cold-Pressed Lemon Herb Vinaigrette",
 highlights: ["Phytoestrogen-aware ingredient selection", "Stabilizes insulin to manage cravings", "Omega-3 dense healthy fats"]
 },
 {
 id: "thyroid-care",
 name: "Thyroid & Metabolic Support",
 category: "health",
 categoryLabel: "Health · Endocrine & Energy",
 kcal: "~1,330 kcal/day",
 protein: "110g Protein",
 carbFat: "Selenium & Zinc Balanced",
 icon: ButterflyIcon,
 desc: "Strategic dietary planning rich in selenium, tyrosine, zinc, and iodine-safe ingredients to support thyroid hormone production and reduce sluggishness.",
 image: "/images/gallery/gal-fish-tanoor.jpg",
 popularDish: "Clay-Oven Tanoor Spiced White Fish with Roasted Sweet Potato & Steamed Greens",
 highlights: ["Carefully managed goitrogenic foods", "High bioavailability zinc and selenium", "Metabolism-supporting clean proteins"]
 },
 {
 id: "pregnancy-care",
 name: "Pregnancy & Post-Natal Nutrition",
 category: "health",
 categoryLabel: "Maternal Health & Nourishment",
 kcal: "~1,620 kcal/day",
 protein: "125g Protein",
 carbFat: "Folate, Choline & Iron Rich",
 icon: BabyMotherIcon,
 desc: "Gentle, nutrient-dense nutrition crafted for expectant and nursing mothers, prioritizing natural folates, bioavailable iron, and gentle digestive tolerance.",
 image: "/images/gallery/gal-spinach-omelette.jpg",
 popularDish: "Pasture-Raised Egg Spinach & Forest Mushroom Omelette with Sourdough",
 highlights: ["Strict food safety & hygiene standards", "Zero raw or unpasteurized ingredients", "Optimal fetal neuro-development nutrients"]
 },
 {
 id: "anti-inflammatory",
 name: "Anti-Inflammatory Protocol",
 category: "health",
 categoryLabel: "Health · Joint & Tissue Recovery",
 kcal: "~1,405 kcal/day",
 protein: "115g Protein",
 carbFat: "Curcumin & Polyphenol Dense",
 icon: LeafIcon,
 desc: "Eliminates nightshades, gluten, and inflammatory seed oils, while maximizing extra virgin olive oil, ginger, wild salmon, and deep green leafy vegetables.",
 image: "/images/gallery/gal-shrimps-curry.jpg",
 popularDish: "Tiger Shrimps Simmered in Fresh Lemongrass Ginger & Light Coconut Milk",
 highlights: ["Zero industrial seed oils", "High naturally occurring flavonoids", "Accelerates athletic & joint recovery"]
 },
 {
 id: "glp1-support",
 name: "GLP-1 Medicine Dietary Support",
 category: "health",
 categoryLabel: "Clinical Companion Nutrition",
 kcal: "~1,285 kcal/day",
 protein: "135g Protein",
 carbFat: "High Protein · Compact Portions",
 icon: ScaleIcon,
 desc: "Specially engineered for individuals using Ozempic, Mounjaro, or Wegovy to prevent lean muscle wasting, combat nausea, and guarantee essential nutrient density in small meals.",
 image: "/images/gallery/gal-chicken-balls.jpg",
 popularDish: "Lean Chicken Breast Meatballs in San Marzano Marinara with Steamed Zucchini",
 highlights: ["Ultra-high protein density per bite", "Easy-to-digest low-volume portions", "Prevents gastrointestinal sluggishness"]
 }
];

export default function MealPlansPage() {
 const [activeFilter, setActiveFilter] = useState<string>("all");
 const [searchQuery, setSearchQuery] = useState<string>("");
 const [modalOpen, setModalOpen] = useState(false);
 const [selectedPlan, setSelectedPlan] = useState<MealPlan | null>(null);

 // Modal 5-point fields
 const [modalName, setModalName] = useState("");
 const [modalContact, setModalContact] = useState("");
 const [modalGoal, setModalGoal] = useState("");
 const [modalNotes, setModalNotes] = useState("");

 const filtered = mealPlansList.filter(plan => {
 const matchesFilter = activeFilter === "all" || plan.category === activeFilter;
 const matchesSearch = (plan.name + " " + plan.categoryLabel + " " + plan.desc + " " + plan.popularDish)
 .toLowerCase()
 .includes(searchQuery.toLowerCase());
 return matchesFilter && matchesSearch;
 });

 const openPlanModal = (plan: MealPlan) => {
 setSelectedPlan(plan);
 setModalGoal(plan.name);
 setModalOpen(true);
 };

 const modalWhatsAppMessage = encodeURIComponent(
 `Hello Chef Radhey! I want to inquire about the ${selectedPlan?.name || "Meal Plan"} in Dubai:\n` +
 `• Name: ${modalName || "Not specified"}\n` +
 `• Contact: ${modalContact || "Via WhatsApp"}\n` +
 `• Goal: ${modalGoal || selectedPlan?.name}\n` +
 `• Preferences / Notes: ${modalNotes || "None"}\n\n` +
 `*Healthy Eating. Better Living.* `
 );

 return (
 <div className="site-root">
 <Navbar currentPath="/meal-plans" />

 {/* Subpage Hero */}
 <section className="subpage-hero">
 <div className="container">
 <div className="subpage-badge">Personalized Nutrition · Dubai UAE</div>
 <h1>Personalized Healthy Meal Plans</h1>
 <p>
 14 precision-designed culinary plans crafted by Chef Radhey. Every dish balances gourmet gastronomic flavor with verified calories, clean protein, and macro accuracy, delivered fresh daily across Dubai.
 </p>
 </div>
 </section>

 {/* Filter and Search Toolbar */}
 <section style={{ padding: "36px 0 16px", background: "var(--paper)" }}>
 <div className="container">
 <div style={{
 display: "flex",
 justifyContent: "space-between",
 alignItems: "center",
 flexWrap: "wrap",
 gap: "16px"
 }}>
 {/* Filter Pills */}
 <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
 {[
 { id: "all", label: "All 14 Plans" },
 { id: "fitness", label: "Fitness & Muscle" },
 { id: "health", label: "Health & Clinical" },
 { id: "custom", label: "Customized" }
 ].map(f => (
 <button
 key={f.id}
 onClick={() => setActiveFilter(f.id)}
 className={`filter-btn ${activeFilter === f.id ? "active" : ""}`}
 style={{ padding: "8px 16px", fontSize: "13px", fontWeight: 600, cursor: "pointer" }}
 >
 {f.label}
 </button>
 ))}
 </div>

 {/* Search Input */}
 <div style={{ position: "relative", minWidth: "260px" }}>
 <input
 type="search"
 className="search"
 placeholder="Search plan or dish name..."
 value={searchQuery}
 onChange={e => setSearchQuery(e.target.value)}
 style={{ paddingLeft: "36px", width: "100%" }}
 />
 <span style={{ position: "absolute", left: "12px", top: "50%", transform: "translateY(-50%)", color: "var(--muted)" }}>
 <SearchIcon size={14} />
 </span>
 </div>
 </div>
 </div>
 </section>

 {/* Meal Plans Grid */}
 <section style={{ padding: "30px 0 70px", background: "var(--soft, #f5f3ec)" }}>
 <div className="container">
 <div style={{
 display: "grid",
 gridTemplateColumns: "repeat(auto-fill, minmax(360px, 1fr))",
 gap: "24px"
 }}>
 {filtered.map(plan => {
 const IconComp = plan.icon;
 return (
 <article
 key={plan.id}
 style={{
 background: "#ffffff",
 border: "1px solid var(--line, #e3e7df)",
 borderRadius: "8px",
 overflow: "hidden",
 display: "flex",
 flexDirection: "column",
 boxShadow: "0 2px 10px rgba(0,0,0,0.03)",
 transition: "transform 0.2s ease, box-shadow 0.2s ease"
 }}
 onMouseEnter={e => {
 e.currentTarget.style.transform = "translateY(-3px)";
 e.currentTarget.style.boxShadow = "var(--shadow)";
 }}
 onMouseLeave={e => {
 e.currentTarget.style.transform = "translateY(0)";
 e.currentTarget.style.boxShadow = "0 2px 10px rgba(0,0,0,0.03)";
 }}
 >
 {/* Dish Photo Header */}
 <div style={{ position: "relative", height: "190px", overflow: "hidden", background: "#d9e2db" }}>
 <img
 src={plan.image}
 alt={plan.name}
 style={{ width: "100%", height: "100%", objectFit: "cover" }}
 />
 <div style={{
 position: "absolute",
 bottom: "10px",
 left: "12px",
 right: "12px",
 background: "rgba(23, 61, 45, 0.90)",
 backdropFilter: "blur(4px)",
 color: "#ffffff",
 padding: "6px 12px",
 borderRadius: "6px",
 fontSize: "11px",
 fontWeight: 600,
 display: "flex",
 justifyContent: "space-between",
 alignItems: "center"
 }}>
 <span>{plan.kcal}</span>
 <span style={{ color: "var(--gold-light, #e6c888)" }}>{plan.protein}</span>
 </div>
 </div>

 {/* Body Content */}
 <div style={{ padding: "22px", display: "flex", flexDirection: "column", flex: 1, background: "#ffffff" }}>
 <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "12px" }}>
 <span style={{
 display: "inline-flex",
 padding: "5px 11px",
 background: "rgba(185, 155, 98, 0.12)",
 border: "1px solid rgba(185, 155, 98, 0.3)",
 borderRadius: "30px",
 color: "#8a6a24",
 fontSize: "10.5px",
 fontWeight: 700,
 letterSpacing: "0.06em",
 textTransform: "uppercase"
 }}>
 {plan.categoryLabel}
 </span>
 <div style={{ color: "#8a6a24", display: "flex", alignItems: "center" }}>
 <IconComp size={20} />
 </div>
 </div>

 <h3 style={{ fontFamily: "Georgia, serif", fontSize: "22px", fontWeight: 400, margin: "6px 0 10px 0", color: "#17281f" }}>
 {plan.name}
 </h3>

 <p style={{ fontSize: "13.5px", color: "#526257", lineHeight: "1.55", margin: "0 0 16px 0", flex: 1 }}>
 {plan.desc}
 </p>

 {/* Dish Preview */}
 <div style={{
 background: "#f4f7f4",
 padding: "11px 13px",
 borderRadius: "6px",
 fontSize: "12.5px",
 lineHeight: "1.5",
 color: "#17281f",
 marginBottom: "18px",
 border: "1px solid #dce5dc"
 }}>
 <strong style={{ color: "#173d2d", fontWeight: 700, display: "inline-block", marginRight: "4px" }}>
 Sample Plate:
 </strong>{" "}
 <span style={{ color: "#24372a" }}>{plan.popularDish}</span>
 </div>

 {/* Highlights */}
 <ul style={{ paddingLeft: "18px", margin: "0 0 20px 0", fontSize: "12.5px", color: "#526257", display: "grid", gap: "6px" }}>
 {plan.highlights.map((h, i) => (
 <li key={i}>{h}</li>
 ))}
 </ul>

 {/* Action Button: Open WhatsApp Inquiry Modal */}
 <button
 type="button"
 onClick={() => openPlanModal(plan)}
 className="btn btn-primary"
 style={{ width: "100%", padding: "12px", fontSize: "13px" }}
 >
 <span>Inquire About This Plan</span>
 <ArrowUpRightIcon size={14} />
 </button>
 </div>
 </article>
 );
 })}
 </div>

 {/* Pricing Calculator Teaser Callout */}
 <div style={{
 marginTop: "60px",
 background: "radial-gradient(ellipse at 85% 20%, rgba(185, 155, 98, 0.18), transparent 45%), var(--forest)",
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
 Official AED Pricing · No Hidden Fees
 </div>
 <h2 style={{ fontFamily: "Georgia, serif", fontSize: "28px", fontWeight: 400, color: "#ffffff", margin: "0 0 8px 0" }}>
 Want an Instant Custom Price Estimate?
 </h2>
 <p style={{ color: "#d2ded5", fontSize: "14px", margin: 0, lineHeight: "1.5" }}>
 Calculate your exact weekly or monthly investment based on your required meals per day, duration (20, 24, 30, or 90 days), and dietary preferences.
 </p>
 </div>

 <Link href="/calculator" className="btn btn-gold" style={{ padding: "14px 28px", fontSize: "14px", whiteSpace: "nowrap" }}>
 <span>Open Pricing Calculator</span>
 <ArrowUpRightIcon size={15} />
 </Link>
 </div>
 </div>
 </section>

 {/* Plan Details Modal (ONLY WhatsApp Button, Zero Emojis) */}
 {modalOpen && (
 <div
 className="modal-backdrop open"
 role="dialog"
 aria-modal="true"
 onClick={() => setModalOpen(false)}
 >
 <div className="modal" onClick={e => e.stopPropagation()}>
 <button
 className="modal-close"
 aria-label="Close"
 onClick={() => setModalOpen(false)}
 >
 <CloseIcon size={16} />
 </button>

 <span className="pill" style={{ marginBottom: "10px", background: "rgba(185, 155, 98, 0.12)", border: "1px solid rgba(185, 155, 98, 0.28)", color: "#8a6a24", fontWeight: 700, padding: "5px 12px", borderRadius: "30px", fontSize: "11px" }}>
 {selectedPlan?.categoryLabel || "Meal Plan Enquiry"}
 </span>

 <h3 style={{ fontFamily: "Georgia, serif", fontSize: "28px", margin: "6px 0 8px", color: "#17281f", fontWeight: 400 }}>
 {selectedPlan?.name}
 </h3>

 <p style={{ color: "#526257", fontSize: "13.5px", lineHeight: "1.55", marginBottom: "22px" }}>
 {selectedPlan?.desc} Daily calorie guidance ({selectedPlan?.kcal}) is individualized to your body composition.
 </p>

 <form onSubmit={e => e.preventDefault()} style={{ display: "grid", gap: "14px" }}>
 <div className="field">
 <label htmlFor="modalName">
 <span className="form-num">1</span> Your Name *
 </label>
 <input
 id="modalName"
 required
 placeholder="Full name"
 value={modalName}
 onChange={e => setModalName(e.target.value)}
 />
 </div>

 <div className="field">
 <label htmlFor="modalContact">
 <span className="form-num">2</span> WhatsApp / Phone *
 </label>
 <input
 id="modalContact"
 required
 placeholder="+971…"
 value={modalContact}
 onChange={e => setModalContact(e.target.value)}
 />
 </div>

 <div className="field">
 <label htmlFor="modalGoal">
 <span className="form-num">3</span> Primary Goal *
 </label>
 <select
 id="modalGoal"
 value={modalGoal}
 onChange={e => setModalGoal(e.target.value)}
 >
 <option value={selectedPlan?.name}>{selectedPlan?.name}</option>
 <option value="Fat Loss / Weight Management">Fat Loss / Weight Management</option>
 <option value="Hypertrophy & Muscle Gain">Hypertrophy & Muscle Gain</option>
 <option value="Everyday Balanced Nutrition">Everyday Balanced Nutrition</option>
 <option value="Diabetic & Glycemic Control">Diabetic & Glycemic Control</option>
 <option value="Microbiome & Gut Restoration">Microbiome & Gut Restoration</option>
 <option value="Cellular Longevity & Anti-Ageing">Cellular Longevity & Anti-Ageing</option>
 <option value="Custom 1-on-1 Nutrition Plan">Custom 1-on-1 Nutrition Plan</option>
 </select>
 </div>

 <div className="field">
 <label htmlFor="modalNotes">
 <span className="form-num">4</span> Dietary Preferences, Allergies, or Questions
 </label>
 <textarea
 id="modalNotes"
 placeholder="e.g. Dairy-free, nut allergy, gluten-sensitive, delivery area in Dubai..."
 value={modalNotes}
 onChange={e => setModalNotes(e.target.value)}
 ></textarea>
 </div>

 {/* ONLY WhatsApp Button (Zero Submit Button) */}
 <div style={{ marginTop: "16px" }}>
 <a
 href={`https://wa.me/971569754492?text=${modalWhatsAppMessage}`}
 target="_blank"
 rel="noopener noreferrer"
 className="btn-whatsapp-full"
 >
 <WhatsAppIcon size={18} color="#fff" />
 <span>Send via WhatsApp Direct</span>
 </a>
 </div>
 </form>
 </div>
 </div>
 )}

 <SiteFooter />
 </div>
 );
}
