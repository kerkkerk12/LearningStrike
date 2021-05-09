import TextField from "@material-ui/core/TextField"
import React, { useEffect, useRef, useState, Component } from "react"
import io from "socket.io-client"
import Message from './Message'
const style = {
	card: {
		display: "grid",
		gridTemplateColumns: "1fr 1fr",
		margin: "30px",
		minHeight: "30rem"
	},
	form: {
		maxWidth: "500px",
		borderRadius: "5px",
		padding: "20px",
		boxShadow: "0px 3px 24px -8px rgba(0, 0, 0, 0.75)"
	},
	name_field: { marginBottom: "40px" },
	button: {
		marginTop: "30px",
		padding: "10px",
		background: "transparent",
		borderRadius: "3px"
	},
	render_chat: {
		maxWidth: "80%",
		padding: ["20px", "5% 5%"],
		boxShadow: "20px 20px 24px -8px rgba(0, 0, 0, 0.75)",
		overflowY: "auto",
		width: "80%",
		height: "400px",
		flex: "auto"
	},
	h3: { color: "#2f72da", margin: "center" },
	span: { color: "black" }
}

function Chat(props) {
	const [state, setState] = useState({ message: "", name: window.email, code: "" })
	const [chat, setChat] = useState([])
	const [code, setCode] = useState(props.roomcode)
	const socketRef = useRef()


	useEffect(

		() => {
			socketRef.current = io.connect("http://localhost:8000")
			socketRef.current.emit("in room", { roomcode: code })
			socketRef.current.on("in room", ({ history }) => {
				setChat(history)
			})
			socketRef.current.on("send message", ({ name, message, code }) => {
				setChat([...chat, { name, message }])
			})
			// console.log(code);
			return () => socketRef.current.disconnect()
		},
		[chat]
	)

	const onTextChange = (e) => {
		setState({ ...state, [e.target.name]: e.target.value })
	}

	const onMessageSubmit = (e) => {
		const { name, message } = state
		socketRef.current.emit("send message", { name, message, code })
		e.preventDefault()
		setState({ message: "", name })
	}

	

	return (



		<div className="card">
			<center>

				<form onSubmit={onMessageSubmit}>
					<h1>Chat</h1>


					<div className="render-chat" style={style.render_chat} >
						
						{chat.map((c, index) => {
							if (c[0] == window.email) {
								return (

									<Message
										c={c}
										index={index}
										isMe={true}
									></Message>
								)
							}
							else{
								return(
									<Message
										c={c}
										index={index}
										isMe={false}
									></Message>
								)
							}
						})}
					</div>


					<div>
						<TextField name="message" onChange={(e) => onTextChange(e)} value={state.message} label="Message..." />
						<button class="btn btn-success">SEND</button>
					</div>

				</form>
			</center>
		</div>
	)
}

export default Chat

