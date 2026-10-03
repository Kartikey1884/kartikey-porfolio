import { useState } from "react";
import "./Contact.css";
import profile from "../../../data/profile";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  function handleChange(event) {
    const { name, value } = event.target;

    setFormData((currentData) => ({
      ...currentData,
      [name]: value,
    }));
  }

  function handleSubmit(event) {
  event.preventDefault();

  if (!formData.name.trim()) {
    setStatus("Please enter your name.");
    return;
  }

  if (!formData.email.trim()) {
    setStatus("Please enter your email.");
    return;
  }

  if (!formData.message.trim()) {
    setStatus("Please enter a message.");
    return;
  }

  console.log("Form submitted:", formData);

  setStatus("Thanks! Your message has been received.");

  setFormData({
    name: "",
    email: "",
    message: "",
  });
}
  return (
    <section id="contact" className="contact">
      <div className="contact__container">
        {/* Contact Information */}
        <div className="contact__info">
          <p className="contact__subtitle">Get in touch</p>

          <h2 className="contact__title">
            Let's Work Together
          </h2>

          <p className="contact__description">
            Have a project, opportunity, or idea you'd like
            to discuss? Feel free to reach out.
          </p>

          <div className="contact__details">
            <p>
              <strong>Email:</strong>{" "}
              <a href={`mailto:${profile.email}`}>
                {profile.email}
              </a>
            </p>

            <p>
              <strong>Phone:</strong>{" "}
              +91 8400064374
            </p>

            <p>
              <strong>Location:</strong> India
            </p>
          </div>

          {/* Social Links */}
          <div className="contact__socials">
            <a
              href={`mailto:${profile.email}`}
              className="contact__social-link"
            >
              Email
            </a>

            <a
              href={profile.social.github}
              target="_blank"
              rel="noopener noreferrer"
              className="contact__social-link"
            >
              GitHub
            </a>

            <a
              href={profile.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="contact__social-link"
            >
              LinkedIn
            </a>
          </div>
        </div>

        {/* Contact Form */}
        <form
          className="contact__form"
          onSubmit={handleSubmit}
        >
          <div className="contact__field">
            <label htmlFor="name">Name</label>

            <input
              id="name"
              name="name"
              type="text"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your name"
              required
            />
          </div>

          <div className="contact__field">
            <label htmlFor="email">Email</label>

            <input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              required
            />
          </div>

          <div className="contact__field">
            <label htmlFor="message">Message</label>

            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Write your message..."
              rows={6}
              required
            />
          </div>

          <button
            type="submit"
            className="contact__button"
          >
            Send Message
          </button>

          {status && (
            <p className="contact__status">
              {status}
            </p>
          )}
        </form>
      </div>
    </section>
  );
}

export default Contact;