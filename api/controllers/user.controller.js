import { identicon } from 'minidenticons';
import * as bcrypt from 'bcryptjs';
import User from '../models/user.model.js';
import Media from '../models/media.model.js';

export class UserController {
    /**
     * A function to register a user
     * 
     * @param {Request} req request object
     * @param {Response} res response object
     * @returns {User} user object
     * @returns {Error} error object
     */
    static async register(req, res) {
        try {
            if (!req.body.email || !req.body.name || !req.body.username || !req.body.password) {
                return res.status(400).json({ message: "Please fill in all fields" });
            }
            const salt = bcrypt.genSaltSync(10);
            const hashedPassword = bcrypt.hashSync(req.body.password, salt);
            const user = new User({
                email: req.body.email,
                name: req.body.name,
                username: req.body.username,
                password: hashedPassword
            });
            user.save()
                .then((user) => {
                    const profilePicture = identicon(req.body.username);
                    const media = new Media({
                        url: profilePicture,
                        user: user._id,
                    });
                    media.save();
                    res.status(201).json(user);
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
     * A function to login a user
     * 
     * @param {Request} req request object
     * @param {Response} res response object
     * @returns {User} user object
     * @returns {Error} error object
     */
    static async login(req, res) {
        try {
            if (!req.body.username && !req.body.email) {
                res.status(400).json({ message: 'Username or email is required.' });
                return;
            }
            if (!req.body.password) {
                res.status(400).json({ message: 'Password is required.' });
                return;
            }
            const user = await User.findOne({ $or: [{ username: req.body.username }, { email: req.body.email }] });
            if (!user) {
                res.status(400).json({ message: 'User not found.' });
                return;
            }
            const validPassword = bcrypt.compareSync(req.body.password, user.password);
            if (!validPassword) {
                res.status(400).json({ message: 'Invalid password.' });
                return;
            }
            user.password = undefined;
            res.status(200).json(user);
        }
        catch (err) {
            res.status(500).json({ message: err.message });
        }
    }

    /**
     * A function to a user by id
     * 
     * @param {Request} req request object
     * @param {Response} res response object
     * @returns {User} user object
     * @returns {Error} error object
     */
    static async getUserById(req, res) {
        try {
            const user = await User.findById(req.params.id);
            if (!user) {
                res.status(404).json({ message: 'User not found.' });
                return;
            }
            user.password = undefined;
            res.status(200).json(user);
        }
        catch (err) {
            res.status(500).json({ message: err.message });
        }
    }

    /**
     * A function to update a user by id
     * 
     * @param {Request} req request object
     * @param {Response} res response object
     * @returns {User} the user object
     * @returns {Error} error object
     */
    static async updateUserById(req, res) {
        if (req.body.password) {
            const salt = bcrypt.genSaltSync(10);
            req.body.password = bcrypt.hashSync(req.body.password, salt);
        }
        req.body.updatedAt = Date.now();
        User.findByIdAndUpdate(req.params.id, req.body).then((user) => {
            if (!user) {
                res.status(404).json({ message: 'User not found.' });
                return;
            }
            res.status(200).json(user);
        }).catch((err) => {
            res.status(400).json({ message: err.message });
        });
    }

    /**
     * A function to delete a user by id
     * 
     * @param {Request} req request object
     * @param {Response} res response object
     * @returns {User} the deleted user object
     * @returns {Error} error object
     */
    static async deleteUserById(req, res) {
        User.findByIdAndDelete(req.params.id).then((user) => {
            if (!user) {
                res.status(404).json({ message: 'User not found.' });
                return;
            }
            res.status(200).json("User deleted successfully.");
        }
        ).catch((err) => {
            res.status(400).json({ message: err.message });
        });
    }

}
