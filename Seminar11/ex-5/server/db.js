const { Sequelize } = require("sequelize");

// Pune aici user/parola de Postgres
const sequelize = new Sequelize(
  process.env.DATABASE_URL || "postgres://postgres:postgres@localhost:5432/ex4_users",
  {
    dialect: "postgres",
    logging: false,
  }
);

module.exports = sequelize;
