import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import About from './Components/About';
import Contact from './Components/Contact';
import Technology from './Components/Technology';
import Resume from './Components/Resume';
import Portfolio from './Components/Cards';
import './App.css';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/about' component={About} />
        <Route exact path='/technology' component={Technology} />
        <Route exact path='/portfolio' component={Portfolio} />
        <Route exact path='/contact' component={Contact} />
        <Route exact path='/resume' component={Resume} />
      </Switch>
    </Router>
  );
};

export default App;
