const app = require('express')();
const bodyParser = require('body-parser');
const server = require('http').createServer(app);
const io = require('socket.io')(server);

app.use(bodyParser.json());

//Socket.io
io.on('connect', (socket) => {

    socket.on('change color', (color) => {
        console.log('color changed to:', color);
        io.sockets.emit('change color', color);
    })

    socket.on('disconnect', () => {
        console.log('User disconnected')
    })
});

server.listen(3004, function(err){
    if (err) throw err;
    console.log(`Sever runnning on Port: ${this.address().port}`)
});