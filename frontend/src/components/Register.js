import React, { Component } from 'react';

export default class Register extends Component {
    render() {

        return (
            <div className="card">
                <h1 className="headtext">REGISTER</h1>
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
                        <div className="mb-3">
                            <label htmlFor="exampleInputPassword1" className="form-label">Confirm password</label>
                            <input type="password" className="form-control" id="exampleInputPassword1" />
                        </div>
                        <div className="mb-3 form-check">
                            <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                            <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                        </div>
                    </form>
                    <div className="btn">
                        <a className="btn btn-primary me-md-2" type="button" data-bs-toggle="modal" data-bs-target="#registerPopup" style={{ marginRight: '20px' }}>REGISTER</a>
                        <a className="btn btn-primary" type="button" href="login.html">BACK</a>
                    </div>
                </div>
            </div>

        )
    }
}