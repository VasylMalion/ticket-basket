import {Router} from "express";
const router = Router();
import TrainTicket from "../models/TrainTicket";

router.post("/trains", async (req, res) => {

    const {startPoint, endPoint, departureDate
        // , arrivalDate, countPerson
    } = req.body;

    // Кількість пересадок
    const withoutStops = await TrainTicket.find({startPoint, endPoint, departureDay: departureDate})

})

export {router}