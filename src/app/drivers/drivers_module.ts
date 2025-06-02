import { FastifyInstance } from "fastify";
import { CreateDriverController } from "./controller/create_driver_controller";
import { GetDriverController } from "./controller/get_driver_controller";
import { PutDriverController } from "./controller/put_driver_controller";

export class DriversModule {

    async register(app: FastifyInstance) {
        const postController = new CreateDriverController()
        const getController = new GetDriverController()
        const putController = new PutDriverController();
        app.post('/driver', postController.createDriverController);
        app.get('/driver', getController.getDriverController);
        app.put('/driver', putController.putDriverController);

    }
}