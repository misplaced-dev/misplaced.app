import mongoose from "mongoose";
import dotenv from 'dotenv'

export class MongoDB {
    /**
     * Load environment variables and connect to database
     */
    static async init() {
        dotenv.config();
        await this.connect();
    }

    /**
     * A function to connect to the database
     */
    static async connect() {
        await mongoose.connect("mongodb+srv://admin:fueaeOkvDiFpv836@misplacedcluster.557fujv.mongodb.net/misplaced?retryWrites=true&w=majority").then(() => {
            console.log("SUCCESSFULLY CONNECTED TO DATABASE");
        }).catch((err) => {
            console.log(`ERROR CONNECTING TO DATABASE: ${err}`);
        });
    }
}
