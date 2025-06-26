import { FastifyReply, FastifyRequest } from "fastify";
import { DriverEntity, DriverEntityJson } from "../domain/entities/typeorm/driver_entity";
import ErrorResponse from "../../../responses/error";
import SuccessResponse from "../../../responses/success";
import { ICreateDriverService } from "../domain/service/i_create_driver_service";
import { CreateDriverService } from "../domain/service/create_driver_service";
import { CreateDriverDatasource } from "../datasource/create_driver_datasource";
import { AppDataSource } from "../../../database/data-source";
import { CreateDriverRepository } from "../data/repository/create_driver_repository";

export class CreateDriverController {
    private readonly service: ICreateDriverService
    constructor() {
        const db = AppDataSource
        const datasource = new CreateDriverDatasource(db)
        const repository = new CreateDriverRepository(datasource);
        this.service = new CreateDriverService(repository)
    }
    createDriverController = async (request: FastifyRequest<{ Body: DriverEntityJson }>, reply: FastifyReply) => {
        try {
            const params: DriverEntityJson = request.body;
            await this.service.call(params)
            const s = new SuccessResponse(201, 'Created')
            return reply.code(s.statusCode).send({ message: s.message })
        } catch (error) {
            if (error instanceof ErrorResponse) {
                return reply.code(error.statusCode).send({ message: error.message })
            } else {
                const e = new ErrorResponse()
                return reply.code(e.statusCode).send({ message: e.message })

            }
        }
    }
}