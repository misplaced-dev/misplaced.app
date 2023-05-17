import mongoose from "mongoose";

export default class MongoDB {
  /**
   * Load environment variables and connect to the database
   */
  static async init() {
    await this.connect();
  }

  /**
   * A function to connect to the database
   */
  static async connect() {
    try {
      await mongoose.connect("mongodb+srv://admin:fueaeOkvDiFpv836@misplacedcluster.557fujv.mongodb.net/misplaced?retryWrites=true&w=majority", {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });
      console.log("SUCCESSFULLY CONNECTED TO DATABASE");
    } catch (err) {
      console.log(`ERROR CONNECTING TO DATABASE: ${err}`);
    }
  }
}
