import React from "https://esm.sh/react";
import ReactDOM from "https://esm.sh/react-dom";

class Ola extends React.Component {
  render() {
    return <h1>Olá, {this.props.name}!</h1>
  }
}

class OlaComEstado extends React.Component {
  constructor(props){
    super(props);
    let firstName = this.props.name.split(" ")[0];
    this.state = { name: firstName }
  }
  render() { 
    return <h1>Olá, {this.state.name}!</h1> 
  }
}

let nome = "Isabela Colucci"

ReactDOM.render(<Ola name={nome} />, document.getElementById('principal'));

ReactDOM.render(<OlaComEstado name={nome}/>, document.getElementById('principalComEstado'));
