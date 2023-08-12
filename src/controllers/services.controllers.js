import { getServiceByIdDB, getServicesDB, postServiceDB } from "../repository/services.repository.js";

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

        res.status(200).send(services.rows);

    } catch (err) {
        return res.status(500).send(err.message)
    }
}

export async function getServiceById (req, res) {
    const { id } = req.params;
    try {

        const service = await getServiceByIdDB(id);

        if ( service.rowCount === 0 ) return res.sendStatus(404);

        res.status(200).send(service.rows[0]);

    } catch (err) {
        return res.status(500).send(err.message)
    }
}