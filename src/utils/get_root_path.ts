import { dirname } from "path";

function getRootPath(): string {
    return dirname(process.argv[1]);
}

export default getRootPath;