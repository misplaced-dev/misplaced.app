import { Router } from 'express';
//import { LocationController } from '../controllers/location.controller.js';

const LocationRoutes = Router();

/**
 * @route POST /api/location/create
 * @description Create a location
 */
// LocationRoutes.post('/create', LocationController.createLocation);

/**
 * @route GET /api/location/locations
 * @description Get all locations
 */
// LocationRoutes.get('/locations', LocationController.getAllLocations);

/**
 * @route GET /api/location/location/:id
 * @description Get a location
 */
// LocationRoutes.get('/location/:id', LocationController.getLocation);

/**
 * @route PATCH /api/location/update/:id
 * @description Update a location
 */
// LocationRoutes.patch('/update/:id', LocationController.updateLocation);

/**
 * @route DELETE /api/location/delete/:id
 * @description Delete a location
 */
// LocationRoutes.delete('/delete/:id', LocationController.deleteLocation);


export default LocationRoutes;