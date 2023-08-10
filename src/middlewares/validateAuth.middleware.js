import { validateAuthDB } from "../repository/auth.repository.js";

export async function validateAuth(req, res, next) {
    const { authorization } = req.headers;
    const token = authorization?.replace('Bearer ', '');

    if (!token) return res.sendStatus(401);

    try {

        //PROCURAR SESSAO NO BANCO E RETORNAR 401 EM CASO DE NÃO TER SESSION
        const existingSession = await validateAuthDB(token); 
        if ( existingSession.rowCount === 0 ) return res.sendStatus(401);

        res.locals.userId = existingSession.rows[0].userId;

        next();

    } catch (err) {
        res.status(500).send(err.message);
    }
}