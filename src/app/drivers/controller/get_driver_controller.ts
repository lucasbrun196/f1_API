import { FastifyReply, FastifyRequest } from "fastify";
import { IGetDriverService } from "../domain/service/i_get_driver_service";
import { GetDriverService } from "../domain/service/get_driver_service";
import { DataSource } from "typeorm";
import { AppDataSource } from "../../../database/data-source";
import { GetDriverDataSource } from "../datasource/get_driver_datasource";
import SuccessResponse from "../../../responses/success";
import ErrorResponse from "../../../responses/error";
import { FilterDriverParams } from "../domain/params/filter_driver_params";
import { GetDriverRepository } from "../data/get_driver_repository";

export class GetDriverController{
    private service: IGetDriverService
    constructor(){
        const db = AppDataSource;
        const datasource = new GetDriverDataSource(db);
        const repo = new GetDriverRepository(datasource);
        this.service = new GetDriverService(repo)
    }
    getDriverController = async (request: FastifyRequest<{Querystring: FilterDriverParams}>, reply: FastifyReply) => {
        try{
            const params = new FilterDriverParams(
                request.query.teamId as number,
                request.query.driverName,
                request.query.isGetTeam
            );

            const response = await this.service.call(params);
            const s = new SuccessResponse(200);
            return reply.code(s.statusCode).send(response);
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