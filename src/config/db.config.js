const dbConnect = {
  username: "ba7c77fbbb8b35",
  password:"ad3b9bb0",
  database: "heroku_316385522d009b6",
  host: "us-cdbr-east-05.cleardb.net",
  dialect: "mysql"
}

module.exports = {
  development: dbConnect,
  test: dbConnect,
  production: dbConnect
}
