import { signupDB } from "../repository/auth.repository.js";

export async function signup (req, res) {
    const { name, email, password, city, phone } = req.body;
    try {

        const result = signupDB(name, email, password, city, phone);

        if (result.rowCount === 0) {
            return res.status(409).send({ message: 'Email já existente.' });
        }

        res.sendStatus(201);

    } catch (err) {
        res.status(500).send(err.message);
    }
}