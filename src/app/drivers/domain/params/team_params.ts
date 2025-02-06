import { DriverEntity } from "../entities/driver_entity";

export class DriverParams extends DriverEntity{
    id_team_fk?: number
    
    constructor(driver: DriverEntity, id_team_fk?: number){
        super(driver.driverName, driver.birthday, driver.pathImageDriver, driver.titleCount, driver.nationality)
        if(id_team_fk != null){
            this.id_team_fk = id_team_fk
        }
    }
}