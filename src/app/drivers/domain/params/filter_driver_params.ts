import ErrorResponse from "../../../../responses/error"

export class FilterDriverParams {
    readonly teamId?: number 
    readonly driverName?: string
    readonly isGetTeam?: boolean
    constructor(teamId?: number, driverName?: string, isGetTeam?: boolean){
        console.log(teamId +  " -> " + isGetTeam);
        
        if(teamId !== null && isGetTeam === false){ // TODO: fix it
            
            throw new ErrorResponse(422, "Invalid proprierties to FilterDriverParams")
        }
        if(typeof teamId == 'string'){
            teamId = Number(teamId);
            if(isNaN(teamId)){
                throw new ErrorResponse(422, "TeamId should be a number")
            }
            this.teamId = teamId; 
        }else{
            this.teamId = teamId;
        }
        this.driverName = driverName
        this.isGetTeam = isGetTeam
    }

}