import React, { Component } from 'react';

export default class Login extends Comment {
    render() {

        return (
            <div className="card">
                <div>
                    <div className="card">
                        <h1 className="headtext">LOGIN</h1>
                        <div className="card-body">
                            <form>
                                <div className="mb-3">
                                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                                    <input type="password" className="form-control" id="exampleInputPassword1" />
                                </div>
                                <div className="mb-3 form-check">
                                    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                                    <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                                </div>
                            </form>
                            <div className="btn">
                                <a className="btn btn-primary me-md-2" type="button" href="main_menu.html" style={{ marginRight: "40px" }}>LOGIN</a>
                                <a className="btn btn-primary" href="register.html" role="button">REGISTER</a>
                            </div>
                        </div>
                    </div>

                </div>


            </div>


        )
    }
}