import './App.css';
import Register from "./components/Register";
import { ProtectedRoute } from './protected.route';
import {Component , useState} from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Main from './components/Main';
import Home from './components/Home';
import Room from './components/Room';
import Mainroom from './components/Mainroom';
window.name = "null";

// import dog from 'process.env.PUBLIC_URL/images/dog.png';
export default class App extends Component {

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

           <Route path='*' component={() => <h1><center>404 NOT FOUND</center></h1>}/>
         </Switch>
       </div>

    </div>
    
  );
}
}
