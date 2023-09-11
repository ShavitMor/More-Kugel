import express from 'express';
import {OrderModel} from '../models/Orders.js'


const router=express.Router();

router.post("/reserve",async (req,res)=>{
    const{phone,name,baktana,family,kugeledet}=req.body;
    const date=new Date();
    const newOrder=new OrderModel({phone,name,baktana,family,kugeledet,date});
    await newOrder.save();

    res.json({message:"Order Saved Succesfully!"});

});

router.get("/reserve",async (req,res)=>{
    try {
        const { phone } = req.query; 
    
        if (!phone) {
          return res.status(400).json({ error: "Phone number is required" });
        }
    
        const orders = await OrderModel.find({ phone });
    
        res.status(200).json({ orders });
      } catch (error) {
        console.error("Error fetching orders:", error);
        res.status(500).json({ error: "Internal server error" });
      }

});



export {router as orderRouter};