const express = require("express");
const router = express.Router();
const db = require("../models")

//Get last workout
router.get("/api/workouts", function (req, res) {
    db.Workout.find().then(dbresults => {
        res.json(dbresults)
    })
        .catch(err => {
            res.status(400).json(err);
        });
});
//Create workout
router.post("/api/workouts", function ({ body }, res) {
    db.Workout.create(body).then(dbresults => {
        res.json(dbresults);
    })
        .catch(err => {
            res.status(400).json(err);
        });
});
router.put("/api/workouts/:id", function (req, res) {
    db.Workout.findByIdAndUpdate(req.params.id, { $push: { exercises: req.body } }, { new: true})
        .then(dbresults => {
            console.log(dbresults)
            res.json(dbresults)
        }).catch(err => {
            res.status(400).json(err);
        });
});
router.get("/api/workouts/range", function (req, res) {
    db.Workout.find().limit(7).then(dbresults => {
        res.json(dbresults)
    })
        .catch(err => {
            res.status(400).json(err);
        });
})

module.exports = router