import React, { Component, useState } from "react";
import auth from "./AUTH/auth";
import { Redirect,Link } from "react-router-dom";
import check from "./AUTH/check"

export default class Login extends Component {

  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      successfulPOST: this.state,
      message: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.Submit = this.Submit.bind(this);

  }

  handleChange(event) {
    if (event.target.name === "email") {
      this.setState({ email: event.target.value });
      window.email = event.target.value;
    } else {
      this.setState({ password: event.target.value });
    }
  }

  // submit login//
  Submit() {
    if (check.Length(this.state.email, this.state.password)) {
      fetch("http://localhost:8000/login", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: this.state.email,
        password: this.state.password,
      }),
    })
      .then((res) => res.json())
      .then((data) => {if (data.message === "Login complete") {
        auth.login()
        this.setState({ message: data.message });
        } else {
          this.setState({ message: data.message });
        }
        alert("login colplete!!!")
      });}
      else{
        this.setState({ message: "Email and Password incorrect" });
      }
    
  }

  render() {
    console.log(auth.isAuthenticated());

<<<<<<< Updated upstream
        if (auth.isAuthenticated()){return ( <Redirect push to="/home" />)
=======
        if (auth.isAuthenticated()){return (<Redirect
          to={{
          pathname: "/home",
        }}
      />)
>>>>>>> Stashed changes
        }
        else{  
          return(
            <div className="card">
          <div>
            <div className="card">
              <h1 className="headtext">LOGIN</h1>
              <div className="card-body">
                <form>
                  <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">
                      Email address
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id="InputEmail1"
                      aria-describedby="emailHelp"
                      onChange={this.handleChange}
                      placeholder="e-mail"
                      name="email"
                    />
                  </div>
                  <div className="mb-3">
                    <label
                      htmlFor="exampleInputPassword1"
                      className="form-label"
                    >
                      Password
                    </label>
                    <input
                      type="password"
                      className="form-control"
                      id="InputPassword"
                      placeholder="Password"
                      name="password"
                      onChange={this.handleChange}
                    />
                  </div>
                  <h5>{this.state.message}</h5>
                </form>
                <div className="btn">
                  <Link
                    className="btn btn-primary me-md-2"
                    type="submit"
                    style={{ marginRight: "40px" }}
                    onClick={this.Submit}
                  >
                    Login
                  </Link>
                  <Link className="btn btn-primary" to="/register" role="button">Sign Up</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
          )
        }    
  }
}
