import { FastifyInstance } from "fastify";
import { CreateDriverController } from "./controller/create_driver_controller";
import { validateSchemaMiddleware } from "../../middlewares/validate_schema";
import validate from "../../schemas/team/driver_body_schema";

export class DriversModule {

    async register(app: FastifyInstance){
        const postController = new CreateDriverController()
       app.post('/driver', {preHandler: [validateSchemaMiddleware(validate)]}, postController.createDriverController)
    }
}