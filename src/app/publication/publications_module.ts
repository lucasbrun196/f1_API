import { FastifyInstance } from "fastify";
import { PostPublicationController } from "./controller/post_publication_controller";
import { PostPublcationData } from "./models_route/post_publication";
import verifyJwt from "../../middlewares/verify_jwt";
import { GetPublicationData } from "./models_route/get_publication";
import { GetPublicationController } from "./controller/get_publication_controller";

export class PublicationModule {

    async register(app: FastifyInstance) {

        const postPublicationController = new PostPublicationController();
        const getPublicationController = new GetPublicationController();

        app.post<PostPublcationData>('/publication', { preHandler: [verifyJwt] }, postPublicationController.postPublicationController);
        app.get<GetPublicationData>('/publication', { preHandler: [verifyJwt] }, getPublicationController.getPublicationController);
    }
}