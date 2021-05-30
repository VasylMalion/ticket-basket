// core
import {Router} from "express";
const router = Router();

// controllers
import {registration} from "../controllers/registration-controller";

router.post("/", registration);

export {
    router
}