"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import SiteFooter from "@/components/SiteFooter";
import Link from "next/link";
import {
 WhatsAppIcon,
 ArrowUpRightIcon,
 ArrowDownIcon,
 MailIcon,
 PinIcon,
 SearchIcon,
 CloseIcon,
 SaladIcon,
 RestaurantIcon,
 FireIcon,
 DumbbellIcon,
 HeartPulseIcon,
 LeafIcon,
 ClockIcon,
 ChefHatIcon,
 FlowerIcon,
 ButterflyIcon,
 BabyMotherIcon,
 ScaleIcon
} from "@/components/Icons";

interface MealPlanItem {
 name: string;
 category: "fitness" | "health" | "custom";
 label: string;
 kcal: string;
 icon: React.ComponentType<{ size?: number }>;
 desc: string;
}

const mealPlans: MealPlanItem[] = [
 { name: "Fat Loss", category: "fitness", label: "Lose weight · Fat loss", kcal: "~1,285 kcal/day*", icon: FireIcon, desc: "A structured plan enquiry for weight-management goals." },
 { name: "Muscle Gain", category: "fitness", label: "Gain muscle · Fitness", kcal: "~1,815 kcal/day*", icon: DumbbellIcon, desc: "Explore protein-aware meals for training and recovery goals." },
 { name: "Balanced Diet", category: "fitness", label: "Maintain · Balanced diet", kcal: "~1,615 kcal/day*", icon: SaladIcon, desc: "Everyday meal structure focused on variety and balance." },
 { name: "Diabetic Friendly", category: "health", label: "Health-focused · Diabetes", kcal: "~1,290 kcal/day*", icon: HeartPulseIcon, desc: "Enquiry for an appropriately individualized diabetes-conscious eating plan." },
 { name: "Gut Health", category: "health", label: "Health-focused · Gut health", kcal: "~1,405 kcal/day*", icon: LeafIcon, desc: "Discuss food preferences and digestive-health considerations." },
 { name: "Age Reverse", category: "health", label: "Healthy ageing", kcal: "~1,370 kcal/day*", icon: ClockIcon, desc: "Healthy-ageing meal ideas; no promise to reverse biological age." },
 { name: "Customized Meal Plan", category: "custom", label: "Custom · Personalized", kcal: "~1,575 kcal/day*", icon: ChefHatIcon, desc: "Start an enquiry based on your lifestyle, preferences, and goals." },
 { name: "PCOD / PCOS Care", category: "health", label: "Health-focused · PCOS", kcal: "~1,360 kcal/day*", icon: FlowerIcon, desc: "Nutrition enquiry for PCOS; individualized support may require a qualified clinician." },
 { name: "Thyroid Care", category: "health", label: "Health-focused · Thyroid", kcal: "~1,330 kcal/day*", icon: ButterflyIcon, desc: "Discuss general food planning alongside appropriate medical care." },
 { name: "Pregnancy Nutrition", category: "health", label: "Health-focused · Pregnancy", kcal: "~1,620 kcal/day*", icon: BabyMotherIcon, desc: "Pregnancy nutrition requires individualized advice from a qualified professional." },
 { name: "Anti-Inflammatory", category: "health", label: "Food pattern · Anti-inflammatory", kcal: "~1,405 kcal/day*", icon: LeafIcon, desc: "A balanced food-pattern enquiry; not a treatment for inflammatory disease." },
 { name: "Endometriosis", category: "health", label: "Health-focused · Endometriosis", kcal: "~1,360 kcal/day*", icon: FlowerIcon, desc: "Discuss food preferences with appropriate healthcare support for this condition." },
 { name: "PCOS Hormonal Balance", category: "health", label: "Health-focused · Hormonal health", kcal: "~1,360 kcal/day*", icon: FlowerIcon, desc: "General nutrition enquiry for PCOS; avoid claims of correcting hormones." },
 { name: "GLP-1 Support", category: "health", label: "Food support · GLP-1", kcal: "~1,285 kcal/day*", icon: ScaleIcon, desc: "Food-planning enquiry for people using GLP-1 medicines, with clinician guidance." }
];

