import { gql, useLazyQuery, useQuery } from "@apollo/client";

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
  const [fetchPosts, { data : posts }] = useLazyQuery(GET_ALL_POST)

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
    <div className="container">
      <div className="row p-5">
      {data?.posts.map((item, i) => (
        <div key={i} className="col-md-4">
          <div className="card">
            <div className="card-body">
              <div className="card-title">
                <h4>{item.title}</h4>
              </div>
              <p>{item.description}</p>
            </div>
          </div>
        </div>
      ))}
      </div>
      <hr />
      <button className="btn-btn-raised btn-primary" onClick={() => fetchPosts()}>
        Fetch Posts
      </button>
      <hr />
      <div>
        {JSON.stringify(posts)}
      </div>
    </div>
  );
}

export default Home;
