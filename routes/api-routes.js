const express = require("express");
const router = express.Router();
const db = require("../models")

router.get("/api/workouts",function(req,res){
db.Workout.find().then(dbresults => {
    res.json(dbresults)
})
});
router.post("/api/workouts",function(req,res){
    
});
router.put("/api/workouts/:id",function(req,res){
    
});
router.get("/api/workouts/range",function(req,res){
    
})

module.exports = router