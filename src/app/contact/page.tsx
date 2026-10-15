"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import SiteFooter from "@/components/SiteFooter";
import { WhatsAppIcon, PinIcon, MailIcon } from "@/components/Icons";

export default function ContactPage() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [weightHeight, setWeightHeight] = useState("");
  const [phone, setPhone] = useState("+971 ");
  const [goal, setGoal] = useState("Fat Loss & Weight Management");
  const [preferences, setPreferences] = useState("");

  // Business & Consulting dynamic fields
  const [businessName, setBusinessName] = useState("");
  const [businessLocation, setBusinessLocation] = useState("");
  const [businessDetails, setBusinessDetails] = useState("");

  const isBusiness =
    goal === "Restaurant / Food Business Consulting" ||
    goal === "Restaurant & Food Business Consulting" ||
    goal === "Recipe or Menu Development" ||
    goal === "Macro & Nutrition Labeling for Food Brands" ||
    goal === "Cloud Kitchen & Operations Setup";

  const contactWhatsAppMessage = encodeURIComponent(
    isBusiness
      ? `Hello Chef Radhey! I am inquiring about Restaurant & Food Business Consulting\n\n` +
        `• Contact Name: ${name || "Not specified"}\n` +
        `• Phone / WhatsApp: ${phone}\n` +
        `• Brand / Restaurant Name: ${businessName || "New Concept"}\n` +
        `• Location & Cuisine: ${businessLocation || "Dubai / UAE"}\n` +
        `• Scope: ${goal}\n` +
        `• Project Scope & Timeline: ${businessDetails || preferences || "Recipe development & kitchen consulting"}\n\n` +
        `*Chef Radhey Culinary & Business Consulting*`
      : `Hello Chef Radhey! I am submitting my details for a personalized plan / consulting in Dubai:\n\n` +
        `• Name: ${name || "Not specified"}\n` +
        `• Phone: ${phone}\n` +
        `• Age: ${age || "Not specified"}\n` +
        `• Weight & Height: ${weightHeight || "Not specified"}\n` +
        `• Primary Goal: ${goal}\n` +
        `• Food Preferences / Health Concerns: ${preferences || "None specified"}\n\n` +
        `*Healthy Eating. Better Living.*`
  );
 return (
 <div className="site-root">
 <Navbar currentPath="/contact" />

 {/* Subpage Hero */}
 <section className="subpage-hero">
 <div className="container">
 <div className="subpage-badge">Work With Chef Radhey · Dubai UAE</div>
 <h1>Start Your Culinary & Nutrition Journey</h1>
 <p>
 Whether you are starting a personalized healthy meal plan or launching a restaurant concept, provide your 5 details below. Chef Radhey and our Dubai operations team respond directly via WhatsApp.
 </p>
 </div>
 </section>

 {/* Main Contact Section */}
 <section style={{ padding: "80px 0", background: "var(--cream)" }}>
 <div className="container">
 <div style={{
 display: "grid",
 gridTemplateColumns: "0.85fr 1.15fr",
 gap: "55px",
 alignItems: "start"
 }}>
 {/* Left Contact Info & Direct Desk */}
 <div>
 <div className="eyebrow" style={{ marginBottom: "10px", color: "var(--gold-dark, #24A170)", fontWeight: 800 }}>Dubai Operations</div>
 <h2 style={{ fontFamily: "Georgia, serif", fontSize: "36px", fontWeight: 400, margin: "0 0 16px 0", color: "#17281f" }}>
 We Are Here to Assist You.
 </h2>
 <p style={{ color: "#526257", fontSize: "14.5px", lineHeight: "1.7", marginBottom: "32px" }}>
 Our kitchen and advisory desk are located in Dubai. Daily meal deliveries depart each morning between 5:00 AM – 8:30 AM covering all residential and business districts across the UAE.
 </p>

 <div style={{ display: "grid", gap: "18px", marginBottom: "36px" }}>
 <div style={{ display: "flex", gap: "14px", alignItems: "center", paddingBottom: "18px", borderBottom: "1px solid #dce2d9" }}>
 <div style={{
 width: "44px",
 height: "44px",
 borderRadius: "50%",
 background: "var(--forest)",
 color: "#fff",
 display: "grid",
 placeItems: "center"
 }}>
 <PinIcon size={18} />
 </div>
 <div>
 <strong style={{ display: "block", fontSize: "14px", color: "#17281f" }}>Headquarters & Kitchen</strong>
 <span style={{ fontSize: "13px", color: "#4a594f" }}>Dubai, United Arab Emirates</span>
 </div>
 </div>

 <div style={{ display: "flex", gap: "14px", alignItems: "center", paddingBottom: "18px", borderBottom: "1px solid #dce2d9" }}>
 <div style={{
 width: "44px",
 height: "44px",
 borderRadius: "50%",
 background: "#25d366",
 color: "#fff",
 display: "grid",
 placeItems: "center"
 }}>
 <WhatsAppIcon size={20} color="#fff" />
 </div>
 <div>
 <strong style={{ display: "block", fontSize: "14px", color: "#17281f" }}>Direct WhatsApp Hotline</strong>
 <span style={{ fontSize: "13px", color: "#4a594f" }}>+971 56 975 4492 (Instant Support)</span>
 </div>
 </div>

 <div style={{ display: "flex", gap: "14px", alignItems: "center", paddingBottom: "18px", borderBottom: "1px solid #dce2d9" }}>
 <div style={{
 width: "44px",
 height: "44px",
 borderRadius: "50%",
 background: "var(--forest)",
 color: "#fff",
 display: "grid",
 placeItems: "center"
 }}>
 <MailIcon size={18} />
 </div>
 <div>
 <strong style={{ display: "block", fontSize: "14px", color: "#17281f" }}>Email Enquiries</strong>
 <span style={{ fontSize: "13px", color: "#4a594f" }}>enquiries@chefradhey.com</span>
 </div>
 </div>
 </div>

 {/* Delivery notice */}
 <div style={{
 background: "#ffffff",
 border: "1px solid #dbe2d8",
 borderRadius: "12px",
 padding: "20px",
 fontSize: "12.5px",
 color: "#4a594f",
 lineHeight: "1.6",
 boxShadow: "0 2px 8px rgba(0,0,0,0.03)"
 }}>
 <strong style={{ display: "block", color: "#173d2d", marginBottom: "4px", fontSize: "13px" }}>
 Daily Delivery Coverage:
 </strong>
 Downtown Dubai, Dubai Marina, JBR, Palm Jumeirah, DIFC, Business Bay, Dubai Hills, Arabian Ranches, JLT, Al Barsha, Meydan, and surrounding Emirates upon request.
 </div>
 </div>

 {/* Right: Dynamic Questionnaire Form */}
          <form
            onSubmit={e => e.preventDefault()}
            className="contact-form"
          >
            {/* Service Pillar Segmented Toggle */}
            <div style={{
              gridColumn: "1 / -1",
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "8px",
              background: "rgba(23, 61, 45, 0.06)",
              padding: "4px",
              borderRadius: "14px",
              marginBottom: "6px"
            }}>
              <button
                type="button"
                onClick={() => setGoal("Fat Loss & Weight Management")}
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
                onClick={() => setGoal("Restaurant / Food Business Consulting")}
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

            <div style={{ gridColumn: "1 / -1", marginBottom: "6px" }}>
              <h3 style={{ fontFamily: "Georgia, serif", fontSize: "24px", fontWeight: 400, margin: "0 0 6px 0", color: "#17281f" }}>
                {isBusiness ? "Commercial Business Enquiry" : "Personal Nutrition Questionnaire"}
              </h3>
              <p style={{ fontSize: "13px", color: "#4a594f", margin: 0 }}>
                {isBusiness
                  ? "Tell us about your brand, menu goals, or operational scale to connect directly with Chef Radhey."
                  : "Fill in your details to immediately format your WhatsApp message directly to Chef Radhey."}
              </p>
            </div>

            {/* 1. Name */}
            <div className="field">
              <label htmlFor="cName">
                <span className="form-num">1</span>
                {isBusiness ? "Your Name / Contact *" : "Your Name *"}
              </label>
              <input
                id="cName"
                required
                placeholder={isBusiness ? "e.g. Sarah Jenkins / F&B Director" : "Full name"}
                value={name}
                onChange={e => setName(e.target.value)}
              />
            </div>

            {/* 2. Phone */}
            <div className="field">
              <label htmlFor="cPhone">
                <span className="form-num">2</span> Phone / WhatsApp *
              </label>
              <input
                id="cPhone"
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
                <div className="field">
                  <label htmlFor="cBusinessName">
                    <span className="form-num">3</span> Brand or Restaurant Name *
                  </label>
                  <input
                    id="cBusinessName"
                    required
                    placeholder="e.g. Green Harvest Cafe / Cloud Kitchen"
                    value={businessName}
                    onChange={e => setBusinessName(e.target.value)}
                  />
                </div>

                <div className="field">
                  <label htmlFor="cBusinessLocation">
                    <span className="form-num">4</span> Location & Cuisine Type
                  </label>
                  <input
                    id="cBusinessLocation"
                    placeholder="e.g. Dubai Marina · Healthy Mediterranean"
                    value={businessLocation}
                    onChange={e => setBusinessLocation(e.target.value)}
                  />
                </div>
              </>
            ) : (
              <>
                <div className="field">
                  <label htmlFor="cAge">
                    <span className="form-num">3</span> Your Age
                  </label>
                  <input
                    id="cAge"
                    type="number"
                    placeholder="e.g. 28"
                    value={age}
                    onChange={e => setAge(e.target.value)}
                  />
                </div>

                <div className="field">
                  <label htmlFor="cWeight">
                    <span className="form-num">4</span> Current Weight & Height
                  </label>
                  <input
                    id="cWeight"
                    placeholder="e.g. 74 kg / 178 cm"
                    value={weightHeight}
                    onChange={e => setWeightHeight(e.target.value)}
                  />
                </div>
              </>
            )}

            {/* 5. Goal */}
            <div className="field full">
              <label htmlFor="cGoal">
                <span className="form-num">5</span>
                {isBusiness ? "Consulting Scope *" : "Your Goal *"}
              </label>
              <select
                id="cGoal"
                value={goal}
                onChange={e => setGoal(e.target.value)}
              >
                {isBusiness ? (
                  <>
                    <option value="Restaurant / Food Business Consulting">Restaurant & Food Business Consulting</option>
                    <option value="Recipe or Menu Development">Recipe or Menu Development</option>
                    <option value="Macro & Nutrition Labeling for Food Brands">Macro & Nutrition Labeling for Food Brands</option>
                    <option value="Cloud Kitchen & Operations Setup">Cloud Kitchen & Operations Setup</option>
                    <option value="Fat Loss & Weight Management">Switch to: Personal Meal Plan Intake</option>
                  </>
                ) : (
                  <>
                    <option value="Fat Loss & Weight Management">Fat Loss & Weight Management</option>
                    <option value="Hypertrophy & Muscle Gain">Hypertrophy & Muscle Gain</option>
                    <option value="Everyday Balanced Nutrition">Everyday Balanced Nutrition</option>
                    <option value="Diabetic-Friendly Meal Plan">Diabetic-Friendly Meal Plan</option>
                    <option value="Gut Health & Specialized Nutrition">Gut Health & Specialized Nutrition</option>
                    <option value="PCOS / PCOD Hormonal Care">PCOS / PCOD Hormonal Care</option>
                    <option value="Fully Bespoke Personalized Plan">Fully Bespoke Personalized Plan</option>
                    <option value="Restaurant / Food Business Consulting">Restaurant / Food Business Consulting</option>
                  </>
                )}
              </select>
            </div>

            {/* 6. Food Preferences / Concerns OR Project Details */}
            <div className="field full">
              <label htmlFor="cPreferences">
                <span className="form-num">6</span>
                {isBusiness ? "Project Requirements & Launch Timeline *" : "Any food preferences or health concerns? *"}
              </label>
              <textarea
                id="cPreferences"
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
                style={{ minHeight: "95px" }}
              ></textarea>
            </div>

            {/* Privacy Consent */}
            <div className="field full">
              <label className="consent">
                <input type="checkbox" defaultChecked required />
                <span>
                  {isBusiness
                    ? "I agree that my project details may be used to connect with Chef Radhey via WhatsApp."
                    : "I agree that my information may be used to connect with Chef Radhey via WhatsApp."}
                </span>
              </label>
            </div>

            {/* ONLY WhatsApp Button (Zero Submit Button) */}
            <div className="field full" style={{ marginTop: "4px" }}>
              <a
                href={`https://wa.me/971569754492?text=${contactWhatsAppMessage}`}
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
 </section>

 <SiteFooter />
 </div>
 );
}
