import React from "react";

export function WhatsAppIcon({ size = 18, color = "currentColor" }: { size?: number; color?: string }) {
 return (
 <svg width={size} height={size} viewBox="0 0 24 24" fill={color} aria-hidden="true">
 <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0012.04 2zm0 18.15c-1.48 0-2.93-.4-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.188 8.188 0 01-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24 2.2 0 4.27.86 5.82 2.42a8.181 8.181 0 012.41 5.83c0 4.54-3.7 8.23-8.22 8.23zm4.52-6.17c-.25-.12-1.47-.72-1.7-.81-.23-.08-.39-.12-.56.12-.17.25-.64.81-.79.97-.14.17-.29.19-.54.06-.25-.12-1.05-.39-2-1.23-.74-.66-1.23-1.47-1.38-1.72-.14-.25-.02-.38.11-.51.11-.11.25-.29.37-.43.12-.15.17-.25.25-.42.08-.17.04-.31-.02-.43-.06-.12-.56-1.34-.76-1.84-.2-.48-.4-.42-.56-.43h-.48c-.17 0-.43.06-.66.31-.22.25-.86.84-.86 2.05 0 1.21.88 2.38 1 2.55.12.17 1.74 2.65 4.21 3.72.59.25 1.05.41 1.41.52.59.19 1.13.16 1.56.1.48-.07 1.47-.6 1.68-1.18.21-.58.21-1.07.15-1.18-.07-.1-.23-.17-.48-.29z" />
 </svg>
 );
}

export function ArrowUpRightIcon({ size = 14 }: { size?: number }) {
 return (
 <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
 <line x1="7" y1="17" x2="17" y2="7" />
 <polyline points="7 7 17 7 17 17" />
 </svg>
 );
}

export function ArrowDownIcon({ size = 14 }: { size?: number }) {
 return (
 <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
 <line x1="12" y1="5" x2="12" y2="19" />
 <polyline points="19 12 12 19 5 12" />
 </svg>
 );
}

export function MailIcon({ size = 16 }: { size?: number }) {
 return (
 <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
 <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
 <polyline points="22,6 12,13 2,6" />
 </svg>
 );
}

export function PinIcon({ size = 16 }: { size?: number }) {
 return (
 <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
 <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
 <circle cx="12" cy="10" r="3" />
 </svg>
 );
}

export function SearchIcon({ size = 16 }: { size?: number }) {
 return (
 <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
 <circle cx="11" cy="11" r="8" />
 <line x1="21" y1="21" x2="16.65" y2="16.65" />
 </svg>
 );
}

export function CheckIcon({ size = 16 }: { size?: number }) {
 return (
 <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
 <polyline points="20 6 9 17 4 12" />
 </svg>
 );
}

export function CloseIcon({ size = 16 }: { size?: number }) {
 return (
 <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
 <line x1="18" y1="6" x2="6" y2="18" />
 <line x1="6" y1="6" x2="18" y2="18" />
 </svg>
 );
}

/* Category & Plan SVGs */
export function SaladIcon({ size = 24 }: { size?: number }) {
 return (
 <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
 <path d="M7 21h10a2 2 0 0 0 2-2c0-5.5-4.5-9-9-9s-9 3.5-9 9a2 2 0 0 0 2 2z" />
 <path d="M12 3v7" />
 <path d="M8 6c1.5 2 3.5 2 4 4" />
 <path d="M16 6c-1.5 2-3.5 2-4 4" />
 </svg>
 );
}

export function RestaurantIcon({ size = 24 }: { size?: number }) {
 return (
 <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
 <path d="M18 2v20" />
 <path d="M21 2v6a3 3 0 0 1-3 3v11" />
 <path d="M6 2v20" />
 <path d="M3 2v6a3 3 0 0 0 6 0V2" />
 </svg>
 );
}

