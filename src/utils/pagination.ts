import ErrorResponse from "../responses/error";

export class Pagination {
    readonly page;
    readonly pageSize;

    constructor({ page, pageSize }: PaginationJson) {
        if (typeof page == 'string') {
            page = Number.parseInt(page);
            if (isNaN(page)) {
                throw new ErrorResponse(422, 'page must be a number');
            }
            this.page = page;
        } else {
            this.page = page;
        }

        if (typeof pageSize == 'string') {
            pageSize = Number.parseInt(pageSize);
            if (isNaN(pageSize)) {
                throw new ErrorResponse(422, 'page must be a number');
            }
            this.pageSize = pageSize;
        } else {
            this.pageSize = pageSize;
        }
    }

    public getOffset = () => (this.page! - 1) * this.pageSize!;

}

export type PaginationJson = {
    page: number | string | undefined,
    pageSize: number | string | undefined,
}