import '../styles/globals.css'
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import client from '../apollo-client';

function MyApp({ Component, pageProps }) {
  return (
  <ApolloProvider client = {client}>
  <Component {...pageProps} />
  </ApolloProvider>
  )
}

export default MyApp
