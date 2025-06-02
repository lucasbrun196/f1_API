import { FastifyReply, FastifyRequest } from "fastify";
import ErrorResponse from "../../../responses/error";

export class PutDriverController {
    putDriverController = async (request: FastifyRequest, reply: FastifyReply) => {
        try {

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