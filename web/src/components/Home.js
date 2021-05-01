import React, { Component } from 'react';
import Navbar from './Navbar';
import Rooms from './Rooms';
// import TextField from "@material-ui/core/TextField"
import { useEffect, useState } from "react"

export default function Home() {


    return (

        <div style={{ backgroundColor: "#f5c27d", width: '100vw', height: '100vh' }}>
            <Navbar></Navbar>
                
            <div style={{ marginLeft: "1.7%", color: "#000000", fontFamily:"Lucida Bright",paddingTop: "3%" ,width: "130px",padding: "10px",border: "5px solid black", margin: "12px",marginTop: "8px"}}>
                <h2>HOME</h2>
               
            </div>
           
            
               
            <div className="row">
                <div className="col" style={{ maxWidth: '10%' }}>
                    
                </div>

                <div className="col" >
                    <Rooms
                    ></Rooms>

                </div>
            </div>

        </div>
    )

}