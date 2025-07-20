import "reflect-metadata"
import { AppDataSource } from "./database/data-source"
import { createApp } from "./app"
import "reflect-metadata"
import 'dotenv/config'


const server = createApp()
AppDataSource.initialize().then(() => {
    console.log("Data Source has been initialized with successfully")
    server.listen({ port: Number(process.env.PORT), host: '0.0.0.0' }, (error) => {
        if (error) {
            console.log(Number(process.env.PORT));

            console.log(error);
            process.exit(1);

        }
        console.log(`Server running: localhost:${process.env.PORT}`)
    })

}).catch((error) => console.log("Error during Data Source initialization ", error))

