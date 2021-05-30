// core
import {Router} from "express";
const router = Router();

// controllers
import {login} from "../controllers/login-controller";

router.post("/", login);

export {
    router
}