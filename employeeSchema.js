var mongoose=require("mongoose")
var employeeSchema = new mongoose.Schema({
    name:{
        type:String
    },
    designation:{
        type:String
    },
    gender:{
        type:String
    },
    bloodGroup:{
        type:String
    },
})
module.exports=mongoose.model("Employees", employeeSchema)