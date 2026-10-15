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
 <h1 style={{ fontWeight: 550, letterSpacing: "-0.03em", lineHeight: 1.15, margin: "0 0 18px 0", fontSize: "clamp(40px, 4.6vw, 56px)" }}>
 Better Food.<br />
 <span style={{ color: "var(--gold-light)" }}>Better Living.</span>
 </h1>
 <p style={{ fontSize: "15px", color: "#4f6356", lineHeight: 1.55, maxWidth: "460px", margin: "0 0 16px 0" }}>
 Personalized nutrition meal plans & healthy restaurant consulting engineered by Chef Radhey across Dubai & the UAE.
 </p>

 <div className="hero-actions" style={{ margin: "14px 0 0", display: "flex", gap: "10px" }}>
 <Link className="btn btn-primary" href="/meal-plans" style={{ borderRadius: "999px", padding: "10px 20px", fontSize: "13px", fontWeight: 600 }}>
 <span>Explore Meal Plans</span>
 <ArrowDownIcon size={13} />
 </Link>
 <Link className="btn btn-outline" href="/consulting" style={{ borderRadius: "999px", padding: "10px 20px", fontSize: "13px", fontWeight: 600, borderColor: "rgba(18, 35, 24, 0.22)", color: "#122318" }}>
 <span>Restaurant Advisory</span>
 <ArrowUpRightIcon size={13} />
 </Link>
 </div>
 </div>

 {/* Right Column: Apple-Style Liquid Glass Intake Form */}
           <form className="hero-glass-form" onSubmit={handleContactSubmit}>
            {/* Avg Response Time Pill Tag - Left aligned above toggle */}
            <div style={{ display: "flex", alignItems: "center", justifyContent: "flex-start", marginBottom: "-4px" }}>
              <span
                style={{
                  background: "rgba(36, 155, 107, 0.12)",
                  border: "1px solid rgba(36, 155, 107, 0.25)",
                  color: "#24A170",
                  fontSize: "11px",
                  fontWeight: 600,
                  padding: "4px 11px",
                  borderRadius: "999px",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "6px",
                  letterSpacing: "0.01em"
                }}
              >
                <span
                  style={{
                    width: "6px",
                    height: "6px",
                    borderRadius: "50%",
                    background: "#25d366",
                    boxShadow: "0 0 8px #25d366"
                  }}
                />
                Avg. response time: ~5 min
              </span>
            </div>

            {/* Service Pillar Segmented Toggle */}
            <div className="hero-glass-toggle">
              <button
                type="button"
                onClick={() => setGoal("Fat Loss / Weight Management")}
                className={!isBusiness ? "active" : ""}
              >
                Healthy Meal Plans
              </button>
              <button
                type="button"
                onClick={() => setGoal("Restaurant & Food Business Consulting")}
                className={isBusiness ? "active" : ""}
              >
                Restaurant Consulting
              </button>
            </div>

            {/* Field 1: Name */}
            <div className="hero-glass-field">
              <label htmlFor="heroName">Your Name</label>
              <input
                id="heroName"
                name="name"
                required
                placeholder="Full name"
                value={name}
                onChange={e => setName(e.target.value)}
              />
            </div>

            {/* Field 2: Phone */}
            <div className="hero-glass-field">
              <label htmlFor="heroPhone">WhatsApp Number</label>
              <input
                id="heroPhone"
                name="phone"
                type="tel"
                required
                placeholder="+971 50 000 0000"
                value={phone}
                onChange={e => setPhone(e.target.value)}
              />
            </div>

            {/* Field 3: Goal / Scope */}
            <div className="hero-glass-field">
              <label htmlFor="heroGoal">{isBusiness ? "Consulting Scope" : "Select Your Goal"}</label>
              <select
                id="heroGoal"
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
                  </>
                ) : (
                  <>
                    <option value="Fat Loss / Weight Management">Fat Loss & Weight Management</option>
                    <option value="Muscle Gain">Muscle Gain & Athletic Performance</option>
                    <option value="Balanced Diet">Balanced Daily Nutrition</option>
                    <option value="Diabetes-Friendly Meal Plan">Diabetes-Friendly Meal Plan</option>
                    <option value="Gut Health & Specialized Nutrition">Gut Health & Specialized Nutrition</option>
                    <option value="Personalized Nutrition Plan">Personalized Custom Nutrition Plan</option>
                  </>
                )}
              </select>
            </div>

            {/* Field: Dietary Preferences / Notes */}
            <div className="hero-glass-field">
              <label htmlFor="heroPreferences">{isBusiness ? "Brand Name & Notes (Optional)" : "Dietary Notes / Allergies (Optional)"}</label>
              <textarea
                id="heroPreferences"
                name="preferences"
                placeholder={
                  isBusiness
                    ? "e.g. Green Cafe Dubai, healthy menu launch..."
                    : "e.g. Allergies, gluten-free, dairy-free..."
                }
                value={isBusiness ? (businessDetails || preferences) : preferences}
                onChange={e => {
                  setPreferences(e.target.value);
                  if (isBusiness) setBusinessDetails(e.target.value);
                }}
                rows={2}
              ></textarea>
            </div>

            {/* WhatsApp CTA Button */}
            <a
              href={`https://wa.me/971569754492?text=${contactWhatsAppMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="hero-glass-btn"
            >
              <WhatsAppIcon size={18} color="#fff" />
              <span>Continue on WhatsApp</span>
            </a>
          </form>
 </div>
 </section>


 {/* Segments (Part 1 vs Part 2) */}
 <section id="segments">
 <div className="container">
 <div className="section-head center">
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
 color: "#FFFFFF",
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
 src="/images/gallery/restaurant-consulting.jpg"
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
 color: "#24A170",
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
 color: "#FFFFFF",
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

 {/* Business Consulting Section */}
 <section className="business-section" id="business">
 <div className="container">
 <div className="section-head center">
 <div className="eyebrow">Culinary & Business Consulting</div>
 <h2>Turn Your Food Idea Into a Market-Ready Brand</h2>
 <p>
 End-to-end culinary direction for healthy restaurants, cloud kitchens, and emerging food brands across Dubai and the UAE.
 </p>
 </div>

 <div className="business-cards-grid">
 <div className="biz-card">
 <div className="biz-card-top">
 <div className="biz-card-icon">
 <RestaurantIcon size={22} />
 </div>
 <span className="biz-card-num">01</span>
 </div>
 <div>
 <h3>Concept & Brand Strategy</h3>
 <p>Target customer profiling, food identity, menu direction, and profitable culinary proposition.</p>
 </div>
 </div>

 <div className="biz-card">
 <div className="biz-card-top">
 <div className="biz-card-icon">
 <ChefHatIcon size={22} />
 </div>
 <span className="biz-card-num">02</span>
 </div>
 <div>
 <h3>Menu & Recipe Engineering</h3>
 <p>Signature recipes with ingredient specifications, portion costing, and repeatable kitchen prep methods.</p>
 </div>
 </div>

 <div className="biz-card">
 <div className="biz-card-top">
 <div className="biz-card-icon">
 <ScaleIcon size={22} />
 </div>
 <span className="biz-card-num">03</span>
 </div>
 <div>
 <h3>Nutrition & Macro Labeling</h3>
 <p>Lab-standard calorie, protein, carb, and allergen calculations for packaging or printed menus.</p>
 </div>
 </div>

 <div className="biz-card">
 <div className="biz-card-top">
 <div className="biz-card-icon">
 <LeafIcon size={22} />
 </div>
 <span className="biz-card-num">04</span>
 </div>
 <div>
 <h3>Operations & Kitchen Launch</h3>
 <p>Workstation optimization, chef training, supplier checklists, and cloud kitchen launch support.</p>
 </div>
 </div>
 </div>

 <div className="biz-bottom-action">
          <Link
            className="btn btn-primary"
            href="/consulting"
            style={{ padding: "12px 28px", fontSize: "13.5px", display: "inline-flex", alignItems: "center", gap: "8px" }}
          >
            <span>Explore Consulting Details</span>
            <ArrowUpRightIcon size={14} />
          </Link>
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

      {/* Contact Section - Minimal Calo-Style */}
      <section className="contact-section" id="contact" style={{ background: "#FFFFFF", color: "#112217", padding: "64px 0 72px", borderTop: "1px solid #E8F6F1" }}>
        <div className="container" style={{ textAlign: "center", maxWidth: "680px" }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: "8px", background: "#E8F6F1", color: "#24A170", padding: "5px 14px", borderRadius: "999px", fontSize: "11.5px", fontWeight: 600, letterSpacing: "0.06em", textTransform: "uppercase", marginBottom: "16px" }}>
            <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#24A170" }} />
            Direct Consultation
          </div>

          <h2 style={{ fontWeight: 650, fontSize: "clamp(28px, 3.6vw, 40px)", letterSpacing: "-0.03em", margin: "0 0 12px 0", color: "#112217" }}>
            Get In Touch With Chef Radhey
          </h2>

          <p style={{ fontSize: "15.5px", color: "#4e6356", lineHeight: 1.6, margin: "0 0 28px 0" }}>
            Direct culinary & nutrition communication for personalized healthy meal subscriptions or restaurant & hospitality advisory across Dubai.
          </p>

          <div style={{ display: "flex", gap: "14px", justifyContent: "center", alignItems: "center", flexWrap: "wrap" }}>
            <a
              href="https://wa.me/971569754492?text=Hello%20Chef%20Radhey!%20I%20would%20like%20to%20inquire%20about%20your%20services."
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
              style={{
                background: "#24A170",
                color: "#FFFFFF",
                borderRadius: "999px",
                padding: "13px 28px",
                fontSize: "14px",
                fontWeight: 600,
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                textDecoration: "none",
                boxShadow: "0 6px 20px rgba(36, 161, 112, 0.35)"
              }}
            >
              <WhatsAppIcon size={17} color="#fff" />
              <span>WhatsApp +971 56 975 4492</span>
            </a>

            <a
              href="mailto:enquiries@chefradhey.com"
              className="btn btn-outline"
              style={{
                borderRadius: "999px",
                padding: "13px 26px",
                fontSize: "14px",
                fontWeight: 600,
                borderColor: "#24A170",
                color: "#24A170",
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                textDecoration: "none"
              }}
            >
              <MailIcon size={16} />
              <span>enquiries@chefradhey.com</span>
            </a>
          </div>
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

 <span className="pill" id="modalCategory" style={{ marginBottom: "10px", background: "#E8F6F1", border: "1px solid rgba(36, 161, 112, 0.25)", color: "#24A170", fontWeight: 700, padding: "5px 12px", borderRadius: "30px", fontSize: "11px" }}>
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
