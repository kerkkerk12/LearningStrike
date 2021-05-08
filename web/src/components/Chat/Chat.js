import TextField from "@material-ui/core/TextField"
import React, { useEffect, useRef, useState ,Component} from "react"
import io from "socket.io-client"
// import "./Chat.css"
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
	  maxWidth: "100%",
	  padding: ["20px", "2% 5%"],
	  boxShadow: "0px 3px 24px -8px rgba(0, 0, 0, 0.75)",
	  overflowY: "auto",
	  width: "80%",
	  height: "400px",
	  flex: "auto"
	},
	h3: { color: "#2f72da", margin: "center" },
	span: { color: "black" }
  }
  
function Chat(props) {
	const [ state, setState ] = useState({ message: "", name: window.email })
	const [ chat, setChat ] = useState([])
	// const {roomcode} = props;
	const [code,setCode] = useState(props.roomcode)
	const socketRef = useRef()

	useEffect(
		
		() => {
			socketRef.current = io.connect("http://localhost:8000")
			socketRef.current.emit("roomcode",{roomcode:code})
			socketRef.current.on("roomcode",({history}) =>{
				// alert(history)	
				// setChat(history)
				console.log(history);
			})
			socketRef.current.on("send message", ({ name, message,code }) => {
				
				setChat([ ...chat, { name, message,code } ])
				
			})
			
			console.log(code);
			return () => socketRef.current.disconnect()
		},
		[ chat ]
	)

	const onTextChange = (e) => {
		setState({ ...state, [e.target.name]: e.target.value })
	}

	const onMessageSubmit = (e) => {
		const { name, message } = state
		socketRef.current.emit("send message", { name, message,code })
		
		
		e.preventDefault()
		setState({ message: "", name })
	}

	const renderChat = () => {
		

		return chat.map(({ name, message }, index) => (
			
			<div key={index}>
		

				<div class="alert alert-warning" role="alert" id="message-list" >{name}: <span style={style.span}>{message}</span></div>
			</div>
		))
	}

	return (
		
		
		
		<div className="card">
			<center>

			<form onSubmit={onMessageSubmit}>
				<h1>Chat</h1>
				

				<div className="render-chat" style={style.render_chat}>
				{renderChat()}
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

