import type { Metadata } from "next";
import { Poppins, Playfair_Display } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700", "800"],
  subsets: ["latin"],
  variable: "--font-poppins",
});

const playfair = Playfair_Display({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-playfair",
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "JAC MediaLand",
  description: "Exquisite interior design for your spaces",
};

import Link from "next/link";
import Image from "next/image";
import ThemeToggle from "@/components/ThemeToggle";
import GlobalScrollAwake from "@/components/GlobalScrollAwake";
import MobileNav from "@/components/MobileNav";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${poppins.variable} ${playfair.variable}`} suppressHydrationWarning>
      <body>
        <div 
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100vw',
            height: '100vh',
            backgroundImage: 'url("/1778475141566.jpg")', 
            backgroundRepeat: 'repeat',
            backgroundSize: '500px', // Large size for the watermark
            opacity: 0.06, // Reduced opacity for a normal/subtle look
            pointerEvents: 'none', // Prevents the watermark from blocking clicks
            zIndex: 9999,
          }}
        />
        <GlobalScrollAwake />
        <header className="header">
          <div className="container header-container">
            <div className="logo">
              <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: '10px', textDecoration: 'none' }}>
                <h1 style={{ color: 'var(--accent)', margin: 0, textTransform: 'none' }}>JAC MediaLand</h1>
              </Link>
            </div>
            <nav className="nav">
              <ul>
                <li><Link href="/">Home</Link></li>
                <li><Link href="/about-us">About Us</Link></li>
                <li className="dropdown">
                  <Link href="/residential" style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                    Residential
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="m6 9 6 6 6-6"/></svg>
                  </Link>
                  <div className="dropdown-menu">
                    <Link href="/residential/modular-kitchen">Modular Kitchen</Link>
                    <Link href="/residential/living-room">Living Room</Link>
                    <Link href="/residential/bedroom">Bedroom</Link>
                    <Link href="/residential/pooja-room">Pooja Room</Link>
                    <Link href="/residential/study-room">Study Room</Link>
                    <Link href="/residential/dining-room">Dining Room</Link>
                    <Link href="/residential/restroom">Restroom</Link>
                    <Link href="/residential/kids-room">Kids Room</Link>
                    <Link href="/residential/home-theatre">Home Theatre</Link>
                    <Link href="/residential/home-gym">Home Gym</Link>
                    <Link href="/residential/false-ceiling">False Ceiling</Link>
                    <Link href="/residential/curtains-wallpapers">Curtains & Wall Papers</Link>
                  </div>
                </li>
                <li className="dropdown">
                  <Link href="/commercial" style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                    Commercial
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="m6 9 6 6 6-6"/></svg>
                  </Link>
                  <div className="dropdown-menu">
                    <Link href="/commercial/office">Office Workspaces</Link>
                    <Link href="/commercial/retail">Retail Stores</Link>
                    <Link href="/commercial/cafe-restaurant">Cafes & Restaurants</Link>
                    <Link href="/commercial/hotel">Hotels & Resorts</Link>
                    <Link href="/commercial/corporate">Corporate Suites</Link>
                    <Link href="/commercial/it-parks">IT Parks</Link>
                    <Link href="/commercial/coworking">Co-working Spaces</Link>
                    <Link href="/commercial/lounges">Lounges</Link>
                  </div>
                </li>
                <li><Link href="/#process">Our Process</Link></li>
                <li><Link href="/contact">Contact</Link></li>
              </ul>
              <ThemeToggle />
            </nav>
          </div>
        </header>

        {children}

        <footer id="contact" className="footer">
          <div className="container footer-grid">
            <div className="footer-col">
              <h3 className="footer-title">JAC MediaLand</h3>
              <p>Bringing your vision to life through innovative, elegant, and timeless interior design.</p>
            </div>
            <div className="footer-col">
              <h3 className="footer-title">Get in touch</h3>
              <p>123 Demo Street, Example City,<br/> Country - 123456</p>
              <p className="mt-2">Email: contact@jacmedialand.com</p>
              <p>Phone: +1 (234) 567-8900</p>
            </div>
            <div className="footer-col">
              <h3 className="footer-title">Follow us</h3>
              <div className="social-links">
                <a href="#" className="social-link">Facebook</a>
                <a href="#" className="social-link">Instagram</a>
                <a href="#" className="social-link">LinkedIn</a>
              </div>
            </div>
          </div>
          <div className="footer-bottom text-center">
            <p>&copy; {new Date().getFullYear()} JAC MediaLand. All rights reserved.</p>
          </div>
        </footer>

        {/* MOBILE BOTTOM NAV */}
        <MobileNav />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
