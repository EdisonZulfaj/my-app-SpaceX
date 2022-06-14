import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

//
import Falcon9 from './components/pages/Falcon9';
import FalconHeavy from './components/pages/FalconHeavy';
import Starship from './components/pages/Starship';
import { ApolloProvider, InMemoryCache, ApolloClient } from '@apollo/client';

const client = new ApolloClient({
  uri: 'https://api.spacex.land/graphql',
  cache: new InMemoryCache(),
});



function App() {
  return (
    <>
      <ApolloProvider client={client}>
        <Router>
          <Navbar />
          <Routes>
            <Route path='/' exact element={<Home />} />
            <Route path='/falcon9' exact element={<Falcon9 />} />
            <Route path='/falconheavy' exact element={<FalconHeavy />} />
            <Route path='/starship' exact element={<Starship />} />
          </Routes>
        </Router>
      </ApolloProvider>
    </>
  );
}

export default App;
