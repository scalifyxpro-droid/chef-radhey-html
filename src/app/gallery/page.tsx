"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import SiteFooter from "@/components/SiteFooter";
import { WhatsAppIcon, CloseIcon, ArrowUpRightIcon } from "@/components/Icons";

interface GalleryItem {
 id: string;
 title: string;
 category: "business" | "meals" | "chicken" | "beef" | "seafood" | "breakfast" | "salads";
 categoryLabel: string;
 image: string;
 tag: string;
 description: string;
}

const comprehensiveGallery: GalleryItem[] = [
 // --- BUSINESS SETUP & CONSULTING ---
 {
 id: "b1",
 title: "Commercial Kitchen Cookline Setup",
 category: "business",
 categoryLabel: "Business Setup & Consulting",
 image: "/images/gallery/gal-commercial-line-1.jpg",
 tag: "Kitchen Engineering",
 description: "Standardized high-efficiency stainless steel cookline layout engineered for high-volume commercial healthy food delivery in Dubai."
 },
 {
 id: "b2",
 title: "Executive Line Station & Culinary Equipment",
 category: "business",
 categoryLabel: "Business Setup & Consulting",
 image: "/images/gallery/gal-commercial-line-2.jpg",
 tag: "Equipment Advisory",
 description: "Layout design, thermal holding units, and sanitation zoning for HACCP-compliant food production facilities."
 },
 {
 id: "b3",
 title: "High-Volume Food Preparation Workflow",
 category: "business",
 categoryLabel: "Business Setup & Consulting",
 image: "/images/gallery/gal-commercial-line-3.jpg",
 tag: "Workflow SOPs",
 description: "Optimizing prep lines and batch consistency to reduce food waste and guarantee identical portion weights per dish."
 },
 {
 id: "b4",
 title: "Bistro & Cafe Interior Concept",
 category: "business",
 categoryLabel: "Business Setup & Consulting",
 image: "/images/gallery/gal-restaurant-interior.jpg",
 tag: "Concept Development",
 description: "Turnkey hospitality consulting for wellness cafes and healthy bistro concepts in Dubai, from interior atmosphere to menu execution."
 },
 {
 id: "b5",
 title: "Chef Table & Food Styling Presentation",
 category: "business",
 categoryLabel: "Business Setup & Consulting",
 image: "/images/gallery/gal-food-styling.jpg",
 tag: "Menu Engineering",
 description: "Creating Instagrammable, premium dish presentations that elevate perception and support higher average spend per customer."
 },
 {
 id: "b6",
 title: "Commercial Salad Bar & Cold Station Assembly",
 category: "business",
 categoryLabel: "Business Setup & Consulting",
 image: "/images/gallery/gal-salad-bar-prep.jpg",
 tag: "Cold Line Station",
 description: "Engineering temperature-controlled cold prep tables for ultra-fast bowl assembly and zero ingredient cross-contamination."
 },
 {
 id: "b7",
 title: "Healthy Cafe Service Counter Design",
 category: "business",
 categoryLabel: "Business Setup & Consulting",
 image: "/images/gallery/gal-cafe-counter.jpg",
 tag: "Hospitality Layout",
 description: "Front-of-house counter layouts designed for rapid grab-and-go service and customer engagement in high-traffic Dubai locations."
 },
 {
 id: "b8",
 title: "High-Volume Hospitality Brunch & Catering Spread",
 category: "business",
 categoryLabel: "Business Setup & Consulting",
 image: "/images/gallery/gal-hospitality-spread.jpg",
 tag: "Catering Systems",
 description: "Scaling gourmet healthy cuisine for luxury corporate catering and boutique hotel breakfast services across the UAE."
 },
 {
 id: "b9",
 title: "Precision Plating & Recipe Standardization",
 category: "business",
 categoryLabel: "Business Setup & Consulting",
 image: "/images/gallery/gal-restaurant-plating.jpg",
 tag: "Recipe Manuals",
 description: "Standardized recipe cards with step-by-step plating photography and exact gram specifications for kitchen staff execution."
 },

 // --- HEALTHY MEAL PLANS ---
 {
 id: "m1",
 title: "Fresh Meal Prep Daily Packaging Boxes",
 category: "meals",
 categoryLabel: "Healthy Meal Plans",
 image: "/images/meal-prep-boxes.jpg",
 tag: "Daily Dubai Delivery",
 description: "Eco-friendly, microwave-safe, sealed meal plan boxes labeled with full nutritional breakdown, delivered cold each morning."
 },
 {
 id: "m2",
 title: "Daily Meal Delivery Trays & Portioning",
 category: "meals",
 categoryLabel: "Healthy Meal Plans",
 image: "/images/meal-boxes-table.jpg",
 tag: "Portion Control",
 description: "Balanced daily meals packed with measured protein, complex grains, and fresh greens, ready for busy Dubai professionals."
 },
 {
 id: "m3",
 title: "Artisanal Quinoa & Edamame Poke Bowl",
 category: "meals",
 categoryLabel: "Healthy Meal Plans",
 image: "/images/gallery/gal-fresh-bowl.jpg",
 tag: "Balanced Diet",
 description: "Vibrant whole-food bowl providing sustained energy, fiber-rich carbs, and essential plant micronutrients."
 },
 {
 id: "m4",
 title: "Chef's Healthy Chicken Burger with Wholemeal Bun",
 category: "meals",
 categoryLabel: "Healthy Meal Plans",
 image: "/images/gallery/gal-chicken-burger.jpg",
 tag: "Clean Comfort Food",
 description: "Grilled lean chicken breast with house-made Greek yogurt sauce and ripe tomato on a toasted fiber-rich wholemeal bun."
 },
 {
 id: "m5",
 title: "Thin-Crust Healthy Chicken Slice Pizza",
 category: "meals",
 categoryLabel: "Healthy Meal Plans",
 image: "/images/gallery/gal-chicken-pizza.jpg",
 tag: "Low-Calorie Pizza",
 description: "Crispy high-protein wholemeal crust topped with grilled chicken, low-moisture skim mozzarella, and Italian herbs."
 },
 {
 id: "m6",
 title: "Guilt-Free Dark Chocolate Ganache Dessert",
 category: "meals",
 categoryLabel: "Healthy Meal Plans",
 image: "/images/gallery/gal-healthy-dessert.jpg",
 tag: "Sugar-Free Dessert",
 description: "Sugar-free raw cacao layered with crushed almond meal and coconut cream, sweetened with organic monk fruit."
 },

 // --- HIGH-PROTEIN CHICKEN ---
 {
 id: "c1",
 title: "Flame-Grilled Mexican Spiced Chicken Bowl",
 category: "chicken",
 categoryLabel: "High-Protein Chicken",
 image: "/images/gallery/gal-chicken-mexican.jpg",
 tag: "48g Protein",
 description: "Free-range chicken breast flame-grilled with smoked paprika, roasted bell peppers, black beans, and lime quinoa."
 },
 {
 id: "c2",
 title: "Lean Chicken Breast Meatballs in Marinara",
 category: "chicken",
 categoryLabel: "High-Protein Chicken",
 image: "/images/gallery/gal-chicken-balls.jpg",
 tag: "45g Protein",
 description: "House-ground tender chicken breast simmered in San Marzano tomato basil sauce with steamed broccoli florets."
 },
 {
 id: "c3",
 title: "Chicken Breast with Creamy Wild Mushroom Sauce",
 category: "chicken",
 categoryLabel: "High-Protein Chicken",
 image: "/images/gallery/gal-chicken-mushroom.jpg",
 tag: "46g Protein",
 description: "Pan-roasted free-range chicken breast smothered in light Greek-yogurt infused wild forest mushroom sauce."
 },
 {
 id: "c4",
 title: "Japanese Teriyaki Glazed Chicken Bowl",
 category: "chicken",
 categoryLabel: "High-Protein Chicken",
 image: "/images/gallery/gal-chicken-teriyaki.jpg",
 tag: "44g Protein",
 description: "Succulent chicken breast glazed with zero-sugar tamari teriyaki, served over steamed jasmine brown rice."
 },
 {
 id: "c5",
 title: "Authentic Charcoal Chicken Tikka",
 category: "chicken",
 categoryLabel: "High-Protein Chicken",
 image: "/images/gallery/gal-chicken-tikka.jpg",
 tag: "47g Protein",
 description: "Boneless chicken marinated in hung curd, Kashmiri chili, and garam masala, grilled over charcoal with mint chutney."
 },
 {
 id: "c6",
 title: "Grilled Chicken Tikka Wholemeal Wrap",
 category: "chicken",
 categoryLabel: "High-Protein Chicken",
 image: "/images/gallery/gal-chicken-tikka-wrap.jpg",
 tag: "40g Protein",
 description: "Spiced chicken tikka, cucumber ribbons, and light yogurt dressing wrapped in a toasted wholemeal flatbread."
 },
 {
 id: "c7",
 title: "Smoky BBQ Chicken Breast Wrap",
 category: "chicken",
 categoryLabel: "High-Protein Chicken",
 image: "/images/gallery/gal-chicken-bbq-wrap.jpg",
 tag: "42g Protein",
 description: "Tender shredded chicken tossed in sugar-free hickory BBQ sauce, rolled with crisp coleslaw and romaine."
 },

 // --- PRIME BEEF & STEAKS ---
 {
 id: "bf1",
 title: "Grass-Fed Beef Tenderloin Mushroom Steak",
 category: "beef",
 categoryLabel: "Prime Beef & Steaks",
 image: "/images/gallery/gal-beef-steak.jpg",
 tag: "52g Protein",
 description: "Center-cut prime beef tenderloin seared rare to medium, accompanied by roasted portobello mushrooms and rosemary sweet potato."
 },
 {
 id: "bf2",
 title: "Thinly Sliced Flank Steak Teriyaki",
 category: "beef",
 categoryLabel: "Prime Beef & Steaks",
 image: "/images/gallery/gal-beef-teriyaki.jpg",
 tag: "49g Protein",
 description: "Marinated prime flank steak tossed with sugar-free tamari teriyaki glaze and scallions over steamed brown rice."
 },
 {
 id: "bf3",
 title: "Charred Mediterranean BBQ Beef Skewers",
 category: "beef",
 categoryLabel: "Prime Beef & Steaks",
 image: "/images/gallery/gal-beef-bbq.jpg",
 tag: "48g Protein",
 description: "Cubed lean beef sirloin marinated in Lebanese sumac, pomegranate reduction, and crushed garlic, flame-grilled with onions."
 },
 {
 id: "bf4",
 title: "Mexican Spiced Lean Beef Bowl",
 category: "beef",
 categoryLabel: "Prime Beef & Steaks",
 image: "/images/gallery/gal-beef-mexican.jpg",
 tag: "46g Protein",
 description: "Lean ground beef simmered with chipotle peppers, pinto beans, sweet corn, and avocado over cilantro lime rice."
 },
 {
 id: "bf5",
 title: "Gourmet Lean Beef Meatballs in Marinara",
 category: "beef",
 categoryLabel: "Prime Beef & Steaks",
 image: "/images/gallery/gal-beef-meatballs.jpg",
 tag: "44g Protein",
 description: "Handcrafted lean beef meatballs flavored with garlic, parsley, and aged parmesan, cooked in plum tomato reduction."
 },
 {
 id: "bf6",
 title: "Prime Beef & Mushroom Brioche Burger",
 category: "beef",
 categoryLabel: "Prime Beef & Steaks",
 image: "/images/gallery/gal-beef-burger.jpg",
 tag: "45g Protein",
 description: "100% grass-fed beef patty topped with caramelized balsamic onions, sauteed mushrooms, and light white cheddar."
 },

 // --- WILD SEAFOOD & SALMON ---
 {
 id: "s1",
 title: "Charred BBQ Norwegian Salmon Fillet",
 category: "seafood",
 categoryLabel: "Wild Seafood & Salmon",
 image: "/images/gallery/gal-bbq-salmon.jpg",
 tag: "Omega-3 Dense",
 description: "Sustainably sourced Atlantic salmon fillet with smoked citrus glaze, served alongside crisp steamed asparagus spears."
 },
 {
 id: "s2",
 title: "Fresh Herb & Citrus Crusted Salmon",
 category: "seafood",
 categoryLabel: "Wild Seafood & Salmon",
 image: "/images/gallery/gal-herbs-salmon.jpg",
 tag: "Anti-Inflammatory",
 description: "Pan-roasted salmon fillet crowned with fresh dill, tarragon, lemon zest, and crushed walnuts over tender baby greens."
 },
 {
 id: "s3",
 title: "Tiger Shrimps in Lemongrass Coconut Broth",
 category: "seafood",
 categoryLabel: "Wild Seafood & Salmon",
 image: "/images/gallery/gal-shrimps-curry.jpg",
 tag: "42g Protein",
 description: "Wild Gulf tiger shrimps simmered in light coconut milk infused with fresh galangal, kaffir lime, and baby bok choy."
 },
 {
 id: "s4",
 title: "Clay-Oven Tanoor Spiced Local White Fish",
 category: "seafood",
 categoryLabel: "Wild Seafood & Salmon",
 image: "/images/gallery/gal-fish-tanoor.jpg",
 tag: "Lean Seafood",
 description: "Local white sea-bass fillet seasoned with dry roasted coriander, turmeric, and dried fenugreek, oven-charred at high heat."
 },
 {
 id: "s5",
 title: "Glazed Norwegian Salmon Teriyaki",
 category: "seafood",
 categoryLabel: "Wild Seafood & Salmon",
 image: "/images/gallery/gal-salmon-teriyaki.jpg",
 tag: "Clean Omega-3",
 description: "Pan-seared Atlantic salmon fillet drizzled with ginger-infused teriyaki glaze over steamed sesame broccolini."
 },
 {
 id: "s6",
 title: "Mexican Spiced Tiger Shrimps Bowl",
 category: "seafood",
 categoryLabel: "Wild Seafood & Salmon",
 image: "/images/gallery/gal-shrimps-mexican.jpg",
 tag: "Low-Calorie",
 description: "Succulent tiger shrimps seared with ancho chili, fresh lime, and garlic, served with black bean corn salsa."
 },

 // --- BREAKFAST & ENERGY ---
 {
 id: "br1",
 title: "Power Protein Golden Waffles with Berries",
 category: "breakfast",
 categoryLabel: "Breakfast & Energy",
 image: "/images/gallery/gal-protein-waffle.jpg",
 tag: "28g Protein",
 description: "Crispy protein waffles crafted from organic oat flour and whey, topped with fresh mountain raspberries and zero-calorie syrup."
 },
 {
 id: "br2",
 title: "Power Protein Banana Oat Pancakes",
 category: "breakfast",
 categoryLabel: "Breakfast & Energy",
 image: "/images/gallery/gal-pancakes.jpg",
 tag: "32g Protein",
 description: "Gluten-free rolled oats, egg whites, and vanilla protein blended with ripe bananas, cooked golden without seed oils."
 },
 {
 id: "br3",
 title: "Coconut Chia & Overnight Berry Parfait",
 category: "breakfast",
 categoryLabel: "Breakfast & Energy",
 image: "/images/gallery/gal-overnight-oats.jpg",
 tag: "Gut Health",
 description: "Rolled oats and organic black chia seeds soaked in light coconut milk, layered with wild blueberries and pumpkin seeds."
 },
 {
 id: "br4",
 title: "Artisanal Hass Avocado Egg Sourdough Toast",
 category: "breakfast",
 categoryLabel: "Breakfast & Energy",
 image: "/images/gallery/gal-avocado-sandwich.jpg",
 tag: "Healthy Fats",
 description: "Toasted organic sourdough topped with smashed Hass avocado, pasture-raised poached egg, and aged cheddar crumbles."
 },
 {
 id: "br5",
 title: "Egg White Spinach & Wild Mushroom Omelette",
 category: "breakfast",
 categoryLabel: "Breakfast & Energy",
 image: "/images/gallery/gal-spinach-omelette.jpg",
 tag: "Keto / Fat Loss",
 description: "Cage-free egg white omelette folded with fresh iron-rich baby spinach, roasted cremini mushrooms, and goat feta."
 },
 {
 id: "br6",
 title: "High-Protein Egg & Cheddar Breakfast Wrap",
 category: "breakfast",
 categoryLabel: "Breakfast & Energy",
 image: "/images/gallery/gal-cheese-egg-wrap.jpg",
 tag: "30g Protein",
 description: "Fluffy scrambled eggs, melted low-fat mozzarella, and sauteed greens wrapped in a warm fiber-rich whole-wheat tortilla."
 },

 // --- SALADS, SOUPS & JUICES ---
 {
 id: "sl1",
 title: "Authentic Mediterranean Greek Salad",
 category: "salads",
 categoryLabel: "Salads & Healthy Sides",
 image: "/images/gallery/gal-greek-salad.jpg",
 tag: "Mediterranean",
 description: "Vine-ripened tomatoes, crisp Persian cucumbers, Kalamata olives, red onion, and block Greek barrel-aged feta in oregano EVOO."
 },
 {
 id: "sl2",
 title: "Avocado & Smoked Norwegian Salmon Salad",
 category: "salads",
 categoryLabel: "Salads & Healthy Sides",
 image: "/images/gallery/gal-avocado-salmon-salad.jpg",
 tag: "Superfood",
 description: "Smoked salmon ribbons, ripe Hass avocado, wild baby arugula, and cucumbers in a cold-pressed lemon herb vinaigrette."
 },
 {
 id: "sl3",
 title: "Clean Grilled Chicken Caesar with 24M Parmesan",
 category: "salads",
 categoryLabel: "Salads & Healthy Sides",
 image: "/images/gallery/gal-caesar-salad.jpg",
 tag: "46g Protein",
 description: "Crisp romaine hearts and seared chicken breast tossed in house-made Greek yogurt Caesar dressing with shaved Parmigiano."
 },
 {
 id: "sl4",
 title: "Fresh Green Gulf Shrimps Quinoa Tabbouleh",
 category: "salads",
 categoryLabel: "Salads & Healthy Sides",
 image: "/images/gallery/gal-shrimp-tabbouleh.jpg",
 tag: "Low GI",
 description: "Flat-leaf parsley, garden mint, vine tomatoes, and Andean quinoa crowned with garlic-seared Gulf tiger shrimps."
 },
 {
 id: "sl5",
 title: "Golden Turmeric, Carrot & Red Lentil Soup",
 category: "salads",
 categoryLabel: "Salads & Healthy Sides",
 image: "/images/gallery/gal-lentil-soup.jpg",
 tag: "Soothing Gut Broth",
 description: "Silky carrot and red lentil soup infused with fresh ginger, turmeric, and cold-pressed coconut oil."
 },
 {
 id: "sl6",
 title: "Cold-Pressed Fresh Orange & Carrot Detox Juice",
 category: "salads",
 categoryLabel: "Salads & Healthy Sides",
 image: "/images/gallery/gal-orange-carrot-juice.jpg",
 tag: "Vitamin C & A",
 description: "100% raw, unpasteurized cold-pressed juice with sweet Valencia oranges and organic carrots, zero added sugars."
 }
];

