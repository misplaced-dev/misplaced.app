import { MongoDB } from "./config/mongo.config.js";
import express from 'express';
import cors from 'cors';
import UserRoutes from './routes/user.routes.js';
import PostRoutes from './routes/post.routes.js';
import MediaRoutes from './routes/media.routes.js';
import LocationRoutes from './routes/location.routes.js';

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
        this.app.set('port', process.env.PORT || 3001);
    }

    // set routes
    static routes() {
        this.app.use('/api/user', UserRoutes);
        this.app.use('/api/post', PostRoutes);
        this.app.use('/api/media', MediaRoutes);
        this.app.use('/api/location', LocationRoutes);
    }

    static middleware() {
        this.app.use(express.json());
        this.app.use(
          cors({
            origin: "*",
            methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
            preflightContinue: false,
            optionsSuccessStatus: 204,
          })
        );
        this.app.use(cors({ origin: 'https://misplacedbackend.onrender.com' }));
    this.app.use(cors({ origin: 'https://misplaced.app' }));
    this.app.use(cors({ origin: '*' }));
      }

    // listen
    static async listen() {
        // api init
        this.app.get('/', (req, res) => {
            res.json({'message': 'WELCOME TO MISPLACED API.'});
        });
        this.app.listen(this.app.get('port'));
        console.log('SERVER RUNNING ON PORT', this.app.get('port'));
    }
}
