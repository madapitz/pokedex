import React, {Component} from 'react';
import Card from 'react-bootstrap/Card';
import axios from 'axios';


class Carta extends Component {

  state = {
    id: null,
    error: false,
    loading: false
  }

  componentDidMount() {
    this.setState({loading: true});
    axios.get(this.props.url)
         .then(data => {
           // console.log(data.data.id);
           this.setState({
             id: data.data.id,
             loading: false
           });
         })
         .catch(error => {
           this.setState({
             error: true,
             loading: false
           });
         });
  }

  render() {
    let ficha = <p>Ha ocurrido un error</p>;
    let loading = <p>Cargando...</p>;
    if (!this.state.loading) {
      loading = null;
    }
    if (!this.state.error && this.state.id !==null) {
      ficha = (
        <Card style={{margin: '20px', textAlign: 'center'}}>
          <Card.Img style={{height: '120px', width: '120px', margin: '0 auto'}} variant="top" src={process.env.PUBLIC_URL + '/images/'+ this.state.id +'.png'} />
          <Card.Body>
            <Card.Title>{this.props.nombre}</Card.Title>
            <Card.Text>
              {'Nro '+this.state.id}
            </Card.Text>
          </Card.Body>
        </Card>
      );
    }
    return (
      <>
        {loading}
        {ficha}
      </>
    );
  }
}

export default Carta;