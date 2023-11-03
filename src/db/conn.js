// getting express
const express=require("express");
const path = require('path');

// creating database 
const mongoose=require("mongoose")
mongoose.connect("mongodb://127.0.0.1:27017/PragyaDynamic", { useNewUrlParser: true,
 useUnifiedTopology: true,
 }).then(()=>{
    console.log("connection is succesful")
 }).catch((e)=>{
console.log("NO connection")
 })
