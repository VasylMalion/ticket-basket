import {router as loginRouter} from "./loginRouter";
import {router as planeTicketsRouter} from "./planeTicketsRouter";
import {router as registerRouter} from "./registrationRouter";
import {router as userRouter} from "./uesrRouter";

const allRoutes = server => {
    server.use('/api/registration', registerRouter);
    server.use('/api/tickets', planeTicketsRouter);
    server.use('/api/login', loginRouter);
    server.use('/api/user', userRouter);
}

export {allRoutes}