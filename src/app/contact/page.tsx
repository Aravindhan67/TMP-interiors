import ScrollAwake from "@/components/ScrollAwake";

export default function Contact() {
  return (
    <div className="container" style={{ paddingTop: '100px', paddingBottom: '100px' }}>
      <h1 className="title text-center">Get In Touch</h1>
      <div className="divider mx-auto"></div>
      <p className="subtitle text-center mx-auto">
        Ready to transform your space? Contact JAC MediaLand today and let's start planning your dream project.
      </p>
      
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem', marginTop: '4rem' }}>
        <div>
          <ScrollAwake tag="h2" className="section-title">Contact Details</ScrollAwake>
          <div className="mt-4 text-large">
            <p><strong>Address:</strong><br/> 123 Demo Street, Example City, Country - 123456</p>
            <p className="mt-4"><strong>Email:</strong><br/> contact@jacmedialand.com</p>
            <p className="mt-4"><strong>Phone:</strong><br/> +1 (234) 567-8900</p>
          </div>
        </div>
        <div>
          <form style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <input type="text" placeholder="Your Name" style={{ padding: '1rem', border: '1px solid var(--border-color)', background: 'var(--background)', color: 'var(--foreground)', borderRadius: '4px' }} />
            <input type="email" placeholder="Your Email" style={{ padding: '1rem', border: '1px solid var(--border-color)', background: 'var(--background)', color: 'var(--foreground)', borderRadius: '4px' }} />
            <textarea placeholder="Your Message" rows={5} style={{ padding: '1rem', border: '1px solid var(--border-color)', background: 'var(--background)', color: 'var(--foreground)', borderRadius: '4px', resize: 'vertical' }}></textarea>
            <button type="submit" className="premium-btn" style={{ border: 'none', width: '100%' }}>Send Message</button>
          </form>
        </div>
      </div>
    </div>
  );
}
