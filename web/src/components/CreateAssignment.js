import React, { Component } from 'react'

export default class CreateAssignment extends Component {
    constructor(props){
        super(props)
        this.state={
            title:"",
            details:"",
            state:this.props.state
        }

        this.handleChange = this.handleChange.bind(this);
        this.Submit = this.Submit.bind(this);
    }
    handleChange(e){
        if(e.target.name==="title"){
            this.setState({title:e.target.value})
        }
        if(e.target.name === "details"){
            this.setState({details:e.target.value})
        }
        
    }
    Submit(){
        fetch("http://localhost:8000/createHomework", {
            method: "POST",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              code:this.state.state.code,
              title:this.state.title,
              details:this.state.details

            })
        })
        this.setState({title:"",details:""})
    }
    
    render() {
        if(this.state.state.owner === window.email){
            
        return (
            <div style={{ marginLeft: "auto", marginRight: "auto" ,marginBottom:"30px"}}>
            <ul className="list-group" style={{backgroundColor:"white"}}>
                <li className="list-group-item"><h1>Create Assignment</h1></li>
                <h4>Title</h4>
                <textarea className="form-control" id="exampleFormControlTextarea1" rows={2} value={this.state.title} name="title" onChange={this.handleChange} />
                <h4>Details</h4>
                <textarea className="form-control" id="exampleFormControlTextarea1" rows={2} value={this.state.details} name="details" onChange={this.handleChange}/>
                <button className="btn btn-success" type="submit" id="messageBtn" onClick={this.Submit}>Create</button><br></br>


            </ul>
            

        </div>
        )
    }
    else{
        return(
            <div>
                
            </div>
        )
    }
    }
}
