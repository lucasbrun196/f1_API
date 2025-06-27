import ErrorResponse from "../../responses/error";
import { IDatabaseErrorMessgaeJson } from "./database_error_message_json";

export class DatabaseException extends Error {

    static error(errorMessage: IDatabaseErrorMessgaeJson): void {
        let formatedDatail: string = errorMessage.detail;
        if (errorMessage.detail.includes('(') || errorMessage.detail.includes('(')) {
            formatedDatail = errorMessage.detail.split(' ')[1].split('=')[0];
        }

        switch (errorMessage.code) {
            case '23505':
                throw new ErrorResponse(400, `Values already exists ${formatedDatail}`);
            case '23503':
                throw new ErrorResponse(400, `Values does not exist ${formatedDatail}`);
            default:
                throw new ErrorResponse();
        }
    }
}