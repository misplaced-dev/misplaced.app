import requestIp from 'request-ip';
import fetch from "node-fetch";

export class LocationService {

    /**
     * Gets the distance between two points in miles
     * 
     * @param {Number} lat1 the latitude of the first point
     * @param {Number} lon1 the longitude of the first point
     * @param {Number} lat2 the latitude of the second point
     * @param {Number} lon2 the longitude of the second point
     * @returns the distance between the two points in miles
     */
    static getDistance = (lat1, lon1, lat2, lon2) => {
        const R = 3963.19; // Radius of the earth in miles
        const dLat = this.deg2rad(lat2 - lat1);
        const dLon = this.deg2rad(lon2 - lon1);
        const a =
            Math.sin(dLat / 2) * Math.sin(dLat / 2) +
            Math.cos(this.deg2rad(lat1)) * Math.cos(this.deg2rad(lat2)) *
            Math.sin(dLon / 2) * Math.sin(dLon / 2)
            ;
        const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
        const d = R * c; // Distance in miles
        return d;
    }

    /**
     * Converts degrees to radians
     * 
     * @param {Number} deg the degree to convert to radians
     * @returns the radian value of the degree
     */
    static deg2rad = (deg) => {
        return deg * (Math.PI / 180)
    }

    /**
     * Gets the ip address of the request
     * 
     * @param {*} req the request object
     * @returns the ip address of the request
     */
    static getIp = (req) => {
        return requestIp.getClientIp(req);
    }

    /**
     * Gets the latitude and longitude of the ip address
     * 
     * @param {*} ip the ip address
     * @returns the latitude and longitude of the ip address
     */
    static async getLatLongFromIP(ip) {
        const url = "http://ip-api.com/json/" + ip;
        
        const response = await fetch(url);
        const {lat, lon} = await response.json();
        return {lat, lon};
        
    }
}
