import React, { Component } from 'react';
import axios from 'axios';

class App extends Component {
  state = {
    rand: 0
  }
  componentDidMount() {
    axios.get('/rand')
      .then(res => this.setState({ rand: res.data.rand }));
  }
  render() {
    if (this.state.rand === 0) return <h1>Loading...</h1>;
    return (
      <div className="App">
        <h1>{this.state.rand}</h1>
        <button onClick={() => this.setState({ rand: this.state.rand + 1 })}>+</button>
        <button onClick={() => this.setState({ rand: this.state.rand - 1 })}>-</button>
      </div>
    );
  }
}

export default App;
