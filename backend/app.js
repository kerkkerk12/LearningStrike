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
    username: String,
    email: String,
    password: String,
    rooms: Array
})

//Hash password
userSchema.pre('save',async function (next){
    try{
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(this.password,salt)
        this.password = hashedPassword
        next()
        

    }
    catch(error){
        next(error)
    }
})
userSchema.methods.validatePassword = async function validatePassword(data) {
    return bcrypt.compare(data, this.password);
  };
  

// Create User Model
const userModel = new mongoose.model('users', userSchema);


app.get('/', (req, res) => {
    res.json({ message: 'ok' });
})

//query
app.get('/users', (req, res) => {
    userModel.find({})
        .then(users => res.json(users))
        .catch(error =>
            res.status(400).json({ message: 'somethibng wrong' }))
})
app.get('/users/:username', (req, res) => {
    const { username } = req.params;

    userModel.find({ username: username })
        .then(data => res.json(data || {}))
        .catch(error =>
            res.status(400).json(error))
})
app.post('/addUser/:username', (req, res) => {
    const { username } = req.params;
    const { email, password, rooms } = req.body;


    const newUser = new userModel({
        username: username,
        email,
        password,
        rooms
    })
    newUser.save()
    res.json({ message: "complete" })
})


app.listen(port, () => {
    console.log('Running on port: ', port);
})