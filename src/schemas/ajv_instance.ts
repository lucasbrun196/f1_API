import Ajv from "ajv";

export const ajv = new Ajv({
    allErrors: true,
    coerceTypes: true,
    useDefaults: true,
    removeAdditional: true,
})