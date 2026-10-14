"use client";

import React, { useState } from "react";

export interface Dish {
 id: string;
 name: string;
 category: "all" | "protein" | "gourmet" | "salads" | "breakfast";
 categoryLabel: string;
 image: string;
 calories: number;
 protein: number;
 carbs: number;
 fats: number;
 description: string;
 ingredients: string[];
 chefTip: string;
}

const DISHES: Dish[] = [
 {
 id: "chicken-teriyaki",
 name: "Teriyaki Glazed Chicken & Steamed Jasmine",
 category: "protein",
 categoryLabel: "High Protein Main",
 image: "/images/dishes/chicken-teriyaki.jpg",
 calories: 485,
 protein: 46,
 carbs: 52,
 fats: 9,
 description: "Tender sous-vide chicken breast glazed with reduced ginger-tamari glaze, served over steamed fragrant jasmine rice and sesame-tossed greens.",
 ingredients: ["Air-chilled chicken breast", "Organic tamari", "Ginger root", "Sesame", "Jasmine grain", "Snap peas"],
 chefTip: "Prepared using slow-poach technique to ensure 100% moisture retention without extra cooking oils."
 },
 {
 id: "bbq-salmon",
 name: "Glazed Scottish Salmon & Ancient Grains",
 category: "gourmet",
 categoryLabel: "Healthy Gourmet",
 image: "/images/dishes/bbq-salmon.jpg",
 calories: 510,
 protein: 42,
 carbs: 38,
 fats: 20,
 description: "Pan-roasted omega-3 rich salmon fillet with a caramelized sweet BBQ crust over tricolor quinoa and roasted asparagus.",
 ingredients: ["Scottish salmon fillet", "Tricolor quinoa", "Asparagus spears", "Apple cider glaze", "Cold-pressed olive oil"],
 chefTip: "Rich in EPA and DHA healthy fatty acids, crucial for hormone regulation and joint recovery."
 },
 {
 id: "beef-mushroom-steak",
 name: "Grass-Fed Beef Tenderloin & Wild Mushroom Jus",
 category: "protein",
 categoryLabel: "High Protein Main",
 image: "/images/dishes/beef-mushroom-steak.jpg",
 calories: 520,
 protein: 48,
 carbs: 28,
 fats: 18,
 description: "Lean grass-fed beef cut seared medium, paired with reduced portobello mushroom stock, roasted baby carrots, and herb mash.",
 ingredients: ["Grass-fed beef tenderloin", "Portobello & cremini mushrooms", "Fresh rosemary", "Garlic confit", "Sweet potato mash"],
 chefTip: "High bioavailable heme iron and zinc, ideal for training recovery and metabolic support."
 },
 {
 id: "avocado-salmon-salad",
 name: "Smoked Salmon & Hass Avocado Vitality Bowl",
 category: "salads",
 categoryLabel: "Salads & Bowls",
 image: "/images/dishes/avocado-salmon-salad.jpg",
 calories: 380,
 protein: 28,
 carbs: 18,
 fats: 22,
 description: "Crisp mixed greens tossed with ripe Hass avocado cubes, delicate smoked salmon ribbons, baby radish, and light lemon vinaigrette.",
 ingredients: ["Fresh baby spinach & arugula", "Hass avocado", "Cured smoked salmon", "Cherry tomatoes", "Cold-pressed lemon oil"],
 chefTip: "Ketogenic-friendly, low glycemic load, and packed with monounsaturated healthy fats."
 },
 {
 id: "chicken-pizza",
 name: "Artisanal Thin-Crust Healthy Chicken Pizza",
 category: "gourmet",
 categoryLabel: "Healthy Gourmet",
 image: "/images/dishes/chicken-pizza.jpg",
 calories: 440,
 protein: 44,
 carbs: 32,
 fats: 12,
 description: "High-protein spelt & flaxseed crust topped with San Marzano herb sauce, light buffalo mozzarella, spiced chicken breast, and bell peppers.",
 ingredients: ["Spelt & flax flour", "San Marzano tomatoes", "Low-moisture skim mozzarella", "Spiced chicken", "Fresh basil"],
 chefTip: "Proof that comfort food can deliver elite athletic macro profiles with zero post-meal lethargy."
 },
 {
 id: "chicken-mushroom-burger",
 name: "Gourmet Chicken Breast & Portobello Burger",
 category: "gourmet",
 categoryLabel: "Healthy Gourmet",
 image: "/images/dishes/chicken-mushroom-burger.jpg",
 calories: 465,
 protein: 45,
 carbs: 39,
 fats: 11,
 description: "Herb-marinated chicken breast fillet on a high-protein whole-wheat bun with sauteed garlic mushrooms, crisp lettuce, and Greek yogurt dijonnaise.",
 ingredients: ["Whole-wheat grain bun", "Chicken fillet", "Sauteed mushrooms", "Greek yogurt dijonnaise", "Beefsteak tomato"],
 chefTip: "Uses a velvety Greek yogurt emulsion instead of oil-heavy commercial mayonnaise."
 },
 {
 id: "classic-caesar",
 name: "Greek Herb & Lemon Light Caesar Salad",
 category: "salads",
 categoryLabel: "Salads & Bowls",
 image: "/images/dishes/classic-caesar-salad.jpg",
 calories: 310,
 protein: 24,
 carbs: 14,
 fats: 16,
 description: "Crisp romaine hearts with aged parmesan shavings, whole-grain croutons, grilled chicken strips, and Chef Radhey's signature low-calorie dressing.",
 ingredients: ["Romaine hearts", "Aged Parmigiano Reggiano", "Whole grain croutons", "Anchovy lemon reduction", "Light Greek emulsion"],
 chefTip: "Only 14g carbohydrates with 24g clean protein, perfect for light evening dinners."
 },
 {
 id: "gourmet-parfait",
 name: "Chia Berry, Strawberry & Mango Parfait",
 category: "breakfast",
 categoryLabel: "Breakfast & Dessert",
 image: "/images/gourmet-parfait.jpg",
 calories: 295,
 protein: 14,
 carbs: 36,
 fats: 8,
 description: "Hydrated organic white chia seeds in almond milk, layered with strawberry coulis, sweet Alphonso mango cubes, and roasted crushed almonds.",
 ingredients: ["Organic chia seeds", "Unsweetened almond milk", "Fresh strawberries", "Alphonso mango", "Ceylon cinnamon", "Toasted almonds"],
 chefTip: "100% refined sugar-free. Sweetened naturally using ripe fruits and a hint of dates."
 },
 {
 id: "detox-juice",
 name: "Cold-Pressed Citrus & Ginger Detox Elixir",
 category: "breakfast",
 categoryLabel: "Drink / Add-on",
 image: "/images/dishes/detox-juice.jpg",
 calories: 110,
 protein: 2,
 carbs: 24,
 fats: 0.5,
 description: "Slow masticated local Valencia orange, organic carrot, ginger root, and turmeric for systemic inflammation and gut revitalization.",
 ingredients: ["Valencia orange", "Organic carrot", "Fresh ginger root", "Raw turmeric", "Lemon juice"],
 chefTip: "Cold-pressed daily under 4°C to preserve active digestive enzymes and live vitamins."
 }
];

