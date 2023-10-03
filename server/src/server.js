import startMongo from "./config/mongo.config.js";
import express from "express";
import cors from "cors";
import UserRoutes from "./routes/user.routes.js";
import PostRoutes from "./routes/post.routes.js";
import MediaRoutes from "./routes/media.routes.js";
import LocationRoutes from "./routes/location.routes.js";
import dotenv from "dotenv";
dotenv.config();

const app = express();


const corsOptions = {
  origin: (origin, callback) => {
    const allowedOrigins = "https://misplaced.app";
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
};

app.use(cors(corsOptions));


startMongo();


app.use("/api/user", UserRoutes);
app.use("/api/post", PostRoutes);
app.use("/api/media", MediaRoutes);
app.use("/api/location", LocationRoutes);


app.use(express.json());


app.get("/", (req, res) => {
  res.json({ message: "WELCOME TO MISPLACED API." });
});
app.listen(4000);
console.log("SERVER RUNNING ON PORT 4000");