import { Router } from 'express';
import { PostController } from '../controllers/post.controller.js';

const PostRoutes = Router();

/**
 * @route POST api/post
 * @desc Create a post
 */
PostRoutes.post('/create', PostController.createPost);

/**
 * @route GET all posts
 * @desc Get all posts 
 */
PostRoutes.get('/posts', PostController.getAllPosts);

/**
 * @route GET api/post/:id
 * @desc Get a post by post id
 */
PostRoutes.get('/:id', PostController.getPostById);

/**
 * @route GET api/post/user/:id
 * @desc Get all posts by a user
 */
PostRoutes.get('/user/:id', PostController.getPostsByUserId);

/**
 * @route PATCH api/post/:postId/:userId
 * @desc Update a post
 */
PostRoutes.patch('/:postId/:userId', PostController.updatePost);

/**
 * @route DELETE api/post/:postId/:userId
 * @desc Delete a post
 */
PostRoutes.delete('/:postId/:userId', PostController.deletePost);


export default PostRoutes;
