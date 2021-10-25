import {
  ApolloClient, ApolloProvider, InMemoryCache
} from "@apollo/client";
import Home from "./Pages/Home";


const client = new ApolloClient({
  uri : "http://localhost:4000/graphql",
  cache: new InMemoryCache()
})

function App() {
  return (
    <ApolloProvider client={client}>
      <Home/>
    </ApolloProvider>
  );
}

export default App;
