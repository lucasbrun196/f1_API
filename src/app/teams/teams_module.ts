import { FastifyInstance } from "fastify";
import { PostTeamController } from "./controller/create_team_controller";
import { GetTeamController } from "./controller/get_team_controller";
import { DeleteTeamController } from "./controller/delete_team_controller";
import { GetTeamImageController } from "./controller/get_team_image_controller";
import { PostTeamData } from "./models_route/post_team";
import { GetTeamData } from "./models_route/get_team";
import { DeleteTeamData } from "./models_route/delete_team";
import { GetTeamImageData } from "./models_route/get_team_image";


export class TeamModule {

    async register(app: FastifyInstance) {

        const postController = new PostTeamController();
        const getController = new GetTeamController();
        const deleteController = new DeleteTeamController();
        const getTeamImageController = new GetTeamImageController();
        app.post<PostTeamData>('/team', postController.postTeamController);
        app.get<GetTeamData>('/team', getController.getTeamController);
        app.delete<DeleteTeamData>('/team/:id', deleteController.deleteTeamController);
        app.get<GetTeamImageData>('/team/image/:id', getTeamImageController.getTeamImageController);
    }

}