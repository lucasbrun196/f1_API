import "reflect-metadata"
import { AppDataSource } from "./database/data-source"
import { createApp } from "./app"


const server = createApp()

AppDataSource.initialize().then(() => {
    console.log("Data Source has been initialized with successfully")

        server.listen({ port: Number(process.env.PORT), host: process.env.HOST }, () => {
            console.log("Server has been initialized with successfully")
        })

}).catch((error) => console.log("Error during Data Source initialization ", error))

