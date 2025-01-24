import { FastifyInstance } from "fastify";
import { PostTeamController } from "./controller/teams_controller";
import { validateSchemaMiddleware } from "../../middlewares/validate_schema"
import validate from "../../schemas/team/body_schema"


export class TeamModule{
    
    async register(app: FastifyInstance) {
        
        const postController = new PostTeamController()
        app.post('/team', {preHandler: [validateSchemaMiddleware(validate)]} ,postController.postTeamController)
        //app.get('/team', TeamController.getTeamsController)
        
    }

}