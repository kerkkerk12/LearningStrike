import { Component } from 'react';
import Room from './Room';
import React from 'react'

export default class Rooms extends Component {
    constructor(props) {
        super(props);
        this.state = { rooms: [] }

    }
    componentDidMount() {
        const requestOption = {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' }
        }
        fetch('http://localhost:8000/getJoin/'+window.email, requestOption)
            .then(res => res.json())
            .then(data => this.setState({ rooms: data }))

    }


    render() {


        return (

            <div className="row" >
                
                {this.state.rooms && this.state.rooms.map(room => {
                    return (
                        <Room
                            code={room}
                            rooms={this.state.rooms}
                        >
                        </Room>

                    )
                })}
                

            </div>
        )


    }
}