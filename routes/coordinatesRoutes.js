const Coords = require('../models/coordinates');
const express = require('express');
const router =  express.Router();

router.post('/register', async (req, res, next) => {
    try {
        const {long, lat} = req.body;
        let coordinates = await Coords.addCoordinate({long, lat})
        return res.status(200).json(coordinates)
    }catch(err) {
        return next(err);
    }
})

router.get('/', async (req, res, next) => {
    return res.send("Locations")
})

module.exports = router;