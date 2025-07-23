import ErrorResponse from "../../../../../responses/error";

export class DeletePublicationParams {
    readonly id;
    readonly userId;
    readonly admin;

    constructor({ id, userId, admin }: DeletePublicationParamsJson) {

        if (typeof id == 'string') {
            id = Number.parseInt(id);
            if (isNaN(id)) {
                throw new ErrorResponse(422, 'id must be a number');
            }
            this.id = id;
        } else {
            this.id = id;
        }
        this.userId = userId;
        this.admin = admin;
    }


}

export type DeletePublicationParamsJson = {
    id: number | string,
    userId: number,
    admin: boolean,
}