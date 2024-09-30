import fastify from "fastify"
import cors from "@fastify/cors"

const server = fastify({logger: true})

server.register(cors, {
    origin: "*",
})




const teams = [
    { id: 1, name: "Ferrari", country: "Italy" },
    { id: 2, name: "McLaren", country: "United Kingdom" },
    { id: 3, name: "Red Bull Racing", country: "United Kingdom" },
    { id: 4, name: "Mercedes", country: "Germany" },
    { id: 5, name: "Alpine", country: "France" },
    { id: 6, name: "Aston Martin", country: "United Kingdom" },
    { id: 7, name: "AlphaTauri", country: "Italy" },
    { id: 8, name: "Alfa Romeo", country: "Switzerland" },
    { id: 9, name: "Williams", country: "United Kingdom" },
    { id: 10, name: "Haas", country: "United States" }
];


const drivers = [
    { id: 1, name: "Charles Leclerc", team: "Ferrari" },
    { id: 2, name: "Carlos Sainz", team: "Ferrari" },
    { id: 3, name: "Lando Norris", team: "McLaren" },
    { id: 4, name: "Oscar Piastri", team: "McLaren" },
    { id: 5, name: "Max Verstappen", team: "Red Bull Racing" },
    { id: 6, name: "Sergio Perez", team: "Red Bull Racing" },
    { id: 7, name: "Lewis Hamilton", team: "Mercedes" },
    { id: 8, name: "George Russell", team: "Mercedes" },
    { id: 9, name: "Esteban Ocon", team: "Alpine" },
    { id: 10, name: "Pierre Gasly", team: "Alpine" },
    { id: 11, name: "Fernando Alonso", team: "Aston Martin" },
    { id: 12, name: "Lance Stroll", team: "Aston Martin" },
    { id: 13, name: "Yuki Tsunoda", team: "AlphaTauri" },
    { id: 14, name: "Daniel Ricciardo", team: "AlphaTauri" },
    { id: 15, name: "Valtteri Bottas", team: "Alfa Romeo" },
    { id: 16, name: "Zhou Guanyu", team: "Alfa Romeo" },
    { id: 17, name: "Alex Albon", team: "Williams" },
    { id: 18, name: "Logan Sargeant", team: "Williams" },
    { id: 19, name: "Kevin Magnussen", team: "Haas" },
    { id: 20, name: "Nico Hulkenberg", team: "Haas" }
];

server.get("/teams", async(request, respose) => {
    respose.type("application/json").code(200)
    return { teams }
})


server.get("/drivers", async(request, response) => {
    response.type("application/json").code(200)
    return { drivers }
})

interface ParamsDriver{
    id: string
}

//Every params recived in bellow route will be type ParamsDriver
server.get<{Params: ParamsDriver}>("/drivers/:id", async (request, response) => {
    const id = parseInt(request.params.id)
    const findDriver = drivers.find( d => d.id === id )

    if(!findDriver){
        response.type("application/json").status(404)
        return { message: "Driver not found" }
    }

    response.type("application/json").status(200)
    return { findDriver }
})

server.listen({port: 3333}, () => {
    console.log("server init");
    
})