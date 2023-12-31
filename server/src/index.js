import express from "express";
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

import {userRouter} from './routes/user.js'
import {orderRouter} from './routes/order.js'
import {guestRouter} from './routes/guest.js'


const app =express();

app.use(express.json());
app.use(cors());

app.use("/auth",userRouter);
app.use("/order",orderRouter);
app.use("/visit",guestRouter);


mongoose.connect(process.env.MONGO);


app.listen(3001,()=>console.log("SERVER STARTED"));
