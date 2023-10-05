import mongoose from "mongoose";

const OrdersSchema=new mongoose.Schema({
    phone: {type: String , required: true},
    name:{type: String , required:true},
    baktana:{type:Number,required:true},
    family:{type:Number,required:true},
    kugeledet:{type:Number,required:true},
    date:{type: String},
});

export const OrderModel =mongoose.model("orders",OrdersSchema);

