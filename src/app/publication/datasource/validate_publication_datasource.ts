import { DataSource } from "typeorm";
import { IValidatePublicationDatasource } from "../data/datasource/i_validate_publication_datasource";
import { DeletePublicationParams } from "../domain/entities/params/delete_publication_params";
import { PostEntity } from "../domain/entities/typeorm/post_entity";
import { UsersEntity } from "../../users/domain/entities/typeorm/users_entity";
import ErrorResponse from "../../../responses/error";

export class ValidatePublicationDatasource implements IValidatePublicationDatasource {

    private readonly db;

    constructor(db: DataSource) {
        this.db = db;
    }
    async call(params: DeletePublicationParams): Promise<PostEntity | null> {

        const user = await this.db.getRepository(UsersEntity).findOneByOrFail({ id: params.userId }).catch(() => {
            throw new ErrorResponse(400, 'User does not exist')
        });
        return this.db.getRepository(PostEntity).findOneBy({ id: params.id, id_user_fk: user });
    }
}