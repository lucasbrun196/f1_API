import { FastifyInstance } from "fastify";
import { CreateDriverController } from "./controller/create_driver_controller";
import { GetDriverController } from "./controller/get_driver_controller";
import { PutDriverController } from "./controller/put_driver_controller";
import { PostDriver } from "./models_route/post_driver";
import { GetDriverData } from "./models_route/get_driver";
import { PutDriverData } from "./models_route/put_driver";
import verifyJwt from "../../middlewares/verify_jwt";
import verifyUserAccess from "../../middlewares/verify_user_access";

export class DriversModule {

    async register(app: FastifyInstance) {

        const postController = new CreateDriverController()
        const getController = new GetDriverController()
        const putController = new PutDriverController();
        app.post<PostDriver>('/driver', { preHandler: [verifyJwt, verifyUserAccess] }, postController.createDriverController);
        app.get<GetDriverData>('/driver', getController.getDriverController);
        app.put<PutDriverData>('/driver/:id', { preHandler: [verifyJwt, verifyUserAccess] }, putController.putDriverController);

    }
}