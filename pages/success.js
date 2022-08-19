import Link from "next/link";
import React from "react";
import { Check } from "../components/icons";
import { StyledSuccess } from "../components/styles/Success.styled";

function Success() {
  return (
    <StyledSuccess>
      <div className="success-main">
        <div className="svg-container">
          <Check />
        </div>
        <div className="success-content">
          <h1>Success!</h1>
          <p>
            Your message has been sent successfully and I&apos;ll be in touch
            soon.
          </p>

          <Link href="/">Back to Home</Link>
        </div>
      </div>
    </StyledSuccess>
  );
}

export default Success;
