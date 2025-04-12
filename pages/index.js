import Head from "next/head";
import Main from "../components/Main";

export async function getStaticProps() {
  const query = `query Publication {
        publication(host: "blog.dhera.dev") {
          isTeam
          title
          posts(first: 5) {
            edges {
              node {
                seo {
                  title
                  description
                }
                title
                url
              }
            }
          }
        }
      }
    `;

  const response = await fetch("https://gql.hashnode.com/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ query }),
  });

  const { data } = await response.json();

  return {
    props: {
      posts: data?.publication?.posts.edges,
    },
  };
}

export default function Home({ theme, setTheme, posts }) {
  return (
    <>
      <Head>
        <title>Dera Okeke</title>
      </Head>
      <Main theme={theme} setTheme={setTheme} posts={posts} />
    </>
  );
}
