import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';

const jumbotron = () => (
	<Jumbotron fluid>
	  <Container style={{textAlign: 'center'}}>
	    <h1>Pokedex</h1>
	  </Container>
	</Jumbotron>
);

export default jumbotron;
