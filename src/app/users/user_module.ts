import { FastifyInstance } from "fastify";
import { PostUserController } from "./controller/post_user_controller";

export class UsersModule {
    async register(app: FastifyInstance) {

        const postUserController = new PostUserController();

        app.post('/users', postUserController.postUserController);
    }
}