
const express =require("express")
const application= express()
const router=express.Router()
const employeeModel =require("./employeeSchema")
const mongoose = require('mongoose')
const {getData} =require("./helper")


application.use(express.json())
application.use(express.urlencoded({extended:true}))



application.post("/create", (req,res)=>{
  const postData = new employeeModel(req.body)
  postData.save().then(dbres=>{
    res.json(dbres)
    console.log(dbres,"Database response")
  })
})
application.get("/get", (req,res)=>{
  getData().then(result=>{
  console.log(result,"result")
  res.send(result)
 }).catch(error=>{
  console.log("recieved Error", error)
 })
 
})
mongoose.connect('mongodb://localhost:27017/office-Employees', err=>{
    if(!err){
        console.log('DB connect Successfully')
    }else{
        console.log('App Crashed')
    }
})

application.listen(2141)