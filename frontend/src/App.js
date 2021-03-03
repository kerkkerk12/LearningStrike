import './App.css';
import Main from './components/Main';
import Home from './components/Home';
import {Component} from 'react';
// import dog from 'process.env.PUBLIC_URL/images/dog.png';
export default class App extends Component {
  render(){

    return (
      <div style={{overflowX:'hidden'}}>
      <Home></Home>
      {/* <Main></Main> */}
    {/* <div style = {{backgroundImage:"url(/images/background.jpg)",height:'100vh',backgroundSize: 'cover'}}> */}
      {/* <Main></Main> */}
      {/* <img src="/images/background.jpg"></img> */}
      
    
    {/* </div> */}
    </div>
  );
}
}
