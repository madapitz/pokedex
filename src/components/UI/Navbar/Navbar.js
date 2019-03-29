import React from 'react';
import Navbar from 'react-bootstrap/Navbar';

const navbar = () => (
	<>
		<Navbar bg="dark" variant="dark">
		    <Navbar.Brand href="#home">
		      {'Pokedex'}
		    </Navbar.Brand>
		  </Navbar>
	</>
);

export default navbar;
