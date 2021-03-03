import { Component } from 'react';

export default class Room extends Component {
    render() {

        const { subj, name } = this.props
        return (
            <section>
                <div className="card col" style={{ width: '18rem' ,margin:'35px'}}>
                    <img className="card-img-top" src ={process.env.PUBLIC_URL + '/images/dog.png'} style={{ width: '100%' }} alt="Card image cap" />
                    <div className="card-body">
                        <center>
                        <h5 className="card-title">{subj}</h5>
                        <p className="card-text">{name}</p>

                        <a href="#" className="btn btn-primary">Go to {subj}</a>
                        </center>
                    </div>
                </div>


            </section>
        )
    }
}