import { Sequelize } from "sequelize";
const env = process.env.NODE_ENV || "development";
const config = require("../config")[env];
import { readdirSync } from "fs";
import { basename as _basename, join } from "path";
import { configDB } from "../config";
const basename = _basename(__filename);
const db: any = {};
const conf: configDB = {
  username: "ba7c77fbbb8b35",
  password: "ad3b9bb0",
  database: "heroku_316385522d009b6",
  host: "us-cdbr-east-05.cleardb.net",
  dialect: "mysql",
};

let sequelize: Sequelize;
  sequelize = new Sequelize(
    conf?.database,
    conf?.username,
    conf?.password,
  {
    host: conf.host,
    dialect: conf.dialect
  } 
  );
readdirSync(__dirname)
  .filter((file) => {
    return (
      file.indexOf(".") !== 0 && file !== basename && file.slice(-3) === ".js"
    );
  })
  .forEach((file) => {
    //@ts-ignore
    const model = require(join(__dirname, file))(
      sequelize,
      Sequelize?.DataTypes
    );
    db[model.name] = model;
  });

Object.keys(db).forEach((modelName) => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

export { sequelize };
export default db;
