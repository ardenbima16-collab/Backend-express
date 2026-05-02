import { Router } from "express";
import { getUser, creatUser } from "../controller/UserController";

const router = Router();

router.get('/user', getUser);
router.post('/user', creatUser);

export default router;