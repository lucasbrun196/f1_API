import { FastifyReply, FastifyRequest, HookHandlerDoneFunction } from "fastify";
import jwt, { JwtPayload } from 'jsonwebtoken'
import ErrorResponse from "../responses/error";




const verifyJwt = async (request: FastifyRequest, reply: FastifyReply, done: HookHandlerDoneFunction) => {
    const accessToken = request.headers.accesstoken as string | undefined;

    if (accessToken === undefined) {
        const e = new ErrorResponse(401, 'Token not provided');
        return reply.code(e.statusCode).send({ message: e.message });
    }
    const secret = String(process.env.SECRET_KEY);
    jwt.verify(accessToken, secret, (error, decode) => {
        if (error != null) {
            const e = new ErrorResponse(401, error.message);
            return reply.code(e.statusCode).send({ message: e.message });
        }
        const JwtPayload = decode as JwtPayload
        reply.locals = {
            userId: Number.parseInt(JwtPayload.sub! ?? -1) as number,
            admin: JwtPayload.data.admin as boolean
        }
    });
    return done();
}

export default verifyJwt;