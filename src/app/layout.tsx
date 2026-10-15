import type { Metadata, Viewport } from "next";
import "./globals.css";

export const viewport: Viewport = {
 width: "device-width",
 initialScale: 1,
};

export const metadata: Metadata = {
 title: "Chef Radhey | Healthy Meal Plans & Restaurant Setup Consulting · Dubai UAE",
 description: "18+ years of culinary excellence in Dubai. Specialized in healthy meal plan delivery (Fat Loss, Muscle Gain, PCOS, Diabetes) and healthy restaurant setup & menu consulting.",
 keywords: [
 "healthy meal plans Dubai",
 "meal plan delivery Dubai",
 "high-protein muscle gain meal plan",
 "healthy fat loss meal plan",
 "balanced nutrition meal plan",
 "restaurant setup Dubai",
 "healthy menu development",
 "PCOS meal plan",
 "diabetes-friendly meal plan",
 "nutritionist consultation Dubai",
 "Chef Radhey"
 ],
 authors: [{ name: "Chef Radhey" }],
 icons: {
 icon: [
 { url: "/favicon.svg", type: "image/svg+xml" },
 { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
 { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
 ],
 apple: [
 { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
 ],
 },
 manifest: "/site.webmanifest",
};

export default function RootLayout({
 children,
}: Readonly<{
 children: React.ReactNode;
}>) {
 return (
 <html lang="en">
 <head>
 <link rel="preconnect" href="https://fonts.googleapis.com" />
 <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
 <link
 href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap"
 rel="stylesheet"
 />
 </head>
 <body>{children}</body>
 </html>
 );
}
