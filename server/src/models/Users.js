import mongoose from "mongoose";

const UserSchema=new mongoose.Schema({
    phone:{type:String,required:true,unique:true},
    name: {type: String , required: true},
});

export const UserModel =mongoose.model("users",UserSchema);

