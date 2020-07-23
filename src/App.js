import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { Container } from 'reactstrap';

import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import Contact from './components/Contact';
import About from './components/About';
import Profile from './components/Profile';
import Signin from './components/Signin';
import Signup from './components/Signup';
import Procducts from './components/Procducts';


function App() {
  return (
    <div>
      <Header />
      <Container>
        <Route exact={true} path='/' component={Home} />
        <Route path='/about' component={About} />
        <Route path='/contact' component={Contact} />
        <Route path='/profile' component={Profile} />
        <Route path='/signin' component={Signin} />
        <Route path='/signup' component={Signup} />
        <Route path='/procducts' component={Procducts} />

        <Footer />
      </Container>
    </div>
  );
}

export default App;
