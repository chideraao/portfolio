import React from "react";
import { StyledContact } from "./styles/Contact.styled";

function Contact({ pageRefs }) {
  return (
    <StyledContact
      id="contact"
      className="fullpage"
      ref={(el) => (pageRefs.current = { ...pageRefs.current, contact: el })}
    >
      Contact
    </StyledContact>
  );
}

export default Contact;
