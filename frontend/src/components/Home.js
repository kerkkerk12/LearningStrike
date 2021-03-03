import React, { Component } from 'react';
import Navbar from './Navbar';
import Rooms from './Rooms';
export default class Home extends Component {
    render() {

        return (
            // <div style={{ backgroundImage: "url(/images/Home.png)", maxHeight: '100vh', backgroundSize: 'cover' }}>
            <div style={{ backgroundColor: "#f5c27d",width:'100vw',height:'100vh',webkitBackgroundSize:'cover'}}>
                <Navbar></Navbar>
                <div className="row">
                    <div className="col" style={{ maxWidth: '10%' }}>
                        famp
                    </div>

                    <div className="col" >

                        <Rooms></Rooms>
                    </div>
                </div>

            </div>
        )
    }
}