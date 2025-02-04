import { ICustomResponse } from "./i_custom_response";

export default class SuccessResponse implements ICustomResponse{
    statusCode: number;
    message: string;

    constructor(statusCode?: number, message?: string){
        this.statusCode = statusCode ?? 200,
        this.message = message ?? "Success"
    }

}