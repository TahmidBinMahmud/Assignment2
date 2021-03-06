var app = require('express')();
var http = require('http').createServer(app);
var io = require('socket.io')(http);
var bodyParser = require("body-parser");
var db_url = "mongodb+srv://Tahmid:asdf@cluster0-mzzjc.mongodb.net/test?retryWrites=true&w=majority"
var mongoose = require("mongoose");
mongoose.connect(db_url, { useNewUrlParser: true });
mongoose.connection.on('error', function(err){
  console.log(err);
  console.log('Could not connect to mongodb');
})

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

// app.use(express.static(path.join(__dirname, 'static')));


app.get('/', function (req, res) {
    res.sendFile(__dirname + '/index.html');
});



// io.on('connection', function (socket) {
//     console.log('a user connected');
//     socket.on('disconnect', function () {
//         console.log('user disconnected');
//     });
// });

// io.on('connection', function(socket){
//     socket.on('chat message', function(msg){
//       console.log('message: ' + msg);
//     });
//   });

io.on('connection', function(socket){
    socket.on('chat message', function(msg){
      io.emit('chat message', msg);
    });
    // socket.on("chat message", function(msg) {
    //   console.log("message: "  +  msg);
    //   //broadcast message to everyone in port:5000 except yourself.
    //   socket.broadcast.emit("received", { message: msg  });
    //   });
  });
require('./routes/routes.js')(app);
http.listen(process.env.PORT || 3000, function() {
    console.log('listening on *:3000');
});