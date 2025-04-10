import Head from "next/head";
import Main from "../components/Main";

export async function getStaticProps() {
  const query = `query Publication {
        publication(host: "blog.dhera.dev") {
          isTeam
          title
          posts(first: 10) {
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

  console.log("1,2,3");

  const response = await fetch("https://gql.hashnode.com/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ query }),
  });

  const { data } = await response.json();

  console.log("GraphQL Response:", JSON.stringify(data, null, 2));

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
