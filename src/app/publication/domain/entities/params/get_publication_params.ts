import { Pagination } from "../../../../../utils/pagination";

export class GetPublicationParams {
    readonly id;
    readonly pagination;

    constructor({ id, pagination }: GetPublicationParamsJson) {
        this.id = id;
        this.pagination = pagination;
    }
}

export type GetPublicationParamsJson = {
    id?: number | string | undefined,
    pagination?: Pagination | undefined;
}