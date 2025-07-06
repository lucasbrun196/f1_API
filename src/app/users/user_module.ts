import { FastifyInstance } from "fastify";
import { PostUserController } from "./controller/post_user_controller";
import { AuthUserController } from "./controller/auth_user_controller";
import verifyJwt from "../../middlewares/verify_jwt";
import { PostUserData } from "./models_route/post_user";
import { AuthUserData } from "./models_route/auth_user";
import { GetUserController } from "./controller/get_users_controller";

export class UsersModule {
    async register(app: FastifyInstance) {

        const postUserController = new PostUserController();
        const authUserController = new AuthUserController();
        const getUserController = new GetUserController();

        app.post<PostUserData>('/users', postUserController.postUserController);
        app.post<AuthUserData>('/users/auth', authUserController.authUserController);
        app.get('/users', { preHandler: [verifyJwt] }, getUserController.getUserController);

    }
}