export default function DishesShowcase() {
 const [activeTab, setActiveTab] = useState<string>("all");
 const [selectedDish, setSelectedDish] = useState<Dish | null>(null);

 const filteredDishes = DISHES.filter(d => activeTab === "all" || d.category === activeTab);

 return (
 <section id="dishes" className="section" style={{ background: "var(--cream)" }}>
 <div className="container">
 
 {/* Section Head */}
 <div className="section-head center">
 <div className="eyebrow">CHEF RADHEY RECIPE ARCHIVE</div>
 <h2>1,000+ Mastered Recipes. Zero Compromise on Taste.</h2>
 <p>
 Every dish is designed with culinary finesse and calculated for precise calories, protein, carbohydrates, and healthy fats. Click any dish to inspect its nutritional specs.
 </p>
 </div>

 {/* Filter Tabs */}
 <div style={{
 display: "flex",
 justifyContent: "center",
 gap: "8px",
 flexWrap: "wrap",
 marginBottom: "40px"
 }}>
 {[
 { id: "all", label: "All Dishes" },
 { id: "protein", label: " High Protein Mains" },
 { id: "gourmet", label: "️ Healthy Gourmet" },
 { id: "salads", label: " Salads & Bowls" },
 { id: "breakfast", label: " Breakfast & Juices" }
 ].map(tab => (
 <button
 key={tab.id}
 onClick={() => setActiveTab(tab.id)}
 style={{
 padding: "10px 20px",
 borderRadius: "var(--radius-full)",
 fontSize: "0.84rem",
 fontWeight: 600,
 border: "1px solid",
 borderColor: activeTab === tab.id ? "var(--forest)" : "var(--line)",
 background: activeTab === tab.id ? "var(--forest)" : "#ffffff",
 color: activeTab === tab.id ? "#ffffff" : "var(--muted)",
 transition: "var(--transition)",
 boxShadow: activeTab === tab.id ? "var(--shadow-sm)" : "none"
 }}
 >
 {tab.label}
 </button>
 ))}
 </div>

 {/* Dishes Grid */}
 <div style={{
 display: "grid",
 gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
 gap: "24px"
 }}>
 {filteredDishes.map(dish => (
 <div
 key={dish.id}
 onClick={() => setSelectedDish(dish)}
 style={{
 background: "#ffffff",
 borderRadius: "var(--radius-md)",
 overflow: "hidden",
 border: "1px solid var(--line)",
 boxShadow: "var(--shadow-sm)",
 transition: "var(--transition)",
 cursor: "pointer",
 display: "flex",
 flexDirection: "column"
 }}
 onMouseEnter={e => {
 e.currentTarget.style.transform = "translateY(-4px)";
 e.currentTarget.style.boxShadow = "var(--shadow-md)";
 }}
 onMouseLeave={e => {
 e.currentTarget.style.transform = "translateY(0)";
 e.currentTarget.style.boxShadow = "var(--shadow-sm)";
 }}
 >
 {/* Photo Frame */}
 <div style={{
 position: "relative",
 height: "220px",
 background: "#122a1f",
 overflow: "hidden"
 }}>
 <img
 src={dish.image}
 alt={dish.name}
 style={{
 width: "100%",
 height: "100%",
 objectFit: "cover",
 transition: "transform 0.4s ease"
 }}
 />
 <span style={{
 position: "absolute",
 top: "12px",
 left: "12px",
 background: "rgba(23,61,45,0.9)",
 color: "var(--gold-light)",
 fontSize: "0.68rem",
 fontWeight: 700,
 textTransform: "uppercase",
 padding: "4px 10px",
 borderRadius: "var(--radius-full)",
 backdropFilter: "blur(6px)"
 }}>
 {dish.categoryLabel}
 </span>

 <span style={{
 position: "absolute",
 bottom: "12px",
 right: "12px",
 background: "rgba(255,255,255,0.95)",
 color: "var(--forest)",
 fontSize: "0.75rem",
 fontWeight: 800,
 padding: "4px 10px",
 borderRadius: "var(--radius-full)",
 boxShadow: "0 2px 8px rgba(0,0,0,0.15)"
 }}>
 {dish.calories} kcal
 </span>
 </div>

 {/* Body */}
 <div style={{ padding: "20px", display: "flex", flexDirection: "column", flex: 1 }}>
 <h4 style={{
 fontFamily: "var(--font-serif)",
 fontSize: "1.28rem",
 fontWeight: 600,
 color: "var(--forest)",
 marginBottom: "8px",
 lineHeight: 1.2
 }}>
 {dish.name}
 </h4>

 <p style={{
 fontSize: "0.82rem",
 color: "var(--muted)",
 lineHeight: 1.5,
 marginBottom: "16px",
 flex: 1
 }}>
 {dish.description}
 </p>

 {/* Macro summary pills */}
 <div style={{
 display: "grid",
 gridTemplateColumns: "repeat(3, 1fr)",
 gap: "6px",
 background: "var(--surface)",
 padding: "8px 12px",
 borderRadius: "var(--radius-xs)",
 fontSize: "0.75rem",
 textAlign: "center",
 border: "1px solid var(--line)"
 }}>
 <div>
 <span style={{ color: "var(--muted)" }}>Prot: </span>
 <strong style={{ color: "var(--forest)" }}>{dish.protein}g</strong>
 </div>
 <div>
 <span style={{ color: "var(--muted)" }}>Carb: </span>
 <strong style={{ color: "var(--forest)" }}>{dish.carbs}g</strong>
 </div>
 <div>
 <span style={{ color: "var(--muted)" }}>Fat: </span>
 <strong style={{ color: "var(--forest)" }}>{dish.fats}g</strong>
 </div>
 </div>

 <div style={{
 display: "flex",
 alignItems: "center",
 justifyContent: "space-between",
 marginTop: "16px",
 paddingTop: "12px",
 borderTop: "1px solid var(--line)",
 fontSize: "0.78rem",
 fontWeight: 700,
 color: "var(--gold-dark)"
 }}>
 <span>Inspect Nutritional Specs</span>
 <span>→</span>
 </div>
 </div>
 </div>
 ))}
 </div>

 </div>

 {/* Interactive Modal */}
 {selectedDish && (
 <div
 onClick={() => setSelectedDish(null)}
 style={{
 position: "fixed",
 inset: 0,
 zIndex: 100,
 background: "rgba(15, 39, 28, 0.7)",
 backdropFilter: "blur(6px)",
 display: "grid",
 placeItems: "center",
 padding: "20px"
 }}
 >
 <div
 onClick={e => e.stopPropagation()}
 style={{
 background: "#ffffff",
 borderRadius: "var(--radius-md)",
 maxWidth: "560px",
 width: "100%",
 overflow: "hidden",
 boxShadow: "var(--shadow-lg)",
 border: "1px solid var(--gold-light)",
 position: "relative"
 }}
 >
 {/* Close Button */}
 <button
 onClick={() => setSelectedDish(null)}
 style={{
 position: "absolute",
 top: "14px",
 right: "14px",
 zIndex: 10,
 width: "36px",
 height: "36px",
 borderRadius: "50%",
 background: "rgba(0,0,0,0.5)",
 color: "#ffffff",
 display: "grid",
 placeItems: "center",
 fontSize: "1.1rem"
 }}
 >
 ✕
 </button>

 {/* Modal Image */}
 <div style={{ height: "240px", background: "#173d2d", overflow: "hidden" }}>
 <img
 src={selectedDish.image}
 alt={selectedDish.name}
 style={{ width: "100%", height: "100%", objectFit: "cover" }}
 />
 </div>

 {/* Content */}
 <div style={{ padding: "26px" }}>
 <span className="badge badge-gold" style={{ marginBottom: "8px" }}>
 {selectedDish.categoryLabel}
 </span>

 <h3 style={{
 fontFamily: "var(--font-serif)",
 fontSize: "1.65rem",
 color: "var(--forest)",
 marginBottom: "8px",
 lineHeight: 1.15
 }}>
 {selectedDish.name}
 </h3>

 <p style={{ fontSize: "0.88rem", color: "var(--muted)", lineHeight: 1.5, marginBottom: "20px" }}>
 {selectedDish.description}
 </p>

 {/* Macro Grid */}
 <div style={{
 display: "grid",
 gridTemplateColumns: "repeat(4, 1fr)",
 gap: "10px",
 background: "var(--cream)",
 padding: "14px",
 borderRadius: "var(--radius-sm)",
 border: "1px solid var(--line-strong)",
 textAlign: "center",
 marginBottom: "20px"
 }}>
 <div>
 <div style={{ fontSize: "0.68rem", color: "var(--muted)", textTransform: "uppercase" }}>Energy</div>
 <div style={{ fontWeight: 800, fontSize: "1.05rem", color: "var(--forest)" }}>{selectedDish.calories} kcal</div>
 </div>
 <div>
 <div style={{ fontSize: "0.68rem", color: "var(--muted)", textTransform: "uppercase" }}>Protein</div>
 <div style={{ fontWeight: 800, fontSize: "1.05rem", color: "var(--forest)" }}>{selectedDish.protein}g</div>
 </div>
 <div>
 <div style={{ fontSize: "0.68rem", color: "var(--muted)", textTransform: "uppercase" }}>Carbs</div>
 <div style={{ fontWeight: 800, fontSize: "1.05rem", color: "var(--forest)" }}>{selectedDish.carbs}g</div>
 </div>
 <div>
 <div style={{ fontSize: "0.68rem", color: "var(--muted)", textTransform: "uppercase" }}>Healthy Fats</div>
 <div style={{ fontWeight: 800, fontSize: "1.05rem", color: "var(--forest)" }}>{selectedDish.fats}g</div>
 </div>
 </div>

 {/* Chef culinary note */}
 <div style={{
 background: "var(--surface)",
 padding: "12px 16px",
 borderRadius: "var(--radius-xs)",
 borderLeft: "3px solid var(--gold)",
 fontSize: "0.82rem",
 color: "var(--ink-light)",
 marginBottom: "20px"
 }}>
 <strong>Chef Radhey Note: </strong>
 {selectedDish.chefTip}
 </div>

 {/* Action */}
 <div style={{ display: "flex", gap: "10px" }}>
 <a
 href={`https://wa.me/971569754492?text=Hi%20Chef%20Radhey,%20I%20am%20interested%20in%20including%20${encodeURIComponent(selectedDish.name)}%20in%20my%20meal%20plan!`}
 target="_blank"
 rel="noopener noreferrer"
 className="btn btn-whatsapp"
 style={{ flex: 1, padding: "12px" }}
 >
 Request in My Meal Plan 
 </a>
 <button
 onClick={() => setSelectedDish(null)}
 className="btn btn-outline"
 style={{ padding: "12px 20px" }}
 >
 Close
 </button>
 </div>

 </div>
 </div>
 </div>
 )}

 </section>
 );
}
