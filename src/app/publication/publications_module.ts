import { FastifyInstance } from "fastify";
import { PostPublicationController } from "./controller/post_publication_controller";
import { PostPublcationData } from "./models_route/post_publication";
import verifyJwt from "../../middlewares/verify_jwt";

export class PublicationModule {

    async register(app: FastifyInstance) {

        const postPublicationController = new PostPublicationController();

        app.post<PostPublcationData>('/publication', { preHandler: [verifyJwt] }, postPublicationController.postPublicationController);
    }
}