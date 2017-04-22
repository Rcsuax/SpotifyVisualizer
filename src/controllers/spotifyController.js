import express from 'express';
import path from 'path';
import axios from 'axios';

let router = express.Router();

router.get('/', (req,res) => {
    const headers = {
        headers: {'Authorization': 'Bearer BQA4vs-rqhbUq-T2MCg2ULJL0rBZdap2mCZnVOT55pPCwLTiDGnSYOj3P6M2nn0DLQlbBKmVBuuGOkRsLQaohDiFsYlNnoWKkBnupjSZMSXis2bT9-4dUwmggODNncZQ3jno0g'}
    }
    axios.get('https://api.spotify.com/v1/audio-analysis/3JIxjvbbDrA9ztYlNcp3yL',headers)
    .then(function (response) {
        res.send(response.data);
    })
    .catch(function (error) {
        console.log(error);
    });
}

);


module.exports = router
