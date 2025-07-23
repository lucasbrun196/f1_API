import "reflect-metadata"
import { AppDataSource } from "./database/data-source"
import { createApp } from "./app"
import "reflect-metadata"
import 'dotenv/config'
import logger from "./utils/logger"


const server = createApp()
AppDataSource.initialize().then(() => {
    logger("Data Source has been initialized with successfully")
    server.listen({ port: Number(process.env.PORT), host: '0.0.0.0' }, (error) => {
        if (error) {
            logger(error);
            process.exit(1);
        }
        logger(`Server running: localhost:${process.env.PORT}`)
    })

}).catch((error) => logger(`Error during Data Source initialization ${error}`))

