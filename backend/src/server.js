const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const routes = require('./routes');

mongoose.connect('mongodb+srv://splhead:.super.84@cluster0-o30ov.mongodb.net/omnistack8?retryWrites=true&w=majority', {
    useNewUrlParser: true,
});

const server = express();

server.use(cors())
server.use(express.json());
server.use(routes);

server.listen(3333);