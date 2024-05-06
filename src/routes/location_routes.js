const express=require("express");
const { location } = require("../controllers/location_controller");
const router=express();


router.get("/location",location)


module.exports=router;