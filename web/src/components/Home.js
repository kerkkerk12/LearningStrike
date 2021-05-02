import React, { Component } from 'react';
import Navbar from './Navbar';
import Rooms from './Rooms';
// import TextField from "@material-ui/core/TextField"
import { useEffect, useState } from "react"
import {useLocation} from "react-router-dom"
import { Route, Router } from 'react-router';

export default function Home(props) {

    const location = useLocation()
    const isLogin = props.location.state.isLogin
    console.log("isLogin =",isLogin)
    const [showAlert,setShowAlert] = useState(false)
    
    const alertLogin = () => {
        return alert("login success")
    }
    useEffect(() => {
        if (isLogin) setShowAlert(true)
        
    }, [])
    return (
        
        
        <div style={{ backgroundImage: 'url(/images/YellowWallpaper3.png)', height: "150vh", backgroundSize: "cover" }}>
            <Navbar></Navbar>
            {showAlert && <div>{alertLogin()}</div>}    
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