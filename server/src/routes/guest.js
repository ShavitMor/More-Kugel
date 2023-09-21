import express from 'express';
import {GuestModel} from '../models/Guests.js'


const router=express.Router();

router.post("/addGuest",async (req,res)=>{
    const{phone,name}=req.body;
    const phoner= await GuestModel.findOne({ phone });

    if(phoner){
        return res.json({message:"number already exists!"});
    }
    const newGuest=new GuestModel({phone,name});
    await newGuest.save();

    res.json({message:"number Joined Succesfully!"});

});

export {router as guestRouter};