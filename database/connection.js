import pkg from "pg"; // Importa todo el módulo como un objeto
const { Pool } = pkg; // Extrae Pool del objeto importado

import dotenv from "dotenv";
dotenv.config();

export const pool = new Pool({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT,
});
