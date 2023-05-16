import { Router } from 'express';
// import { UserController } from '../controllers/user.controller.js';

const UserRoutes = Router();


/**
 * @route POST api/user/register
 * @desc Register a user
 */
// UserRoutes.post('/register', UserController.register);

/**
 * @route POST api/user/login
 * @desc Login a user
 */
// UserRoutes.post('/login', UserController.login);

/**
 * @route GET api/user/logout
 * @desc Logout a user
 */
// UserRoutes.get('/logout', UserController.logout);

/**
 * @route GET api/user/:id
 * @desc Get a user
 */
// UserRoutes.get('/:id', UserController.getUserById);

/**
 * @route PATCH api/user/:id
 * @desc Update a user
 */
// UserRoutes.patch('/:id', UserController.updateUserById);

/**
 * @route DELETE api/user/:id
 * @desc Delete a user
 */
// UserRoutes.delete('/:id', UserController.deleteUserById);


export default UserRoutes;
