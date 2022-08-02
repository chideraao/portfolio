import React from "react";
import { StyledContact } from "./styles/Contact.styled";

function Contact({ pageRefs }) {
  return (
    <StyledContact
      id="contact"
      className="fullpage"
      ref={(el) => pageRefs.current.push(el)}
    >
      <div className="contacts-content">
        <h2>Get in touch!</h2>
        <p>
          Got a question or a project?{" "}
          <a
            href="mailto:okekechidera97@gmailcom"
            target="_blank"
            rel="noreferrer"
          >
            Send an email directly
          </a>{" "}
          or fill the form below
        </p>
      </div>
      <form name="contact" action="/success" method="POST" data-netlify="true">
        <input type="hidden" name="form-name" value="contact" />
        <div
          className=""
          style={{ display: "flex", justifyContent: "space-between" }}
        >
          <div className="input-container">
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Enter your name"
              required
            />
            <label htmlFor="yourname">
              <span>Name</span>
            </label>
          </div>
          <div className="input-container">
            <input
              type="email"
              name="email"
              id="youremail"
              required
              placeholder="Enter your email"
            />
            <label htmlFor="youremail">
              <span>Email</span>
            </label>
          </div>
        </div>
        <div className="input-container">
          <textarea
            name="message"
            id="yourmessage"
            placeholder="Leave a message"
            required
          ></textarea>
          <label htmlFor="yourmessage">
            <span>Message</span>
          </label>
        </div>

        <p>
          <button type="submit"> Let&apos;s talk. 🤺</button>
        </p>
      </form>
    </StyledContact>
  );
}

export default Contact;
