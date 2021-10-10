import React from 'react';
import {ApolloClient, InMemoryCache, ApolloProvider, useQuery} from '@apollo/client'
import './App.css';

function App() {
  //cache data is similar to state management but wtih apollo
  const client = new ApolloClient({
    cache: new InMemoryCache(),
    uri: "http://localhost:3001/graphql"
  })
  return (
    <div className="App">
      <ApolloProvider client={client}>
        <div>test test</div>
      </ApolloProvider>
    </div>
  );
}

export default App;
