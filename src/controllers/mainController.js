import express from 'express'
let router = express.Router()

router.use('/', (req,res) =>
    res.send("")
);

module.exports = router
