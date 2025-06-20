import { FastifyReply, FastifyRequest } from "fastify";
import { IdTeamJson } from "../domain/entities/params/id_team_param";
import ErrorResponse from "../../../responses/error";
import { IGetTeamImagePathService } from "../domain/service/i_get_team_image_path_service";
import { GetTeamImagePathService } from "../domain/service/get_team_image_path_service";
import { GetTeamImagePathRepository } from "../data/get_team_image_path_repository";
import { GetTeamImagePathDatasource } from "../datasource/get_team_image_path_datasource";
import { AppDataSource } from "../../../database/data-source";

export class GetTeamImageController {

    private readonly getTeamImagePathService: IGetTeamImagePathService;

    constructor() {
        const db = AppDataSource;

        const getTeamImagePathDatasource = new GetTeamImagePathDatasource(db);
        const getTeamImagePathRepository = new GetTeamImagePathRepository(getTeamImagePathDatasource);
        this.getTeamImagePathService = new GetTeamImagePathService(getTeamImagePathRepository);
    }

    getTeamImageController = async (request: FastifyRequest<{ Params: { id: number } }>, reply: FastifyReply) => {
        try {
            const params: IdTeamJson = request.params;
            const path = await this.getTeamImagePathService.call(params);
            return reply.code(200).send({ message: path });
        } catch (error) {
            if (error instanceof ErrorResponse) {
                return reply.code(error.statusCode).send({ message: error.message });
            }
            const e = new ErrorResponse();
            return reply.code(e.statusCode).send({ message: e.message });
        }
    }
}