'use strict'

const http = require('http');
const path = require('path');

const { port, host } = require('./config.json');

const server = http.createServer(

)
server.listen(port, host,
    () => console.log(`${host}:${port} serving...`));