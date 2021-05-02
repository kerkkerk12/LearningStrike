import auth from "./auth";
import { Redirect } from "react-router-dom";
class token {
  constructor() {
    this.email = "";
    this.password = "";
    
  }

  setToken() {
      
      let JSON_token = localStorage.getItem("token");
      let tokens = JSON.parse(JSON_token);
      this.email = tokens.email;
      this.password = tokens.password;

      fetch("http://localhost:8000/login", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: this.email,
          password: this.password,
        }),
      }).then(auth.login(), (window.email = this.email));
    
  }

  clearToken() {
    localStorage.clear();
  }
}

export default new token();
