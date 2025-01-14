import fastify from "fastify"
import cors from "@fastify/cors"
import * as fs from "fs"
import path from "path"
import "reflect-metadata"
import { AppDataSorce } from "./database/data-source"


interface ENV {
    host: string;
    port: number;
}

const envs: ENV = {
    host: process.env.HOST ?? "",
    port: Number(process.env.PORT)
}

const server = fastify({ logger: true })

server.register(cors, {
    origin: "*",
    methods: [
        "GET"
    ]
})


interface Driver {
    id: number,
    name: string,
    team: string
}


server.get("/teams", async (request, reply) => {
    const teams = fs.readFileSync(path.join(__dirname, "./data/teams.json"), "utf-8")
    reply.type("application/json").code(200)
    reply.send(teams);
})

server.get("/drivers", async (request, reply) => {
    const drivers = fs.readFileSync(path.join(__dirname, "./data/drivers.json"), "utf-8")
    reply.type("application/json").code(200)
    reply.send(drivers)
})


server.get<{ Params: { name: string } }>("/images/:name", async (request, reply) => {
    const teamName: string = request.params.name

    if (fs.existsSync(path.join(__dirname, `./data/teams_photo/${teamName}.png`))) {
        const image = fs.readFileSync(path.join(__dirname, `./data/teams_photo/${teamName}.png`))
        reply.status(200).type("image/png").send(image)
    } else {
        reply.code(400).send({ message: "image not found" })
    }
})


server.get<{ Params: { id: string } }>("/drivers/:id", async (request, reply) => {
    const id = parseInt(request.params.id)
    const drivers = fs.readFileSync(path.join(__dirname, "./data/drivers.json"), "utf-8")
    const jsonFileDrivers: Driver[] = JSON.parse(drivers).drivers
    const findDriver = jsonFileDrivers.filter((e: Driver) => e.id === id)
    if (findDriver.length === 0) {
        reply.status(401).send({ message: "driver not found" })
    }
    reply.type("application/json").status(200)
    reply.send(findDriver)
})

AppDataSorce.initialize().then(() => {
    console.log("Data Source has been initialized with successfully")
    server.listen({ port: Number(process.env.PORT), host: process.env.HOST }, () => {
        console.log("Server has been initialized with successfully")
    })
}).catch((error) => console.log("Error during Data Source initialization ", error))

