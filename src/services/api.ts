import ApolloClient from 'apollo-boost';

const pokemons = new ApolloClient({
  uri: 'https://graphql-pokemon2.vercel.app'
});

export default pokemons;
