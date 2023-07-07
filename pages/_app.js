import '../styles/globals.css'
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import client from '../apollo-client';
import { AuthContext, AuthProvider } from 'components/Login/AuthContext';

function MyApp({ Component, pageProps }) {
  return (
    <AuthProvider>
      <ApolloProvider client = {client}>
        <Component {...pageProps} />
      </ApolloProvider>
    </AuthProvider>
  )
}

export default MyApp
