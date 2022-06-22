import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: 'https://api-sa-east-1.graphcms.com/v2/cl4otpg86118601xsdz5jav6n/master',
  cache: new InMemoryCache()
})