import express from "express";
import cors from 'cors';
import mongoose from 'mongoose';
require('dotenv').config();

import {userRouter} from './routes/user.js'
import {orderRouter} from './routes/order.js'

const app =express();

app.use(express.json());
app.use(cors());

app.use("/auth",userRouter);
app.use("/order",orderRouter);

mongoose.connect(process.env.MONGO);


app.listen(3001,()=>console.log("SERVER STARTED"));
