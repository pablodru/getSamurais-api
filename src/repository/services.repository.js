import { db } from "../database/database.connection.js";

export async function postServiceDB(name, description, price, photo, userId) {
    const query = `
        INSERT INTO services (name, description, price, photo, "userId") VALUES ($1, $2, $3, $4, $5)
    `
    return db.query(query, [name, description, price, photo, userId])
}