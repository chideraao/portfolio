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
  }`;

  try {
    const response = await fetch("https://gql.hashnode.com/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ query }),
    });

    if (!response.ok) {
      console.error(`GraphQL API responded with status ${response.status}`);
      return { props: { posts: [] } };
    }

    const json = await response.json();

    if (json.errors) {
      console.error("GraphQL errors:", json.errors);
      return { props: { posts: [] } };
    }

    const posts = json?.data?.publication?.posts?.edges || [];

    return {
      props: { posts },
    };
  } catch (error) {
    console.error("Error fetching:", error);
    return {
      props: { posts: [] },
    };
  }
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
