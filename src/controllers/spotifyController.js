import express from 'express';
import path from 'path';
import https from 'https';
import request from 'request';
import parser from 'parse-json';

let router = express.Router();

router.get('/', (req,res) =>
    res.send(getData())
);


module.exports = router

function getData(){
    let options = {
        host : 'api.spotify.com',
        path : '/v1/audio-analysis/3JIxjvbbDrA9ztYlNcp3yL',
        port : 443,
        'Content-Length': Buffer.byteLength(100000),
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            Authorization: 'Bearer BQAT-f5Rgt8srhNCjWN_nABr2MOaUhiLgO7o8mR362oW13DE3VXCcprV71dMC4BJx-ADv_tBxdoWs5pRbiYSSwWiGZvOgqwNJu1pLn3UH9jIIvZJwCIDQX2RXM5ib7rZ__qdag'
        }
    };

    let request = https.get(options, function(response) {
        let result = '';
        console.log(response.statusCode);

        response.on('data', function(chunk) {
            result += chunk;
        });

        response.on('end', function() {
            console.log(result);
        });

        request.on('error', function(e) {
          console.error(e);
        });
    });
}
