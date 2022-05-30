import React from "react";
import mainStyles from "../styles/Home.module.css";

function Main() {
  return (
    <div className={mainStyles.container}>
      <main className={mainStyles.main}>
        <div className={mainStyles.showcase}>
          <h1>Dera&apos;s awesome site is coming soon!</h1>
          <p>
            This website will be available soon. Thank you for your patience.
          </p>
          <div className={mainStyles.footer}>
            <span> &copy; Dera Okeke 2022</span>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Main;
