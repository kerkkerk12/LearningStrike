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
  
                <div className="card" style={{ height: 250, width: '65rem', marginLeft: "auto", marginRight: "auto", backgroundColor: "#F9EFDA", display: "flex", marginTop: 30 }}>
                            <div className="card-body">
                                <div style={{ fontSize: 40, marginLeft: 15 }}>
                                    <p className="card-text">Welcome to {this.state.subject} classroom!!!</p>
                                    <h3>Code to Join : {this.state.code}</h3>
                                    
                                </div>
                            </div>
                </div>
                      
                <div class="row">
                    <div class="col-sm-3" style={{marginLeft: "auto"}}>
                        <Chat></Chat>
                    </div>
                    <div class="col-sm-4" style={{marginRight: "auto"}}>
                        {/* <div style={{margin: "auto", marginTop: "10px"  }}>
                                <ul className="list-group">

                                    <textarea className="form-control" id="exampleFormControlTextarea1" rows={3} defaultValue={"Say Something!!"} />
                                    <button type="button" className="btn btn-success">Submit</button>

                                </ul>

                            </div> */}

                            <div style={{ marginLeft: "auto", marginRight: "auto", marginTop: "50px" }}>
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

