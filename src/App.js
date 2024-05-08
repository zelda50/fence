import './App.css';
import React from 'react';
import About from './routes/About'
import Service from './routes/Service';
import Contact from './routes/Contact';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom/cjs/react-router-dom.min';
import Home from './routes/Home';
import Cedar from './routes/cedar';



const App = () => {
  return (
    <div className='App'>
      <Switch>
        <Route path="/" exact component={Home} /> 
        <Route path="/about" exact component={About}/>
        <Route path="/service" exact component={Service} />
        <Route path="/contact" exact component={Contact} /> 
        <Route path="/cedar" exact component={Cedar} />
      </Switch>
    </div>
  );
};

export default App
