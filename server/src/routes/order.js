import express from 'express';
import {OrderModel} from '../models/Orders.js'


const router=express.Router();

router.post("/reserve",async (req,res)=>{
    const{phone,name,baktana,family,kugeledet}=req.body;
    let date=new Date().toLocaleDateString();
    const now = new Date(); // Get the current date and time in local time

    // Calculate the time in GMT+3
    const gmtPlus3Hours = now.getUTCHours() + 3; // Add 3 hours to the UTC hours
    const minutes = now.getUTCMinutes(); // Get the current minute in GMT (0-59)

    // Handle cases where the hour goes beyond 24 (e.g., GMT+3 on the next day)
    const hours = gmtPlus3Hours >= 24 ? gmtPlus3Hours - 24 : gmtPlus3Hours;

    // Format the hours and minutes with leading zeros if needed
    const formattedHours = hours < 10 ? `0${hours}` : hours.toString();
    const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes.toString();

    // Create a formatted GMT+3 time string in HH:MM GMT+3 format
    const formattedTime = `${formattedHours}:${formattedMinutes}`;

    date= formattedTime+ " "+date;

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