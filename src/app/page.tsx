import { gql } from "@apollo/client";
import createApolloClient from "./apollo-client";

export default async function Home() {
  const data = await getData();

  return (
    <main>
      {data.props.categories.map(
        (category: { name: string }, index: number) => (
          <p key={index}>{category.name}</p>
        )
      )}
    </main>
  );
}

export async function getData() {
  const client = createApolloClient();
  const { data } = await client.query({
    query: gql`
      query allCategories {
        allCategories {
          name
        }
      }
    `,
  });

  return {
    props: {
      categories: data.allCategories,
    },
  };
}
