import { FastifyReply, FastifyRequest } from "fastify";
import { IdTeamJson } from "../domain/entities/params/id_team_param";
import ErrorResponse from "../../../responses/error";
import { IGetTeamImagePathService } from "../domain/service/i_get_team_image_path_service";
import { GetTeamImagePathService } from "../domain/service/get_team_image_path_service";
import { GetTeamImagePathDatasource } from "../datasource/get_team_image_path_datasource";
import { AppDataSource } from "../../../database/data-source";
import { IGetTeamImageService } from "../domain/service/i_get_team_image_service";
import { GetTeamImageDatasource } from "../datasource/get_team_image_datasource";
import { GetTeamImageRepository } from "../data/repository/get_team_image_repository";
import { GetTeamImageService } from "../domain/service/get_team_image_service";
import { GetTeamImagePathRepository } from "../data/repository/get_team_image_path_repository";

export class GetTeamImageController {

    private readonly getTeamImagePathService: IGetTeamImagePathService;

    private readonly getTeamImageService: IGetTeamImageService;

    constructor() {
        const db = AppDataSource;

        const getTeamImageDatasource = new GetTeamImageDatasource();
        const getTeamImageRepository = new GetTeamImageRepository(getTeamImageDatasource);
        this.getTeamImageService = new GetTeamImageService(getTeamImageRepository);

        const getTeamImagePathDatasource = new GetTeamImagePathDatasource(db);
        const getTeamImagePathRepository = new GetTeamImagePathRepository(getTeamImagePathDatasource);
        this.getTeamImagePathService = new GetTeamImagePathService(getTeamImagePathRepository);
    }

    getTeamImageController = async (request: FastifyRequest<{ Params: { id: number } }>, reply: FastifyReply) => {
        try {
            const params: IdTeamJson = request.params;
            const path = await this.getTeamImagePathService.call(params);
            const image = await this.getTeamImageService.call(path);
            return reply.code(200)
                .header('Content-Type', 'image/png')
                .send(image);
        } catch (error) {
            console.log(error);
            if (error instanceof ErrorResponse) {
                return reply.code(error.statusCode).send({ message: error.message });
            }
            const e = new ErrorResponse();
            return reply.code(e.statusCode).send({ message: e.message });
        }
    }
}