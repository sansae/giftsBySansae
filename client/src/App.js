import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Landing from './components/Landing';
import Navigation from './components/Navigation';
import Signup from './components/Signup';
import './App.css';
import '../node_modules/@fortawesome/fontawesome-free/css/all.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navigation />

        <main className="main">
          <Route exact path="/" component={Landing} />
          <Route path="/signup" component={Signup} />
        </main>

        {/*add footer component here*/}
      </div>
    );
  }
}

export default App;
