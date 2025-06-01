import { FastifyInstance } from "fastify";
import { PostTeamController } from "./controller/post_teams_controller";
import { GetTeamController } from "./controller/get_team_controller";
import { DeleteTeamController } from "./controller/delete_team_controller";


export class TeamModule {

    async register(app: FastifyInstance) {

        const postController = new PostTeamController()
        const getController = new GetTeamController()
        const deleteController = new DeleteTeamController()
        app.post('/team', postController.postTeamController)
        app.get('/team', getController.getTeamController)
        app.delete('/team/:id', deleteController.deleteTeamController)
    }

}