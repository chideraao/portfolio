import React from "react";
import { StyledArticles } from "./styles/Articles.styled";
import { Open } from "./icons";

export default function Articles({ pageRefs, posts }) {
  return (
    <StyledArticles
      id="articles"
      className="fullpage"
      ref={(el) => pageRefs.current.push(el)}
    >
      <div className="container">
        <div className="articles-content">
          <div className="articles-heading">
            <h2>Latest Articles</h2>
          </div>
          <div className="articles-main">
            {posts.map(({ node }, idx) => (
              <div key={idx} className="article-item reveal card" tabIndex="0">
                <a href={node.url} target="_blank" rel="noreferrer">
                  <div>
                    <h3>{node.seo?.title || node.title}</h3>
                    <p>{node.seo?.description}</p>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "0.3rem",
                    }}
                  >
                    Read more <Open />
                  </div>
                </a>
              </div>
            ))}
          </div>
          <a
            href="https://blog.dhera.dev"
            target="_blank"
            rel="noreferrer"
            className="call-to-action fadeInBottom"
            aria-label="Check out Dera Okeke's course on Educative"
          >
            View all articles!
          </a>
        </div>
      </div>
    </StyledArticles>
  );
}
