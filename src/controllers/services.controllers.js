import { getServicesDB, postServiceDB } from "../repository/services.repository.js";

export async function postService (req, res) {
    const { name, description, price, photo } = req.body;
    const { userId } = res.locals;
    try {
        const newPrice = price*100;

        await postServiceDB(name, description, newPrice, photo, userId);

        res.sendStatus(201);

    } catch (err){
        return res.status(500).send(err.message)
    }
}

export async function getServices (req, res) {
    try {

        const services = await getServicesDB();
        console.log(services)

        res.status(200).send(services.rows);

    } catch (err) {
        return res.status(500).send(err.message)
    }
}