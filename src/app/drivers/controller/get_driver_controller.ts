import { FastifyReply, FastifyRequest } from "fastify";
import { IGetDriverService } from "../domain/service/i_get_driver_service";
import { GetDriverService } from "../domain/service/get_driver_service";
import { AppDataSource } from "../../../database/data-source";
import { GetDriverDatasource } from "../datasource/get_driver_datasource";
import SuccessResponse from "../../../responses/success";
import ErrorResponse from "../../../responses/error";
import { FilterDriverParamsJson } from "../domain/entities/params/filter_driver_params";
import { GetDriverRepository } from "../data/repository/get_driver_repository";

export class GetDriverController {
    private readonly service: IGetDriverService
    constructor() {
        const db = AppDataSource;
        const datasource = new GetDriverDatasource(db);
        const repo = new GetDriverRepository(datasource);
        this.service = new GetDriverService(repo)
    }
    getDriverController = async (request: FastifyRequest<{ Querystring: FilterDriverParamsJson }>, reply: FastifyReply) => {
        try {
            const params: FilterDriverParamsJson = request.query;
            const response = await this.service.call(params);
            if (response.length === 0) {
                const s = new SuccessResponse(204);
                return reply.status(s.statusCode).send();
            }
            const s = new SuccessResponse(200);
            return reply.code(s.statusCode).send(response);
        } catch (error) {
            console.log(error);
            if (error instanceof ErrorResponse) {
                return reply.code(error.statusCode).send({ message: error.message })
            } else {
                const e = new ErrorResponse()
                return reply.code(e.statusCode).send({ message: e.message })
            }
        }
    }
}