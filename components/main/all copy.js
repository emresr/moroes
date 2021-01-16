import { ApolloClient, gql, InMemoryCache } from "@apollo/client";
import { useState } from "react";

export default function All(chars) {
  console.log(chars);
  const intialState = chars;

  const [characters, setCharacters] = useState(intialState.characters);

  return (
    <div className="w-full overflow-hidden sm:w-2/3">
      <div className="ml-40 mt-5">
        <h1> All Posts</h1>

        <div className="w-5/6">
          <div className="border-solid rounded-md  border-2 my-2 flex">
            <div className="w-9">
              <p>1</p>
            </div>
            <div className="max-w w-full">
              <h2>Series Posted by emre 2 hours ago</h2>
              <h2 className="font-bold text-2xl"> Best crime series</h2>
              <p className="ml-3  "> Maybe line of duty </p>
              <div className="float-right">
                <p className=" ">12 min</p>
              </div>
            </div>
          </div>
          <div className="border-solid border-2 my-2 ">
            <p>1</p>
            <h2> Best crime series</h2>
            <p> Maybe line of duty </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const client = new ApolloClient({
    uri: "https://rickandmortyapi.com/graphql/",
    cache: new InMemoryCache(),
  });
  const { data } = await client.query({
    query: gql`
      query {
        characters(page: 1) {
          info {
            count
            pages
          }
          results {
            name
            id
            location {
              name
              id
            }
            image
            origin {
              name
              id
            }
            episode {
              id
              episode
              air_date
            }
          }
        }
      }
    `,
  });

  return {
    props: {
      chars: data.characters.results,
    },
  };
}