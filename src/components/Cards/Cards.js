import React, { Component } from 'react';
// import Container from 'react-bootstrap/Container';
import CardGroup from 'react-bootstrap/CardGroup';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from './Card/Card';
import axios from 'axios';




class Cards extends Component {

  state = {
  	info: [],
  	fullInfo: [],
  	error: false,
  	loading: false,
  	limit: 20
  }

  componentDidMount(){
  	this.setState({loading: true});
  	axios.get(`https://pokeapi.co/api/v2/pokemon/?limit=500&offset=0`)
  		 .then(data => {
  		 	console.log(data.data.results);
  		 	this.setState({
  		 		info: data.data.results.slice(0,this.state.limit),
  		 		fullInfo: data.data.results
  		 	});
  		 	this.setState({loading: false});
  		 })
  		 .catch(error => {
  		 	console.log(error);
  		 	this.setState({error: true});
  		 	this.setState({loading: false});
  		 });
  }

  cargarMas = () => {
  	if(this.state.limit <= 736) {
  		this.setState({
  			limit: this.state.limit + 10,
  			info: this.state.fullInfo.slice(0, this.state.limit)
  		});
  	}
  }

  render() {
  	let fichas = <p>Ha ocurrido un error</p>;
  	let loading = <p>Cargando...</p>;
  	if (!this.state.loading) {
  		loading = null;
  	}

  	if(!this.state.error) {
  		fichas = this.state.info.map(ficha => {
  			return (
  				<Col lg={4} md={4} sm={12} xs={12} key={ficha.name}>
	      			<Card nombre={ficha.name} url={ficha.url} />
	      		</Col>
  			);
  		});
  	}

    return (
      <CardGroup>
      	{loading}
      	<Row>
      		{fichas}
      	</Row>
      	<Button variant="primary" style={{margin: '30px auto'}} onClick={this.cargarMas}>Cargar más</Button>
      </CardGroup>
    );
  }
}

export default Cards;
