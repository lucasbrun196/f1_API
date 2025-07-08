import { FastifyReply, FastifyRequest, HookHandlerDoneFunction } from "fastify";
import ErrorResponse from "../responses/error";

const verifyUserAccess = async (request: FastifyRequest, reply: FastifyReply, done: HookHandlerDoneFunction) => {
    const userType = reply.locals.admin;
    if (!userType) {
        throw new ErrorResponse(401, 'User not allowed to access this endpoint');
    }
    return done();
}

export default verifyUserAccess;