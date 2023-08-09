import { Router } from "express";
import authRouter from "./auth.routes.js";
import servicesRouter from "./services.routes.js";
import usersRouter from "./users.routes.js";

const router = Router();

router.use(authRouter);
router.use(servicesRouter);
router.use(usersRouter);

export default router;