import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';

import Navbar from './components/UI/Navbar/Navbar';
import Jumbotron from './components/UI/Jumbotron/Jumbotron';
import Cards from './components/Cards/Cards';

// import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <Container fluid style={{padding: '0'}}>
        <Navbar />
        <Jumbotron />
        <Cards />
      </Container>
    );
  }
}

export default App;
