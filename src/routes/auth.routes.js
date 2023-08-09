import { Router } from "express";
import { validateSchema } from "../middlewares/validateSchema.middleware.js";
import { signinSchema, signupSchema } from "../schemas/auth.schema.js";
import { signup } from "../controllers/auth.controllers.js";

const authRouter = Router();

authRouter.post('/signup', validateSchema(signupSchema), signup);
authRouter.post('/signin', validateSchema(signinSchema), signin)

export default authRouter;