const express = require('express')
const router = express.Router();
const Ninja = require('../models/ninja');

// get a list of ninjas from the db
router.get('/ninjas', function(req, res, next) {
    Ninja.find({}).then(function(ninjas){
        res.send(ninjas);
    });
    Ninja.aggregate().near({
        near: [parseFloat(req.query.lng), parseFloat(req.query.lat)],
        maxDistance: 100000,
        spherical: true,
        distanceField: "dist.calculated"
    }).then(function(ninjas){
        res.send(ninjas);
    });
});


// add a ninja in the db
router.post('/ninjas', function(req, res, next) {
    Ninja.create(req.body).then(function(ninja){
        res.send(ninja);
    }).catch(next);
});


// updates a ninja in the db
router.put('/ninjas/:id', function(req, res, next) {
    Ninja.findByIdAndUpdate({_id: req.params.id}, req.body).then(function() {
        Ninja.findOne({_id: req.params.id}).then(function(ninja) {
            res.send(ninja);
        });
    });
});


// delete a ninja from the db
router.delete('/ninjas/:id', function(req, res, next) {
    Ninja.findByIdAndRemove({_id: req.params.id}).then(function(ninja) {
        res.send(ninja);
    });
});

module.exports = router;
