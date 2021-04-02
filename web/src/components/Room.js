import { Component } from 'react';
import { Link } from 'react-router-dom';
import React from 'react'

export default class Room extends Component {
    constructor(props) {
        super(props);
        this.state = {
            code: props.code,
            rooms:props.rooms,
            subject: '',
            owner: ''
        }
    }
    componentDidMount() {
        const requestOption = {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' }
        }
        console.log(this.state.code);
        fetch('http://localhost:8000/getRoom/' + this.state.code, requestOption)
            .then(res => res.json())
            .then(data => this.setState({ subject: data.subject, owner: data.owner }))

    }
    render() {
        return (
            <section>
                <div className="card col" style={{ width: '18rem', margin: '30px' }}>
                    <img className="card-img-top" src={process.env.PUBLIC_URL + '/images/dog.png'} style={{ width: '100%' }} alt="Card image cap" />
                    <div className="card-body">
                        <center>
                            <h5 className="card-title">{this.state.subject}</h5>
                            <p className="card-text">owner: {this.state.owner}</p>

                            <Link to={{
                                pathname :'/mainroom',
                                state:this.state
                            }} className="btn btn-primary">Go to  {this.state.subject}</Link>
                        </center>
                    </div>
                </div>


            </section>
        )
    }
}