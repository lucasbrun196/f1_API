import { FastifyReply, FastifyRequest } from "fastify";
import ErrorResponse from "../../../responses/error";
import { PutDriverParamsJson } from "../domain/entities/params/put_driver_params";
import { PutDriverService } from "../domain/service/put_driver_service";
import SuccessResponse from "../../../responses/success";
import { PutDriverDatasource } from "../datasource/put_driver_datasource";
import { AppDataSource } from "../../../database/data-source";
import { PutDriverRepository } from "../data/repository/put_driver_repository";
import { IPutDriverService } from "../domain/service/i_put_driver_service";

export class PutDriverController {

    private readonly service: IPutDriverService;

    constructor() {
        const db = AppDataSource;
        const data = new PutDriverDatasource(db);
        const repo = new PutDriverRepository(data);
        this.service = new PutDriverService(repo);
    }

    putDriverController = async (request: FastifyRequest<{ Body: PutDriverParamsJson, Params: { id: number } }>, reply: FastifyReply) => {
        try {
            const params: PutDriverParamsJson = {
                driverId: request.params.id,
                driverTeam: request.body.driverTeam,
                driverTitleCount: request.body.driverTitleCount
            };

            await this.service.call(params);
            const s = new SuccessResponse(200, 'Updated');
            return reply.status(s.statusCode).send({ message: s.message });
        } catch (error) {
            if (error instanceof ErrorResponse) {
                return reply.code(error.statusCode).send({ message: error.message });
            } else {
                const e = new ErrorResponse();
                return reply.code(e.statusCode).send({ message: e.message });
            }
        }
    }
}