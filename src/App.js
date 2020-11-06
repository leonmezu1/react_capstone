import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './App.css';

const App = () => (
  <Router>
    <Navbar />
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/sign-up" exact component={SignUp} />
    </Switch>
    <Footer />
  </Router>
);

export default App;
