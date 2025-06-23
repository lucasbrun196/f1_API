import fs from 'fs';
import path from 'path';
import { IGetTeamImageDatasource } from './i_get_team_image_datasource';
import getRootPath from '../../../utils/get_root_path';
import ErrorResponse from '../../../responses/error';

export class GetTeamImageDatasource implements IGetTeamImageDatasource {
    async call(params: string): Promise<Buffer> {
        try {
            const rootPath = getRootPath();
            const pathImage = path.join(rootPath, 'data', 'teams_photo', params);
            const imageBuffer = fs.readFileSync(pathImage);
            return imageBuffer;
        } catch (e) {
            throw new ErrorResponse(404, 'Image not found');
        }
    };
}