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
            <div style={{ marginLeft: "1.7%", color: "#000000", fontFamily:"Adobe Fan Heiti Std",paddingTop: "3%" ,width: "130px",padding: "10px",border: "5px solid black", margin: "15px",marginTop: "8px"}}>
                <h2>ROOM EDIT</h2>
               
            </div>
            <div className="card text-center" style={{ maxWidth: '45%' ,padding: "10px",border: "5px solid black",margin:"10%",marginLeft:"27%",fontFamily:"Adobe Fan Heiti Std"}}>
                <h2 className="card-header">Room edit</h2>
                <div className="card-body">
                    <div className="row">
                        <div className="col-sm-6">
                            <div className="card">
                                <div className="card-body">

                                    <h5 className="card-title">Create room</h5>
                                    {/* <form onSubmit={onMessageSubmit}> */}
                                    <div className="input-group ">
                                        <input type="text" class="form-control" placeholder="Room name"name="create" onChange={event => setSubject(event.target.value)} value={subject}></input>
                                        <button class="btn btn-success" type="submit" onClick={createOnClick} >Send</button>
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
                                            <input type="text" class="form-control" placeholder="Code room"name="join" onChange={event => setCode(event.target.value)} value={code}></input>
                                            <button class="btn btn-success" type="submit" onClick={createOnClick} >Send</button>
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
