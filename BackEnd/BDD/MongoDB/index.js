const express = require('express');
const cors = require('cors');
var  bodyParser = require('body-parser');
var fs = require('fs');
var path = require('path');

const app = express();

var articleRouter = require('./routes/article');
var deliveryRouter = require('./routes/delivery');
var menuRouter = require('./routes/menu');
var orderRouter = require('./routes/order');

var corsOptions = {
    origin: "http://localhost:8080"
  };

app.use(cors(corsOptions));

app.use(express.json());
app.use(express.urlencoded({ extended: false }))

app.use('/api/article',articleRouter);
app.use('/api/delivery',deliveryRouter);
app.use('/api/menu', menuRouter);
app.use('/api/order',orderRouter);

app.use('/uploads', express.static('uploads'));
app.get('/', (req, res) => {
    res.json({
        message: 'Behold The Cesi A4 OraN Stack!'
    });
});

const port = process.env.PORT || 4000;
app.listen(port, () => {
    console.log(`listening on ${port}`);
});