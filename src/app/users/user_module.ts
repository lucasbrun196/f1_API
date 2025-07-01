import { FastifyInstance } from "fastify";
import { PostUserController } from "./controller/post_user_controller";
import { AuthUserController } from "./controller/auth_user_controller";
import verifyJwt from "../../middlewares/verify_jwt";
import { UsersEntityJson } from "./domain/entities/typeorm/users_entity";
import { PostUserData } from "./models_route/post_user";
import { AuthUserData } from "./models_route/auth_user";

export class UsersModule {
    async register(app: FastifyInstance) {

        const postUserController = new PostUserController();
        const authUserController = new AuthUserController();

        app.post<PostUserData>('/users', { preHandler: [verifyJwt]} , postUserController.postUserController);
        app.post<AuthUserData>('/users/auth', authUserController.authUserController);

    }
}