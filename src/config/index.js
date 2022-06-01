const config = {
  auth: {
    SECRET_KEY:'nodejs-20', 
  },
  SYSTEMS: {
    PORT: 3000,
    HOST: 'http://localhost:',
    DOMAIN: "http://localhost:3000"
  },
  development: {
    username: "ba7c77fbbb8b35",
    password:"ad3b9bb0",
    database: "heroku_316385522d009b6",
    host: "us-cdbr-east-05.cleardb.net",
    dialect: "mysql"
  },
  test: {
    username: "ba7c77fbbb8b35",
    password:"ad3b9bb0",
    database: "heroku_316385522d009b6",
    host: "us-cdbr-east-05.cleardb.net",
    dialect: "mysql"
  },
  production: {
    username: "ba7c77fbbb8b35",
    password:"ad3b9bb0",
    database: "heroku_316385522d009b6",
    host: "us-cdbr-east-05.cleardb.net",
    dialect: "mysql"
  }
}
module.exports = config