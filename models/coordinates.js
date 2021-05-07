const db = require('../db');
const ExpressError = require('../helpers/expressError');

class Coordinate{

    static async addCoordinate({long, lat}){
        const register = await db.query(`
        
        INSERT INTO coordinates
            (long, lat)
        VALUES ($1, $2)
        RETURNING *
        `, [long, lat]);

        return register.rows[0]
    }

    static async getAll(long, lat){
        const result = await db.query(`
        SELECT * FROM coordinates;
        `)
        const location = result.rows;
        return location
    }
}

module.exports = Coordinate;