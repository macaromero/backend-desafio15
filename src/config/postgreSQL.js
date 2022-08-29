// const options = {
//     client: process.env.MARIADB_CLIENT,
//     connection: {
//         host: process.env.MARIADB_HOST,
//         user: process.env.MARIADB_USER,
//         pass: process.env.MARIADB_PASS,
//         database: process.env.MARIADB_DATABASE
//     }
// };

const options = {
    client: process.env.DATABASE_CLIENT || "pg",
    connectionString: process.env.DATABASE_URL,
    ssl: {
        rejectUnauthorized: false
    }
};

module.exports = { options }