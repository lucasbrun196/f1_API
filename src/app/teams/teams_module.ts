import { FastifyInstance } from "fastify";
import { PostTeamController } from "./controller/teams_controller";

export class TeamModule{
    
    
    static async register(app: FastifyInstance) {
        //app.get('/team', TeamController.getTeamsController)
        app.post('/team', PostTeamController.postTeamController)
    }

}