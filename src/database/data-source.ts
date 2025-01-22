import { DataSource } from "typeorm";
import dotenv from 'dotenv';

dotenv.config()

export const AppDataSource = new DataSource({
    type: 'postgres',
    host: process.env.HOST_DB,
    port: Number(process.env.PORT_DB),
    username: process.env.USERNAME_DB,
    password: process.env.PASSWORD_DB,
    database: process.env.DATABASE_DB,
    migrations: ['src/database/migrations/*.ts'],
    synchronize: false,
    logging: true,

});