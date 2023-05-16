import * as mongoose from "mongoose";
import Media from '../models/media.model.js';

export class MediaController {
    // /**
    //  * Gets all media
    //  * 
    // * @param {Request} req request object
    // * @param {Response} res response object
    // * @returns {Media[]} media object
    // * @returns {Error} error object
    //  */
    // static async getAllMedia (req, res) {
    //     try {
    //         const media = await Media.find();
    //         res.status(200).json(media);
    //     }
    //     catch (err) {
    //         res.status(500).json({ message: err.message });
    //     }
    // }

    /**
     * Gets a media by user id
     * 
     * @param {Request} req request object
     * @param {Response} res response object
     * @returns {Media} media object
     * @returns {Error} error object
     */
    static async getMediaByUserId (req, res) {
        try {
            if (mongoose.Types.ObjectId.isValid(req.params.id) === false) {
                return res.status(400).json({ message: 'Invalid user id' });
            }
            const media = await Media.find({ user: req.params.id });
            res.status(200).json(media);
        }
        catch (err) {
            res.status(500).json({ message: err.message });
        }
    }

    /**
     * Gets a media by post id
     * 
     * @param {Request} req request object
     * @param {Response} res response object
     * @returns {Media} media object
     * @returns {Error} error object
     */
    static async getMediaByPostId (req, res) {
        try {
            if (mongoose.Types.ObjectId.isValid(req.params.id) === false) {
                return res.status(400).json({ message: 'Invalid user id' });
            }
            const media = await Media.find({ post: req.params.id });
            res.status(200).json(media);
        }
        catch (err) {
            res.status(500).json({ message: err.message });
        }
    }

    // /**
    //  * Gets a media by id
    //  * @param {Request} req request object
    //  * @param {Response} res response object
    //  * @returns {Media} media object
    //  * @returns {Error} error object
    //  */
    // static async getMediaById (req, res) {
    //     try {
    //         if (mongoose.Types.ObjectId.isValid(req.params.id) === false) {
    //             return res.status(400).json({ message: 'Invalid user id' });
    //         }
    //         const media = await Media.findById(req.params.id);
    //         res.status(200).json(media);
    //     }
    //     catch (err) {
    //         res.status(500).json({ message: err.message });
    //     }
    // }

}
