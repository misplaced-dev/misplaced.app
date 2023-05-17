import MongoDB from "./config/mongo.config.js";
import express from "express";
import cors from "cors";
import UserRoutes from "./routes/user.routes.js";
import PostRoutes from "./routes/post.routes.js";
import MediaRoutes from "./routes/media.routes.js";
import LocationRoutes from "./routes/location.routes.js";

export default class Server {
  app = express(); 

  /**
   * A function to start the server
   */
  static async start() {
    // connect to db
    await MongoDB.init();
    
    const server = new Server(); // Create an instance of the Server class
    server.middleware();
    server.setPort();
    server.routes();
    server.listen();
  }

  // set port
  setPort() {
    this.app.set('port', 4000);
  }

  // set routes
  routes() {
    this.app.use('/api/user', UserRoutes);
    this.app.use('/api/post', PostRoutes);
    this.app.use('/api/media', MediaRoutes);
    this.app.use('/api/location', LocationRoutes);
  }

  // set middleware
  middleware() {
    this.app.use(express.json());
    // enable CORS for all domains
    this.app.use(cors());

    // enable CORS for specific domains
    this.app.use(cors({ origin: 'https://misplaced.app' }));
  }

  // listen
  listen() {
    // api init
    this.app.get('/', (req, res) => {
      res.json({ message: 'WELCOME TO MISPLACED API.' });
    });
    this.app.listen(this.app.get('port'), () => {
      console.log('SERVER RUNNING ON PORT', this.app.get('port'));
    });
  }
}