import express from 'express';
import {UserModel} from '../models/Users.js'
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken"
import mongoose from "mongoose";

const router=express.Router();

router.post("/register",async (req,res)=>{
    const{name,password,phone}=req.body;
    const user= await UserModel.findOne({ name });

    if(user){
        return res.json({message:"number already exists!"});
    }
    const hashedPassword=await bcrypt.hash(password,10);

    const newUser=new UserModel({name,password: hashedPassword,phone})
    await newUser.save();

    res.json({message:"user registered Succesfully!"});

});

router.post("/login",async (req,res)=>{
    const{username,password}=req.body;
    const user= await UserModel.findOne({ name:username });
    if(!user){
        return res.json({message:"user not exists!"});
    }

    const isPasswordValid=await bcrypt.compare(password,user.password);

    if(!isPasswordValid){
        return res.json({message:"user name or password incorrect!"});
    }

    const token=jwt.sign({id:user._id},process.env.SECRET);
    res.json({token,userID:user._id});

});

    router.get("/getClient",async (req,res)=>{
        const { name } = req.query; 
        const user= await UserModel.findOne({ name });
        if(!user){
            return res.json({message:"No Such User!"});
        }
        
        res.json({ user });

    });

    router.get("/getUser", async (req, res) => {
        const ObjectId = mongoose.Types.ObjectId;
        const { Id } = req.query;
      
        try {
          // Convert the string to an ObjectId
          const objectId = new ObjectId(Id);
      
          const user = await UserModel.findOne({ _id: objectId });
      
          if (user) {
            res.status(200).json(user); // Send the user as a JSON response
          } else {
            res.status(404).json({ error: "User not found" }); // Send a 404 response if user not found
          }
        } catch (error) {
          console.error('Error fetching user:', error);
          res.status(500).json({ error: "Internal server error" }); // Handle other errors with a 500 response
        }
      });
   
    
export {router as userRouter};