import React, { Component } from 'react';
import Navbar from './Navbar';
import Rooms from './Rooms';
import auth from "./AUTH/auth";
import { useEffect, useState } from "react"
import {useLocation} from "react-router-dom"
import { Route, Router } from 'react-router';

export default function Home(props) {
    
    return (
        
        
        <div style={{ backgroundImage: 'url(/images/YellowWallpaper3.png)', height: "150vh", backgroundSize: "cover" }}>
            <Navbar></Navbar> 
            <div style={{ marginLeft: "1.7%", color: "#000000", fontFamily: "Adobe Fan Heiti Std ", paddingTop: "3%", width: "130px", padding: "10px", border: "5px solid black", margin: "12px", marginTop: "20px", backgroundColor: "white", opacity: "0.7" }}>
               
                <h2>
                    <center>
                     HOME
                     </center>
                     </h2>
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