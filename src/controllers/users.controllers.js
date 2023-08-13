import { deleteServiceDB, editStatusDB, existingServiceDB, getMyServicesDB } from "../repository/users.repository.js";

export async function getMyServices ( req, res ) {
    const { userId } = res.locals;
    try {

        const userServices = await getMyServicesDB(userId);

        if ( userServices.rowCount === 0 ) return res.status(404).send({message: 'Usuário sem nenhum serviço cadastrado'})

        return res.status(200).send(userServices.rows);
    } catch (err) {
        return res.status(500).send(err.message)
    }
}

export async function statusService ( req, res ) {
    const { id } = req.params;

    try {

        await editStatusDB(id);

        return res.sendStatus(200);

    } catch (err) {
        return res.status(500).send(err.message)
    }
}

export async function deleteService ( req, res ) {
    const { id } = req.params;
    try {

        await deleteServiceDB(id);

        return res.sendStatus(204);

    } catch (err) {
        return res.status(500).send(err.message)
    }
}