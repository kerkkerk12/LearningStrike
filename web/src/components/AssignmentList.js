import React, { Component } from 'react'

export default class AssignmentList extends Component {
    constructor(props){
        super(props)
        this.state={
            homework:[],
            state:this.props.state
        }
        fetch("http://localhost:8000/getHomework/"+this.state.state.code, {
            method: "get",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
            },
            
        })
        .then((res) => res.json())
        .then((data) => this.setState({homework:data}))
    }
    
    render() {
        
        return (
            <div>
                {this.state.homework.map(hw=>{
                    return(
                        <li className="alert alert-info" style={{margin:'auto'}}><h5>{hw.title} : {hw.details}</h5></li>
                        )

                })}
            </div>
        )
    }
}
