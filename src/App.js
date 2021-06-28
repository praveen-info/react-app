import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import NavBar from './components/navbar';
import Home from './components/home';
import About from './components/about';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar/>
        <div className="content">
          <Route path="/" exact component={Home}/>
          <Route path="/about" component={About}/>
        </div>
      </div>
    );
  }
}

export default App;
