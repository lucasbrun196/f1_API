import { FastifyInstance } from "fastify";
import { CreateDriverController } from "./controller/create_driver_controller";
import { validateSchemaMiddleware } from "../../middlewares/validate_schema";
import validate from "../../schemas/team/driver_body_schema";
import { GetDriverController } from "./controller/get_driver_controller";

export class DriversModule {

    async register(app: FastifyInstance){
        const postController = new CreateDriverController()
        const getController = new GetDriverController()
        app.post('/driver', {preHandler: [validateSchemaMiddleware(validate)]}, postController.createDriverController)
        app.get('/driver', getController.getDriverController)

    }
}