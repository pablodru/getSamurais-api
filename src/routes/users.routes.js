import { Router } from "express";
import { validateAuth } from "../middlewares/validateAuth.middleware.js";
import { getMyServices } from "../controllers/users.controllers.js";

const usersRouter = Router();

usersRouter.get('/my-services', validateAuth, getMyServices);

export default usersRouter;