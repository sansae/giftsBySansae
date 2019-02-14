import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Home from './components/Home';
import Navigation from './components/Navigation';
import About from './components/About';
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
          <Route exact path="/" component={() => <Home cart={cart} />} />
          <Route path="/about" component={About} />
          <Route path="/signup" component={Signup} />
        </main>

        {/*add footer component here*/}
      </div>
    );
  }
}

export default App;
