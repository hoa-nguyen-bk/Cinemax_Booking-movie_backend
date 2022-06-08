
import { Sequelize } from 'sequelize';
const env = process.env.NODE_ENV || 'development';
const config = require('../config')[env];
import { readdirSync } from 'fs';
import { basename as _basename, join } from 'path';
const basename = _basename(__filename);
const db:any = {};

let sequelize: Sequelize;
if (config?.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable] as string, config);
} else {
  sequelize = new Sequelize(config?.database, config?.username, config?.password, config);
}
readdirSync(__dirname)
  .filter(file => {
    return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
  })
  .forEach(file => {
    //@ts-ignore
    const model = require(join(__dirname, file))(sequelize, Sequelize?.DataTypes);
    db[model.name] = model;
  });

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

export {sequelize}
export default db;
