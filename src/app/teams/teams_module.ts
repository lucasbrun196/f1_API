import { FastifyInstance } from "fastify";
import { PostTeamController } from "./controller/create_team_controller";
import { GetTeamController } from "./controller/get_team_controller";
import { DeleteTeamController } from "./controller/delete_team_controller";
import { GetTeamImageController } from "./controller/get_team_image_controller";


export class TeamModule {

    async register(app: FastifyInstance) {

        const postController = new PostTeamController();
        const getController = new GetTeamController();
        const deleteController = new DeleteTeamController();
        const getTeamImageController = new GetTeamImageController();
        app.post('/team', postController.postTeamController);
        app.get('/team', getController.getTeamController);
        app.delete('/team/:id', deleteController.deleteTeamController);
        app.get('/team/image/:id', getTeamImageController.getTeamImageController);
    }

}