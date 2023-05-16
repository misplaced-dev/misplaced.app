const mongoose = require('mongoose');
import * as dotenv from "dotenv";

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
        await mongoose.connect(process.env.MONGO_URI).then(() => {
            console.log("SUCCESSFULLY CONNECTED TO DATABASE");
        }).catch((err) => {
            console.log(`ERROR CONNECTING TO DATABASE: ${err}`);
        });
    }
}
