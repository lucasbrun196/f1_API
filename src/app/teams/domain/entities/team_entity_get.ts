import { TeamEntity } from "./team_entity"

export class TeamEntityGet extends TeamEntity{
    readonly id: number
    constructor(params: {teamName: String, country: String, about: String, pathImageTeam: String, id: number}){
        super(params)
        this.id = params.id
    }
    
}