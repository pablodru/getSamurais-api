import { db } from "../database/database.connection.js";
import bcrypt from 'bcrypt';
import { signinValidateDB } from "../repository/auth.repository.js";

export async function validateSignin ( req, res, next ) {
    const { password, email } = req.body;
    try {

        const result = await signinValidateDB(email);

        if (result.rowCount === 0) return res.status(404).send({ message: 'Email não encontrado' });

        const correctPassword = bcrypt.compareSync(password, result.rows[0].password);
        if ( !correctPassword ) return res.sendStatus(401);

        res.locals.userId = result.rows[0].id;

        next();

    } catch (err) {
        res.status(500).send(err.message);
    }
}