import "./Contact.css";

function Contact() {
  return (
    <div className="contact-bg">
      <div className="contact-card">
        <h1>Contact Us</h1>
        <p>We’d love to hear from you 💬</p>

        <form>
          <input type="text" placeholder="Your Name" />
          <input type="email" placeholder="Your Email" />
          <textarea placeholder="Your Message"></textarea>
          <button>Send Message</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
