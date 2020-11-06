const express = require("express");
const router = express.Router();


router.get("/exercise",function(req,res){

});
router.get("/stats",function(req,res){
    
});
router.get("/",function(req,res){
    res.sendFile()
})

module.exports = router