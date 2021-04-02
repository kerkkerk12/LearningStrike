import TextField from "@material-ui/core/TextField"
import React, { useEffect, useRef, useState } from "react"
import io from "socket.io-client"
import "./Chat.css"

function Chat() {
	const [ state, setState ] = useState({ message: "", name: "" })
	const [ chat, setChat ] = useState([])

	const socketRef = useRef(null)

	useEffect(
		() => {
			socketRef.current = io.connect("http://localhost:4000")
			socketRef.current.on("message", ({ name, message }) => {
				setChat([ ...chat, { name, message } ])
				
			})
			return () => socketRef.current.disconnect()
		},
		[ chat ]
	)

	const onTextChange = (e) => {
		setState({ ...state, [e.target.name]: e.target.value })
	}

	const onMessageSubmit = (e) => {
		const { name, message } = state
		socketRef.current.emit("message", { name, message })
		e.preventDefault()
		setState({ message: "", name })
	}

	const renderChat = () => {
		return chat.map(({ name, message }, index) => (
			<div key={index}>
				<div class="alert alert-warning" role="alert" id="message-list">{name}: <span>{message}</span></div>
			</div>
		))
	}

	return (
		
		
		<div className="card">
			<form onSubmit={onMessageSubmit}>
				<h1>Room</h1>
				<div className="name-field">
					<TextField name="name" onChange={(e) => onTextChange(e)} value={state.name} label="Name" />
				</div>

				<div className="render-chat">
				{renderChat()}
				</div>


				<div className="card-footer">
                        <div className="input-group">
							<div>
								<TextField name="message" onChange={(e) => onTextChange(e)} value={state.message} label="Message..." />
								<button className="btn btn-success">SEND</button>
							</div>
                        </div>

							
                    </div>  
			</form>
		</div>
	)
}

export default Chat

