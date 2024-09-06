import ReactDOM from "https://esm.sh/react-dom";
import React from "https://esm.sh/react";

const root = ReactDOM.createRoot(document.getElementById('root'));

class Clock extends React.Component {
  render() {
    return (
      <div>
        <h1>Olá, Mundo!</h1>
        <h2>Horário: {this.props.date.toLocaleTimeString()}.</h2>
        <p>Código obtido no slide do tema 2.</p>
      </div>
    );
  }
}

function tick() {
  root.render(<Clock date={new Date()} />);
}

setInterval(tick, 1000);
