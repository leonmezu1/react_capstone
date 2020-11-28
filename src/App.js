import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import CryptoCoin from './Pages/Crypto/CryptoCoin';
import Navbar from './Components/Navbar/Navbar';

import 'animate.css/animate.min.css';
import './App.css';

const App = () => (
  <Router>
    <Navbar />
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/crypto/:id" exact component={CryptoCoin} />
      <Route path="/about" exact component={About} />
    </Switch>
  </Router>
);

export default App;
