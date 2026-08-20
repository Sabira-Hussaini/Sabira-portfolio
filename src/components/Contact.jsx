import { useState } from "react";
import "./Contact.css";

function Contact() {
  const [status, setStatus] = useState("IDLE"); // IDLE | SUBMITTING | SUCCESS | ERROR

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("SUBMITTING");

    const form = e.target;
    const data = new FormData(form);

    try {
      const response = await fetch("https://formspree.io/f/xvgndrdy", {
        method: "POST",
        body: data,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        setStatus("SUCCESS");
        form.reset();
      } else {
        setStatus("ERROR");
      }
    } catch (error) {
      setStatus("ERROR");
    }
  };

  return (
    <section className="contact-section" id="contact">
      <div className="contact-container">

        <div className="contact-intro">
          <span className="section-label">GET IN TOUCH</span>

          <h2>
            Let's work
            <br />
            <strong>together.</strong>
          </h2>

          <p>
            Have a project in mind or want to work together?
            Feel free to send me a message. I'm always open to
            discussing new projects and opportunities.
          </p>

          <a
            href="mailto:sabirahussaini09@gmail.com"
            className="contact-email"
          >
            sabirahussaini09@gmail.com
          </a>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Your Name</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="What's your name?"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Your Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="What's your email?"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="message">Your Message</label>
            <textarea
              id="message"
              name="message"
              rows="5"
              placeholder="Tell me about your project..."
              required
            ></textarea>
          </div>

          <button 
            type="submit" 
            disabled={status === "SUBMITTING"}
            className="submit-btn"
          >
            {status === "SUBMITTING" ? "Sending..." : "Send Message →"}
          </button>

          {status === "SUCCESS" && (
            <p className="form-feedback success">
              ✓ Message sent successfully! I will get back to you soon.
            </p>
          )}

          {status === "ERROR" && (
            <p className="form-feedback error">
              ✕ Something went wrong. Please try emailing directly instead.
            </p>
          )}
        </form>

      </div>
    </section>
  );
}

export default Contact;