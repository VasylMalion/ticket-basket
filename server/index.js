import express from "express";
import config from "config";
import mongoose from "mongoose";
import cors from "cors";

const server = express();

server.use(cors());
server.use(express.json());
server.use(express.urlencoded({ extended: true }));
import {allRoutes} from "./routes";

const PORT =
    config.get("port") ||
    3050;

allRoutes(server);

mongoose.connect(config.get("dbUri"), {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
}).then(() => server.listen(PORT, ()  => console.log("run")))

// async function start () {
//     try {
//         await mongoose.connect(config.get("dbUri"), {
//             useNewUrlParser: true,
//             useUnifiedTopology: true,
//             useCreateIndex: true
//         }).then(() => server.listen(PORT, () => console.log("run")))
//     } catch (e) {}
//         console.log("Wrong")
//         process.exit(1)
// }
//
// start()