import React, { Component } from 'react';
import Navbar from './Navbar';
import Rooms from './Rooms';
import TextField from "@material-ui/core/TextField"
import { useEffect, useState } from "react"

export default function Home() {
   

    return (

        <div style={{ backgroundColor: "#f5c27d", width: '100vw', height: '100vh' }}>
            <Navbar></Navbar>
            <h2>HOME</h2>
            <div className="row">
                <div className="col" style={{ maxWidth: '20%' }}>
               

                </div>

                <div className="col" >
                    <Rooms
                    ></Rooms>
                </div>
            </div>

        </div>
    )

}