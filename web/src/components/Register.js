import React, { Component, useState } from "react";
import { Redirect, Link } from "react-router-dom";

export default class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstname: "",
      lastname: "",
      email: "",
      password: "",
      cpassword: "",
      confirm: "",
      successfulPOST: this.state,
    };
    this.handleChange = this.handleChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  //handle change//
  handleChange(event) {
    if (event.target.name === "firstname") {
      this.setState({ firstname: event.target.value });
    } else if (event.target.name === "lastname") {
      this.setState({ lastname: event.target.value });
    }  else if (event.target.name === "email") {
      this.setState({ email: event.target.value });
    } else if (event.target.name === "password") {
      this.setState({ password: event.target.value });
    } else {
      this.setState({ cpassword: event.target.value });
    }
  }

  // submit register//
  onSubmit(event) {
    event.preventDefault("");
    if (this.state.password === this.state.cpassword) {
      fetch("http://localhost:8000/addUser", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          firstname: this.state.firstname,
          lastname: this.state.lastname,
          email: this.state.email,
          password: this.state.password,
        }),
      }).then((res) => res.json());
      this.setState({ successfulPOST: true });
    } else {
      this.setState({ confirm: "Incorrect password" });
    }
  }

  render() {
    if (this.state.successfulPOST === true) {
      return <Redirect push to={{ pathname: "/" }} />;
    } else {
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
                  color: "#ffe666",
                  paddingTop: "100px",
                }}
              >
                CLASSROOM OF GOD
              </h1>

              {/* Register form */}

              <div className="card" style={{ width: "30rem" }}>
                <div className="card">
                  <h1 className="headtext">REGISTER</h1>
                  <div className="card-body">
                    <form>
                    <div className="row">
                      <div className="col-md-6">
                        <label for="firstname" class="form-label">
                          first name
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          onChange={this.handleChange}
                          placeholder="firstname"
                          name="firstname"
                        />
                      </div>
                      <div className="col-md-6">
                        <label for="firstname" class="form-label">
                          last name
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          onChange={this.handleChange}
                          placeholder="lastname"
                          name="lastname"
                        />
                      </div>
                      </div>
                      <div className="mb-3">
                        <label htmlFor="InputEmail1" className="form-label">
                          email address
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
                        <label htmlFor="InputPassword1" className="form-label">
                          password
                        </label>
                        <input
                          type="password"
                          className="form-control"
                          id="InputPassword1"
                          placeholder="Password"
                          name="password"
                          onChange={this.handleChange}
                        />
                      </div>

                      <div className="mb-3">
                        <label htmlFor="InputPassword1" className="form-label">
                          confirm password
                        </label>
                        <input
                          type="password"
                          className="form-control"
                          id="InputPassword1"
                          placeholder="Confirm password"
                          name="cpassword"
                          onChange={this.handleChange}
                        />
                      </div>
                      <h5>{this.state.confirm}</h5>
                      <div className="btn">
                        <a
                          className="btn btn-primary me-md-2"
                          type="button"
                          onClick={this.onSubmit}
                          data-bs-toggle="modal"
                          data-bs-target="#registerPopup"
                          style={{ marginRight: "20px" }}
                        >
                          REGISTER
                        </a>
                        <Link className="btn btn-primary" to="/" type="button">
                          BACK
                        </Link>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </center>
          </div>
        </div>
      );
    }
  }
}
