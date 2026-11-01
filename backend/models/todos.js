import mongoose from "mongoose";


let todoSchema=mongoose.Schema(
    { task:{
        type:String

    },

    status:{
       enum:["completed","pending"],
       type:String
   },



}
)

let createCollection=mongoose.model('createCollection',todoSchema);
export default createCollection;
