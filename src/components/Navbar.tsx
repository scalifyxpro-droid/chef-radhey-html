"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowUpRightIcon, WhatsAppIcon, CloseIcon } from "@/components/Icons";

interface NavbarProps {
  currentPath?: string;
}

export default function Navbar({ currentPath }: NavbarProps) {
  const pathname = usePathname() || currentPath || "/";
  const [mobileOpen, setMobileOpen] = useState(false);

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "Meal Plans", href: "/meal-plans" },
    { label: "Dishes", href: "/recipes" },
    { label: "Calculator", href: "/calculator" },
    { label: "About", href: "/about" },
  ];

  return (
    <header className="nav-header">
      <div className="container nav-inner">
        {/* Brand */}
        <Link href="/" className="brand" aria-label="Chef Radhey Home">
                    <span className="brand-info">
            <span className="brand-name">Chef Radhey</span>
            <span className="brand-sub">Nutrition & Consulting</span>
          </span>
        </Link>

        {/* Desktop Nav Links */}
        <nav className="desktop-nav-links" aria-label="Main Navigation">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`nav-link-item ${isActive ? "active" : ""}`}
              >
                {link.label}
                {isActive && <span className="active-dot" />}
              </Link>
            );
          })}
        </nav>

        {/* Right Header Action: Get Consultation CTA */}
        <div className="header-actions">
          <Link href="/contact" className="btn btn-primary nav-cta">
            <span>Get Consultation</span>
            <ArrowUpRightIcon size={14} />
          </Link>

          {/* Mobile Hamburger Button */}
          <button
            className="mobile-toggle"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? (
              <CloseIcon size={20} />
            ) : (
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileOpen && (
        <div className="mobile-drawer">
          <div className="container mobile-drawer-inner">
            <div className="mobile-nav-list">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`mobile-nav-item ${isActive ? "active" : ""}`}
                    onClick={() => setMobileOpen(false)}
                  >
                    <span>{link.label}</span>
                  </Link>
                );
              })}
            </div>

            <div className="mobile-drawer-cta">
              <Link
                href="/contact"
                className="btn btn-primary btn-block"
                onClick={() => setMobileOpen(false)}
              >
                <span>Get Consultation</span>
                <ArrowUpRightIcon size={15} />
              </Link>
              <a
                href="https://wa.me/971569754492?text=Hello%20Chef%20Radhey!%20I%20would%20like%20to%20book%20a%20consultation."
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-whatsapp btn-block"
                onClick={() => setMobileOpen(false)}
              >
                <WhatsAppIcon size={16} color="#fff" />
                <span>Chat on WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
