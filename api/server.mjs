import MongoDB  from '../server/src/config/mongo.config.js';
import express from 'express';
import cors from 'cors';
import UserRoutes from '../server/src/routes/user.routes.js';
import PostRoutes from '../server/src/routes/post.routes.js';
import MediaRoutes from '../server/src/routes/media.routes.js';
import LocationRoutes from '../server/src/routes/location.routes.js';

export default class Server {
  app;
 
  /**
   * A function to start the server
   */
  static async start() {
    // connect to db
    await MongoDB.init();
    this.app = express();
    this.middleware();
    this.setPort();
    this.routes();
    this.listen();
  }

  // set port
  static setPort() {
    this.app.set('port', 4000);
  }

  // set routes
  static routes() {
    this.app.use('/api/user', UserRoutes);
    this.app.use('/api/post', PostRoutes);
    this.app.use('/api/media', MediaRoutes);
    this.app.use('/api/location', LocationRoutes);
  }

  // set middleware
  static middleware() {
    this.app.use(express.json());
    // enable CORS for all domains
    this.app.use(cors());

    // enable CORS for specific domains
    this.app.use(cors({ origin: 'https://misplaced.app' }));
  }

  // listen
  static async listen() {
    // api init
    this.app.get('/', (req, res) => {
      res.json({ message: 'WELCOME TO MISPLACED API.' });
    });
    this.app.listen(this.app.get('port'));
    console.log('SERVER RUNNING ON PORT', this.app.get('port'));
  }
}
