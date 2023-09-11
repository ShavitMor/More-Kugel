import express from 'express';
import {UserModel} from '../models/Users.js'


const router=express.Router();

router.post("/register",async (req,res)=>{
    const{phone,name}=req.body;
    const phoner= await UserModel.findOne({ phone });

    if(phoner){
        return res.json({message:"number already exists!"});
    }
    const newUser=new UserModel({phone,name})
    await newUser.save();

    res.json({message:"number Joined Succesfully!"});

});

export {router as userRouter};