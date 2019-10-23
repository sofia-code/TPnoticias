import React from 'react';
import './index.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Home from '../../pages/home' 
import Category from '../../pages/category' 
import Search from '../../pages/search' 
import NavBar from '../NavBar';
import Header from '../Header';





const App = props => {
  return (
    <Router>
      <Header />
      <NavBar/>
      <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/category/:slug" exact component={Category}/>
        <Route path="/search/:slug" exact component={Search}/>
        
        

      </Switch>
            
             
            
    </Router>
  );
}

export default App;
