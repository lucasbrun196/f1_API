import fastify from "fastify";
import { TeamModule } from "./app/teams/teams_module";
import cors from "@fastify/cors"


export function createApp(){
    const app = fastify({logger: true})
    
    app.register(cors, {
        origin: "*",
        methods: [
            "GET",
            "POST",
            "DELETE",
            "UPDATE"
        ]
    })
    
    app.register(TeamModule.register)
    return app
}