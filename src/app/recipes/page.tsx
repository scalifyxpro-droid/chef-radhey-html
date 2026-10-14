"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import SiteFooter from "@/components/SiteFooter";
import { WhatsAppIcon, ArrowUpRightIcon, SearchIcon } from "@/components/Icons";

interface Recipe {
 id: string;
 title: string;
 category: "all" | "chicken" | "beef" | "seafood" | "breakfast" | "salads";
 categoryLabel: string;
 image: string;
 calories: string;
 protein: string;
 carbs: string;
 fats: string;
 desc: string;
 keyIngredients: string[];
}

const recipesData: Recipe[] = [
 // Chicken
 {
 id: "r1",
 title: "Flame-Grilled Mexican Chicken Bowl",
 category: "chicken",
 categoryLabel: "High-Protein Poultry",
 image: "/images/gallery/gal-chicken-mexican.jpg",
 calories: "460 kcal",
 protein: "48g",
 carbs: "38g",
 fats: "12g",
 desc: "Marinated free-range chicken breast flame-grilled with smoked paprika, cumin, and roasted bell peppers over lime-infused Andean quinoa.",
 keyIngredients: ["Chicken Breast", "Organic Quinoa", "Charred Peppers", "Lime & Cilantro"]
 },
 {
 id: "r2",
 title: "Gourmet Chicken Breast Meatballs in Marinara",
 category: "chicken",
 categoryLabel: "High-Protein Poultry",
 image: "/images/gallery/gal-chicken-balls.jpg",
 calories: "420 kcal",
 protein: "45g",
 carbs: "28g",
 fats: "14g",
 desc: "Tender house-minced chicken breast with fresh oregano and garlic, simmered slowly in San Marzano plum tomato sauce with steamed broccoli.",
 keyIngredients: ["Lean Chicken Breast", "San Marzano Tomatoes", "Fresh Basil", "Steamed Florets"]
 },
 {
 id: "r3",
 title: "Chef's Artisanal Healthy Chicken Burger",
 category: "chicken",
 categoryLabel: "High-Protein Poultry",
 image: "/images/gallery/gal-chicken-burger.jpg",
 calories: "490 kcal",
 protein: "46g",
 carbs: "42g",
 fats: "14g",
 desc: "Handmade lean chicken patty on a toasted wholemeal seed bun with heirloom tomato, crisp oakleaf lettuce, and Greek yogurt herb aioli.",
 keyIngredients: ["Free-Range Chicken", "Wholemeal Bun", "Greek Yogurt Sauce", "Heirloom Tomato"]
 },

 // Beef
 {
 id: "r4",
 title: "Grass-Fed Beef Tenderloin & Mushroom Steak",
 category: "beef",
 categoryLabel: "Prime Lean Beef",
 image: "/images/gallery/gal-beef-steak.jpg",
 calories: "520 kcal",
 protein: "52g",
 carbs: "22g",
 fats: "24g",
 desc: "Center-cut prime beef tenderloin seared rare to medium, accompanied by roasted portobello mushrooms and rosemary sweet potato mash.",
 keyIngredients: ["Grass-Fed Beef Tenderloin", "Portobello Mushrooms", "Sweet Potato", "Fresh Rosemary"]
 },
 {
 id: "r5",
 title: "Thinly Sliced Flank Steak Teriyaki",
 category: "beef",
 categoryLabel: "Prime Lean Beef",
 image: "/images/gallery/gal-beef-teriyaki.jpg",
 calories: "480 kcal",
 protein: "49g",
 carbs: "34g",
 fats: "16g",
 desc: "Marinated prime flank steak tossed with sugar-free tamari teriyaki glaze, scallions, and toasted sesame seeds over steamed brown jasmine rice.",
 keyIngredients: ["Prime Flank", "Sugar-Free Tamari", "Brown Rice", "Baby Bok Choy"]
 },
 {
 id: "r6",
 title: "Charred Mediterranean BBQ Beef Skewers",
 category: "beef",
 categoryLabel: "Prime Lean Beef",
 image: "/images/gallery/gal-beef-bbq.jpg",
 calories: "470 kcal",
 protein: "48g",
 carbs: "26g",
 fats: "18g",
 desc: "Cubed lean beef sirloin marinated in Lebanese sumac, pomegranate reduction, and crushed garlic, flame-grilled with red onion.",
 keyIngredients: ["Beef Sirloin", "Sumac & Herbs", "Pomegranate Reduction", "Grilled Veggies"]
 },

 // Seafood
 {
 id: "r7",
 title: "Charred BBQ Norwegian Salmon Fillet",
 category: "seafood",
 categoryLabel: "Wild & Clean Seafood",
 image: "/images/gallery/gal-bbq-salmon.jpg",
 calories: "510 kcal",
 protein: "44g",
 carbs: "18g",
 fats: "28g",
 desc: "Sustainably farmed Norwegian salmon fillet glazed with smoked honey-mustard, served alongside tender steamed asparagus spears.",
 keyIngredients: ["Atlantic Salmon", "Wild Asparagus", "Cold-Pressed Olive Oil", "Smoked Citrus Glaze"]
 },
 {
 id: "r8",
 title: "Fresh Herb & Citrus Crusted Salmon",
 category: "seafood",
 categoryLabel: "Wild & Clean Seafood",
 image: "/images/gallery/gal-herbs-salmon.jpg",
 calories: "495 kcal",
 protein: "43g",
 carbs: "14g",
 fats: "27g",
 desc: "Pan-roasted salmon crowned with dill, tarragon, lemon zest, and crushed walnuts, served over sauteed baby spinach leaves.",
 keyIngredients: ["Norwegian Salmon", "Fresh Dill & Tarragon", "Walnut Crust", "Baby Spinach"]
 },
 {
 id: "r9",
 title: "Tiger Shrimps in Lemongrass Coconut Broth",
 category: "seafood",
 categoryLabel: "Wild & Clean Seafood",
 image: "/images/gallery/gal-shrimps-curry.jpg",
 calories: "410 kcal",
 protein: "42g",
 carbs: "16g",
 fats: "18g",
 desc: "Plump wild gulf tiger shrimps simmered in light coconut milk infused with fresh galangal, kaffir lime, and crisp baby bok choy.",
 keyIngredients: ["Gulf Tiger Shrimps", "Light Coconut Broth", "Lemongrass & Galangal", "Bok Choy"]
 },
 {
 id: "r10",
 title: "Clay-Oven Tanoor Spiced Local White Fish",
 category: "seafood",
 categoryLabel: "Wild & Clean Seafood",
 image: "/images/gallery/gal-fish-tanoor.jpg",
 calories: "380 kcal",
 protein: "44g",
 carbs: "12g",
 fats: "14g",
 desc: "Flaky local white sea-bass fillet seasoned with dry roasted coriander, turmeric, and dried fenugreek, oven-charred at high heat.",
 keyIngredients: ["Local Sea Bass", "Tanoor Spice Rub", "Charred Lemon", "Cucumber Salad"]
 },

 // Breakfast
 {
 id: "r11",
 title: "Power Protein Banana Oat Pancakes",
 category: "breakfast",
 categoryLabel: "Morning Fuel & Metabolism",
 image: "/images/gallery/gal-pancakes.jpg",
 calories: "410 kcal",
 protein: "32g",
 carbs: "52g",
 fats: "8g",
 desc: "Gluten-free rolled oats, cage-free egg whites, and clean whey protein blended with ripe bananas, cooked golden with zero seed oils.",
 keyIngredients: ["Gluten-Free Oats", "Banana", "Vanilla Whey", "Pure Ceylon Cinnamon"]
 },
 {
 id: "r12",
 title: "Coconut Chia & Overnight Berry Parfait",
 category: "breakfast",
 categoryLabel: "Morning Fuel & Metabolism",
 image: "/images/gallery/gal-overnight-oats.jpg",
 calories: "385 kcal",
 protein: "22g",
 carbs: "46g",
 fats: "12g",
 desc: "Rolled oats and organic black chia seeds soaked overnight in creamy coconut milk, layered with wild blueberries and toasted pumpkin seeds.",
 keyIngredients: ["Jumbo Rolled Oats", "Organic Chia", "Coconut Milk", "Wild Blueberries"]
 },
 {
 id: "r13",
 title: "Artisanal Hass Avocado Egg & Sourdough Toast",
 category: "breakfast",
 categoryLabel: "Morning Fuel & Metabolism",
 image: "/images/gallery/gal-avocado-sandwich.jpg",
 calories: "430 kcal",
 protein: "24g",
 carbs: "36g",
 fats: "20g",
 desc: "Crispy artisanal sourdough toast layered with smashed Hass avocado, pasture-raised soft poached egg, and aged cheddar crumbles.",
 keyIngredients: ["Organic Sourdough", "Hass Avocado", "Pasture-Raised Eggs", "Chili Flakes"]
 },
 {
 id: "r14",
 title: "Fluffy Egg White Spinach & Mushroom Omelette",
 category: "breakfast",
 categoryLabel: "Morning Fuel & Metabolism",
 image: "/images/gallery/gal-spinach-omelette.jpg",
 calories: "320 kcal",
 protein: "36g",
 carbs: "8g",
 fats: "14g",
 desc: "Four cage-free egg whites and one whole egg folded with tender iron-rich baby spinach, roasted cremini mushrooms, and fresh goat feta.",
 keyIngredients: ["Free-Range Eggs", "Cremini Mushrooms", "Baby Spinach", "Goat Cheese"]
 },

 // Salads & Bowls
 {
 id: "r15",
 title: "Avocado & Smoked Norwegian Salmon Salad",
 category: "salads",
 categoryLabel: "Clean Greens & Superfoods",
 image: "/images/gallery/gal-avocado-salmon-salad.jpg",
 calories: "420 kcal",
 protein: "34g",
 carbs: "14g",
 fats: "26g",
 desc: "Cured smoked salmon ribbons, ripe Hass avocado, wild arugula, and baby cucumbers dressed in cold-pressed extra-virgin olive oil.",
 keyIngredients: ["Smoked Salmon", "Hass Avocado", "Wild Arugula", "Cold-Pressed EVOO"]
 },
 {
 id: "r16",
 title: "Clean Grilled Chicken Caesar with 24M Parmesan",
 category: "salads",
 categoryLabel: "Clean Greens & Superfoods",
 image: "/images/gallery/gal-caesar-salad.jpg",
 calories: "440 kcal",
 protein: "46g",
 carbs: "12g",
 fats: "22g",
 desc: "Crisp romaine hearts and seared chicken breast tossed in house-made Greek yogurt Caesar dressing with shaved Parmigiano-Reggiano.",
 keyIngredients: ["Grilled Chicken", "Romaine Hearts", "Parmigiano-Reggiano", "Greek Yogurt Dressing"]
 },
 {
 id: "r17",
 title: "Fresh Green Gulf Shrimps Quinoa Tabbouleh",
 category: "salads",
 categoryLabel: "Clean Greens & Superfoods",
 image: "/images/gallery/gal-shrimp-tabbouleh.jpg",
 calories: "370 kcal",
 protein: "36g",
 carbs: "26g",
 fats: "12g",
 desc: "Vibrant flat-leaf parsley, fresh garden mint, diced vine tomatoes, and Andean quinoa crowned with garlic-seared Gulf shrimps.",
 keyIngredients: ["Gulf Shrimps", "Organic Quinoa", "Fresh Mint & Parsley", "Lemon Dressing"]
 },
 {
 id: "r18",
 title: "Artisanal Edamame Microgreen Superfood Bowl",
 category: "salads",
 categoryLabel: "Clean Greens & Superfoods",
 image: "/images/gallery/gal-fresh-bowl.jpg",
 calories: "390 kcal",
 protein: "24g",
 carbs: "42g",
 fats: "14g",
 desc: "Nutrient-packed plant bowl featuring organic steamed edamame, shaved radishes, avocado, sunflower sprouts, and ginger ponzu vinaigrette.",
 keyIngredients: ["Organic Edamame", "Microgreens", "Avocado", "Ginger Ponzu"]
 }
];

