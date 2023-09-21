import express from 'express';
import {UserModel} from '../models/Users.js'


const router=express.Router();

router.post("/register",async (req,res)=>{
    const{name,password,phone}=req.body;
    const phoner= await UserModel.findOne({ phone });

    if(phoner){
        return res.json({message:"number already exists!"});
    }
    const newUser=new UserModel({name,password,phone})
    await newUser.save();

    res.json({message:"user registered Succesfully!"});

});

export {router as userRouter};