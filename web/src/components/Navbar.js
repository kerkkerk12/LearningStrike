import { Component } from "react";
import auth from "./AUTH/auth";
import { Link } from 'react-router-dom';
import React from 'react'


export default class Navbar extends Component {
  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    auth.logout();
    localStorage.clear()
    window.location.reload();
<<<<<<< HEAD
<<<<<<< HEAD
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <AppBar position="static" style={{ backgroundColor: "#ffb137",fontFamily:"Adobe Fan Heiti Std " }}>
        <Toolbar>
          <Typography  variant="h4"style={{ color: 'black'}}>
            Learning Strike
          </Typography>
          <div className="d-grid gap-2 d-md-flex justify-content-md-end" style={{ marginLeft: "850px" }}>
            <Button color="primary"size="large">
              <Link to = "/home" style={{ color: 'white'}}>Home</Link>
            </Button>
            <Button color="primary"size="large">
              <Link to = "/editroom" style={{ color: 'white'}}>Edit room</Link>
            </Button>
            <Button color="primary" size="large">
              <Link to = "/todo" style={{ color: 'white'}}>To do work</Link>
            </Button>
            <div>
              <Button
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
                size="large"
              >
                account
              </Button>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right"
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right"
                }}
                open={open}
                onClose={handleClose}
              >
                <MenuItem>{window.email}</MenuItem>
                <MenuItem onClick={onClick}>Logout</MenuItem>
              </Menu>
=======
  }
  render() {
    return (
      <div>
        <div style={{backgroundColor: "#000000" ,border: "1px solid"}}></div>
        <div style={{backgroundColor: "#000000" ,border: "1px solid"}}></div>
        <nav
          className="navbar navbar-expand-lg navbar-light"
          style={{ backgroundColor: "#ffb137",fontFamily:"Adobe Fan Heiti Std " }}
        >
          <div className="container-fluid">
            <span className="navbar-brand" ><Link to = "/home" style={{ color: 'inherit', textDecoration: 'inherit'}}><h1>Learning Strike</h1></Link></span>
            <div className="d-grid gap-2 d-md-flex justify-content-md-end">
              <a style={{ marginRight: "30px", marginTop: "auto" }}><Link to = "/home" style={{ color: 'kram blue', textDecoration: 'inherit'}}><h2>Home</h2></Link></a>
              <a style={{ marginRight: "30px", marginTop: "auto" }}><Link to = "/editroom" style={{ color: 'kram blue', textDecoration: 'inherit'}}><h2>Edit Room</h2></Link></a>
              <a style={{ marginRight: "30px", marginTop: "auto" }}><Link to = "/todo" style={{ color: 'kram blue', textDecoration: 'inherit'}}><h2>To do work</h2></Link></a>
              
              <h2 style={{marginTop: "auto",fontFamily:"Adobe Fan Heiti Std",color:"#000000"}}><b>{window.email}&nbsp;</b></h2>
             
              <img
                src={process.env.PUBLIC_URL + "/images/usericon.png"}
                style={{width: "60px" }}
                
              ></img>
              &nbsp;&nbsp;
              <a
                className="btn btn-danger me-md-2"
                type="button"
                onClick={this.onClick}
                data-bs-toggle="modal"
                style={{ margin: "auto" ,color:"white"}}
              >

                Logout
                
              </a>
>>>>>>> parent of 915e1c0e (change navbar logo)
=======
  }
  render() {
    return (
      <div>
        <div style={{backgroundColor: "#000000" ,border: "1px solid"}}></div>
        <div style={{backgroundColor: "#000000" ,border: "1px solid"}}></div>
        <nav
          className="navbar navbar-expand-lg navbar-light"
          style={{ backgroundColor: "#ffb137",fontFamily:"Adobe Fan Heiti Std " }}
        >
          <div className="container-fluid">
            <span className="navbar-brand" ><Link to = "/home" style={{ color: 'inherit', textDecoration: 'inherit'}}><b><h1>Learning Strike</h1></b></Link></span>
            <div className="d-grid gap-2 d-md-flex justify-content-md-end">
              <a style={{ marginRight: "30px", marginTop: "auto" }}><Link to = "/home" style={{ color: 'kram blue', textDecoration: 'inherit'}}><h2>Home</h2></Link></a>
              <a style={{ marginRight: "30px", marginTop: "auto" }}><Link to = "/editroom" style={{ color: 'kram blue', textDecoration: 'inherit'}}><h2>Edit Room</h2></Link></a>
              <a style={{ marginRight: "30px", marginTop: "auto" }}><Link to = "/todo" style={{ color: 'kram blue', textDecoration: 'inherit'}}><h2>To do work</h2></Link></a>
              
              <h2 style={{marginTop: "auto",fontFamily:"Adobe Fan Heiti Std",color:"#000000"}}><b>{window.email}&nbsp;</b></h2>
             
              <img
                src={process.env.PUBLIC_URL + "/images/usericon.png"}
                style={{width: "60px" }}
                
              ></img>
              &nbsp;&nbsp;
              <a
                className="btn btn-danger me-md-2"
                type="button"
                onClick={this.onClick}
                data-bs-toggle="modal"
                style={{ margin: "auto" ,color:"white"}}
              >
                Logout
              </a>
>>>>>>> parent of c750f45e (ปรับnavbarนิดหน่อย/editroom)
            </div>
          </div>
        </nav>
        <div style={{backgroundColor: "#000000" ,border: "1px solid"}}></div>
        <div style={{backgroundColor: "#000000" ,border: "1px solid"}}></div>
      </div>
    );
  }
}