export default function RecipesPage() {
 const [activeCategory, setActiveCategory] = useState<string>("all");
 const [search, setSearch] = useState<string>("");

 const categories = [
 { id: "all", label: "All Recipes" },
 { id: "chicken", label: "Chicken Meals" },
 { id: "beef", label: "Beef & Steaks" },
 { id: "seafood", label: "Seafood & Salmon" },
 { id: "breakfast", label: "Breakfast & Energy" },
 { id: "salads", label: "Salads & Bowls" },
 ];

 const filtered = recipesData.filter(r => {
 const matchCat = activeCategory === "all" || r.category === activeCategory;
 const matchSearch = (r.title + " " + r.desc + " " + r.keyIngredients.join(" "))
 .toLowerCase()
 .includes(search.toLowerCase());
 return matchCat && matchSearch;
 });

 return (
 <div className="site-root">
 <Navbar currentPath="/recipes" />

 {/* Subpage Hero */}
 <section className="subpage-hero">
 <div className="container">
 <div className="subpage-badge">Chef Radhey Culinary Database · 1,000+ Dishes</div>
 <h1>Gourmet Healthy Recipe Library</h1>
 <p>
 Explore real chef-engineered recipes designed for Dubai health goals. Every dish features measured ingredient portions, clean oils, and calculated protein, carbohydrates, and fats.
 </p>
 </div>
 </section>

 {/* Filter and Search Bar */}
 <section style={{ padding: "36px 0 16px", background: "var(--paper)" }}>
 <div className="container">
 <div style={{
 display: "flex",
 justifyContent: "space-between",
 alignItems: "center",
 flexWrap: "wrap",
 gap: "16px"
 }}>
 {/* Category Buttons */}
 <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
 {categories.map(c => (
 <button
 key={c.id}
 onClick={() => setActiveCategory(c.id)}
 className={`filter-btn ${activeCategory === c.id ? "active" : ""}`}
 style={{ padding: "8px 16px", fontSize: "13px", fontWeight: 600, cursor: "pointer" }}
 >
 {c.label}
 </button>
 ))}
 </div>

 {/* Search */}
 <div style={{ position: "relative", minWidth: "260px" }}>
 <input
 type="search"
 className="search"
 placeholder="Search recipe or ingredients..."
 value={search}
 onChange={e => setSearch(e.target.value)}
 style={{ paddingLeft: "36px", width: "100%" }}
 />
 <span style={{ position: "absolute", left: "12px", top: "50%", transform: "translateY(-50%)", color: "var(--muted)" }}>
 <SearchIcon size={14} />
 </span>
 </div>
 </div>
 </div>
 </section>

 {/* Recipe Cards Grid */}
 <section style={{ padding: "30px 0 80px", background: "var(--soft)" }}>
 <div className="container">
 <div style={{
 display: "grid",
 gridTemplateColumns: "repeat(auto-fill, minmax(360px, 1fr))",
 gap: "24px"
 }}>
 {filtered.map(recipe => (
 <article
 key={recipe.id}
 style={{
 background: "var(--paper)",
 border: "1px solid var(--line)",
 borderRadius: "8px",
 overflow: "hidden",
 display: "flex",
 flexDirection: "column",
 transition: "transform 0.2s ease, box-shadow 0.2s ease"
 }}
 onMouseEnter={e => {
 e.currentTarget.style.transform = "translateY(-3px)";
 e.currentTarget.style.boxShadow = "var(--shadow)";
 }}
 onMouseLeave={e => {
 e.currentTarget.style.transform = "translateY(0)";
 e.currentTarget.style.boxShadow = "none";
 }}
 >
 {/* Recipe Image */}
 <div style={{ position: "relative", height: "210px", overflow: "hidden", background: "#dbe2db" }}>
 <img
 src={recipe.image}
 alt={recipe.title}
 style={{ width: "100%", height: "100%", objectFit: "cover" }}
 />
 <div style={{
 position: "absolute",
 top: "12px",
 left: "12px",
 background: "rgba(23, 61, 45, 0.9)",
 backdropFilter: "blur(4px)",
 color: "#ffffff",
 fontSize: "10px",
 fontWeight: 700,
 letterSpacing: "0.06em",
 textTransform: "uppercase",
 padding: "4px 10px",
 borderRadius: "20px"
 }}>
 {recipe.categoryLabel}
 </div>
 </div>

 {/* Recipe Content */}
 <div style={{ padding: "22px", display: "flex", flexDirection: "column", flex: 1 }}>
 <h3 style={{
 fontFamily: "Georgia, serif",
 fontSize: "20px",
 fontWeight: 400,
 margin: "0 0 10px 0",
 lineHeight: "1.25",
 color: "#17281f"
 }}>
 {recipe.title}
 </h3>

 <p style={{ fontSize: "13px", color: "#4a594f", lineHeight: "1.5", margin: "0 0 16px 0", flex: 1 }}>
 {recipe.desc}
 </p>

 {/* Key Ingredients */}
 <div style={{ marginBottom: "16px" }}>
 <div style={{ fontSize: "11px", fontWeight: 700, color: "var(--gold-dark)", textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: "6px" }}>
 Key Wholesome Ingredients:
 </div>
 <div style={{ display: "flex", gap: "6px", flexWrap: "wrap" }}>
 {recipe.keyIngredients.map((ing, i) => (
 <span key={i} className="recipe-ingredient-chip">
 {ing}
 </span>
 ))}
 </div>
 </div>

 {/* High-Contrast Macro Strip */}
 <div className="recipe-macro-grid">
 <div className="recipe-macro-card">
 <strong className="recipe-macro-val">{recipe.calories}</strong>
 <span className="recipe-macro-lbl">Energy</span>
 </div>
 <div className="recipe-macro-card">
 <strong className="recipe-macro-val">{recipe.protein}</strong>
 <span className="recipe-macro-lbl">Protein</span>
 </div>
 <div className="recipe-macro-card">
 <strong className="recipe-macro-val">{recipe.carbs}</strong>
 <span className="recipe-macro-lbl">Carbs</span>
 </div>
 <div className="recipe-macro-card">
 <strong className="recipe-macro-val">{recipe.fats}</strong>
 <span className="recipe-macro-lbl">Fats</span>
 </div>
 </div>

 {/* Luxury WhatsApp Action */}
 <div style={{ marginTop: "4px" }}>
 <a
 href={`https://wa.me/971569754492?text=Hello%20Chef%20Radhey!%20I%20would%20love%20to%20include%20the%20${encodeURIComponent(recipe.title)}%20in%20my%20healthy%20meal%20plan.`}
 target="_blank"
 rel="noopener noreferrer"
 className="btn-whatsapp-full"
 style={{ padding: "11px 20px", fontSize: "13px" }}
 >
 <WhatsAppIcon size={16} color="#fff" />
 <span>Request This Dish on WhatsApp</span>
 </a>
 </div>
 </div>
 </article>
 ))}
 </div>

 {/* Bottom Callout */}
 <div style={{
 marginTop: "60px",
 background: "var(--forest)",
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
 Commercial Recipe & Macro Engineering
 </div>
 <h2 style={{ fontFamily: "Georgia, serif", fontSize: "28px", fontWeight: 400, color: "#ffffff", margin: "0 0 8px 0" }}>
 Are You a Restaurant Owner or Food Brand?
 </h2>
 <p style={{ color: "#d2ded5", fontSize: "14px", margin: 0, lineHeight: "1.5" }}>
 Chef Radhey licenses standardized recipe manuals, nutritional calculations, and portion costing to cafes, cloud kitchens, and restaurant groups.
 </p>
 </div>

 <a
 href="/consulting"
 className="btn btn-gold"
 style={{ padding: "14px 28px", fontSize: "14px", whiteSpace: "nowrap" }}
 >
 <span>Explore Menu Consulting</span>
 <ArrowUpRightIcon size={15} />
 </a>
 </div>
 </div>
 </section>

 <SiteFooter />
 </div>
 );
}
