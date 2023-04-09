const config = require("config.json");
const mysql = require("mysql2/promise");
const { Sequelize } = require("sequelize");

module.exports = db = {};

initialize();

async function initialize() {
  const { host, port, user, password, database } = config.database;
  const { createDb } = config;

  try {
    const connection = await mysql.createConnection({
      host,
      port,
      user,
      password,
    });

    if (createDb) {
      await connection.query(`CREATE DATABASE IF NOT EXISTS \`${database}\`;`);
      console.log("Created database:", database);
    } else {
      console.log("Using database:", database);
    }

    const sequelize = new Sequelize(database, user, password, {
      dialect: "mysql",
    });

    db.User = require("../users/user.model")(sequelize);

    await sequelize.sync();
    console.log("Database models synced");
  } catch (error) {
    console.log("Error connecting to database:", error.message);
    process.exit(1);
  }
}
