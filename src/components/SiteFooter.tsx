import React from "react";
import Link from "next/link";
import { WhatsAppIcon } from "@/components/Icons";

export default function SiteFooter() {
  return (
    <footer className="footer" style={{ padding: "40px 0 32px", borderTop: "1px solid rgba(255, 255, 255, 0.08)", background: "#112217" }}>
      <div className="container" style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
        <div style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: "20px"
        }}>
          {/* Brand */}
          <Link href="/" className="brand" style={{ display: "inline-flex", textDecoration: "none" }}>
            <span className="brand-info">
              <span className="brand-name" style={{ color: "#FFFFFF", fontSize: "17px", fontWeight: 700 }}>Chef Radhey</span>
              <span className="brand-sub" style={{ color: "#24A170", fontSize: "10.5px", letterSpacing: "0.04em", fontWeight: 550 }}>Culinary & Nutrition · Dubai</span>
            </span>
          </Link>

          {/* Minimal Navigation Links: Home, Meal Plans, Dishes, Calculator, About */}
          <nav style={{ display: "flex", gap: "22px", flexWrap: "wrap", fontSize: "13px" }}>
            <Link href="/" style={{ color: "#c6d4ca", textDecoration: "none", transition: "color 0.2s" }}>Home</Link>
            <Link href="/meal-plans" style={{ color: "#c6d4ca", textDecoration: "none", transition: "color 0.2s" }}>Meal Plans</Link>
            <Link href="/recipes" style={{ color: "#c6d4ca", textDecoration: "none", transition: "color 0.2s" }}>Dishes</Link>
            <Link href="/calculator" style={{ color: "#c6d4ca", textDecoration: "none", transition: "color 0.2s" }}>Calculator</Link>
            <Link href="/about" style={{ color: "#c6d4ca", textDecoration: "none", transition: "color 0.2s" }}>About</Link>
            <a
              href="https://wa.me/971569754492?text=Hello%20Chef%20Radhey!"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#24A170", textDecoration: "none", display: "inline-flex", alignItems: "center", gap: "6px", fontWeight: 600 }}
            >
              <WhatsAppIcon size={14} color="#24A170" />
              <span>WhatsApp Direct</span>
            </a>
          </nav>
        </div>

        {/* Bottom Minimal Line */}
        <div style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: "12px",
          paddingTop: "20px",
          borderTop: "1px solid rgba(255, 255, 255, 0.06)",
          fontSize: "12px",
          color: "#83998b"
        }}>
          <div>
            © 2026 Chef Radhey. All rights reserved. Dubai, United Arab Emirates.
          </div>
          <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
            <a href="mailto:enquiries@chefradhey.com" style={{ color: "#83998b", textDecoration: "none" }}>enquiries@chefradhey.com</a>
            <span>·</span>
            <span>Better Food. Better Living.</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
