import { db } from "../database/database.connection.js";

export async function signupDB (name, email, hash, city, phone) {
    const query = `
            INSERT INTO users (name, email, password, city, phone)
            VALUES ($1, $2, $3, $4, $5)
            ON CONFLICT (email) DO NOTHING;
        `;
    return db.query(query, [name, email, hash, city, phone]);
}

export async function signinValidateDB ( email ) {
    const query = `
            SELECT password, id, name FROM users 
            WHERE email=$1
    `;
    return db.query(query, [email])
}

export async function signinDB ( userId, token ) {
    const query = `
            INSERT INTO sessions ("userId", token) VALUES ($1, $2)
    `
    return db.query(query, [userId, token]);
}

export async function validateAuthDB (token) {
    const query = `
        SELECT "userId" FROM sessions WHERE token = $1
    `
    return db.query(query, [token]);
}