export function FireIcon({ size = 20 }: { size?: number }) {
 return (
 <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
 <path d="M8.5 14.5A2.5 2.5 0 0 0 11 17c1.38 0 2.5-1.12 2.5-2.5 0-1.63-1.5-2.5-1.5-4 0-.83.67-1.5 1.5-1.5 2.76 0 5 2.24 5 5A6.5 6.5 0 0 1 12 20.5 6.5 6.5 0 0 1 5.5 14c0-3.3 2.1-6.2 5.5-8.5-.2 1.5.5 3 1.5 4 1-1 1.5-2.5 1.5-4 0-.8-.3-1.6-.7-2.3C16.8 4.7 18.5 8 18.5 12" />
 </svg>
 );
}

export function DumbbellIcon({ size = 20 }: { size?: number }) {
 return (
 <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
 <path d="M6.5 6.5h11" />
 <path d="M6.5 17.5h11" />
 <path d="M6 20v-2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v2" />
 <path d="M6 4v2a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4" />
 <line x1="12" y1="8" x2="12" y2="16" />
 </svg>
 );
}

export function HeartPulseIcon({ size = 20 }: { size?: number }) {
 return (
 <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
 <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
 <path d="M12 9v6" />
 <path d="M9 12h6" />
 </svg>
 );
}

export function LeafIcon({ size = 20 }: { size?: number }) {
 return (
 <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
 <path d="M11 20A7 7 0 0 1 4 13c0-4 3.5-7.5 7-9 3.5 1.5 7 5 7 9a7 7 0 0 1-7 7z" />
 <path d="M11 4v16" />
 </svg>
 );
}

export function ClockIcon({ size = 20 }: { size?: number }) {
 return (
 <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
 <circle cx="12" cy="12" r="10" />
 <polyline points="12 6 12 12 16 14" />
 </svg>
 );
}

export function ChefHatIcon({ size = 20 }: { size?: number }) {
 return (
 <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
 <path d="M6 13.8a4.5 4.5 0 0 1-.9-8.9 5.5 5.5 0 0 1 10.8-1 4.5 4.5 0 0 1 2.1 8.9" />
 <path d="M6 14v4a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-4" />
 <line x1="6" y1="17" x2="18" y2="17" />
 </svg>
 );
}

export function FlowerIcon({ size = 20 }: { size?: number }) {
 return (
 <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
 <circle cx="12" cy="12" r="3" />
 <path d="M12 3a3 3 0 0 0-3 3c0 2 3 6 3 6s3-4 3-6a3 3 0 0 0-3-3z" />
 <path d="M12 21a3 3 0 0 0 3-3c0-2-3-6-3-6s-3 4-3 6a3 3 0 0 0 3 3z" />
 <path d="M3 12a3 3 0 0 0 3 3c2 0 6-3 6-3s-4-3-6-3a3 3 0 0 0-3 3z" />
 <path d="M21 12a3 3 0 0 0-3-3c-2 0-6 3-6 3s4 3 6 3a3 3 0 0 0 3-3z" />
 </svg>
 );
}

export function ButterflyIcon({ size = 20 }: { size?: number }) {
 return (
 <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
 <path d="M12 3v18" />
 <path d="M12 7c-4-4-8-2-8 3 0 4 5 7 8 8" />
 <path d="M12 7c4-4 8-2 8 3 0 4-5 7-8 8" />
 </svg>
 );
}

export function BabyMotherIcon({ size = 20 }: { size?: number }) {
 return (
 <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
 <circle cx="12" cy="6" r="3" />
 <path d="M7 21v-4a5 5 0 0 1 10 0v4" />
 <path d="M12 13a4 4 0 0 1 4 4" />
 </svg>
 );
}

export function ScaleIcon({ size = 20 }: { size?: number }) {
 return (
 <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
 <path d="M12 3v18" />
 <path d="M3 7h18" />
 <path d="M6 7l-3 6h6l-3-6z" />
 <path d="M18 7l-3 6h6l-3-6z" />
 <path d="M8 21h8" />
 </svg>
 );
}
