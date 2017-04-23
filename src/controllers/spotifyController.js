import express from 'express';
import path from 'path';
import axios from 'axios';

let router = express.Router();

router.get('/', (req,res) => {
    const headers = {
        headers: {'Authorization': 'Bearer BQAcMC_avtNAtrhQLWkzWWimOVHj13gaj3MZ1qMjh7ffgkz2nDJ48J_lXQy8GmRvI9Sd1R73CmMwLw18Jm85UtTnjIHAW1ZrS7N5rVg0i9qR8JRcy4QKZSXczlhXZfFiV-li1Q'},
        transformResponse: [function (data) {
            let json = JSON.parse(data)
            let track = { 'duration': json.track.duration , 'bars' : [] }
                json.segments.forEach(function(seg) {
                    track.bars.unshift({'start': seg.start, 'amplitude': seg.loudness_max})
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
