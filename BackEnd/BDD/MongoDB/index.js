const express = require('express');
const cors = require('cors');
const app = express();


var articleRouter = require('./routes/article');
var deliveryRouter = require('./routes/delivery');
var menuRouter = require('./routes/menu');
var orderRouter = require('./routes/order');
var notificationRouter = require('./routes/notification');


var corsOptions = {
    origin: "*"
  };

app.use(cors(corsOptions));

app.use(express.json());
app.use(express.urlencoded({ extended: false }))

app.use('/api/article',articleRouter);
app.use('/api/delivery',deliveryRouter);
app.use('/api/menu', menuRouter);
app.use('/api/order',orderRouter);
app.use('/api/notification',notificationRouter);


app.use('/uploads', express.static('uploads'));

app.get('/', (req, res) => {
    
    res.json({
        message: 'Behold The Cesi A4 OraN Stack!'
    });
});

var http    = require('http').Server(app);
var io      = require('socket.io')(http);

const port = process.env.PORT || 4000;
http.listen(port, () => {
    console.log(`listening on ${port}`);
});

io.on('connect', function (socket) {
    socket.on('userConnected', socket.join);
    socket.on('userDisconnected', socket.leave);
    socket.on('sendnotif',function(data){
        console.log('goood');
        console.log(data.id_user);
        io.sockets.to(data.id_user).emit('receivenotif',data);
    });
    socket.on('realtimemanagercommande',function (data){
        console.log(data);
        io.emit('getcommandesatut',data);
    })
  });
