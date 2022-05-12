const app = require('express')();
const path = require('path');
require('dotenv').config();

// DB config
require('./database/config').dbConnection();

// Node Server
const server = require('http').createServer(app);
module.exports.io = require('socket.io')(server);
require('./sockets/socket');


server.listen( process.env.PORT, (err) => {
if (err) throw new Error(err);

console.log('Servidor corriendo en puerto!!', process.env.PORT);
});