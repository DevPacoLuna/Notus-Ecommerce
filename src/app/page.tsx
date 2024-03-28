import { gql } from "@apollo/client";
import createApolloClient from "./apollo-client";
import ReduxTest from "@/components/ReduxTest/ReduxTest";
import Form from "@/components/Form/Form";

export default async function Home() {
  const data = await getData();

  return (
    <main className="main">
      {data.props.categories.map(
        (category: { name: string }, index: number) => (
          <p key={index}>{category.name}</p>
        ),
      )}

      <hr />

      <ReduxTest />
      <Form />
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
