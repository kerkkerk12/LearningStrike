import React, { Component } from 'react';
import Navbar from './Navbar';
import Chat from './Chat/Chat';

export default class Todo extends Component {
    constructor(props) {
    super(props);
    this.state = [];
    
    }

render(){
    return(<div style={{ backgroundImage: 'url(/images/background.jpg)', width: "100vw", height: "100vh", backgroundSize: "cover" }}>
    <Navbar></Navbar>
    
        <div style={{ marginLeft: "auto", marginRight: "auto" }}>
            <ul className="list-group">
{/* 
                <li className="list-group-item">HomeWork {this.state.subject}</li>
                <textarea className="form-control" id="exampleFormControlTextarea1" rows={3} defaultValue={""} />
                <h>{this.state.homework}</h> */}
            </ul>

        </div>
    
    
    
    
    
    
    
    
    
    
    
    </div>
    );
}
}
