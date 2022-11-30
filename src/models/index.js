"use strict";
const { Sequelize } = require("sequelize");
const env = process.env.NODE_ENV || "localHoa";
const config = require("../config")[env];
const fs = require("fs");
const path = require("path");
const basename = path.basename(__filename);
const db = {};
let sequelize;
if (config?.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
  sequelize = new Sequelize(
    config.database,
    config.username,
    config.password,
    config
  );
}
fs.readdirSync(__dirname)
  .filter((file) => {
    return (
      file.indexOf(".") !== 0 && file !== basename && file.slice(-3) === ".js"
    );
  })
  .forEach((file) => {
    const model = require(path.join(__dirname, file))(
      sequelize,
      Sequelize.DataTypes
    );
    db[model.name] = model;
  });

Object.keys(db).forEach((modelName) => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});
// sequelize
//   .sync({ force: true })
//   .then(() => {
//     console.log("Drop and re-sync db.");
//   })
//   .catch((err) => {
//     console.log(err);
//   });
db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
