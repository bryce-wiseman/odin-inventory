import pg from "pg";

let HOST = process.env.HOST
let USER = process.env.USERNAME
let PASSWORD = process.env.PASSWORD
let DATABASE = process.env.DATABASE

export const pool = new pg.Pool({
    host: HOST,
    user: USER,
    database: DATABASE,
    password: PASSWORD,
    port: 5432 // The default port
  })