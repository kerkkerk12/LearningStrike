import validator from 'validator'

class Checks {

    LoginValidateEmail(email, password) {
        if (validator.isEmail(email) && password.length > 0) {
            return true;
          } else return false;
    }

    RegisValidateEmail(email, password, cpassword) {
        if (password === cpassword) {
            if (validator.isEmail(email) && password.length > 0) {
                return true;
              } else return false;
        }
        else return false;
    }

    nameCheck(name, lastname) {
        if (name != "" && lastname != ""){
            return true;
        }
        else return false;
    }
}

export default new Checks();