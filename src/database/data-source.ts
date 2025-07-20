import { DataSource } from "typeorm";
import 'dotenv/config';

const root = process.env.NODE_ENV == "dev" ? "src" : "dist";
const fileType = process.env.NODE_ENV == "dev" ? "ts" : "js";

export const AppDataSource = new DataSource({
    type: 'postgres',
    host: process.env.HOST_DB,
    port: Number(process.env.PORT_DB),
    username: process.env.USERNAME_DB,
    password: process.env.PASSWORD_DB,
    database: process.env.DATABASE_DB,
    entities: [`${root}/app/*/domain/entities/typeorm/*.${fileType}`],
    migrations: [`${root}/database/migrations/*.${fileType}`],
    synchronize: false,
    logging: true,

});