import bcrypt from 'bcrypt';
import { v4 as uuid } from 'uuid';
import { signinDB, signupDB } from "../repository/auth.repository.js";

export async function signup (req, res) {
    const { name, email, password, city, phone } = req.body;
    try {

        const hash = bcrypt.hashSync(password, 10);

        const result = await signupDB(name, email, hash, city, phone);
        console.log(result);

        if (result.rowCount === 0) {
            return res.status(409).send({ message: 'Email já existente' });
        }

        res.sendStatus(201);

    } catch (err) {
        res.status(500).send(err.message);
    }
}

export async function signin (req, res) {
    const { userId, name } = res.locals;
    try {

        const token = uuid();

        await signinDB(userId, token);

        res.status(200).send({ token, name });

    } catch (err) {
        res.status(500).send(err.message);
    }
}