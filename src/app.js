"use strict";

import express from 'express';

let app = express();
let port = process.env.PORT || 8080;

app.use(require(__dirname + '/controllers/mainController.js'));

app.listen(port, () => console.log('express running on port 8080'));
