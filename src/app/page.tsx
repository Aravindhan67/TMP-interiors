import ScrollAwake from "@/components/ScrollAwake";
import Link from "next/link";
import ImageSlider from "@/components/ImageSlider";
import SplitText from "@/components/SplitText";

export default function Home() {
  return (
    <>
      <main className="main-content">


        {/* ABOUT SECTION WITH ICON CARDS */}
        <section id="about" className="section bg-light">
          <div className="container about-split-layout">
            <div className="about-text-content">
              <SplitText
                tag="h2"
                text="Welcome to"
                className="welcome-heading"
                delay={50}
                duration={0.8}
                textAlign="left"
              />
              <br />
              <SplitText
                tag="h3"
                text="TPM Interiors"
                className="brand-heading"
                delay={50}
                duration={0.8}
                textAlign="left"
              />
              
              <p className="fade-in-up delay-2">We believe in the transformative power of design. Your space is more than just walls and furniture; it's a reflection of your personality, lifestyle, and aspirations. As one of the premier interior design firms in <strong>Coimbatore</strong>, we are here to turn your vision into reality.</p>
              
              <h4 className="fade-in-up delay-2" style={{ fontSize: '1.5rem', fontWeight: 800, marginTop: '2.5rem', marginBottom: '1rem' }}>Crafting Spaces, Creating Memories</h4>
              <p className="fade-in-up delay-3">Step into a world of creativity and innovation, where every corner tells a story and every detail reflects our dedication to excellence. Whether you're looking to revamp your home or elevate your commercial space, our team of experienced designers is here to guide you through every step of the process.</p>
              
              <div className="fade-in-up delay-3" style={{ marginTop: '2.5rem' }}>
                <Link href="/about-us" className="premium-btn">KNOW MORE</Link>
              </div>
            </div>
            
            <ScrollAwake className="about-image-slider">
              <ImageSlider />
            </ScrollAwake>
          </div>
          
          <div className="container">
            <div className="section-header text-center" style={{ marginTop: '2rem' }}>
              <ScrollAwake tag="h2" className="section-title">Our Services</ScrollAwake>
              <div className="divider"></div>
            </div>

            <div className="service-cards-container">
              <div className="service-icon-card">
                <div className="service-icon-wrapper">
                  <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                    <polyline points="9 22 9 12 15 12 15 22"></polyline>
                  </svg>
                </div>
                <ScrollAwake style={{ width: '100%' }}>
                  <Link href="/residential" className="service-pill-btn">
                    Residential Interior
                  </Link>
                </ScrollAwake>
              </div>

              <div className="service-icon-card">
                <div className="service-icon-wrapper">
                  <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="m2 7 4.41-4.41A2 2 0 0 1 7.83 2h8.34a2 2 0 0 1 1.42.59L22 7"></path>
                    <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"></path>
                    <path d="M15 22v-4a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2v4"></path>
                    <path d="M2 7h20"></path>
                    <path d="M22 7v3a2 2 0 0 1-2 2v0a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 16 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 12 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 8 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 4 12v0a2 2 0 0 1-2-2V7"></path>
                  </svg>
                </div>
                <ScrollAwake style={{ width: '100%' }}>
                  <Link href="/commercial" className="service-pill-btn alt">
                    Commercial Interior
                  </Link>
                </ScrollAwake>
              </div>

              <div className="service-icon-card">
                <div className="service-icon-wrapper">
                  <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 2l-2 2m-7.61 7.61a5.5 5.5 0 1 1-7.778 7.778 5.5 5.5 0 0 1 7.777-7.777zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3m-3.5 3.5L19 4"></path>
                  </svg>
                </div>
                <ScrollAwake style={{ width: '100%' }}>
                  <Link href="#contact" className="service-pill-btn">
                    Residential Sales
                  </Link>
                </ScrollAwake>
              </div>

              <div className="service-icon-card">
                <div className="service-icon-wrapper">
                  <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
                    <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
                  </svg>
                </div>
                <ScrollAwake style={{ width: '100%' }}>
                  <Link href="#contact" className="service-pill-btn alt">
                    Commercial Sales
                  </Link>
                </ScrollAwake>
              </div>
            </div>
          </div>
        </section>

        {/* OUR PROCESS SECTION */}
        <section id="process" className="section">
          <div className="container">
            <div className="section-header text-center">
              <ScrollAwake tag="h2" className="section-title">Our Process</ScrollAwake>
              <p className="section-subtitle">Here's a detailed description of how our working process unfolds:</p>
              <div className="divider"></div>
            </div>
            
            <div className="process-grid">
              <div className="process-card">
                <div className="process-number">01</div>
                <h3 className="process-title">Consultation</h3>
                <p>We begin with a thorough consultation to understand your needs, preferences, and budget. This initial step ensures we're on the exact same page.</p>
              </div>
              <div className="process-card">
                <div className="process-number">02</div>
                <h3 className="process-title">Design Concept</h3>
                <p>Based on the information gathered during the consultation, our team develops initial design concepts and mood boards tailored to your vision.</p>
              </div>
              <div className="process-card">
                <div className="process-number">03</div>
                <h3 className="process-title">Execution</h3>
                <p>Once the design concept is approved, we move forward with the execution phase. Our skilled craftsmen and contractors bring the vision to life.</p>
              </div>
              <div className="process-card">
                <div className="process-number">04</div>
                <h3 className="process-title">Final Walkthrough</h3>
                <p>Upon completion of the project, we conduct a final walkthrough to ensure that every detail meets your expectations and our high standards.</p>
              </div>
            </div>
          </div>
        </section>

        {/* SERVICES SECTION */}
        <section id="services" className="section bg-light">
          <div className="container">
            <div className="services-grid">
              <div className="service-card" id="residential">
                <ScrollAwake className="service-image-placeholder" style={{background: "url('/living_new.jpg') center/cover no-repeat"}} />
                <div className="service-content">
                  <ScrollAwake tag="h2" className="section-title">RESIDENTIAL</ScrollAwake>
                  <p>Turn your house into a home with our residential interior design services. Whether you're looking to revamp your Modular Kitchen, Living Room, Bedroom, Pooja Room, or Home Theatre, our team specializes in creating spaces that resonate with your personal style.</p>
                  <Link href="/residential" className="service-pill-btn" style={{ width: 'fit-content', padding: '1rem 2rem', marginTop: '1.5rem' }}>Explore Residential</Link>
                </div>
              </div>
              <div className="service-card reverse" id="commercial">
                <ScrollAwake className="service-image-placeholder" style={{background: "url('/office_new.jpg') center/cover no-repeat"}} />
                <div className="service-content">
                  <ScrollAwake tag="h2" className="section-title">COMMERCIAL</ScrollAwake>
                  <p>Elevate your business environment with our professional commercial interior design solutions. We cater to Retail Showrooms, Office Rooms, Workstations, Restaurants, and Coffee Shops to boost productivity and leave a lasting impression on your clients.</p>
                  <Link href="/commercial" className="service-pill-btn" style={{ width: 'fit-content', padding: '1rem 2rem', marginTop: '1.5rem' }}>Explore Commercial</Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* TESTIMONIALS SECTION */}
        <section id="testimonials" className="section testimonials-section">
          <div className="container text-center">
            <ScrollAwake tag="h2" className="section-title">Testimonials</ScrollAwake>
            <p className="section-subtitle">Where we proudly present the experiences of our valued clients.</p>
            <div className="divider mx-auto"></div>
            
            <div className="testimonial-card">
              <p className="testimonial-text">"We take pride in our commitment to excellence and client satisfaction. But don't just take our word for it—our clients' spaces speak for themselves. The attention to detail from TPM interiors transformed our home completely."</p>
              <h4 className="testimonial-author">- Happy Client</h4>
            </div>
          </div>
        </section>

        {/* CTA SECTION */}
        <section className="section cta-section">
          <div className="container text-center">
            <h2 className="title">Get in touch with TPM interiors today.</h2>
            <p className="subtitle mx-auto">Ready to start your design journey? Let's create something beautiful together.</p>
            <a href="#contact" className="premium-btn">Contact Us Now</a>
          </div>
        </section>
      </main>
    </>
  );
}