export default function GalleryPage() {
 const [activeTab, setActiveTab] = useState<string>("all");
 const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);

 const filterTabs = [
 { id: "all", label: "All Works" },
 { id: "business", label: "Business Setup & Consulting" },
 { id: "meals", label: "Healthy Meal Plans" },
 { id: "chicken", label: "Chicken Dishes" },
 { id: "beef", label: "Beef & Steaks" },
 { id: "seafood", label: "Wild Seafood" },
 { id: "breakfast", label: "Breakfast & Energy" },
 { id: "salads", label: "Salads, Soups & Juices" },
 ];

 const filteredItems = comprehensiveGallery.filter(item => {
 if (activeTab === "all") return true;
 return item.category === activeTab;
 });

 return (
 <div className="site-root">
 <Navbar currentPath="/gallery" />

 {/* Subpage Hero */}
 <section className="subpage-hero">
 <div className="container">
 <div className="subpage-badge">Visual Portfolio & Culinary Database</div>
 <h1>Photo Gallery & Food Concepts</h1>
 <p>
 Explore real photographs from Chef Radhey&apos;s culinary portfolio in Dubai: commercial restaurant kitchens, meal-plan preps, gourmet plated mains, clean breakfasts, and cold-pressed elixirs.
 </p>
 </div>
 </section>

 {/* Filter Tabs */}
 <section style={{ padding: "36px 0 16px", background: "var(--paper)" }}>
 <div className="container">
 <div style={{
 display: "flex",
 gap: "8px",
 flexWrap: "wrap",
 alignItems: "center",
 justifyContent: "center"
 }}>
 {filterTabs.map(tab => (
 <button
 key={tab.id}
 onClick={() => setActiveTab(tab.id)}
 className={`filter-btn ${activeTab === tab.id ? "active" : ""}`}
 style={{
 padding: "9px 18px",
 fontSize: "13px",
 fontWeight: 600,
 cursor: "pointer"
 }}
 >
 {tab.label}
 </button>
 ))}
 </div>
 </div>
 </section>

 {/* Gallery Cards Grid */}
 <section style={{ padding: "30px 0 80px", background: "var(--soft)" }}>
 <div className="container">
 <div style={{
 display: "grid",
 gridTemplateColumns: "repeat(auto-fill, minmax(340px, 1fr))",
 gap: "24px"
 }}>
 {filteredItems.map(item => (
 <article
 key={item.id}
 onClick={() => setSelectedItem(item)}
 style={{
 background: "var(--paper)",
 border: "1px solid var(--line)",
 borderRadius: "8px",
 overflow: "hidden",
 cursor: "pointer",
 transition: "transform 0.22s ease, box-shadow 0.22s ease",
 display: "flex",
 flexDirection: "column"
 }}
 onMouseEnter={e => {
 e.currentTarget.style.transform = "translateY(-4px)";
 e.currentTarget.style.boxShadow = "var(--shadow)";
 }}
 onMouseLeave={e => {
 e.currentTarget.style.transform = "translateY(0)";
 e.currentTarget.style.boxShadow = "none";
 }}
 >
 <div style={{
 position: "relative",
 height: "230px",
 overflow: "hidden",
 background: "#dbe2db"
 }}>
 <img
 src={item.image}
 alt={item.title}
 style={{
 width: "100%",
 height: "100%",
 objectFit: "cover",
 transition: "transform 0.3s ease"
 }}
 />
 <span style={{
 position: "absolute",
 top: "12px",
 left: "12px",
 background: "rgba(23, 61, 45, 0.9)",
 color: "#ffffff",
 fontSize: "10.5px",
 fontWeight: 700,
 letterSpacing: "0.06em",
 padding: "4px 10px",
 borderRadius: "20px",
 backdropFilter: "blur(4px)"
 }}>
 {item.tag}
 </span>
 </div>

 <div style={{ padding: "20px", display: "flex", flexDirection: "column", flex: 1 }}>
 <div style={{ fontSize: "11px", fontWeight: 700, color: "var(--gold-dark)", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "6px" }}>
 {item.categoryLabel}
 </div>
 <h3 style={{
 fontFamily: "Georgia, serif",
 fontSize: "19px",
 fontWeight: 400,
 color: "#17281f",
 margin: "0 0 8px 0",
 lineHeight: "1.25"
 }}>
 {item.title}
 </h3>
 <p style={{
 fontSize: "12.5px",
 color: "#4a594f",
 lineHeight: "1.5",
 margin: "0 0 16px 0",
 flex: 1
 }}>
 {item.description}
 </p>

 <div style={{
 display: "flex",
 alignItems: "center",
 justifyContent: "space-between",
 borderTop: "1px solid var(--line)",
 paddingTop: "12px",
 fontSize: "12px",
 color: "var(--forest)",
 fontWeight: 700
 }}>
 <span>View Concept Details</span>
 <ArrowUpRightIcon size={14} />
 </div>
 </div>
 </article>
 ))}
 </div>

 {/* WhatsApp Inquiry Banner */}
 <div style={{
 marginTop: "60px",
 background: "var(--forest)",
 color: "#ffffff",
 borderRadius: "10px",
 padding: "36px 32px",
 display: "flex",
 alignItems: "center",
 justifyContent: "space-between",
 flexWrap: "wrap",
 gap: "24px",
 boxShadow: "var(--shadow)"
 }}>
 <div style={{ maxWidth: "600px" }}>
 <div style={{ color: "var(--gold-light)", fontSize: "11px", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "8px" }}>
 Bespoke Meal Plan or Commercial Consultation
 </div>
 <h2 style={{ fontFamily: "Georgia, serif", fontSize: "28px", fontWeight: 400, margin: "0 0 8px 0", color: "#ffffff" }}>
 Discuss Your Goal Directly with Chef Radhey
 </h2>
 <p style={{ fontSize: "14px", color: "#d2ded5", margin: 0, lineHeight: "1.5" }}>
 Tell us which concept caught your eye. Our team in Dubai is available via WhatsApp for fast responses and menu planning.
 </p>
 </div>

 <a
 href="https://wa.me/971569754492?text=Hello%20Chef%20Radhey!%20I%20reviewed%20your%20Gallery%20and%20would%20like%20to%20discuss%20a%20meal%20plan%20or%20restaurant%20consulting%20in%20Dubai."
 target="_blank"
 rel="noopener noreferrer"
 className="btn-whatsapp"
 >
 <WhatsAppIcon size={18} color="#fff" />
 <span>Inquire via WhatsApp</span>
 </a>
 </div>
 </div>
 </section>

 {/* Lightbox Modal */}
 {selectedItem && (
 <div
 className="modal-backdrop open"
 onClick={() => setSelectedItem(null)}
 role="dialog"
 aria-modal="true"
 >
 <div
 className="modal"
 style={{ maxWidth: "640px" }}
 onClick={e => e.stopPropagation()}
 >
 <button
 className="modal-close"
 onClick={() => setSelectedItem(null)}
 aria-label="Close"
 >
 <CloseIcon size={16} />
 </button>

 <div style={{ borderRadius: "6px", overflow: "hidden", marginBottom: "18px", maxHeight: "380px", background: "#dbe2db" }}>
 <img
 src={selectedItem.image}
 alt={selectedItem.title}
 style={{ width: "100%", height: "100%", objectFit: "cover" }}
 />
 </div>

 <span className="pill" style={{ marginBottom: "10px" }}>
 {selectedItem.tag} · {selectedItem.categoryLabel}
 </span>

 <h3 style={{ fontFamily: "Georgia, serif", fontSize: "26px", margin: "8px 0", color: "#17281f", fontWeight: 400 }}>
 {selectedItem.title}
 </h3>

 <p style={{ color: "#4a594f", fontSize: "14px", lineHeight: "1.6", marginBottom: "24px" }}>
 {selectedItem.description}
 </p>

 <a
 href={`https://wa.me/971569754492?text=Hello%20Chef%20Radhey!%20I%20am%20interested%20in%20the%20${encodeURIComponent(selectedItem.title)}%20(${encodeURIComponent(selectedItem.categoryLabel)}).`}
 target="_blank"
 rel="noopener noreferrer"
 className="btn-whatsapp-full"
 >
 <WhatsAppIcon size={18} color="#fff" />
 <span>Inquire About This Dish / Concept on WhatsApp</span>
 </a>
 </div>
 </div>
 )}

 <SiteFooter />
 </div>
 );
}
