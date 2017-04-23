import express from 'express';
import path from 'path';
import axios from 'axios';

let router = express.Router();

router.get('/', (req,res) => {
    const headers = {
        headers: {'Authorization': 'Bearer BQBh5_8d2S51Zz3EPMOSfmfmH4bKAB7CBwo3IGylIds2n0AS2lldqFyCx4I8F8TJzN3uO8h9DAhO7PrMGHwlBuxLLyZEpGF2i8UhmcZmB8pfVHnUbwgWgCF9_WFHzExfX2b4_w'},
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
