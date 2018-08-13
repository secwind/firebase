import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider  } from "react-redux";
import React, { Component } from 'react';

import { AppNavbar } from './Components/_layout/AppNavbar';
import AddClient from "./Components/clients/AddClient";
import Dashboard from './Components/_layout/Dashboard';
import store from './store';


import './App.css';
import ClientDetails from "./Components/clients/ClientDetails";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <AppNavbar/>
            <br/><br/>
            <div className="container">
            <Switch>
              <Route exact path="/" component={Dashboard}/>
              <Route exact path="/client/add" component={AddClient}/>
              <Route exact path="/client/:doc" component={ClientDetails}/>
            </Switch>

            </div>
          </div>
        </Router>
        </Provider>  
    );
  }
}

export default App;
