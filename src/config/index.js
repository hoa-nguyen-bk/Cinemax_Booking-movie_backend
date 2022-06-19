const dbConnect = {
  username: "ba7c77fbbb8b35",
  password: "ad3b9bb0",
  database: "heroku_316385522d009b6",
  host: "us-cdbr-east-05.cleardb.net",
  dialect: "mysql",
};

const config = {
  auth: {
    SECRET_KEY: "nodejs-20",
  },
  SYSTEMS: {
    PORT: 3000,
    HOST: "http://localhost:",
    DOMAIN: "http://localhost:3000",
  },
  development: dbConnect,
  test: dbConnect,
  production: dbConnect,
  localHoa: {
    username: "root",
    password: "12345678",
    database: "hoa_movie",
    host: "localhost",
    dialect: "mysql",
  },
};
module.exports = config;
