const Pool = require('pg').Pool
const pool = new Pool({
    user: "postgres",
    password: 'qwerty',
    host: "localhost",
    port: 5432,
    database: "medtrack"
})


module.exports = pool