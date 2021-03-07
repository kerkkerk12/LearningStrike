const { json } = require('body-parser');
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
var bcrypt = require('bcrypt');


const port = 8000

const option = {
    useNewUrlParser: true,
    useUnifiedTopology: true
};

app.use(express.json())

// Connect mongodb
mongoose.connect('mongodb://localhost:27017/classroom', option);
// Create User Schema
const userSchema = new mongoose.Schema({
    email: String,
    password: String,
})

userSchema.methods.generateHash = function(password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
  };
  
  // checking if password is valid
userSchema.methods.validPassword = function(password) {
    return bcrypt.compareSync(password, this.password);
  };

// Create User Model
const userModel = new mongoose.model('users', userSchema);


app.get('/', (req, res) => {
    res.json({ message: 'ok' });
})

//query
// app.get('/getUsers', (req, res) => {
//     userModel.find({})
//         .then(users => res.json(users))
//         .catch(error =>
//             res.status(400).json({ message: 'somethibng wrong' }))
// })
app.get('/getUser/:username', (req, res) => {
    const { username } = req.params;

    userModel.find({ username: username })
        .then(data => res.json(data || {}))
        .catch(error =>
            res.status(400).json(error))
})
//register
app.post('/addUser', (req, res) => {
    const { email, password } = req.body;
    
    const newUser = new userModel({
        email,
    })
    newUser.password = newUser.generateHash(password)
    newUser.save()
    res.json({ message: newUser.password })
})

app.post('/login', function(req, res) {
    userModel.findOne({email: req.body.email}, function(err, user) {
  
      if (!user.validPassword(req.body.password)) {
        console.log("no");
        res.json({message:"Incorrect password"})
    } else {
        console.log("matched");
        res.json({message:"Login complete"})
      }
    });
  });

app.listen(port, () => {
    console.log('Running on port: ', port);
})