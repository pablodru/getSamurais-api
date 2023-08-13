import { Router } from "express";
import { validateAuth } from "../middlewares/validateAuth.middleware.js";
import { deleteService, getMyServices, statusService } from "../controllers/users.controllers.js";
import { validateMyService } from "../middlewares/users.middleware.js";

const usersRouter = Router();

usersRouter.get('/my-services', validateAuth, getMyServices);
usersRouter.put('/my-services/:id', validateAuth, validateMyService, statusService);
usersRouter.delete('/my-services/:id', validateAuth, validateMyService, deleteService);

export default usersRouter;