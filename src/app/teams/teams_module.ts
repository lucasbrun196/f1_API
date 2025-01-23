import { FastifyInstance } from "fastify";
import { PostTeamController } from "./controller/teams_controller";

export class TeamModule{
    
    async register(app: FastifyInstance) {
        const postController = new PostTeamController()
        app.post('/team', postController.postTeamController)
        //app.get('/team', TeamController.getTeamsController)
        
    }

}