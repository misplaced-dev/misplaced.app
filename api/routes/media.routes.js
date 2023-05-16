import { Router } from 'express';
import { MediaController } from '../controllers/media.controller.js';

const MediaRoutes = Router();

/**
 * @route GET api/media
 * @desc Get all media
 */
// MediaRoutes.get('/', MediaController.getAllMedia);

/**
 * @route GET api/media/user/:id
 * @desc Get a media by user id
 */
MediaRoutes.get('/user/:id', MediaController.getMediaByUserId);

/**
 * @route GET api/media/post/:id
 * @desc Get a media by post id
 */
MediaRoutes.get('/post/:id', MediaController.getMediaByPostId);

/**
 * @route GET api/media/:id
 * @desc Get a media by media id  
*/
// MediaRoutes.get('/:id', MediaController.getMediaById);


export default MediaRoutes;
