const { Model } = require('objection');

const knex = require('knex')({
  client: 'mysql',
  connection: {
    host : 'localhost',
    port : 3306,
    user : 'root',
    password : 'password',
    database : 'database'
  }
});
console.log("port", process.env.DB_HOST)


// Give the knex instance to objection.
Model.knex(knex);

module.exports = knex;