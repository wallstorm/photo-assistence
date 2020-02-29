import React, {Component} from 'react';
import Router from "./Router";
import './App.css';
import Enlaces from "./datos.json";

class App extends Component {
  state = {
    servicios: []
  }

  componentDidMount() {
    this.setState({
      servicios: Enlaces
    })
  }

  render() {
    return (
      <div className="contenedor">
          <Router datos={this.state.servicios} />
      </div>
    )
  }
}

export default App;
