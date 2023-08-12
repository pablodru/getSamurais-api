import { db } from "../database/database.connection.js";

export async function postServiceDB(name, description, price, photo, userId) {
    const query = `
        INSERT INTO services (name, description, price, photo, "userId") VALUES ($1, $2, $3, $4, $5)
    `
    return db.query(query, [name, description, price, photo, userId])
}

export async function getServicesDB() {
    const query = `
        SELECT users.name AS name, users.city AS city, services.name AS service, services.id AS id, services.price AS price, services.photo AS photo
            FROM users JOIN services ON users.id = services."userId"
            WHERE services.status = 'ativo' 
    `
    return db.query(query)
}

export async function getServiceByIdDB(id) {
    const query = `
        SELECT users.name AS name, users.phone AS phone, users.city AS city, services.name AS service, services.price AS price, services.photo AS photo, services.description AS description
            FROM users JOIN services ON users.id = services."userId"
            WHERE services.status = 'ativo' AND services.id = $1
    `
    return db.query(query, [id]);
}