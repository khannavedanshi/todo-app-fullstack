
import express from "express";
import mongoose from "mongoose";
import createCollection from "../models/todos.js";
import cors from "cors";
import dotenv from "dotenv";


import dns from "node:dns";
dns.setServers(["8.8.8.8", "8.8.4.4"]);

try{
let mongodbConnect= await mongoose.connect(process.env.MONGO_URI)
        console.log("server is connected to mongodb Atlas successfully")
}catch(error){

    console.log(error);
}


let server=express();

server.use(express.json())
server.use(cors())//activating cors

server.post('/create',async (req,res)=>{
    console.log("hey i am post request");
    // let {task,status}=req.body;
    let result=await createCollection.create(req.body);

    //mongodb listen send back to frontend after saving it ok
    res.json(result);

//    res.status(201).json(result);
//    console.log(result);




})






server.delete('/delete/:id',async (req,res)=>{
    console.log("hi i am delete");
    //dekho given id kya hai 
    let givenId=req.params.id;
    //id ko select kro 
    // createCollection.findById(givenId);

    //id ko delete kro
    let b= await createCollection.findByIdAndDelete(givenId);
    res.json("its get deleted");
    // console.log(createCollection);

})






server.get('/refresh',async (req,res)=>{
    let ref= await createCollection.find({})
    res.json(ref);
})





server.listen(1000,()=>{
    console.log("i am listenng");
})


