import { DataSource } from "typeorm";

export const AppDataSorce = new DataSource({
    type: "postgres",
    host: process.env.HOST_DB,
    port: Number(process.env.PORT_DB),
    username: process.env.USERNAME_DB,
    password: process.env.PASSWORD,
    database: process.env.DATABASE_DB,
    synchronize: true,
    logging: true,
});