import React from "react";
import { StyledArticles } from "./styles/Articles.styled";

export default function Articles({ posts }) {
  console.log(posts);
  return (
    <StyledArticles
      id="articles"
      className="fullpage"
      //   ref={(el) => pageRefs.current.push(el)}
    >
      <div className="container">
        <div className="articles-content">
          <div className="articles-heading">
            <h2>Latest Articles</h2>
          </div>
          <div className="articles-main"></div>
        </div>
      </div>
    </StyledArticles>
  );
}
