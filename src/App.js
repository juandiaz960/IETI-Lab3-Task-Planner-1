import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import './App.css';
import {Login} from "./components/Login"
import Drawer from "./components/navBar"
import { Redirect } from 'react-router'
import Card from "./components/cards"


export class App extends Component  {

    constructor(props) {
      super(props);
      this.state = {isLoggedIn: false}
      this.autenticate = this.autenticate.bind(this);
  }


      autenticate(){
        this.setState({isLoggedIn: true});
    }

    render(){
      
      var view; 
      if (this.state.isLoggedIn
        || localStorage.getItem("isLoggedIn") === "true") view = <Redirect to="/menu" />

      else view =  <Redirect to="/" />

      const LoginView = () => (
        <Login autenticate={this.autenticate}/>
        );
    
      const Menu = () => (
         <div> 
          <Drawer/>
          <Card/>
         </div>          
        );
    
      return (
          <Router> 
          <div className="App">
              <div>
                    {view}
                    <Route exact path="/" component={LoginView}/>
                    <Route path="/menu" component={Menu}/>
              </div>
              
          </div>

          </Router>
      );
    }
  }