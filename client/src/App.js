import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Landing from './components/Landing';
import Navigation from './components/Navigation';
import Signup from './components/Signup';
import './App.css';
import '../node_modules/@fortawesome/fontawesome-free/css/all.css';
import Cart from './cart';

class App extends Component {
  render() {
    const cart = new Cart();

    return (
      <div className="App">
        <Navigation />

        <main className="main">
          <Route exact path="/" component={() => <Landing cart={cart} />} />
          <Route path="/signup" component={Signup} />
        </main>

        {/*add footer component here*/}
      </div>
    );
  }
}

export default App;
