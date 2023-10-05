import mongoose from "mongoose";

const GuestSchema = new mongoose.Schema({
    phone: {type:String,required:true,unique:true},
    name: {type: String , required: true},
});

export const GuestModel =mongoose.model("guests",GuestSchema);

