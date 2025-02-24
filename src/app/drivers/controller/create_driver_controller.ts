import { FastifyReply, FastifyRequest } from "fastify";
import { DriverEntity } from "../domain/entities/driver_entity";
import ErrorResponse from "../../../responses/error";
import SuccessResponse from "../../../responses/success";
import { ICreateDriverService } from "../domain/service/i_create_driver_service";
import { CreateDriverService } from "../domain/service/create_driver_service";
import { CreateDriverDataSource } from "../datasource/create_driver_datasource";
import { AppDataSource } from "../../../database/data-source";

export class CreateDriverController{
    private service: ICreateDriverService
    constructor(){
        const db = AppDataSource
        const datasource = new CreateDriverDataSource(db)
        this.service = new CreateDriverService(datasource)
    }
    createDriverController = async (request: FastifyRequest, reply: FastifyReply) => {
        try{
            const body: any = request.body;
            const driver = new DriverEntity(
                body["DriverName"],
                body["Birthday"],
                body["PathImageDriver"],
                body["TitleCount"] ?? 0,
                body["Nationalitty"],
                body["IdTeam"]
            )
            await this.service.call(driver)
            
            const s = new SuccessResponse(201, 'Created')
            return reply.code(s.statusCode).send({message: s.message})
        }catch(error){
            if(error instanceof ErrorResponse){
                return reply.code(error.statusCode).send({message: error.message})
            }else{
                const e = new ErrorResponse()
                return reply.code(e.statusCode).send({message: e.message})

            }
        }
    }
}