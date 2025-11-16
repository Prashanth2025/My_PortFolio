import React, { useState } from "react";
import "./contact.css";

function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.id]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      setSubmitted(true);
      setLoading(false);
      setFormData({ name: "", email: "", message: "" });
      setTimeout(() => setSubmitted(false), 3000);
    }, 1500);
  };

  return (
    <section
      className="contact-section py-5 bg-white"
      aria-labelledby="contact-heading"
    >
      <div className="container">
        <h2 id="contact-heading" className="text-center fw-bold mb-5">
          📬 Contact Me
        </h2>

        <form
          onSubmit={handleSubmit}
          className="mx-auto bg-light p-4 rounded shadow-sm contact-form"
          style={{ maxWidth: "600px" }}
          role="form"
        >
          {/* Name */}
          <div className="form-floating mb-3">
            <input
              type="text"
              id="name"
              className="form-control"
              placeholder="Your name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <label htmlFor="name">Name</label>
          </div>

          {/* Email */}
          <div className="form-floating mb-3">
            <input
              type="email"
              id="email"
              className="form-control"
              placeholder="Your email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <label htmlFor="email">Email</label>
          </div>

          {/* Message */}
          <div className="form-floating mb-4">
            <textarea
              id="message"
              className="form-control"
              placeholder="Your message"
              style={{ height: "150px" }}
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
            <label htmlFor="message">Message</label>
          </div>

          {/* Submit Button */}
          <div className="text-end">
            <button type="submit" className="btn btn-send" disabled={loading}>
              {loading ? (
                <>
                  <span
                    className="spinner-border spinner-border-sm me-2"
                    role="status"
                    aria-hidden="true"
                  ></span>
                  Sending...
                </>
              ) : (
                <>
                  <i className="bi bi-send-fill me-1"></i>Send
                </>
              )}
            </button>
          </div>

          {/* Success Message */}
          {submitted && (
            <div className="mt-4 text-success text-center fade-in">
              <i className="bi bi-check-circle-fill me-2"></i>
              Message sent successfully!
            </div>
          )}
        </form>
      </div>
    </section>
  );
}

export default Contact;