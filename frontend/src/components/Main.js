import Navbar from "./Navbar";
import Login from "./Login";
import Register from "./Register";
import { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

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
        {/* <Navbar></Navbar> */}
        {/* <img src="https://burst.shopifycdn.com/photos/wrtiting-tools.jpg?width=1200&format=pjpg&exif=0&iptc=0" style={{minHeight: '100%',minWidth:'100%'}}></img> */}

        <div className="container" style={{ opacity: "0.8" }}>
          <center>
            <h1
              style={{
                fontSize: "100px",
                color: "#A52A2A",
                paddingTop: "10px",
                backgroundColor:"white"
              }}
            >
              Learning Strike
            </h1>
            <div className="card" style={{ width: "30rem" }}>
              <Login></Login>
            </div>
          </center>
        </div>
       
      </div>
    );
  }
}
