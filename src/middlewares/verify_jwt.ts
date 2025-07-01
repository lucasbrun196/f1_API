import  { FastifyReply, FastifyRequest, HookHandlerDoneFunction } from "fastify";
import jwt, { JwtPayload } from 'jsonwebtoken'
import ErrorResponse from "../responses/error";




const verifyJwt = async (request: FastifyRequest, reply: FastifyReply, done: HookHandlerDoneFunction) => {
    const accessToken = request.headers.accessToken as string | undefined;
    if(accessToken === undefined){
        const e = new ErrorResponse(401, 'Token not provided');
        return reply.code(e.statusCode).send({message: e.message});
    }   

    jwt.verify(accessToken, accessToken, (error, decode) => {
        if(error != null){
            const e = new ErrorResponse(401, error.message);
            return reply.code(e.statusCode).send({message: e.message});
        }
    });
    return done();
}

export default verifyJwt;