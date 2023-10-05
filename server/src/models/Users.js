import mongoose from "mongoose";

const UserSchema=new mongoose.Schema({
    name: {type: String , required: true},
    password:{type:String,required:true},
    phone:{type:String,required:true,unique:true},
});

export const UserModel =mongoose.model("users",UserSchema);

