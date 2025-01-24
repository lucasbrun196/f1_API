import { ValidateFunction } from "ajv";
import { FastifyReply, FastifyRequest, HookHandlerDoneFunction } from "fastify";

export function validateSchemaMiddleware(ajvValidate: ValidateFunction<unknown>){
    return (request: FastifyRequest, reply: FastifyReply, done: HookHandlerDoneFunction) => {
        const valid = ajvValidate(request.body)
        if(!valid){
            const errors = ajvValidate.errors
            return reply.code(400).send(errors)
        }
        done()
    }
}