import express from 'express';
import path from 'path';

let router = express.Router();


router.use('/', (req,res) =>
    res.sendFile(path.resolve("src/views/index.html"))
);

module.exports = router
