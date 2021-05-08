import { Component } from "react";
import auth from "./AUTH/auth";
import { Link } from 'react-router-dom';
import React from 'react'


export default class Navbar extends Component {
  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    auth.logout();
    localStorage.clear()
    window.location.reload();
  }
  render() {
    return (
      <div>
        <div style={{backgroundColor: "#000000" ,border: "1px solid"}}></div>
        <div style={{backgroundColor: "#000000" ,border: "1px solid"}}></div>
        <nav
          className="navbar navbar-expand-lg navbar-light"
          style={{ backgroundColor: "#DEA80A",fontFamily:"Adobe Fan Heiti Std " }}
        >
          <div className="container-fluid">
            <span className="navbar-brand"><Link to = "/home"><h1 style={{color:'black'}}>Learning Strike</h1></Link></span>
            <div className="d-grid gap-2 d-md-flex justify-content-md-end">
              <a style={{ marginRight: "30px", marginTop: "auto" }}><Link to = "/home">Home</Link></a>
              <a style={{ marginRight: "30px", marginTop: "auto" }}><Link to = "/editroom">Edit Room</Link></a>
              <a style={{ marginRight: "30px", marginTop: "auto" }}>Todo work</a>
              {/* <button className="btn me-md-2" type="button" data-bs-toggle="modal" data-bs-target="#loginPopup" style={{ marginLeft: '15px' ,backgroundColor:'#f5c27d'}}>Login</button>
                    <button className="btn me-md-2" type="button" data-bs-toggle="modal" data-bs-target="#registerPopup" style={{ marginLeft: '15px',backgroundColor:'#ff9966'}}>REGISTER</button> */}
              <a
                className="btn btn-primary me-md-2"
                type="button"
                onClick={this.onClick}
                data-bs-toggle="modal"
                data-bs-target="#registerPopup"
                style={{ marginRight: "20px" }}
              >
                Logout
              </a>
              {window.email}
             
              <img
                src={process.env.PUBLIC_URL + "/images/dog.png"}
                style={{ width: "50px" }}
                
              ></img>
              
            </div>
          </div>
        </nav>
        <div style={{backgroundColor: "#000000" ,border: "1px solid"}}></div>
        <div style={{backgroundColor: "#000000" ,border: "1px solid"}}></div>
      </div>
    );
  }
}
