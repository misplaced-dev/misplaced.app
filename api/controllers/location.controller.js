// import Location from '../models/location.model.js';

// export class LocationController {
    
//     /**
//     * Create a new location
//     *
//     * @param {*} req request object
//     * @param {*} res response object
//     * @returns {*} the new location
//     * @returns {*} 500 if there is an error
//     * @returns {*} 400 if the location is invalid
//     */
//     static createLocation = (req, res) => {
//         try {
//             const location = new Location({
//                 latitude: req.body.latitude,
//                 longitude: req.body.longitude
//             });
//             location.save()
//                 .then((location) => {
//                     res.status(201).json(location);
//                 }
//                 )
//                 .catch((err) => {
//                     res.status(400).json({ message: err.message });
//                 });
//         } catch (err) {
//             res.status(500).json({ message: err.message });
//         }
//     }

//     /**
//      * Get all locations
//      * 
//      * @param {*} req request object
//      * @param {*} res response object
//      * @returns {*} all locations
//      * @returns {*} 500 if there is an error
//      * @returns {*} 400 if the location is invalid
//      * @returns {*} 404 if the location is not found
//      */
//     static getAllLocations = (req, res) => {
//         Location.find()
//             .then((locations) => {
//                 res.status(200).json(locations);
//             }
//             )
//             .catch((err) => {
//                 res.status(500).json({ message: err.message });
//             });  
//     }

//     /**
//      * Get a location by id
//      * 
//      * @param {*} req request object
//      * @param {*} res response object
//      * @returns {*} the location
//      * @returns {*} 500 if there is an error
//      * @returns {*} 400 if the location is invalid
//      * @returns {*} 404 if the location is not found
//      */
//     static getLocation = (req, res) => {
//         Location.findById(req.params.id)
//             .then((location) => {
//                 res.status(200).json(location);
//             }
//             )
//             .catch((err) => {
//                 res.status(500).json({ message: err.message });
//             });
//     }

//     /**
//      * Update a location by id
//      * 
//      * @param {*} req request object
//      * @param {*} res response object
//      * @returns {*} the updated location
//      * @returns {*} 500 if there is an error
//      * @returns {*} 400 if the location is invalid
//      * @returns {*} 404 if the location is not found
//      */
//     static updateLocation = (req, res) => {
//         Location.findByIdAndUpdate(req.params.id, req.body)
//             .then((location) => {
//                 res.status(200).json(location);
//             }
//             )
//             .catch((err) => {
//                 res.status(500).json({ message: err.message });
//             });
//     }

//     /**
//      * Delete a location by id
//      * 
//      * @param {*} req request object
//      * @param {*} res response object
//      * @returns {*} the deleted location
//      * @returns {*} 500 if there is an error
//      * @returns {*} 404 if the location is not found
//      * @returns {*} 200 if the location is deleted
//      */
//     static deleteLocation = (req, res) => {
//         Location.findByIdAndDelete(req.params.id)
//             .then((location) => {
//                 res.status(200).json(location);
//             }
//             )
//             .catch((err) => {
//                 res.status(500).json({ message: err.message });
//             });
//     }
// }
