import { FastifyInstance } from "fastify";
import { CreateDriverController } from "./controller/create_driver_controller";
import { GetDriverController } from "./controller/get_driver_controller";

export class DriversModule {

    async register(app: FastifyInstance){
        const postController = new CreateDriverController()
        const getController = new GetDriverController()
        app.post('/driver', postController.createDriverController)
        app.get('/driver', getController.getDriverController)

    }
}