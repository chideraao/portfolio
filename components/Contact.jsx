import React from "react";
import { StyledContact } from "./styles/Contact.styled";

function Contact({ pageRefs }) {
  return (
    <StyledContact
      id="contact"
      className="fullpage"
      ref={(el) => pageRefs.current.push(el)}
    >
      <div className="container">
        <div className="contacts-content">
          <h2>Get in touch!</h2>
          <p>
            Got a question or a proposal?{" "}
            <a
              href="mailto:okekechidera97@gmailcom"
              target="_blank"
              rel="noreferrer"
            >
              Send an email directly
            </a>{" "}
            or fill the form below.
          </p>
        </div>
        <form
          name="contact"
          action="/success"
          method="POST"
          data-netlify="true"
        >
          <input type="hidden" name="form-name" value="contact" />
          <div
            className=""
            style={{
              display: "flex",
              justifyContent: "space-between",
              gap: "3rem",
            }}
          >
            <div className="input-container">
              <input
                type="text"
                name="name"
                id="name"
                autoComplete="off"
                required
                aria-required="true"
              />
              <label htmlFor="name">
                <span>Enter Your Name</span>
              </label>
            </div>
            <div className="input-container">
              <input
                type="email"
                name="email"
                id="email"
                autoComplete="off"
                required
                aria-required="true"
              />
              <label htmlFor="email">
                <span>Enter Your Email</span>
              </label>
            </div>
          </div>
          <div className="input-container">
            <textarea
              name="message"
              id="message"
              rows="10"
              cols="50"
              style={{ height: "4rem", overflow: "auto" }}
              required
              aria-required="true"
            ></textarea>
            <label htmlFor="message">
              <span style={{ bottom: "60px" }}>Enter Your Message</span>
            </label>
          </div>
          <div style={{ textAlign: "center" }}>
            <button type="submit"> Let&apos;s talk. 🤺</button>
          </div>
        </form>
      </div>
    </StyledContact>
  );
}

export default Contact;
