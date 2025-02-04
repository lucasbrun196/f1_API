import { FastifyInstance } from "fastify";
import { PostTeamController } from "./controller/post_teams_controller";
import { validateSchemaMiddleware } from "../../middlewares/validate_schema"
import validate from "../../schemas/team/body_schema"
import { GetTeamController } from "./controller/get_team_controller";


export class TeamModule{
    
    async register(app: FastifyInstance) {
        
        const postController = new PostTeamController()
        const getController = new GetTeamController()
        app.post('/team', {preHandler: [validateSchemaMiddleware(validate)]}, postController.postTeamController)
        app.get('/team', getController.getTeamController)  
    }

}