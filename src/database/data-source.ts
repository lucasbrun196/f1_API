import { DataSource } from "typeorm";
import 'dotenv/config';
import isDev from "../utils/is_dev";


const root = isDev() ? "src" : "dist";
const fileType = isDev() ? "ts" : "js";

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
    logging: isDev(),

});