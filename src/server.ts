import "reflect-metadata"
import { AppDataSource } from "./database/data-source"
import { createApp } from "./app"
import "reflect-metadata"


const server = createApp()

AppDataSource.initialize().then(() => {
    console.log("Data Source has been initialized with successfully")

        server.listen({ port: Number(process.env.PORT)}, () => {
            console.log(`Server running: localhost:${process.env.PORT}`)
        })

}).catch((error) => console.log("Error during Data Source initialization ", error))

