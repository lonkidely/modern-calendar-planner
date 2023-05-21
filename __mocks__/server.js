'use strict';

const express = require('express');
const path = require('path');
const app = express();

app.use('/',express.static(path.resolve(__dirname, '../dist')));
app.use('/login',express.static(path.resolve(__dirname, '../dist')));
app.use('/signup',express.static(path.resolve(__dirname, '../dist')));
app.use('/goals',express.static(path.resolve(__dirname, '../dist')));

const default_port = 80;
let currentPort = process.argv[2]
if (!currentPort) {
    currentPort = default_port
}

const port = process.env.PORT || (+currentPort);

app.listen(port, function () {
    console.log(`Server listening port ${port}`);
});
