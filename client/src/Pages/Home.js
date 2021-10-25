import { gql, useQuery } from "@apollo/client";

const GET_ALL_POST = gql`
  {
    posts {
      id
      title
      description
    }
  }
`;

function Home() {
  const { data } = useQuery(GET_ALL_POST)

  //Old GRAPHQL DATA FETCHING METHOD
  //   client
  //     .query({
  //       query: gql`
  //         {
  //           posts {
  //             id
  //             title
  //             description
  //           }
  //         }
  //       `,
  //     })
  //     .then((result) => setPost(result.data.posts));

  return (
    <div>
      {data?.posts.map((item) => (
        <>
          <h1>{item.title}</h1>
          <p>{item.description}</p>
        </>
      ))}
    </div>
  );
}

export default Home;
