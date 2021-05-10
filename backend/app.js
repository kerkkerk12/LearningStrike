
const express = require('express');
const app = express();

const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const crypto = require('crypto');

const port = 8000
const socketio = require('socket.io');
const { type } = require('os');

const server = app.listen(port, () => {
    console.log('Running on port: ', port);
})

const io = socketio.listen(server)



const option = {
    useNewUrlParser: true,
    useUnifiedTopology: true
};

app.use(express.json())

var allowCrossDomain = function (req, res, next) {
    res.header('Access-Control-Allow-Origin', "*");
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
}
app.use(allowCrossDomain)

// Connect mongodb

var messageModel = mongoose.model('messages', {

    room: String,
    name: String,
    message: String,

})

mongoose.connect('mongodb://localhost:27017/classroom', option, function (err, db) {
    if (err) {
        throw err;
    }
    io.on('connection', socket => {
        var code = "";
        socket.on("in room", ({ roomcode }) => {


            find(roomcode)


            function find(roomcode) {
                messageModel.find({ room: roomcode }, function (err, data) {
                    var history = []
                    data.map((d) => {
                        history = [...history, [d.name, d.message]]
                    })
                    io.emit("in room", { history })
                })
            }


        })
        socket.on('send message', ({ name, message, code }) => {
            console.log(message);
            io.emit('send message', { name, message, code })

            var newMessage = new messageModel({
                room: code,
                name, message,

            })
            newMessage.save()


        })
    })


});
mongoose.set('useFindAndModify', false);


// Create User Schema
const userSchema = new mongoose.Schema({
    email: String,
    password: String,
    name: String,
    lastname: String,
})

userSchema.methods.generateHash = function (password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

// checking if password is valid
userSchema.methods.validPassword = function (password) {
    return bcrypt.compareSync(password, this.password);
};

// Create User Model
const userModel = new mongoose.model('users', userSchema);


app.get('/', (req, res) => {
    res.json({ message: 'ok' });
})



//register
app.post('/addUser', (req, res) => {
    const { email, password, name, lastname } = req.body;
    userModel.findOne({ email: email }, function (err, user) {
        if (user) {
            return res.json({ success: false, message: "Invalid Email" });
        }
        else {
            const newUser = new userModel({
                email,
                name,
                lastname
            })
            newUser.password = newUser.generateHash(password)
            newUser.save()
            console.log("add user");

            // create new join

            const newJoin = new joinModel({
                email,
                rooms: []
            })
            newJoin.save()
            return res.json({ success: true, message: "created" })
        }
    })


})

app.post('/login', function (req, res) {
    userModel.findOne({ email: req.body.email }, function (err, user) {
        if (!user) {
            return res.json({ success: false, message: "User email not found!" });
        }
        else {

            if (!user.validPassword(req.body.password)) {
                console.log("no");
                return res.json({ success: false, message: "Incorrect password" })
            } else {
                return res.json({ success: true, message: "Login complete" })
            }
        }
    });
});
mongoose.set('useCreateIndex', true)

// Create Rooms Schema
const roomSchema = new mongoose.Schema({
    code: String,
    subject: String,
    owner: String,
    members: [],
})
const roomModel = new mongoose.model('rooms', roomSchema)

// Create Join Schema
const joinSchema = new mongoose.Schema({
    email: String,
    rooms: []
})
// Create Join Model
const joinModel = new mongoose.model('joins', joinSchema)
app.post('/joinRoom', (req, res) => {
    const { email, code } = req.body;
    console.log(code);
    joinModel.findOneAndUpdate(
        { email },
        { $push: { rooms: code } },
        function (err, data) {
        }
    )
    roomModel.findOneAndUpdate(
        { code },
        { $push: { members: email } },
        function (err, data) {
        }
    )
    res.json({ message: "Join room complete" })
})


function randomRoomCode(len) {
    return crypto.randomBytes(Math.ceil(len / 2))
        .toString('hex') // convert to hexadecimal format
        .slice(0, len).toLowerCase();   // return required number of characters
}

app.post('/addRoom', (req, res) => {
    const { subject, email } = req.body;

    const newRoom = new roomModel({
        subject,
        owner: email
    })
    //create new room model
    newRoom.members.push(email)
    const newCode = randomRoomCode(6);
    const a = roomModel.findOne({ code: newCode })
    console.log(!a);
    newRoom.code = newCode;
    newRoom.save()
    //create chat

    //Join to this room
    joinModel.findOneAndUpdate(
        { email: email },
        { $push: { rooms: newCode } },
        function (err, data) {
            if (err) {
                console.log(err);
            }
        }
    )

    res.json({ message: "Create room complete" })

})
function getNameByEmail(email) {
    userModel.findOne({ email: email }, function (err, data) {
        return data.name + " " + data.lastname;
    })
}
app.get('/getRoom/:code', (req, res) => {
    const { code } = req.params;
    console.log(code);
    roomModel.findOne({ code: code })
        .then(data => res.json(data))
        .catch(error =>
            res.json(error))
})

app.get('/getJoin/:email', (req, res) => {
    const { email } = req.params;
    joinModel.findOne({ email: email })
        .then(data => res.json(data.rooms))
        .catch(error =>
            res.json(error))
})

// create homework model
const homeworkSchema = new mongoose.Schema({
    room: "",
    title: "",
    details: ""
})

const homeworkModel = new mongoose.model('homeworks', homeworkSchema)

app.post('/createHomework', (req, res) => {
    const { code, title, details } = req.body;
    const newHomework = new homeworkModel({
        room: code,
        title,
        details
    })
    newHomework.save()
    res.json({ success: true })
})

app.get('/getHomework/:code', (req, res) => {
    const { code } = req.params;
    homeworkModel.find({ room: code }, (err, data) => {
        var homework = []
        data.map((d) => {
            homework = [...homework, d]
        })
        res.json(homework)
    })
    console.log("getHomework");
})
app.get('/getTodo/:code', (req, res) => {
    const { code } = req.params;
    var todolist = []
    homeworkModel.find({room:code},(err,data)=>{
        // console.log(data);
        
        data.map(dat=>{
            
            console.log(dat.title);
            todolist.push(dat.title)
        })
        console.log(tokens);
    })
    
})
