import { GraphQLClient } from 'graphql-request';

const url = 'https://saintlaurentduvar.stepzen.net/api/lumbering-sasquatch/__graphql';

const apiKey = process.env.EXPO_PUBLIC_GRAPHQL_PUBLIC_KEY;

const client = new GraphQLClient(url, {
  headers: {
    Authorization: `apikey ${apiKey}`,
  },
});

export default client;
