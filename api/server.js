const MongoDB = require('../server/src/config/mongo.config.js');
const express = require('express');
const cors = require('cors');
const UserRoutes = require('../server/src/routes/user.routes.js');
const PostRoutes = require('../server/src/routes/post.routes.js');
const MediaRoutes = require('../server/src/routes/media.routes.js');
const LocationRoutes = require('../server/src/routes/location.routes.js');

export class Server {
  app;
 
  /**
   * A function to start the server
   */
  static start() {
    // connect to db
    MongoDB.init();
    this.app = express();
    this.middleware();
    this.setPort();
    this.routes();
    this.listen();
  }

  // set port
  static setPort() {
    this.app.set("port", 4000);
  }

  // set routes
  static routes() {
    this.app.use("/api/user", UserRoutes);
    this.app.use("/api/post", PostRoutes);
    this.app.use("/api/media", MediaRoutes);
    this.app.use("/api/location", LocationRoutes);
  }

  // set middleware
  static middleware() {
    this.app.use(express.json());
    // enable CORS for all domains
    this.app.use(cors());

    // enable CORS for specific domains
    this.app.use(cors({ origin: "https://misplaced.app" }));
  }

  // listen
  static async listen() {
    // api init
    this.app.get("/", (req, res) => {
      res.json({ message: "WELCOME TO MISPLACED API." });
    });
    this.app.listen(this.app.get("port"));
    console.log("SERVER RUNNING ON PORT", this.app.get("port"));
  }
}
