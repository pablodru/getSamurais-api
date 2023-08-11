import { Router } from "express";
import { validateSchema } from "../middlewares/validateSchema.middleware.js";
import { serviceSchema } from "../schemas/services.schema.js";
import { getServices, postService } from "../controllers/services.controllers.js";
import { validateAuth } from "../middlewares/validateAuth.middleware.js";

const servicesRouter = Router();

servicesRouter.post('/services', validateSchema(serviceSchema), validateAuth, postService);
servicesRouter.get('/services', validateAuth, getServices);

export default servicesRouter;