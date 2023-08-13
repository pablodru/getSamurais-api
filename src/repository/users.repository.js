import { db } from "../database/database.connection.js";

export async function getMyServicesDB (userId){

    const query = `
        SELECT services.status AS status, services.photo AS photo, services.name AS service, services.price AS price, services.id AS id FROM services
            JOIN users ON users.id = services."userId"
            WHERE services."userId"=$1
    `
    return db.query(query, [userId])
}

export async function existingServiceDB (id, userId){
    const query = `
        SELECT services."userId" FROM services
            JOIN users ON users.id = services."userId"
            WHERE services.id = $1
    `
    return db.query(query, [id]);
}

export async function editStatusDB (id){
    const query = `
        UPDATE services
            SET status = CASE WHEN status = 'ativo' THEN 'inativo' ELSE 'ativo' END
            WHERE id = $1
            RETURNING status;
    `
    return db.query(query, [id])
}

export async function deleteServiceDB (id) {
    const query = `
        DELETE FROM services WHERE id=$1
    `
    return db.query(query, [id]);
}