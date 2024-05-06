const express=require("express");
const router = require("./src/routes/location_routes");

const app=express();

app.use(express.json());
app.use("/api/v1",router);


module.exports=app;