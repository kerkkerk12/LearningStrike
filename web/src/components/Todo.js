import React, { Component } from 'react';
import Navbar from './Navbar';
import Chat from './Chat/Chat';

export default class Todo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            homework: [],
        }

        fetch("http://localhost:8000/getJoin/" + window.email, {
            method: "get",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
        })
            .then((res) => res.json())
            .then((data) => {
                data.map(d => {
                    fetch("http://localhost:8000/getTodo/" + d, {
                        method: "get",
                        headers: {
                            Accept: "application/json",
                            "Content-Type": "application/json",
                        },

                    }).then((res) => res.json()).then((data2) => {

                        data2.map((dat) => {
                            fetch("http://localhost:8000/getRoomname/" + d, {
                                method: "get",
                                headers: {
                                    Accept: "application/json",
                                    "Content-Type": "application/json",
                                },
                                
                            }).then((res) => res.json()).then((roomname)=>{
                                this.setState({ homework: [...this.state.homework, [roomname,dat.title]] })

                            })




                        })
                    })
                    console.log(this.state.homework);
                })
            })

    }
    render() {
        return (<div style={{ backgroundImage: 'url(/images/background.jpg)', width: "100vw", height: "100vh", backgroundSize: "cover" }}>
            <Navbar></Navbar>
            <div style={{ marginLeft: "1.7%", color: "#000000", fontFamily: "Adobe Fan Heiti Std ", paddingTop: "3%", width: "130px", padding: "10px", border: "5px solid black", margin: "12px", marginTop: "20px", backgroundColor: "white", opacity: "0.7" }}>

                <h2>HOME WORK</h2>
            </div>



            <div>{this.state.homework.map(Todo => {
                return (<div style={{ margin: 'auto', marginTop: "2%", textAlign: 'center', maxWidth: '50%', opacity: '0.8' }}>
                    <ul className="list-group">

                        <li className="list-group-item"><h2>Subject {Todo[0]}:{Todo[1]}</h2></li>
                    </ul>
                </div>)
            })}
            </div>

        </div>
        );
    }
}
