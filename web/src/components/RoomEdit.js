import React from 'react'
import Navbar from './Navbar';
import TextField from "@material-ui/core/TextField"
import { useEffect,useState } from "react"
function RoomEdit() {
    const [create, setCreate] = useState("");
    const [subject, setSubject] = useState("");
    const [join, setJoin] = useState("");
    const [code,setCode] = useState("");
    const [message,setMessage] = useState("");
    const createOnClick = (event) =>{
        createRoom();
        alert("Created")
    }
    
    const joinOnClick = (event) =>{
        joinRoom();
        alert("Join Complete")
    }

    const createRoom = () =>{
            console.log(subject);
            const requestOption = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body:JSON.stringify({
                    email:window.email,
                    subject:subject
                })
            }
            fetch('http://localhost:8000/addRoom/', requestOption)
            .then(res => res.json())        
            .then(data => setMessage( data.message ))

    }
     
    const joinRoom =()=>{
        console.log(code);
        const requestOption = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body:JSON.stringify({
                email:window.email,
                code:code
            })
        }
        
        fetch('http://localhost:8000/joinRoom/', requestOption)
        .then(res => res.json())
        .then(data => setMessage( data.message ))
        
    }
    
    

    return (
        <div 
            style={{backgroundImage: "url(/images/YellowWallpaper2.png)",height: "100vh",backgroundSize: "cover",}}> 
            <Navbar></Navbar>
            <div style={{ marginLeft: "1.7%", color: "#000000", fontFamily:"Lucida Bright",paddingTop: "3%" ,width: "130px",padding: "10px",border: "5px solid black", margin: "12px",marginTop: "8px"}}>
                <h2>ROOM EDIT</h2>
               
            </div>
            <div className="card text-center" style={{ maxWidth: '45%' ,padding: "10px",border: "5px solid black",margin:"10%",marginLeft:"27%"}}>
                <h5 className="card-header">Room edit</h5>
                <div className="card-body">
                    <div className="row">
                        <div className="col-sm-6">
                            <div className="card">
                                <div className="card-body">

                                    <h5 className="card-title">Create room</h5>
                                    {/* <form onSubmit={onMessageSubmit}> */}
                                    <div className="input-group">
                                        <TextField type="text" name="create" onChange={event => setSubject(event.target.value)} label="Subject" value={subject}></TextField>
                                        <div className="input-group-append">
                                            <button className="btn btn-success" type="submit" id="messageBtn" onClick={createOnClick}>Send</button>
                                        </div>
                                    </div>

                                    {/* </form> */}
                                </div>
                            </div>

                        </div>
                        <div className="col-sm-6">
                            <div className="card">
                                <div className="card-body">
                                    <h5 className="card-title">Join room</h5>
                                    
                                        <div className="input-group">
                                            <TextField thpe="text" name="join" onChange={event => setCode(event.target.value)} label="Code" value={code}></TextField>
                                            <div className="input-group-append">
                                                <button className="btn btn-success" type="submit" id="messageBtn" onClick={joinOnClick}>Send</button>
                                            </div>
                                        </div>


                                </div>
                            </div>
                        </div>
                    </div>
                </div>


            </div>
        </div>
    )
}

export default RoomEdit
