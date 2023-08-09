import { db } from "../database/database.connection.js";

export async function signupDB (name, email, password, city, phone) {
    const query = `
            INSERT INTO users (name, email, password, city, phone)
            VALUES ($1, $2, $3, $4, $5)
            ON CONFLICT (email) DO NOTHING;
        `;
    return db.query(query, [name, email, password, city, phone]);
}