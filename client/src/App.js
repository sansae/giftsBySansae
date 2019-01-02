import React, { Component } from 'react';
import Landing from './components/Landing';
import Navigation from './components/Navigation';
import './App.css';
import '../node_modules/@fortawesome/fontawesome-free/css/all.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {}

    this.connectToServer = this.connectToServer.bind(this);
  }

  connectToServer() {
    fetch('/');
  }

  componentDidMount() {
    this.connectToServer();
  }

  render() {
    return (
      <div className="App">
        <Navigation />

        <section>
          <Landing />
        </section>
      </div>
    );
  }
}

export default App;
