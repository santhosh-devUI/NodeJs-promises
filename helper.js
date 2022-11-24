const express= require("express")
const employeeModel =require("./employeeSchema")

module.exports={
    getData:()=>{
        return new Promise((resolve,reject)=>{
            console.log("stage1")
            employeeModel.find((err,data)=>{
                
                if(err){
                    reject(err)
                }else{
                    resolve(data)
                }
            })
            console.log("stage2")
        })
    }
}