import isDev from "./is_dev";

function logger(output: any): void {
    if (isDev()) console.log(output);
}

export default logger;