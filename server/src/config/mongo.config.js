import mongoose from "mongoose";
import * as dotenv from 'dotenv';
dotenv.config()

export default function startMongo() {
    mongoose.connect(process.env.MONGO_URI).then(() => {
        console.log("SUCCESSFULLY CONNECTED TO DATABASE");
    }).catch((err) => {
        console.log(`ERROR CONNECTING TO DATABASE: ${err}`);
    });
}