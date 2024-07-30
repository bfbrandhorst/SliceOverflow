import { Outlet } from "react-router-dom";
import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";
import NavBar from "./Component/NavBar";

import { Outlet } from 'react-router-dom'
import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client'
import NavBar from './Component/NavBar'
import { StoreProvider } from './utils/context'

import { useState } from 'react'


const client = new ApolloClient({
  uri: "/graphql",
  cache: new InMemoryCache(),
});

function App() {
  const [cart, updateCart] = useState([])

  return (
    // This is what allows us to use apollo hooks
    <ApolloProvider client={client}> 
    < StoreProvider >
      <NavBar/>
      <Outlet/>
    </StoreProvider>
    </ApolloProvider>
  );
}

export default App;
