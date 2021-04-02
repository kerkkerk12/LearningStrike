import React, { Component } from 'react';
import Navbar from './Navbar';
import Chat from './Chat/Chat';


export default class Mainroom extends Component {
    constructor(props) {
        super(props);
        this.state = this.props.location.state;
        console.log(this.state);

    }
    render() {
        return (
            <div style={{ backgroundImage: 'url(/images/background.jpg)', width: "100vw", height: "100vh", backgroundSize: "cover" }}>
                <Navbar></Navbar>

                <div className="row"  >
                    <div className="col" style={{ maxWidth: '25%' }} >

                        <Chat></Chat>
                    </div>
                    <div className="col" >
                        <div className="card" style={{ height: 250, width: '65rem', marginLeft: "3%", marginRight: "auto", backgroundColor: "#F9EFDA", display: "flex", marginTop: 30 }}>
                            <div className="card-body">
                                <div style={{ fontSize: 40, marginLeft: 15 }}>
                                    <p className="card-text">Welcome to {this.state.subject} classroom!!!</p>
                                    <div className="btn-group" role="group" aria-label="Basic outlined example" style={{ marginLeft: "90%", marginTop: "10%", display: "flex" }}>
                                        <button type="button" className="btn btn-dark">Class Chat</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div style={{ marginLeft: "40%", marginRight: "25%", marginTop: "1%" }}>
                            <ul className="list-group">

                                <textarea className="form-control" id="exampleFormControlTextarea1" rows={3} defaultValue={"Say Something!!"} />
                                <button type="button" className="btn btn-success">Submit</button>

                            </ul>

                        </div>

                        <div style={{ marginLeft: "40%", marginRight: "25%", marginTop: "2%" }}>
                            <ul className="list-group">

                                <li className="list-group-item">HomeWork {this.state.subject}</li>
                                <textarea className="form-control" id="exampleFormControlTextarea1" rows={3} defaultValue={""} />
                                <button type="button" className="btn btn-success">Submit</button>

                            </ul>

                        </div>
                    </div>
                </div>






            </div>


        );
    }
}

