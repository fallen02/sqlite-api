const knex = require('knex')

const connKnex = knex({
    client: "sqlite3",
    connection: {
        filename: "admin.sqlite3"
    }
})

module.exports = connKnex