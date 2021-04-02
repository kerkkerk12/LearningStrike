class Checks {
    constructor() {

    this.emailCheck = false;
    this.passCheck = false;

    }

    Length(email, password) {
        this.emailCheck = false;
        this.passCheck = false; 
        
        if (email.length > 0 ) {
            this.emailCheck = true
        }
        if (password.length > 0 ) {
            this.passCheck = true
        }
        if (this.emailCheck === true && this.passCheck === true) {
            return true;
        }else{ 
            return false; 
        }

    }

}

export default new Checks();