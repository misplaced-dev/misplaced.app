import mongoose from 'mongoose';

/**
 * Location Schema for MongoDB
 */
const LocationSchema = new mongoose.Schema({
    latitude: {
        type: Number,
        required: true,
    },
    longitude: {
        type: Number,
        required: true,
    },
});

export default mongoose.model('Location', LocationSchema);
