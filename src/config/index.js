const dbConnect = {
  username: "bfd2557cd29e86",
  password: "5cb9f2ce",
  database: "heroku_efed8e9ad8e8217",
  host: "us-cdbr-east-05.cleardb.net",
  dialect: "mysql",
};

const localQuang = {
  username: "root",
  password: "123456789",
  database: "localQuang",
  host: "localhost",
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
  localQuang,
};
module.exports = config;
