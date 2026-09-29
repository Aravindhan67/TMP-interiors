import ScrollAwake from "@/components/ScrollAwake";

export default function Contact() {
  return (
    <div className="container" style={{ paddingTop: '100px', paddingBottom: '100px' }}>
      <h1 className="title text-center">Get In Touch</h1>
      <div className="divider mx-auto"></div>
      <p className="subtitle text-center mx-auto">
        Ready to transform your space? Contact TPM Interiors today and let's start planning your dream project.
      </p>
      
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem', marginTop: '4rem' }}>
        <div>
          <ScrollAwake tag="h2" className="section-title">Contact Details</ScrollAwake>
          <div className="mt-4 text-large">
            <p><strong>Address:</strong><br/> No 143-B, Ngr Street, Vaval Thottam Kalapatti, Coimbatore - 641048</p>
            <p className="mt-4"><strong>Email:</strong><br/> contact@tpminteriors.com</p>
            <p className="mt-4"><strong>Phone:</strong><br/> +91 98765 43210</p>
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
