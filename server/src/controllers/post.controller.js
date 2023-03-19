import Post from '../models/post.model.js';
import Location from '../models/location.model.js';
import Media from '../models/media.model.js';
import { LocationService } from '../utils/location.service.js';

export class PostController {
    /**
     * A function to create a post
     * 
     * @param {Request} req request object
     * @param {Response} res response object
     * @returns {Post} post object
     * @returns {Error} error object
     */
    static async createPost(req, res) {
        try { 
            const post = new Post({
                title: req.body.title,
                description: req.body.description,
                author: req.body.author,
                location: req.body.location,
                compensation: req.body.compensation
            });
            post.save()
                .then((post) => {
                    const mediaList = req.body.media;
                    mediaList.forEach((media) => {
                        media.post = post._id;
                    });
                    Media.insertMany(mediaList);
                    res.status(201).json(post);
                })
                .catch((err) => {
                    res.status(400).json({ message: err.message });
                });
        }
        catch (err) {
            res.status(500).json({ message: err.message });
        }
    }

    /**
     * A function to get posts within a radius of a location
     * 
     * @param {Request} req request object
     * @param {Response} res response object
     * @returns {Post[]} post object
     * @returns {Error} error object
     */
    static async getPostsInDistance(req, res) {
    // get ip address of the user
    const ip = LocationService.getIp(req);
    const clientCoordinates = await LocationService.getLatLongFromIP(ip).then((data) => {return data;});
    // get all locations within the distance
    Location.find({}).then((locations) => {
        if (!locations) {
            res.status(404).json({ message: 'Locations not found' });
            return;
        }
        const locationIdToDistance = new Map();
        locations.forEach(location => {
            let distance = LocationService.getDistance(clientCoordinates.lat, clientCoordinates.lon, location.latitude, location.longitude);
            if (distance <= req.params.distance) {
                locationIdToDistance.set(location._id.toString(), distance);
            }
        });
        // get all posts where the location id is in the array
        Post.find({ location: { $in: [ ...locationIdToDistance.keys() ] } })
            .populate('author')
            .populate('location')
            .exec()
            .then((posts) => {
                if (!posts) {
                    res.status(404).json({ message: 'Posts not found' });
                    return;
                }
                // add the distance to each post
                posts = posts.map(post => ({
                    ...post.toObject(),
                    distance: locationIdToDistance.get(post.location._id.toString())
                }));
                res.status(200).json(posts);
            })
            .catch((err) => {
                res.status(500).json({ message: err.message });
            });
        })
        .catch((err) => {
            res.status(500).json({ message: err.message });
        });
    }

    /**
     * A function to get a post by id
     * 
     * @param {Request} req request object
     * @param {Response} res response object
     * @returns {Post} post object
     * @returns {Error} error object
     */
    static async getPostById(req, res) {
        try {
            const post = await Post.findById(req.params.id)
                .populate('author')
                .populate('location')
                .exec();
            if (!post) {
                res.status(404).json({ message: 'Post not found' });
                return;
            }
            res.status(200).json(post);
        }
        catch (err) {
            res.status(500).json({ message: err.message });
        }
    }

    /**
     * A function to get all posts by a user
     * 
     * @param {Request} req request object
     * @param {Response} res response object
     * @returns {Post[]} post object
     * @returns {Error} error object
     */
    static async getPostsByUserId(req, res) {
        try {
            const posts = await Post.find({ author: req.params.id })
                .populate('author')
                .populate('location')
                .exec();
            if (!posts) {
                res.status(404).json({ message: 'Posts not found' });
                return;
            }
            res.status(200).json(posts);
        }
        catch (err) {
            res.status(500).json({ message: err.message });
        }
    }

    /**
     * A function to update a post
     * 
     * @param {Request} req request object
     * @param {Response} res response object
     * @returns {Post} post object
     * @returns {Error} error object
     */
    static async updatePost(req, res) {
        try {
            const post = await Post.findOne({ _id: req.params.postId, author: req.params.userId });
            if (!post) {
                res.status(404).json({ message: 'Post not found' });
                return;
            }
            if (req.body.title) {
                post.title = req.body.title;
            }
            if (req.body.description) {
                post.description = req.body.description;
            }
            if (req.body.author) {
                post.author = req.body.author;
            }
            if (req.body.compensation) {
                post.compensation = req.body.compensation;
            }
            post.save()
                .then((post) => {
                    res.status(200).json(post);
                })
                .catch((err) => {
                    res.status(400).json({ message: err.message });
                });
        }
        catch (err) {
            res.status(500).json({ message: err.message });
        }
    }

    /**
     * A function to delete a post
     * 
     * @param {Request} req request object
     * @param {Response} res response object
     * @returns {Post} post object
     * @returns {Error} error object
     */
    static async deletePost(req, res) {
        try {
            const post = await Post.findOne({ _id: req.params.postId, author: req.params.userId });
            if (!post) {
                res.status(404).json({ message: 'Post not found' });
                return;
            }
            post.remove()
                .then((post) => {
                    res.status(200).json(post);
                })
                .catch((err) => {
                    res.status(400).json({ message: err.message });
                });
        }
        catch (err) {
            res.status(500).json({ message: err.message });
        }
    }
}
