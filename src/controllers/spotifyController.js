import express from 'express';
import path from 'path';
import axios from 'axios';

let router = express.Router();

router.get('/', (req,res) => {
    const headers = {
        headers: {'Authorization': 'Bearer BQA4vs-rqhbUq-T2MCg2ULJL0rBZdap2mCZnVOT55pPCwLTiDGnSYOj3P6M2nn0DLQlbBKmVBuuGOkRsLQaohDiFsYlNnoWKkBnupjSZMSXis2bT9-4dUwmggODNncZQ3jno0g'},
        transformResponse: [function (data) {
            let json = JSON.parse(data)
            let track = { 'duration': json.track.duration , 'bars' : [] } //{'start': json.segments.start, 'amplitude':json.segments.loudness_max}
            json.segements.forEach(function() {
                track.bars.unshift({'start': json.segments.start, 'amplitude':json.segments.loudness_max})
            })
            return track;
        }],
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
