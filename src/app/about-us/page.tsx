import ScrollAwake from "@/components/ScrollAwake";
import Image from "next/image";

export default function AboutUs() {
  return (
    <>
    <div className="container" style={{ padding: '100px 0 0 0', position: 'relative' }}>
      
      {/* Background Watermark Pattern (Optional CSS) */}
      <div className="about-watermark"></div>

      <div className="about-grid">
        
        {/* LEFT COLUMN - CONTENT */}
        <div className="about-content-left" style={{ position: 'relative', zIndex: 1 }}>
          <ScrollAwake tag="h1" style={{ fontSize: '3.5rem', fontWeight: 800, marginBottom: '0.5rem', color: 'var(--foreground)' }}>
            About Us
          </ScrollAwake>
          
          <ScrollAwake style={{ width: '80px', height: '4px', backgroundColor: 'var(--accent)', marginBottom: '2rem' }} />
          
          <ScrollAwake tag="h3" style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '1.5rem', color: 'var(--foreground)' }}>
            “Your Space, Our Signature Touch.”
          </ScrollAwake>
          
          <ScrollAwake tag="p" style={{ fontSize: '1.05rem', color: 'var(--text-muted)', marginBottom: '2.5rem', lineHeight: '1.8' }}>
            At JAC MediaLand, we believe that great design has the power to transform lives. Since our inception, we've been dedicated to creating exceptional spaces that not only reflect our clients' personalities but also enhance their quality of life. With a passion for creativity, a commitment to quality, and a focus on customer satisfaction, we've established ourselves as one of the leading interior design firms in Coimbatore.
          </ScrollAwake>
          
          {/* STATS CARD */}
          <ScrollAwake className="about-stats-card">
            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginBottom: '1rem' }}>
              <path d="M12 2v20"></path>
              <path d="M21 21L12 2 3 21"></path>
              <path d="M7.5 13.5L12 9l4.5 4.5"></path>
            </svg>
            <h4 style={{ fontSize: '1.1rem', fontWeight: 600 }}>"100+ Completed Projects"</h4>
          </ScrollAwake>

          <ScrollAwake tag="h4" style={{ fontSize: '1.2rem', fontWeight: 700, marginBottom: '0.5rem', color: 'var(--foreground)' }}>
            Get in Touch
          </ScrollAwake>
          
          <ScrollAwake tag="p" style={{ fontSize: '1rem', color: 'var(--text-muted)', lineHeight: '1.7' }}>
            Whether you're looking to redesign your home, office, or retail space, we invite you to get in touch with us to discuss your project. Our team is here to listen to your ideas, answer your questions, and guide you through the design process every step of the way. Together, we'll create a space that exceeds your expectations and brings your vision to life.
          </ScrollAwake>
        </div>

        {/* RIGHT COLUMN - IMAGE */}
        <ScrollAwake className="about-image-right">
          <Image 
            src="/living_new.jpg" 
            alt="JAC MediaLand Signature Space" 
            fill 
            style={{ objectFit: 'cover', objectPosition: 'center' }} 
          />
        </ScrollAwake>
        
      </div>

      {/* WHY US SECTION */}
      <div className="why-us-section" style={{ marginTop: '8rem' }}>
        <ScrollAwake tag="h2" style={{ textAlign: 'center', fontSize: '2.5rem', fontWeight: 800, marginBottom: '3rem', color: 'var(--foreground)' }}>
          WHY US
        </ScrollAwake>
        
        <div className="why-us-grid">
          <ScrollAwake className="why-us-card">
            <div className="why-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v20"></path><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg>
            </div>
            <span>Bespoke Design</span>
          </ScrollAwake>
          
          <ScrollAwake className="why-us-card delay-1">
            <div className="why-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
            </div>
            <span>Expert Team</span>
          </ScrollAwake>
          
          <ScrollAwake className="why-us-card delay-2">
            <div className="why-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
            </div>
            <span>Premium Quality</span>
          </ScrollAwake>
          
          <ScrollAwake className="why-us-card delay-3">
            <div className="why-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"></path></svg>
            </div>
            <span>Client Centric</span>
          </ScrollAwake>
        </div>
      </div>

      {/* KEY FEATURES SECTION */}
      <div className="features-section" style={{ marginTop: '8rem' }}>
        <ScrollAwake tag="h2" style={{ fontSize: '2.5rem', fontWeight: 800, marginBottom: '3rem', color: 'var(--foreground)' }}>
          Key Features
        </ScrollAwake>
        
        <div className="features-grid">
          <ScrollAwake className="feature-card">
            <div className="feature-header">
              <div className="check-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
              </div>
              <h3>Our Mission</h3>
            </div>
            <p>To create exceptional spaces that elevate everyday living. We aim to inspire our clients by delivering innovative, functional, and aesthetically pleasing designs that enhance their living and working experience. We strive for excellence in every project we undertake.</p>
          </ScrollAwake>

          <ScrollAwake className="feature-card delay-1">
            <div className="feature-header">
              <div className="check-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
              </div>
              <h3>Our Approach</h3>
            </div>
            <p>At JAC MediaLand, we believe in a collaborative and client-centric approach to design. We work closely with you to understand your exact vision, requirements, and budget constraints, turning your dreams into a stunning reality through careful planning.</p>
          </ScrollAwake>

          <ScrollAwake className="feature-card delay-2">
            <div className="feature-header">
              <div className="check-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
              </div>
              <h3>Our Team</h3>
            </div>
            <p>Our team comprises a dynamic group of highly skilled professionals, including principal designers, architects, and project managers. We bring diverse expertise together seamlessly to deliver cohesive and spectacular results on time.</p>
          </ScrollAwake>

          <ScrollAwake className="feature-card delay-3">
            <div className="feature-header">
              <div className="check-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
              </div>
              <h3>Our Values</h3>
            </div>
            <p>Integrity, creativity, and excellence are at the core of everything we do. We are committed to maintaining the highest standards of professionalism and honesty in all our interactions with clients, suppliers, and partners.</p>
          </ScrollAwake>
        </div>
      </div>

    </div>
    
    {/* FULL WIDTH CTA BANNER */}
    <div className="about-cta-banner">
      <div className="container" style={{ textAlign: 'center' }}>
        <ScrollAwake tag="h2" style={{ fontSize: '2.5rem', fontWeight: 700, marginBottom: '2rem' }}>
          Get in touch with<br/>JAC MediaLand today.
        </ScrollAwake>
        <ScrollAwake>
          <a href="tel:+919999999999" className="phone-pill-btn">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
            +91 99999 99999
          </a>
        </ScrollAwake>
      </div>
    </div>
    
    </>
  );
}
