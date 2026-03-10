import { Pool } from "pg"

const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "postgres",
  password: "normaPostgres",
  port: 5432
})

export default pool