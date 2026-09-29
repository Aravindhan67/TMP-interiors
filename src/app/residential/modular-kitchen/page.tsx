import ScrollAwake from "@/components/ScrollAwake";
import Image from "next/image";
import { CheckCircle2, PhoneCall } from "lucide-react";

export default function ModularKitchen() {
  return (
    <div className="container" style={{ paddingTop: '120px', paddingBottom: '100px' }}>
      
      {/* TOP SECTION */}
      <div className="product-split-layout">
        <div className="product-content">
          <ScrollAwake>
            <h1 className="brand-heading" style={{ fontSize: '3rem', marginBottom: '1.5rem', display: 'inline-block' }}>Modular Kitchen</h1>
          </ScrollAwake>
          
          <ScrollAwake className="delay-1">
            <p style={{ marginBottom: '1.5rem', color: 'var(--text-muted)' }}>
              <strong style={{ color: 'var(--foreground)' }}>At JAC MediaLand,</strong> we understand that the kitchen is the heart of the home, and our modular kitchen designs are crafted to enhance both functionality and aesthetics.
            </p>
            <h3 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: '0.5rem', color: 'var(--foreground)' }}>Our Approach:</h3>
            <p style={{ marginBottom: '2rem', color: 'var(--text-muted)' }}>
              We begin by understanding your specific requirements, considering factors such as available space, workflow preferences, and aesthetic preferences. Our experienced designers then work closely with you to create a customized modular kitchen design that reflects your personal style and meets your practical needs.
            </p>
            
            <a href="tel:+919876543210" className="whatsapp-btn">
              <PhoneCall size={20} />
              +1 (234) 567-8900
            </a>
          </ScrollAwake>
        </div>
        
        <div className="product-image-wrapper">
          <ScrollAwake className="delay-2">
            <Image 
              src="/kitchen_new.jpg" 
              alt="Modular Kitchen Design" 
              width={800} 
              height={600} 
              className="product-image" 
            />
          </ScrollAwake>
        </div>
      </div>

      {/* BOTTOM SECTION */}
      <div className="product-split-layout" style={{ marginTop: '6rem', alignItems: 'flex-start' }}>
        
        {/* Left Column */}
        <div className="product-features-column">
          <ScrollAwake>
            <h2 className="brand-heading" style={{ fontSize: '2.5rem', marginBottom: '2rem', display: 'inline-block', borderBottom: 'none' }}>Key Features</h2>
          </ScrollAwake>
          
          <ScrollAwake className="delay-1">
            <div className="product-feature-card">
              <CheckCircle2 className="feature-check-icon" size={28} fill="#4a2b16" color="#ffffff" />
              <div>
                <h3 className="feature-title">Customized Layout:</h3>
                <p>We tailor the layout of your modular kitchen to optimize space utilization and ensure efficient workflow, whether you prefer a traditional L-shaped design, a sleek U-shaped layout, or a spacious island configuration.</p>
              </div>
            </div>
          </ScrollAwake>
          
          <ScrollAwake className="delay-2">
            <div className="product-feature-card" style={{ marginTop: '1.5rem' }}>
              <CheckCircle2 className="feature-check-icon" size={28} fill="#4a2b16" color="#ffffff" />
              <div>
                <h3 className="feature-title">Quality Materials:</h3>
                <p>We use high-quality materials and finishes for our modular kitchen designs, ensuring durability, longevity, and easy maintenance.</p>
              </div>
            </div>
          </ScrollAwake>
        </div>
        
        {/* Right Column */}
        <div className="product-features-column" style={{ marginTop: '4rem' }}>
          <ScrollAwake className="delay-1">
            <div className="product-feature-card">
              <CheckCircle2 className="feature-check-icon" size={28} fill="#4a2b16" color="#ffffff" />
              <div>
                <h3 className="feature-title">Smart Storage Solutions:</h3>
                <p>Our designs incorporate smart storage solutions such as pull-out drawers, corner carousels, and vertical cabinets to maximize storage space and keep your kitchen organized.</p>
              </div>
            </div>
          </ScrollAwake>
          
          <ScrollAwake className="delay-2">
            <div className="product-feature-card" style={{ marginTop: '1.5rem' }}>
              <CheckCircle2 className="feature-check-icon" size={28} fill="#4a2b16" color="#ffffff" />
              <div>
                <h3 className="feature-title">Stylish Finishes:</h3>
                <p>From sleek and modern to classic and timeless, we offer a wide range of finishes and materials to suit your taste and complement your home's interior design.</p>
              </div>
            </div>
          </ScrollAwake>
        </div>

      </div>
    </div>
  );
}
