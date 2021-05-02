import './App.css';
import Register from "./components/Register";
import { ProtectedRoute } from './protected.route';
import token from "./components/AUTH/token";
import {Component , useState, useEffect} from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import React from 'react'

import Main from './components/Main';
import Home from './components/Home';
import Room from './components/Room';
import Mainroom from './components/Mainroom';
import RoomEdit from './components/RoomEdit';

function refresh(){
  if (window.performance) {
    if (performance.navigation.type == 1) {
      if (localStorage.getItem("token")){
        token.setToken();
      }
    }
  }
}
// import dog from 'process.env.PUBLIC_URL/images/dog.png';
export default class App extends Component {
  constructor(props) {
    super(props);
    refresh();
  }
  

  

  render(){

    return (
      
      <div style={{overflowX:'hidden'}}>
      <div>
         <Switch>
           <Route exact path="/" component={Main}/>
           <Route exact path="/register" component={Register}/>
           <ProtectedRoute exact path="/room" component={Room}/>
           <ProtectedRoute exact path="/home" component={Home}/>
           <ProtectedRoute exact path='/mainroom' component={Mainroom}/>
            <ProtectedRoute exact path ="/editroom" component = {RoomEdit}/>
           <Route path='*' component={() => <h1><center>404 NOT FOUND</center></h1>}/>
         </Switch>
       </div>

    </div>
    
  );
}
}
