import { FastifyInstance } from "fastify";
import { PostUserController } from "./controller/post_user_controller";
import { AuthUserController } from "./controller/auth_user_controller";

export class UsersModule {
    async register(app: FastifyInstance) {

        const postUserController = new PostUserController();
        const authUserController = new AuthUserController();

        app.post('/users', postUserController.postUserController);
        app.post('/users/auth', authUserController.authUserController);

    }
}