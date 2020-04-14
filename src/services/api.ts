import ApolloClient from 'apollo-boost';

const pokemons = new ApolloClient({
  uri: 'https://graphql-pokemon.now.sh'
});

export default pokemons;
