import { Dialect } from "sequelize/types";

export type configDB = {
  username: string;
  password: string;
  database: string;
  host: string;
  dialect: Dialect;
};
type configType = {
  auth: {
    SECRET_KEY: string;
  };
  SYSTEMS: {
    PORT: number;
    HOST: string;
    DOMAIN: string;
  };
  development: configDB;
  test: configDB;
  production: configDB;
};
const config: configType = {
  auth: {
    SECRET_KEY: "nodejs-20",
  },
  SYSTEMS: {
    PORT: 3000,
    HOST: "http://localhost:",
    DOMAIN: "http://localhost:3000",
  },
  development: {
    username: "ba7c77fbbb8b35",
    password: "ad3b9bb0",
    database: "heroku_316385522d009b6",
    host: "us-cdbr-east-05.cleardb.net",
    dialect: "mysql",
  },
  test: {
    username: "ba7c77fbbb8b35",
    password: "ad3b9bb0",
    database: "heroku_316385522d009b6",
    host: "us-cdbr-east-05.cleardb.net",
    dialect: "mysql",
  },
  production: {
    username: "ba7c77fbbb8b35",
    password: "ad3b9bb0",
    database: "heroku_316385522d009b6",
    host: "us-cdbr-east-05.cleardb.net",
    dialect: "mysql",
  },
};
export default config;
