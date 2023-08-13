import { db } from "../database/database.connection.js";

export async function getMyServicesDB (userId){

    const query = `
        SELECT services.status AS status, services.photo AS photo, services.name AS service, services.price AS price FROM services
            JOIN users ON users.id = services."userId"
            WHERE services."userId"=$1
    `
    return db.query(query, [userId])
}