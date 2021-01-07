const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = new express();
app.use(bodyParser.json());
app.use(cors());

mongoose.connect('mongodb+srv://rook:rook55555@cluster0.uvqch.mongodb.net/feelthMERN?retryWrites=true&w=majority',
 { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true },
 () => console.log('Database Connection Established.....'));

 const messageRoute = require('./routes/messages');
 app.use('/messages', messageRoute);

 const userRoute = require('./routes/users');
 app.use('/users', userRoute);

app.listen(5000, () => console.log('Listening to port 5000'));