function isDev(): boolean {
    return String(process.env.NODE_ENV) == "dev";
}
export default isDev;