"use client";

import React, { useState } from "react";

interface BookingFormProps {
 initialPlan?: string;
 initialService?: "meals" | "consulting";
}

export default function BookingForm({ initialPlan = "", initialService = "meals" }: BookingFormProps) {
 const [serviceType, setServiceType] = useState<"meals" | "consulting">(initialService);
 
 // Intake details specified by Chef Radhey
 const [fullName, setFullName] = useState("");
 const [age, setAge] = useState("");
 const [weight, setWeight] = useState("");
 const [height, setHeight] = useState("");
 const [goal, setGoal] = useState(initialPlan || "Fat Loss & Weight Management");
 const [phone, setPhone] = useState("+971 ");
 const [email, setEmail] = useState("");
 const [preferences, setPreferences] = useState("");
 const [deliveryArea, setDeliveryArea] = useState("Downtown Dubai / Business Bay");
 const [submitted, setSubmitted] = useState(false);

 const handleSubmit = (e: React.FormEvent) => {
 e.preventDefault();
 setSubmitted(true);
 };

 // Official Chef Radhey intake message formatted for WhatsApp
 const whatsappMealMessage = encodeURIComponent(
 `Hello! I would like to enquire about Chef Radhey – Personalized Healthy Meal Plans \n\n` +
 `1. Name: ${fullName}\n` +
 `2. Age: ${age || "N/A"}\n` +
 `3. Current Weight & Height: ${weight ? weight + " kg" : "N/A"} / ${height ? height + " cm" : "N/A"}\n` +
 `4. Goal: ${goal}\n` +
 `5. Food Preferences / Health Concerns: ${preferences || "None specified"}\n` +
 ` Preferred Delivery Area: ${deliveryArea}\n` +
 ` Contact: ${phone}\n\n` +
 `*Healthy Eating. Better Living.* `
 );

 const whatsappBusinessMessage = encodeURIComponent(
 `Hello Chef Radhey! I am inquiring about Restaurant Setup & Food Business Consulting \n\n` +
 `• Name: ${fullName}\n` +
 `• Phone: ${phone}\n` +
 `• Email: ${email}\n` +
 `• Project Concept: ${goal}\n` +
 `• Requirements: ${preferences || "Menu engineering, recipe formulation & kitchen operations"}\n` +
 `• Target Location: Dubai / UAE`
 );

 const activeWhatsAppUrl = `https://wa.me/971569754492?text=${serviceType === "meals" ? whatsappMealMessage : whatsappBusinessMessage}`;

 return (
 <section id="contact" className="section" style={{ background: "var(--cream)" }}>
 <div className="container">
 
 <div style={{
 background: "#ffffff",
 borderRadius: "var(--radius-lg)",
 border: "1.5px solid var(--line-strong)",
 overflow: "hidden",
 boxShadow: "var(--shadow-md)"
 }}>
 
 <div style={{
 display: "grid",
 gridTemplateColumns: "0.85fr 1.15fr"
 }} className="contact-grid">

 {/* Left Brand Card with Chef Radhey Official Welcome */}
 <div style={{
 background: "linear-gradient(135deg, var(--forest-dark), var(--forest))",
 color: "#ffffff",
 padding: "48px 36px",
 display: "flex",
 flexDirection: "column",
 justifyContent: "space-between"
 }}>
 <div>
 <div className="badge badge-gold" style={{ marginBottom: "16px" }}>
 • Direct WhatsApp & Consultation Desk
 </div>

 <h3 style={{
 fontFamily: "var(--font-serif)",
 fontSize: "clamp(26px, 3.2vw, 38px)",
 fontWeight: 500,
 lineHeight: 1.15,
 marginBottom: "16px",
 color: "#ffffff"
 }}>
 Personalized Nutrition Built Around Your Life.
 </h3>

 <p style={{ fontSize: "0.88rem", color: "#d2ded6", lineHeight: 1.6, marginBottom: "24px" }}>
 Chef Radhey designs every meal plan around your personal biometric data, metabolic targets, and lifestyle preferences.
 </p>

 {/* Offerings list */}
 <div style={{
 background: "rgba(255,255,255,0.06)",
 borderRadius: "var(--radius-sm)",
 padding: "18px 20px",
 border: "1px solid rgba(255,255,255,0.12)",
 marginBottom: "28px"
 }}>
 <div style={{
 fontSize: "0.72rem",
 fontWeight: 800,
 textTransform: "uppercase",
 letterSpacing: "0.1em",
 color: "var(--gold-light)",
 marginBottom: "12px"
 }}>
 Available Program Categories:
 </div>
 <div style={{ display: "grid", gap: "8px", fontSize: "0.84rem", color: "#e3ece5" }}>
 <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
 <span></span> <strong>Fat Loss & Weight Management</strong>
 </div>
 <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
 <span></span> <strong>High-Protein Muscle Gain</strong>
 </div>
 <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
 <span></span> <strong>Balanced Healthy Diet</strong>
 </div>
 <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
 <span></span> <strong>Diabetes-Friendly Meal Plans</strong>
 </div>
 <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
 <span></span> <strong>Gut Health & Specialized Nutrition</strong>
 </div>
 <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
 <span></span> <strong>Personalized Custom Nutrition Plans</strong>
 </div>
 </div>
 </div>

 <div style={{ display: "grid", gap: "14px", fontSize: "0.82rem", color: "#c2cfc5" }}>
 <div> <strong>Delivery:</strong> Daily across Dubai (Marina, Downtown, Business Bay, Jumeirah, Hills)</div>
 <div> <strong>WhatsApp:</strong> +971 56 975 4492</div>
 <div> <em>Healthy Eating. Better Living.</em></div>
 </div>
 </div>

 <div style={{
 marginTop: "32px",
 paddingTop: "18px",
 borderTop: "1px solid rgba(255,255,255,0.15)",
 fontSize: "0.75rem",
 color: "#b0c1b4"
 }}>
 • Complete the 5 questions to receive your tailored meal recommendation from Chef Radhey.
 </div>
 </div>

 {/* Right Questionnaire Form */}
 <div style={{ padding: "44px 38px" }}>
 
 {submitted ? (
 <div style={{ textAlign: "center", padding: "36px 12px" }}>
 <div style={{
 width: "60px",
 height: "60px",
 borderRadius: "50%",
 background: "var(--forest)",
 color: "var(--gold-light)",
 display: "grid",
 placeItems: "center",
 fontSize: "1.8rem",
 margin: "0 auto 18px"
 }}>
 OK
 </div>
 <h3 style={{ fontFamily: "var(--font-serif)", fontSize: "1.8rem", color: "var(--forest)", marginBottom: "10px" }}>
 Details Received, {fullName}!
 </h3>
 <p style={{ color: "var(--muted)", fontSize: "0.92rem", lineHeight: 1.6, maxWidth: "460px", margin: "0 auto 24px" }}>
 Chef Radhey&apos;s culinary & nutrition team has received your details. To expedite your meal plan launch, send your questionnaire directly on WhatsApp with one click:
 </p>
 
 <div style={{ display: "flex", gap: "12px", justifyContent: "center", flexWrap: "wrap" }}>
 <a
 href={activeWhatsAppUrl}
 target="_blank"
 rel="noopener noreferrer"
 className="btn btn-whatsapp"
 style={{ padding: "14px 28px", fontSize: "0.92rem" }}
 >
 <span>Send Questionnaire via WhatsApp</span>
 <span></span>
 </a>
 <button
 type="button"
 onClick={() => setSubmitted(false)}
 className="btn btn-outline"
 style={{ padding: "14px 20px", fontSize: "0.86rem" }}
 >
 Edit Details
 </button>
 </div>
 </div>
 ) : (
 <form onSubmit={handleSubmit} style={{ display: "grid", gap: "18px" }}>
 
 {/* Service Pillar Toggle */}
 <div>
 <label style={{ display: "block", fontSize: "0.76rem", fontWeight: 700, color: "var(--forest)", marginBottom: "8px" }}>
 Select Enquiry Type *
 </label>
 <div style={{ display: "flex", gap: "10px" }}>
 <button
 type="button"
 onClick={() => setServiceType("meals")}
 style={{
 flex: 1,
 padding: "11px 16px",
 borderRadius: "10px",
 border: "1.5px solid",
 borderColor: serviceType === "meals" ? "var(--forest)" : "var(--line)",
 background: serviceType === "meals" ? "var(--forest)" : "rgba(246, 249, 246, 0.75)",
 color: serviceType === "meals" ? "#ffffff" : "var(--ink)",
 fontWeight: 700,
 fontSize: "0.84rem",
 transition: "all 0.2s ease",
 cursor: "pointer"
 }}
 >
 Healthy Meal Plan Intake
 </button>

 <button
 type="button"
 onClick={() => setServiceType("consulting")}
 style={{
 flex: 1,
 padding: "11px 16px",
 borderRadius: "10px",
 border: "1.5px solid",
 borderColor: serviceType === "consulting" ? "var(--gold-dark)" : "var(--line)",
 background: serviceType === "consulting" ? "var(--gold-dark)" : "rgba(246, 249, 246, 0.75)",
 color: serviceType === "consulting" ? "#ffffff" : "var(--ink)",
 fontWeight: 700,
 fontSize: "0.84rem",
 transition: "all 0.2s ease",
 cursor: "pointer"
 }}
 >
 Restaurant & Business Setup
 </button>
 </div>
 </div>

 {/* 1. Name & Phone */}
 <div style={{ display: "grid", gridTemplateColumns: "1.1fr 0.9fr", gap: "14px" }} className="form-row">
 <div>
 <label style={{ display: "block", fontSize: "0.76rem", fontWeight: 700, color: "var(--forest)", marginBottom: "6px" }}>
 1. Your Full Name *
 </label>
 <input
 type="text"
 required
 value={fullName}
 onChange={e => setFullName(e.target.value)}
 placeholder="e.g. Rahul Sharma / Sarah Jenkins"
 style={{
 width: "100%",
 padding: "11px 14px",
 borderRadius: "var(--radius-xs)",
 border: "1px solid var(--line-strong)",
 fontSize: "0.88rem",
 background: "#ffffff"
 }}
 />
 </div>

 <div>
 <label style={{ display: "block", fontSize: "0.76rem", fontWeight: 700, color: "var(--forest)", marginBottom: "6px" }}>
 WhatsApp / Mobile *
 </label>
 <input
 type="tel"
 required
 value={phone}
 onChange={e => setPhone(e.target.value)}
 placeholder="+971 50 123 4567"
 style={{
 width: "100%",
 padding: "11px 14px",
 borderRadius: "var(--radius-xs)",
 border: "1px solid var(--line-strong)",
 fontSize: "0.88rem",
 background: "#ffffff"
 }}
 />
 </div>
 </div>

 {/* 2. Age & 3. Weight / Height */}
 <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "12px" }} className="biometrics-row">
 <div>
 <label style={{ display: "block", fontSize: "0.76rem", fontWeight: 700, color: "var(--forest)", marginBottom: "6px" }}>
 2. Your Age
 </label>
 <input
 type="number"
 min="16"
 max="90"
 value={age}
 onChange={e => setAge(e.target.value)}
 placeholder="e.g. 32"
 style={{
 width: "100%",
 padding: "11px 12px",
 borderRadius: "var(--radius-xs)",
 border: "1px solid var(--line-strong)",
 fontSize: "0.88rem",
 background: "#ffffff"
 }}
 />
 </div>

 <div>
 <label style={{ display: "block", fontSize: "0.76rem", fontWeight: 700, color: "var(--forest)", marginBottom: "6px" }}>
 3. Weight (kg)
 </label>
 <input
 type="number"
 min="35"
 max="200"
 value={weight}
 onChange={e => setWeight(e.target.value)}
 placeholder="e.g. 74"
 style={{
 width: "100%",
 padding: "11px 12px",
 borderRadius: "var(--radius-xs)",
 border: "1px solid var(--line-strong)",
 fontSize: "0.88rem",
 background: "#ffffff"
 }}
 />
 </div>

 <div>
 <label style={{ display: "block", fontSize: "0.76rem", fontWeight: 700, color: "var(--forest)", marginBottom: "6px" }}>
 3. Height (cm)
 </label>
 <input
 type="number"
 min="120"
 max="220"
 value={height}
 onChange={e => setHeight(e.target.value)}
 placeholder="e.g. 176"
 style={{
 width: "100%",
 padding: "11px 12px",
 borderRadius: "var(--radius-xs)",
 border: "1px solid var(--line-strong)",
 fontSize: "0.88rem",
 background: "#ffffff"
 }}
 />
 </div>
 </div>

 {/* 4. Your Goal */}
 <div>
 <label style={{ display: "block", fontSize: "0.76rem", fontWeight: 700, color: "var(--forest)", marginBottom: "6px" }}>
 4. Your Primary Goal *
 </label>
 <select
 value={goal}
 onChange={e => setGoal(e.target.value)}
 style={{
 width: "100%",
 padding: "11px 14px",
 borderRadius: "var(--radius-xs)",
 border: "1px solid var(--line-strong)",
 fontSize: "0.88rem",
 background: "#ffffff",
 fontWeight: 600,
 color: "var(--ink)"
 }}
 >
 <option value="Fat Loss & Weight Management"> Fat Loss & Weight Management (~1,285 kcal · AED 40/meal)</option>
 <option value="High-Protein Muscle Gain"> High-Protein Muscle Gain (~1,815 kcal · AED 45/meal)</option>
 <option value="Balanced Healthy Diet"> Balanced Healthy Diet (~1,615 kcal · AED 45/meal)</option>
 <option value="Diabetes-Friendly Meal Plan"> Diabetes-Friendly Meal Plan (~1,290 kcal · AED 45/meal)</option>
 <option value="Gut Health & Specialized Nutrition"> Gut Health & Digestive Wellness (~1,405 kcal · AED 45/meal)</option>
 <option value="PCOS / PCOD Hormonal Balance"> PCOS / PCOD Hormonal Balance (~1,360 kcal · AED 45/meal)</option>
 <option value="Pregnancy & Postpartum Nutrition"> Pregnancy & Postpartum Nutrition (~1,620 kcal · AED 45/meal)</option>
 <option value="Joint-Friendly Nutrition"> Joint-Friendly Nutrition (~1,420 kcal · AED 45/meal)</option>
 <option value="Personalized Custom Nutrition Plan"> Completely Custom Personalized Plan</option>
 <option value="Restaurant / Cafe Setup Consulting"> Restaurant Setup & Menu Consulting</option>
 </select>
 </div>

 {/* 5. Preferences & Health Concerns */}
 <div>
 <label style={{ display: "block", fontSize: "0.76rem", fontWeight: 700, color: "var(--forest)", marginBottom: "6px" }}>
 5. Any Food Preferences, Allergies or Health Concerns? *
 </label>
 <textarea
 rows={2}
 value={preferences}
 onChange={e => setPreferences(e.target.value)}
 placeholder="e.g. No dairy, gluten-sensitive, vegetarian, prefer fish & chicken over red meat, or specific health details..."
 style={{
 width: "100%",
 padding: "11px 14px",
 borderRadius: "var(--radius-xs)",
 border: "1px solid var(--line-strong)",
 fontSize: "0.88rem",
 background: "#ffffff",
 resize: "vertical"
 }}
 />
 </div>

 {/* Delivery Location in Dubai */}
 <div>
 <label style={{ display: "block", fontSize: "0.76rem", fontWeight: 700, color: "var(--forest)", marginBottom: "6px" }}>
 Delivery Location in Dubai
 </label>
 <input
 type="text"
 value={deliveryArea}
 onChange={e => setDeliveryArea(e.target.value)}
 placeholder="e.g. Dubai Marina / Palm Jumeirah / DIFC / Downtown"
 style={{
 width: "100%",
 padding: "11px 14px",
 borderRadius: "var(--radius-xs)",
 border: "1px solid var(--line-strong)",
 fontSize: "0.88rem",
 background: "#ffffff"
 }}
 />
 </div>

 {/* Submit Actions */}
 <div style={{ display: "flex", gap: "12px", alignItems: "center", flexWrap: "wrap", marginTop: "6px" }}>
 <button
 type="submit"
 className="btn btn-primary"
 style={{ padding: "14px 26px", fontSize: "0.92rem", flex: 1 }}
 >
 Submit 5-Point Questionnaire 
 </button>
 
 <a
 href={activeWhatsAppUrl}
 target="_blank"
 rel="noopener noreferrer"
 className="btn btn-whatsapp"
 style={{ padding: "14px 20px", fontSize: "0.92rem" }}
 >
 Send via WhatsApp 
 </a>
 </div>

 <div style={{ fontSize: "0.72rem", color: "var(--muted)", textAlign: "center" }}>
 Thank you for choosing <strong>Chef Radhey</strong> · <em>Healthy Eating. Better Living.</em> 
 </div>

 </form>
 )}

 </div>

 </div>

 </div>

 </div>

 <style jsx>{`
 @media (max-width: 850px) {
 :global(.contact-grid) {
 grid-template-columns: 1fr !important;
 }
 :global(.form-row) {
 grid-template-columns: 1fr !important;
 }
 :global(.biometrics-row) {
 grid-template-columns: 1fr 1fr !important;
 }
 }
 `}</style>
 </section>
 );
}