export default function Home() {
 const [activeFilter, setActiveFilter] = useState<string>("all");
 const [searchQuery, setSearchQuery] = useState<string>("");
 const [modalOpen, setModalOpen] = useState<boolean>(false);
 const [selectedPlan, setSelectedPlan] = useState<MealPlanItem | null>(null);
 const [navOpen, setNavOpen] = useState<boolean>(false);

 // Form states with the exact 5 points
 const [name, setName] = useState("");
 const [age, setAge] = useState("");
 const [weightHeight, setWeightHeight] = useState("");
 const [goal, setGoal] = useState("Fat Loss / Weight Management");
 const [preferences, setPreferences] = useState("");
 const [phone, setPhone] = useState("+971 ");
 const [formStatus, setFormStatus] = useState<string | null>(null);

  // Business & Consulting dynamic fields
  const [businessName, setBusinessName] = useState("");
  const [businessLocation, setBusinessLocation] = useState("");
  const [businessDetails, setBusinessDetails] = useState("");

  const isBusiness =
    goal === "Restaurant & Food Business Consulting" ||
    goal === "Recipe or Menu Development" ||
    goal === "Macro & Nutrition Labeling for Food Brands" ||
    goal === "Cloud Kitchen & Operations Setup";

 // Modal form states
 const [modalName, setModalName] = useState("");
 const [modalContact, setModalContact] = useState("");
 const [modalGoal, setModalGoal] = useState("");
 const [modalNotes, setModalNotes] = useState("");
 const [modalStatus, setModalStatus] = useState<string | null>(null);

 const filteredPlans = mealPlans.filter(p => {
 const matchesFilter = activeFilter === "all" || p.category === activeFilter;
 const matchesSearch = (p.name + " " + p.label + " " + p.desc).toLowerCase().includes(searchQuery.toLowerCase());
 return matchesFilter && matchesSearch;
 });

 const openPlanModal = (plan: MealPlanItem) => {
 setSelectedPlan(plan);
 setModalGoal(
 plan.category === "custom"
 ? "Personalized plan"
 : plan.category === "fitness"
 ? plan.name === "Muscle Gain"
 ? "Muscle gain"
 : plan.name === "Balanced Diet"
 ? "Balanced eating"
 : "Fat loss / weight management"
 : "Health-focused meal enquiry"
 );
 setModalStatus(null);
 setModalOpen(true);
 };

 const handleContactSubmit = (e: React.FormEvent) => {
 e.preventDefault();
 setFormStatus(
 "Your details have been recorded! You can also click the WhatsApp button to connect immediately with Chef Radhey."
 );
 };

 const handleModalSubmit = (e: React.FormEvent) => {
 e.preventDefault();
 setModalStatus(
 "Your enquiry for " + (selectedPlan?.name || "meal plan") + " has been prepared!"
 );
 };

 const contactWhatsAppMessage = encodeURIComponent(
    isBusiness
      ? `Hello Chef Radhey! I am inquiring about Restaurant & Food Business Consulting

` +
        `• Contact Name: ${name || "N/A"}
` +
        `• Phone / WhatsApp: ${phone}
` +
        `• Brand / Restaurant Name: ${businessName || "New Food Concept"}
` +
        `• Location & Cuisine: ${businessLocation || "Dubai / UAE"}
` +
        `• Consulting Scope: ${goal}
` +
        `• Project Scope & Timeline: ${businessDetails || preferences || "Recipe development & kitchen consulting"}

` +
        `*Chef Radhey Culinary & Business Consulting*`
      : `Hello Chef Radhey! Welcome to Chef Radhey – Personalized Healthy Meal Plans

` +
        `• Name: ${name || "N/A"}
` +
        `• Phone: ${phone}
` +
        `• Age: ${age || "N/A"}
` +
        `• Current Weight & Height: ${weightHeight || "N/A"}
` +
        `• Goal: ${goal}
` +
        `• Food preferences / health concerns: ${preferences || "None specified"}

` +
        `*Healthy Eating. Better Living.*`
  );

 const modalWhatsAppMessage = encodeURIComponent(
 `Hello Chef Radhey! I am inquiring about the ${selectedPlan?.name || "Meal Plan"}:\n` +
 `• Name: ${modalName}\n` +
 `• Contact: ${modalContact}\n` +
 `• Goal: ${modalGoal}\n` +
 `• Preferences / Notes: ${modalNotes || "None"}`
 );

 return (
 <div className="site-root" id="top">
 
 <Navbar currentPath="/" />

 <main>
 {/* Hero Section */}
 <section className="hero">
 <div className="container hero-grid">
 <div>
 <div className="eyebrow">18+ years of culinary experience · Dubai</div>
 <h1>
 Better Food.<br />
 <em>Better Living.</em><br />
 Better Businesses.
 </h1>
 <p>
 From personalized meal-plan concepts to healthy restaurant launches, Chef Radhey brings culinary creativity and nutrition-focused thinking to individuals and food businesses.
 </p>
 
 <div className="hero-actions">
 <Link className="btn btn-primary" href="/meal-plans">
 <span>Explore Meal Plans</span>
 <ArrowDownIcon size={14} />
 </Link>
 <Link className="btn btn-outline" href="/consulting">
 <span>Build a Food Business</span>
 <ArrowUpRightIcon size={14} />
 </Link>
 </div>

 <div className="hero-note">
 Healthy food should taste exceptional. Great food businesses should be built on recipes, consistency, and clear nutrition information.
 </div>
 </div>

 {/* Hero Plate Art with Real Gourmet Dish Photography */}
 <div className="hero-art" aria-label="Chef Radhey signature gourmet balanced meal">
 <div className="plate">
 <img
 src="/images/dishes/avocado-salmon-salad.jpg"
 alt="Chef Radhey Gourmet Nutrition Dish"
 className="plate-photo"
 />
 <div className="plate-tag">
 <span>Fresh · Balanced · Chef Crafted</span>
 </div>
 </div>

 {/* Floating Card: 1,000+ Recipe Library */}
 <div className="floating-card fc-one">
 <strong>1,000+</strong>
 <span>Recipe library*</span>
 </div>

 {/* Floating Card: Two Pillars */}
 <div className="floating-card fc-two">
 <strong>Two pillars</strong>
 <span>Nutrition + business</span>
 </div>
 </div>
 </div>
 </section>

 {/* Stats Strip */}
 <div className="stats">
 <div className="container stats-grid">
 <div className="stat">
 <strong>18+</strong>
 <span>Years of experience*</span>
 </div>
 <div className="stat">
 <strong>1,000+</strong>
 <span>Healthy recipe items*</span>
 </div>
 <div className="stat">
 <strong>2</strong>
 <span>Core service segments</span>
 </div>
 <div className="stat">
 <strong>Dubai</strong>
 <span>UAE-based brand</span>
 </div>
 </div>
 </div>

 {/* Segments (Part 1 vs Part 2) */}
 <section id="segments">
 <div className="container">
 <div className="section-head center">
 <div className="eyebrow">One brand · Two specialities</div>
 <h2>How Chef Radhey Can Help</h2>
 <p>
 Choose the path that fits your goal: personal healthy eating or professional food-business development.
 </p>
 </div>

 <div className="segments">
 {/* Pillar 1 */}
 <article className="segment-card">
 <div className="segment-visual">
 <img
 src="/images/meal-prep-boxes.jpg"
 alt="Chef Radhey Personalized Healthy Meal Plans & Subscription Delivery Dubai"
 />
 <div style={{
 position: "absolute",
 inset: 0,
 background: "linear-gradient(to top, rgba(17, 36, 25, 0.70) 0%, rgba(17, 36, 25, 0.12) 50%, transparent 100%)"
 }} />
 <div style={{
 position: "absolute",
 bottom: "14px",
 left: "16px",
 right: "16px",
 display: "flex",
 justifyContent: "space-between",
 alignItems: "center",
 gap: "8px"
 }}>
 <span style={{
 background: "rgba(255, 255, 255, 0.94)",
 backdropFilter: "blur(10px)",
 WebkitBackdropFilter: "blur(10px)",
 color: "#173d2d",
 fontSize: "11px",
 fontWeight: 750,
 padding: "5px 12px",
 borderRadius: "20px",
 letterSpacing: "0.04em",
 textTransform: "uppercase",
 boxShadow: "0 2px 8px rgba(0,0,0,0.12)"
 }}>
 Fresh Daily Delivery
 </span>
 <span style={{
 background: "rgba(23, 61, 45, 0.88)",
 backdropFilter: "blur(10px)",
 WebkitBackdropFilter: "blur(10px)",
 color: "#f5e4ba",
 fontSize: "11px",
 fontWeight: 650,
 padding: "5px 11px",
 borderRadius: "20px"
 }}>
 14 Specialized Plans
 </span>
 </div>
 </div>
 <div className="segment-body">
 <span className="pill">01 · Individuals</span>
 <h3>Nutrition & Meal Plans</h3>
 <p>
 Explore structured meal-plan options and personalized food guidance built around lifestyle preferences and goals.
 </p>
 <ul>
 <li>Fat loss and weight management</li>
 <li>Muscle gain and balanced eating</li>
 <li>Gut-health and dietary-preference enquiries</li>
 <li>Specialized nutrition enquiries</li>
 <li>Recipe macros and calorie information</li>
 </ul>
 <Link className="btn btn-primary" href="/meal-plans">
 <span>Explore Meal Plans</span>
 <ArrowUpRightIcon size={14} />
 </Link>
 </div>
 </article>

 {/* Pillar 2 */}
 <article className="segment-card">
 <div className="segment-visual business">
 <img
 src="/images/gallery/gal-commercial-line-1.jpg"
 alt="Healthy Restaurant, Cloud Kitchen Setup & Commercial Advisory Dubai"
 />
 <div style={{
 position: "absolute",
 inset: 0,
 background: "linear-gradient(to top, rgba(20, 30, 22, 0.72) 0%, rgba(20, 30, 22, 0.15) 50%, transparent 100%)"
 }} />
 <div style={{
 position: "absolute",
 bottom: "14px",
 left: "16px",
 right: "16px",
 display: "flex",
 justifyContent: "space-between",
 alignItems: "center",
 gap: "8px"
 }}>
 <span style={{
 background: "rgba(255, 255, 255, 0.94)",
 backdropFilter: "blur(10px)",
 WebkitBackdropFilter: "blur(10px)",
 color: "#6e562c",
 fontSize: "11px",
 fontWeight: 750,
 padding: "5px 12px",
 borderRadius: "20px",
 letterSpacing: "0.04em",
 textTransform: "uppercase",
 boxShadow: "0 2px 8px rgba(0,0,0,0.12)"
 }}>
 Commercial Advisory
 </span>
 <span style={{
 background: "rgba(35, 48, 38, 0.88)",
 backdropFilter: "blur(10px)",
 WebkitBackdropFilter: "blur(10px)",
 color: "#f5e4ba",
 fontSize: "11px",
 fontWeight: 650,
 padding: "5px 11px",
 borderRadius: "20px"
 }}>
 18+ Years Leadership
 </span>
 </div>
 </div>
 <div className="segment-body">
 <span className="pill gold">02 · Food businesses</span>
 <h3>Healthy Restaurant & Menu Consulting</h3>
 <p>
 Support for restaurant owners, hospitality teams, and entrepreneurs who want to develop a healthy food concept.
 </p>
 <ul>
 <li>Healthy restaurant concept and setup guidance</li>
 <li>Menu creation and recipe development</li>
 <li>Ingredient, portion, and recipe costing support</li>
 <li>Calories and macro calculations</li>
 <li>Kitchen workflow and menu consistency</li>
 </ul>
 <Link className="btn btn-primary" href="/consulting">
 <span>Explore Business Services</span>
 <ArrowUpRightIcon size={14} />
 </Link>
 </div>
 </article>
 </div>
 </div>
 </section>

 {/* Meal Plans Section */}
 <section id="meal-plans">
 <div className="container">
 <div className="section-head">
 <div className="eyebrow">Personalized food solutions</div>
 <h2>Find a Meal Plan That Fits Your Goals</h2>
 <p>
 Explore the available categories, then send an enquiry to discuss a suitable plan. Calorie examples are illustrative only; actual energy needs vary by individual.
 </p>
 </div>

 {/* Filter Toolbar */}
 <div className="meal-toolbar">
 <div className="filters" id="mealFilters">
 {[
 { id: "all", label: "All plans" },
 { id: "fitness", label: "Fitness" },
 { id: "health", label: "Health-focused" },
 { id: "custom", label: "Personalized" }
 ].map(f => (
 <button
 key={f.id}
 className={`filter-btn ${activeFilter === f.id ? "active" : ""}`}
 onClick={() => setActiveFilter(f.id)}
 >
 {f.label}
 </button>
 ))}
 </div>

 <div style={{ position: "relative" }}>
 <input
 className="search"
 id="mealSearch"
 type="search"
 value={searchQuery}
 onChange={e => setSearchQuery(e.target.value)}
 placeholder="Search meal plans…"
 aria-label="Search meal plans"
 />
 </div>
 </div>

 {/* Cards Grid */}
 <div className="meal-grid" id="mealGrid">
 {filteredPlans.length === 0 ? (
 <p style={{ gridColumn: "1 / -1", textAlign: "center", color: "var(--muted)", padding: "30px 0" }}>
 No plans match your search. Try another term.
 </p>
 ) : (
 filteredPlans.map(p => {
 const Icon = p.icon;
 return (
 <article key={p.name} className="meal-card" onClick={() => openPlanModal(p)}>
 <div className="meal-top">
 <span className="meal-icon" style={{ color: "var(--forest)" }}>
 <Icon size={22} />
 </span>
 <span className="pill">
 {p.category === "fitness" ? "Fitness" : p.category === "health" ? "Health" : "Custom"}
 </span>
 </div>
 <h3>{p.name}</h3>
 <div className="desc">{p.label}</div>
 <div className="meal-kcal">{p.kcal}</div>
 <button className="small-btn" type="button">
 <span>Learn More / Select Plan</span>
 <span> ↗</span>
 </button>
 </article>
 );
 })
 )}
 </div>

 <p className="notice">
 Important: Displayed calorie figures are example references from the proposed plan list, not individualized prescriptions or guarantees. Diabetes, pregnancy, PCOS, thyroid, endometriosis, gut-health, GLP-1-related, and other therapeutic nutrition needs should be assessed by an appropriately qualified professional. No plan replaces medical care.
 </p>
 </div>
 </section>

 {/* Dedicated Calculator Teaser Callout */}
 <div className="container" style={{ margin: "10px auto 40px" }}>
 <div style={{
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
 Interactive Transparent Pricing · UAE
 </div>
 <h3 style={{ fontFamily: "Georgia, serif", fontSize: "27px", fontWeight: 400, color: "#ffffff", margin: "0 0 8px 0" }}>
 Calculate Your Custom Meal Plan Investment
 </h3>
 <p style={{ color: "#d2ded5", fontSize: "14px", margin: 0, lineHeight: "1.5" }}>
 Explore live AED rates (starting at AED 40–45 per meal) across 20, 24, 30, and 90-day durations with free daily Dubai delivery.
 </p>
 </div>

 <Link href="/calculator" className="btn btn-gold" style={{ padding: "14px 28px", fontSize: "14px", whiteSpace: "nowrap" }}>
 <span>Open Pricing Calculator</span>
 <ArrowUpRightIcon size={15} />
 </Link>
 </div>
 </div>

 {/* Recipe Library Section */}
 <section className="recipe-section" id="recipes">
 <div className="container">
 <div className="section-head">
 <div className="eyebrow">The Chef Radhey recipe library</div>
 <h2>1,000+ Recipe Ideas. Clear Nutrition Information.</h2>
 <p>
 A growing library of chef-developed dishes with ingredient quantities, serving sizes, and calculated calories, protein, carbohydrates, and fats where verified.
 </p>
 </div>

 <div className="recipe-grid">
 {/* Recipe 1 */}
 <article className="recipe-card">
 <div className="recipe-image">
 <img src="/images/dishes/chicken-teriyaki.jpg" alt="Chicken Teriyaki Bowl" />
 </div>
 <div className="recipe-info">
 <span className="pill">High-protein meal</span>
 <h3>Chicken Teriyaki Bowl</h3>
 <p>Balanced bowl concept with protein, grains, vegetables, and a measured sauce portion.</p>
 <div className="macro-row">
 <div className="macro"><strong>Calories</strong>Calculated per recipe</div>
 <div className="macro"><strong>Protein</strong>Calculated per serving</div>
 <div className="macro"><strong>Macros</strong>Portion-based</div>
 </div>
 </div>
 </article>

 {/* Recipe 2 */}
 <article className="recipe-card">
 <div className="recipe-image two">
 <img src="/images/dishes/bbq-salmon.jpg" alt="Creamy Thai Chicken Curry & Salmon" />
 </div>
 <div className="recipe-info">
 <span className="pill">Chef&apos;s special</span>
 <h3>Creamy Thai Chicken Curry</h3>
 <p>A flavor-focused dish with ingredient quantities and nutrition estimates based on the final recipe.</p>
 <div className="macro-row">
 <div className="macro"><strong>Calories</strong>Calculated per recipe</div>
 <div className="macro"><strong>Protein</strong>Calculated per serving</div>
 <div className="macro"><strong>Macros</strong>Portion-based</div>
 </div>
 </div>
 </article>

 {/* Recipe 3 */}
 <article className="recipe-card">
 <div className="recipe-image three">
 <img src="/images/dishes/chicken-pizza.jpg" alt="Banana Protein Pancakes & Healthy Crust" />
 </div>
 <div className="recipe-info">
 <span className="pill">Breakfast</span>
 <h3>Banana Protein Pancakes</h3>
 <p>A breakfast recipe concept with portion guidance and nutrition data to be confirmed from ingredients.</p>
 <div className="macro-row">
 <div className="macro"><strong>Calories</strong>Calculated per recipe</div>
 <div className="macro"><strong>Protein</strong>Calculated per serving</div>
 <div className="macro"><strong>Macros</strong>Portion-based</div>
 </div>
 </div>
 </article>
 </div>

 <div style={{ textAlign: "center", marginTop: "28px" }}>
 <a className="btn btn-outline" href="#contact">
 <span>Request Recipe or Menu Development</span>
 <ArrowUpRightIcon size={14} />
 </a>
 </div>
 </div>
 </section>

 {/* Business Consulting Section */}
 <section className="business-section" id="business">
 <div className="container">
 <div className="section-head">
 <div className="eyebrow">For restaurants · Cafes · Food brands</div>
 <h2>Turn Your Food Idea Into a Clear, Market-Ready Concept.</h2>
 <p>
 Practical culinary support from concept and menu planning through recipe documentation and nutrition information.
 </p>
 </div>

 <div className="business-grid">
 <div className="business-list">
 <div className="business-item">
 <div className="num">01</div>
 <div>
 <h3>Healthy Restaurant Concept</h3>
 <p>Define the target customer, food identity, menu direction, and customer proposition.</p>
 </div>
 </div>
 <div className="business-item">
 <div className="num">02</div>
 <div>
 <h3>Menu & Recipe Development</h3>
 <p>Create dishes with ingredient specifications, serving portions, and repeatable preparation methods.</p>
 </div>
 </div>
 <div className="business-item">
 <div className="num">03</div>
 <div>
 <h3>Nutrition & Macro Calculations</h3>
 <p>Document estimated calories, protein, carbohydrates, and fats using recipe quantities and reliable data.</p>
 </div>
 </div>
 <div className="business-item">
 <div className="num">04</div>
 <div>
 <h3>Operations & Launch Guidance</h3>
 <p>Menu organization, kitchen workflow, preparation planning, and practical launch checklists.</p>
 </div>
 </div>
 </div>

 <div className="business-copy">
 <h3>Make your menu stand out for the right reasons.</h3>
 <p>
 Chef Radhey helps food businesses shape healthy menus that balance taste, customer needs, portion consistency, and nutrition transparency.
 </p>
 <ul>
 <li>Healthy restaurant and cafe setup guidance</li>
 <li>Menu architecture and dish descriptions</li>
 <li>Recipe standardization and portion control</li>
 <li>Recipe costing and ingredient specifications</li>
 <li>Macro and calorie documentation</li>
 <li>Support for healthy food brands and product concepts</li>
 </ul>
 <a
 className="btn btn-primary"
 href="#contact"
 onClick={() => setGoal("Restaurant & Food Business Consulting")}
 >
 <span>Discuss Your Food Business</span>
 <ArrowUpRightIcon size={14} />
 </a>

 <div className="brand-strip">
 <span className="brand-chip">Concept Development</span>
 <span className="brand-chip">Recipe Library</span>
 <span className="brand-chip">Menu Nutrition</span>
 <span className="brand-chip">Launch Support</span>
 </div>
 </div>
 </div>
 </div>
 </section>

 {/* About Section */}
 <section id="about">
 <div className="container about-grid">
 <div className="portrait-card">
 <img
 src="/images/chef-radhey-suit.png"
 alt="Chef Radhey"
 style={{ width: "100%", height: "100%", objectFit: "cover" }}
 />
 <div className="portrait-label">Chef Radhey · Culinary & Nutrition-Focused Food</div>
 </div>

 <div className="about-copy">
 <div className="eyebrow">The person behind the food</div>
 <h2>
 A Chef&apos;s Mindset.<br />
 A Nutrition-Focused Approach.
 </h2>
 <p>
 Chef Radhey&apos;s work brings together healthy food, recipe development, meal-plan concepts, and food-business innovation. The aim is to make nutritious eating more practical while helping food businesses turn ideas into consistent menus.
 </p>
 <p>
 With 18+ years of experience and a recipe library of 1,000+ items as described for this brand, Chef Radhey&apos;s website shares culinary knowledge with individuals and professional food teams.
 </p>

 <div className="about-points">
 <div className="about-point">
 <strong>Healthy cuisine</strong>
 Food designed around flavor and balance.
 </div>
 <div className="about-point">
 <strong>Recipe development</strong>
 Clear portions and repeatable methods.
 </div>
 <div className="about-point">
 <strong>Nutrition information</strong>
 Macro calculations with transparent assumptions.
 </div>
 <div className="about-point">
 <strong>Business support</strong>
 Menu and concept development for food brands.
 </div>
 </div>

 <a className="btn btn-outline" href="#contact">
 <span>Contact Chef Radhey</span>
 <ArrowUpRightIcon size={14} />
 </a>
 </div>
 </div>
 </section>

 {/* Contact Section with the 5-point questionnaire */}
      <section className="contact-section" id="contact" style={{ background: "#f7f5ef", color: "#17281f" }}>
        <div className="container contact-grid">
          <div className="contact-copy">
            <div style={{ display: "inline-flex", alignItems: "center", gap: "8px", background: "rgba(22, 61, 45, 0.08)", border: "1px solid rgba(22, 61, 45, 0.16)", padding: "6px 14px", borderRadius: "20px", marginBottom: "16px" }}>
              <span className="pulse-dot"></span>
              <span style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: "#173d2d" }}>
                {isBusiness ? "Business & Menu Consulting Desk" : "Concierge & Direct Intake"}
              </span>
            </div>
            
            <h2 style={{ fontFamily: "Georgia, serif", fontWeight: 400, fontSize: "42px", lineHeight: 1.12, margin: "0 0 16px 0", color: "#17281f" }}>
              {isBusiness ? "Scale Your Food Concept." : "Let's Discuss Your Goal."}
            </h2>
            
            <p style={{ fontSize: "15px", lineHeight: 1.65, color: "#4a594f", margin: "0 0 26px 0" }}>
              {isBusiness
                ? "Direct culinary & business advisory with Chef Radhey. From menu engineering and macro formulation to kitchen operations and cloud kitchen scale across Dubai and the UAE."
                : "Tell us whether you're looking for a bespoke clinical meal plan, macro-counted weight management, or medical nutrition support across Dubai."}
            </p>
            
            <div className="contact-cards-group">
              <a
                href="https://wa.me/971569754492"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-card-premium"
              >
                <div className="contact-card-icon" style={{ background: "rgba(37, 211, 102, 0.15)", color: "#147a39" }}>
                  <WhatsAppIcon size={22} />
                </div>
                <div className="contact-card-text">
                  <span className="contact-card-label">Direct WhatsApp Hotline</span>
                  <strong className="contact-card-value" style={{ color: "#17281f" }}>+971 56 975 4492</strong>
                  <span className="contact-card-sub" style={{ color: "#4a594f" }}>Instant response · Daily 8:00 AM – 10:00 PM GST</span>
                </div>
              </a>

              <div className="contact-card-premium">
                <div className="contact-card-icon" style={{ background: "rgba(22, 61, 45, 0.10)", color: "#173d2d" }}>
                  <PinIcon size={22} />
                </div>
                <div className="contact-card-text">
                  <span className="contact-card-label">Culinary Studio & Delivery Hub</span>
                  <strong className="contact-card-value" style={{ color: "#17281f" }}>Dubai, United Arab Emirates</strong>
                  <span className="contact-card-sub" style={{ color: "#4a594f" }}>Serving Downtown, Marina, Palm Jumeirah & Emirates Hills</span>
                </div>
              </div>

              <a
                href="mailto:enquiries@chefradhey.com"
                className="contact-card-premium"
              >
                <div className="contact-card-icon" style={{ background: "rgba(197, 160, 89, 0.16)", color: "#8a6a24" }}>
                  <MailIcon size={22} />
                </div>
                <div className="contact-card-text">
                  <span className="contact-card-label">Official Email Enquiries</span>
                  <strong className="contact-card-value" style={{ color: "#17281f" }}>enquiries@chefradhey.com</strong>
                  <span className="contact-card-sub" style={{ color: "#4a594f" }}>Corporate wellness, partnerships & consulting proposals</span>
                </div>
              </a>
            </div>

            <div style={{ display: "flex", gap: "16px", marginTop: "22px", padding: "12px 16px", background: "rgba(255, 255, 255, 0.65)", borderRadius: "12px", border: "1px solid rgba(22, 61, 45, 0.08)", fontSize: "11.5px", color: "#4a594f" }}>
              <span>Strict Privacy Protected</span>
              <span>·</span>
              <span>Direct Chef Consultation</span>
              <span>·</span>
              <span>Zero Spam</span>
            </div>
          </div>

          {/* Dynamic Intake Form - Apple Liquid Glass */}
          <form className="contact-form" id="contactForm" onSubmit={handleContactSubmit}>
            {/* Service Pillar Segmented Toggle */}
            <div style={{
              gridColumn: "1 / -1",
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "8px",
              background: "rgba(23, 61, 45, 0.06)",
              padding: "4px",
              borderRadius: "14px",
              marginBottom: "4px"
            }}>
              <button
                type="button"
                onClick={() => setGoal("Fat Loss / Weight Management")}
                style={{
                  padding: "10px 14px",
                  borderRadius: "10px",
                  border: "none",
                  background: !isBusiness ? "#ffffff" : "transparent",
                  color: !isBusiness ? "#173d2d" : "#607266",
                  fontWeight: !isBusiness ? 750 : 550,
                  fontSize: "12.5px",
                  boxShadow: !isBusiness ? "0 2px 8px rgba(0,0,0,0.06)" : "none",
                  cursor: "pointer",
                  transition: "all 0.2s ease"
                }}
              >
                Healthy Meal Plan Intake
              </button>
              <button
                type="button"
                onClick={() => setGoal("Restaurant & Food Business Consulting")}
                style={{
                  padding: "10px 14px",
                  borderRadius: "10px",
                  border: "none",
                  background: isBusiness ? "#173d2d" : "transparent",
                  color: isBusiness ? "#ffffff" : "#607266",
                  fontWeight: isBusiness ? 750 : 550,
                  fontSize: "12.5px",
                  boxShadow: isBusiness ? "0 2px 8px rgba(23,61,45,0.2)" : "none",
                  cursor: "pointer",
                  transition: "all 0.2s ease"
                }}
              >
                Restaurant & Menu Consulting
              </button>
            </div>

            <div className="form-header-bar">
              <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                <span className="pulse-dot"></span>
                <span style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "0.10em", textTransform: "uppercase", color: "#173d2d" }}>
                  {isBusiness ? "Commercial Business Enquiry" : "Personal Nutrition Questionnaire"}
                </span>
              </div>
              <span style={{ fontSize: "11px", color: "#4a594f", fontWeight: 600 }}>
                Instant WhatsApp Dispatch
              </span>
            </div>

            {/* Field 1: Name */}
            <div className="field">
              <label htmlFor="name">
                <span className="form-num">1</span>
                {isBusiness ? "Your Name / Lead Contact *" : "Your Name *"}
              </label>
              <input
                id="name"
                name="name"
                required
                placeholder={isBusiness ? "e.g. Sarah Jenkins / F&B Director" : "Full name"}
                value={name}
                onChange={e => setName(e.target.value)}
              />
            </div>

            {/* Field 2: Phone */}
            <div className="field">
              <label htmlFor="phone">
                <span className="form-num">2</span> Phone / WhatsApp *
              </label>
              <input
                id="phone"
                name="phone"
                type="tel"
                required
                placeholder="+971 56 975 4492"
                value={phone}
                onChange={e => setPhone(e.target.value)}
              />
            </div>

            {/* Dynamic Fields 3 & 4 */}
            {isBusiness ? (
              <>
                {/* 3. Business / Restaurant Name */}
                <div className="field">
                  <label htmlFor="businessName">
                    <span className="form-num">3</span> Restaurant or Brand Name *
                  </label>
                  <input
                    id="businessName"
                    name="businessName"
                    required
                    placeholder="e.g. Green Table Cafe / Cloud Kitchen"
                    value={businessName}
                    onChange={e => setBusinessName(e.target.value)}
                  />
                </div>

                {/* 4. Location & Cuisine Type */}
                <div className="field">
                  <label htmlFor="businessLocation">
                    <span className="form-num">4</span> Location & Cuisine Type
                  </label>
                  <input
                    id="businessLocation"
                    name="businessLocation"
                    placeholder="e.g. Dubai Marina · Healthy Mediterranean"
                    value={businessLocation}
                    onChange={e => setBusinessLocation(e.target.value)}
                  />
                </div>
              </>
            ) : (
              <>
                {/* 3. Age */}
                <div className="field">
                  <label htmlFor="age">
                    <span className="form-num">3</span> Your Age
                  </label>
                  <input
                    id="age"
                    name="age"
                    type="number"
                    placeholder="e.g. 28"
                    value={age}
                    onChange={e => setAge(e.target.value)}
                  />
                </div>

                {/* 4. Weight & Height */}
                <div className="field">
                  <label htmlFor="weightHeight">
                    <span className="form-num">4</span> Current Weight & Height
                  </label>
                  <input
                    id="weightHeight"
                    name="weightHeight"
                    placeholder="e.g. 72 kg / 175 cm"
                    value={weightHeight}
                    onChange={e => setWeightHeight(e.target.value)}
                  />
                </div>
              </>
            )}

            {/* Field 5: Goal / Consulting Scope */}
            <div className="field full">
              <label htmlFor="goal">
                <span className="form-num">5</span>
                {isBusiness ? "Consulting Scope *" : "Your Goal *"}
              </label>
              <select
                id="goal"
                name="goal"
                required
                value={goal}
                onChange={e => setGoal(e.target.value)}
              >
                {isBusiness ? (
                  <>
                    <option value="Restaurant & Food Business Consulting">Restaurant & Food Business Consulting</option>
                    <option value="Recipe or Menu Development">Recipe or Menu Development</option>
                    <option value="Macro & Nutrition Labeling for Food Brands">Macro & Nutrition Labeling for Food Brands</option>
                    <option value="Cloud Kitchen & Operations Setup">Cloud Kitchen & Operations Setup</option>
                    <option value="Fat Loss / Weight Management">Switch to: Personal Meal Plan Intake</option>
                  </>
                ) : (
                  <>
                    <option value="Fat Loss / Weight Management">Fat Loss & Weight Management</option>
                    <option value="Muscle Gain">Muscle Gain & Athletic Performance</option>
                    <option value="Balanced Diet">Balanced Daily Nutrition</option>
                    <option value="Diabetes-Friendly Meal Plan">Diabetes-Friendly Meal Plan</option>
                    <option value="Gut Health & Specialized Nutrition">Gut Health & Specialized Nutrition</option>
                    <option value="Personalized Nutrition Plan">Personalized Custom Nutrition Plan</option>
                    <option value="Restaurant & Food Business Consulting">Restaurant & Food Business Consulting</option>
                    <option value="Recipe or Menu Development">Recipe or Menu Development</option>
                  </>
                )}
              </select>
            </div>

            {/* Field 6: Details (Business Scope vs Dietary Preferences) */}
            <div className="field full">
              <label htmlFor="preferences">
                <span className="form-num">6</span>
                {isBusiness ? "Project Requirements & Launch Timeline *" : "Any food preferences or health concerns? *"}
              </label>
              <textarea
                id="preferences"
                name="preferences"
                required
                placeholder={
                  isBusiness
                    ? "e.g. Target launch date, number of recipes/dishes needed, operational advisory, nutritional certification requirements..."
                    : "e.g. Allergies, dairy-free, vegetarian, gluten-sensitive, or specific dietary targets..."
                }
                value={isBusiness ? (businessDetails || preferences) : preferences}
                onChange={e => {
                  setPreferences(e.target.value);
                  if (isBusiness) setBusinessDetails(e.target.value);
                }}
                rows={3}
              ></textarea>
            </div>

            {/* Custom Apple Checkbox with Zero Outline */}
            <div className="field full">
              <label className="consent" htmlFor="consentCheck">
                <input type="checkbox" id="consentCheck" required defaultChecked />
                <span>
                  {isBusiness
                    ? "I agree to be contacted via WhatsApp regarding this commercial restaurant or food business enquiry."
                    : "I agree to be contacted via WhatsApp regarding my personalized meal plan or nutrition enquiry."}
                </span>
              </label>
            </div>

            {/* Apple Liquid WhatsApp Button */}
            <div className="field full">
              <a
                href={`https://wa.me/971569754492?text=${contactWhatsAppMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp-full"
              >
                <WhatsAppIcon size={20} color="#fff" />
                <span>Send via WhatsApp Direct</span>
              </a>
            </div>

            <div className="field full" style={{ textAlign: "center", marginTop: "2px" }}>
              <span style={{ fontSize: "11px", color: "#68766c", display: "inline-flex", alignItems: "center", gap: "6px" }}>
                Confidential intake · Chef Radhey connects directly via WhatsApp · No spam
              </span>
            </div>
          </form>
        </div>
      </section>
    </main>

    {/* Reusable Luxury Site Footer */}
 <SiteFooter />

 {/* Plan Details Modal */}
 {modalOpen && (
 <div
 className="modal-backdrop open"
 id="planModal"
 role="dialog"
 aria-modal="true"
 onClick={() => setModalOpen(false)}
 >
 <div className="modal" onClick={e => e.stopPropagation()}>
 <button
 className="modal-close"
 id="modalClose"
 aria-label="Close"
 onClick={() => setModalOpen(false)}
 >
 <CloseIcon size={16} />
 </button>

 <span className="pill" id="modalCategory" style={{ marginBottom: "10px", background: "rgba(185, 155, 98, 0.12)", border: "1px solid rgba(185, 155, 98, 0.28)", color: "#8a6a24", fontWeight: 700, padding: "5px 12px", borderRadius: "30px", fontSize: "11px" }}>
 {selectedPlan?.label || "Meal plan enquiry"}
 </span>

 <h3 id="modalTitle" style={{ fontFamily: "Georgia, serif", fontSize: "28px", margin: "6px 0 8px", color: "#17281f", fontWeight: 400 }}>{selectedPlan?.name || "Build your plan"}</h3>
 <p id="modalDesc" style={{ color: "#526257", fontSize: "13.5px", lineHeight: "1.55", marginBottom: "22px" }}>
 {selectedPlan?.desc} The calorie figure ({selectedPlan?.kcal}) is illustrative and tailored per individual.
 </p>

 <form id="planForm" onSubmit={e => e.preventDefault()} style={{ display: "grid", gap: "14px" }}>
 <div className="field">
 <label htmlFor="planName"><span className="form-num">1</span> Name *</label>
 <input
 id="planName"
 required
 placeholder="Full name"
 value={modalName}
 onChange={e => setModalName(e.target.value)}
 />
 </div>

 <div className="field">
 <label htmlFor="planContact">WhatsApp / Phone *</label>
 <input
 id="planContact"
 required
 placeholder="+971…"
 value={modalContact}
 onChange={e => setModalContact(e.target.value)}
 />
 </div>

 <div className="field">
 <label htmlFor="planGoal">Primary Goal *</label>
 <select
 id="planGoal"
 required
 value={modalGoal}
 onChange={e => setModalGoal(e.target.value)}
 >
 <option value="Fat loss / weight management">Fat loss / weight management</option>
 <option value="Muscle gain">Muscle gain</option>
 <option value="Balanced eating">Balanced eating</option>
 <option value="Health-focused meal enquiry">Health-focused meal enquiry</option>
 <option value="Personalized plan">Personalized plan</option>
 <option value="Restaurant or food business">Restaurant or food business</option>
 </select>
 </div>

 <div className="field">
 <label htmlFor="planNotes">Preferences, allergies, or questions</label>
 <textarea
 id="planNotes"
 placeholder="Share dietary preferences or your project needs"
 value={modalNotes}
 onChange={e => setModalNotes(e.target.value)}
 ></textarea>
 </div>

 {/* Only WhatsApp Button (No Prepare My Enquiry) */}
 <div style={{ marginTop: "14px" }}>
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

 {modalStatus && (
 <div className="form-status" style={{ display: "block" }}>
 {modalStatus}
 </div>
 )}
 </form>
 </div>
 </div>
 )}

 </div>
 );
}
