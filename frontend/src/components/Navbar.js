import { Component } from 'react';

export default class Navbar extends Component {
    render(){

        return (
            <div>
            <nav className="navbar navbar-expand-lg navbar-light" style={{ backgroundColor: '#DEA80A' }}>
                <div className="container-fluid">
                    <span className="navbar-brand">CLASS HUB</span>
                    <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                        <a style={{ marginRight: '30px', marginTop: 'auto' }}>Calendar</a>
                        <a style={{ marginRight: '30px', marginTop: 'auto' }}>Todo work</a>
                        {/* <button className="btn me-md-2" type="button" data-bs-toggle="modal" data-bs-target="#loginPopup" style={{ marginLeft: '15px' ,backgroundColor:'#f5c27d'}}>Login</button>
                    <button className="btn me-md-2" type="button" data-bs-toggle="modal" data-bs-target="#registerPopup" style={{ marginLeft: '15px',backgroundColor:'#ff9966'}}>REGISTER</button> */}
                        <img src ={process.env.PUBLIC_URL + '/images/dog.png'} style={{ width: '50px' }}></img>
                    </div>
                </div>

            </nav>
        </div>
    )
}
    
}