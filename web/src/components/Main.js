import Navbar from "./Navbar";
import Login from "./Login";
import Register from "./Register";
import { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import React from 'react'
import shadows from "@material-ui/core/styles/shadows";
export default class Main extends Component {
  
  render() {
    
    return (
      
      <div
        style={{
          backgroundImage: "url(/images/background.jpg)",
          height: "100vh",
          backgroundSize: "cover",
        }}
      >
        
        <div className="container" style={{ opacity: "0.8" ,padding:"10px",paddingLeft:"15px",paddingRight:"15px"}}>
          <center>
            <h1
              style={{
                fontSize: "80px",
                color: "#C09607",
                paddingTop: "10px",
                paddingLeft:"10px",
                backgroundColor:"white",
                fontFamily:"Adobe Fan Heiti Std ",
                
                
              }}
            >
              LEARNING STRIKE
            </h1>
            <div className="card" style={{ width: "30rem", fontFamily:"Adobe Fan Heiti Std "}}>
              <Login></Login>
            </div>
          </center>
        </div>
       
      </div>
    );
  }
}
