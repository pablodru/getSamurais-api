import { Router } from "express";
import { validateSchema } from "../middlewares/validateSchema.middleware.js";
import { signinSchema, signupSchema } from "../schemas/auth.schema.js";
import { signin, signup } from "../controllers/auth.controllers.js";
import { validateSignin } from "../middlewares/users.middleware.js";

const authRouter = Router();

authRouter.post('/signup', validateSchema(signupSchema), signup);
authRouter.post('/signin', validateSchema(signinSchema), validateSignin, signin);

export default authRouter;