import express from 'express';
import path from 'path';
import axios from 'axios';

let router = express.Router();

router.get('/', (req,res) => {
    axios.get('https://jsonplaceholder.typicode.com/posts')
    .then(function (response) {
        res.send(response.data);
    })
    .catch(function (error) {
        console.log(error);
    });
}

);


module.exports = router
