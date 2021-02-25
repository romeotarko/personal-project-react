import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Footer from './components/Footer';
import Body from './components/Body';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Cards from './components/Cards';


function App() {
  return (
    <>
      <Router>
        <Navbar />
              <Body />
              <Cards />
        <Footer />
      </Router> 
    </>
  );
}

export default App;
