import React from "react";

import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";


import auth from "./AUTH/auth";
import { Link } from 'react-router-dom';
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";


export default function MenuAppBar() {

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const onClick = () => {
    auth.logout();
    localStorage.clear()
    window.location.reload();
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
            </div>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}