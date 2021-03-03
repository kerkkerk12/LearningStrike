import Navbar from './Navbar';
import Login from './Login';
import Register from './Register';
import {Component} from 'react'
export default class Main extends Component {
    render(){

        return (
            
            <div style={{ backgroundImage: "url(/images/background.jpg)", height: '100vh', backgroundSize: 'cover' }}>
            {/* <Navbar></Navbar> */}
            {/* <img src="https://burst.shopifycdn.com/photos/wrtiting-tools.jpg?width=1200&format=pjpg&exif=0&iptc=0" style={{minHeight: '100%',minWidth:'100%'}}></img> */}


            <div className="container" style={{ opacity: '0.8' }}>
                <center>
                    <h1 style={{ fontSize: '100px', color: "#ffe666", paddingTop: '100px' }}>CLASSROOM OF GOD</h1>
                    <div className="card" style={{ width: '30rem' }}>
                        {/* <Login></Login> */}
                        <Register></Register>
                    </div>

                </center>
            </div>
            </div>

)
}
}