import React from "https://esm.sh/react";
import ReactDOM from "https://esm.sh/react-dom";

class BemVindo extends React.Component {
  render() {
    return <h1>Olá, {this.props.name}</h1>;
  }
} 

const element = <BemVindo name="Estudante" age="50" />;
ReactDOM.render(element, document.getElementById("root"));

class Header extends React.Component {
  render(){
    return (
      <header className="cabecalho">
        <h1 className="boasVindas">
          Bem vindo {this.props.name}!
        </h1>
        <h2 className="titulo">
          Manupulando Componentes - Fragmentos
        </h2>
      </header>
    );
  }
}
