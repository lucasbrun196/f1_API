import { FastifyReply, FastifyRequest } from "fastify";
import ErrorResponse from "../../../responses/error";
import { PutDriverParamsJson } from "../domain/entities/params/put_driver_params";

export class PutDriverController {
    putDriverController = async (request: FastifyRequest<{ Body: PutDriverParamsJson, Params: { id: number } }>, reply: FastifyReply) => {
        try {
            const params: PutDriverParamsJson = {
                driverId: request.params.id,
                driverTeam: request.body.driverTeam,
                driverTitleCount: request.body.driverTitleCount
            }

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