// core
import {Router} from "express";
const router = Router();

// controllers
import User from "../models/User";

router.post("/", async (req, res) => {
    const {_id} = req.body;
    const user = await User.findOne({_id})

    return res.json({user})
});

router.post("/update-tickets", async (req, res) => {
    const {id, ticket} = req.body;
    const userData = await User.findOne({_id: id})

    const user = await User.findOneAndUpdate({_id: id},
        {
            $set: {
                boughtTickets: userData.boughtTickets
            }
    })

    return res.json({user})
});

export {
    router
}