import React from 'react';
import {ApolloClient, InMemoryCache, ApolloProvider} from '@apollo/client'
import './App.css';
import DisplayData from '../DisplayData';

function App() {
  //?cache data is similar to state management but wtih apollo
  const client = new ApolloClient({
    cache: new InMemoryCache(),
    uri: "http://localhost:4000/"
  })
  return (
    <ApolloProvider client={client}>
        <div className="App">
        <DisplayData/>
    {/* test test test */}
    </div>
      </ApolloProvider>
  );
}

export default App;
