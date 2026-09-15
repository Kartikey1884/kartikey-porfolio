import { useState } from "react";
import "./Contact.css";

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

    if (!formData.name || !formData.email || !formData.message) {
      setStatus("Please fill in all fields.");
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
        <div className="contact__info">
          <p className="contact__subtitle">
            Get in touch
          </p>

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
              Kartikeyrai8400@gmail.com
            </p>
            <p>
                <strong>Phone:</strong>{" "}
                +91 8400064374
            </p>

            <p>
              <strong>Location:</strong>{" "}
              India
            </p>
          </div>
        </div>

        <form
          className="contact__form"
          onSubmit={handleSubmit}
        >
          <div className="contact__field">
            <label htmlFor="name">
              Name
            </label>

            <input
              id="name"
              name="name"
              type="text"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your name"
            />
          </div>

          <div className="contact__field">
            <label htmlFor="email">
              Email
            </label>

            <input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
            />
          </div>

          <div className="contact__field">
            <label htmlFor="message">
              Message
            </label>

            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Write your message..."
              rows="6"
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