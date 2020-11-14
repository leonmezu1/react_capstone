import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Components/Pages/Home/Home';
import Navbar from './Components/Pages/Navbar';
/* import Footer from './Components/Pages/Footer'; */
import CryptoCoin from './Components/Pages/Crypto/CryptoCoin';

import 'animate.css/animate.min.css';
import './App.css';

const App = () => (
  <Router>
    <Navbar />
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/crypto" exact component={CryptoCoin} />
    </Switch>
    {/* <Footer /> */}
  </Router>
);

export default App;
