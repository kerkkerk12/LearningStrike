import React, { Component } from 'react';
import Navbar from './Navbar';
import Chat from './Chat/Chat';

export default class Todo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            homework: ["CN420", "CN555", "WY69"],

        }

    }


    render() {
        return (<div style={{ backgroundImage: 'url(/images/background.jpg)', width: "100vw", height: "100vh", backgroundSize: "cover" }}>
            <Navbar></Navbar>
            <div style={{ marginLeft: "1.7%", color: "#000000", fontFamily:"Adobe Fan Heiti Std ",paddingTop: "3%" ,width: "130px",padding: "10px",border: "5px solid black", margin: "12px",marginTop: "20px",}}>
               
                <h2>HOME WORK</h2>
            </div>
            
            

            <div>{this.state.homework.map(Todo => {
                return (<div style={{ marginLeft: "30%", marginRight: "30%", marginTop: "2%", textAlign: 'center',maxWidth: '45%' ,border: "5px solid black",marginLeft:"27%" }}>
                <ul className="list-group">

                    <li className="list-group-item">HomeWork {Todo}</li>
                    {/* <h>{this.state.homework}</h> */}
                </ul>
            </div>)
            })}
            </div>

            











        </div>
        );
    }
}
