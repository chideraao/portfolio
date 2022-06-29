import React from "react";
import { StyledContact } from "./styles/Contact.styled";

function Contact({ pageRefs }) {
  return (
    <StyledContact
      id="contact"
      className="fullpage"
      ref={(el) => pageRefs.current.push(el)}
    >
      <h1>Contact</h1>
    </StyledContact>
  );
}

export default Contact;
