import React, { Component } from 'react';
import Navbar from './Navbar';
import Chat from './Chat/Chat';
import AssignmentList from './AssignmentList'
import CreateAssignment from './CreateAssignment'

export default class Mainroom extends Component {
    constructor(props) {
        super(props);
        this.state = this.props.location.state;
    }
    
    render() {
        return (
            <div style={{ backgroundImage: 'url(/images/background.jpg)', width: "100vw", height: "100vh", backgroundSize: "cover" }}>
                <Navbar></Navbar>

                <div className="card" style={{ height: '200', width: '70rem', marginLeft: "auto", marginRight: "auto", backgroundColor: "#F9EFDA", display: "flex", marginTop: 30 }}>
                    <div className="card-body">
                        <div style={{ fontSize: 40, marginLeft: 15 }}>
                            <p className="card-text">Welcome to {this.state.subject} classroom!!! </p>
                            <h3>Code to Join : {this.state.code}</h3>
                        </div>
                    </div>
                </div>

                <div class="row" style={{ marginTop: 30 }}>
                    <div class="col-sm-3" style={{ marginLeft: "auto" }}>
                        <Chat roomcode={this.state.code}></Chat>
                    </div>
                    <div class="col-sm-4" style={{ marginRight: "auto" }}>

                        <CreateAssignment state={this.state}/>

                        <div style={{ marginLeft: "auto", marginRight: "auto" }}>
                            <ul className="list-group">
                                <li className="list-group-item"><h1>Homework</h1></li>

                            </ul>
                            <ul className="list-group" >
                                <AssignmentList state={this.state}/>
                            </ul>

                        </div>

                    </div>
                </div>
            </div>


        );
    }
}

