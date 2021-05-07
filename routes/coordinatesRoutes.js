const Coords = require('../models/coordinates');
const express = require('express');
const router =  express.Router();
const distance = require('../helpers/distanceCalc');

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

router.get('/near', async (req, res, next) => {
    
    try {
        const {long, lat} = req.body;
        let coordinates = await Coords.getAll()
        let clos = coordinates.filter((data) => {
            return distance(long, lat, data.long, data.lat) < 5
        })
        console.log(clos)
        return res.status(200).json(coordinates)
    }catch(err) {
        return next(err);
    }
})

module.exports = router;