import { ICustomResponse } from "./i_custom_response";

export default class ErrorResponse extends Error implements ICustomResponse {
    statusCode: number;
    message: string;

    constructor(statusCode?: number, message?: string) {
        super(message);
        this.statusCode = statusCode ?? 500;
        this.message = message ?? "Internal Server Error";
    }
}
