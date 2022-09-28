import { ApolloClient, InMemoryCache } from "@apollo/client";

// const client = new ApolloClient({
//     uri: "http://localhost:3000/api/graphql",
//     cache: new InMemoryCache(),
// });


// OLD CODE //
const client = new ApolloClient({
    uri: "https://countries.trevorblades.com",
    cache: new InMemoryCache(),
});

export default client;