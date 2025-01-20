import mongoose from "mongoose";
import { DB_URL } from "./serverConfig.js";

export default async function connectDB(){
    try{
        await mongoose.connect(DB_URL);
        console.log("Connected to the database");
    }catch(error){
        console.log("Something went wrong while connecting to the database");
        console.log(error);
    }
}