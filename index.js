"use strict";

//đầu tiên: yarn init -y
//yarn add nodemon và express
// đưa nodemon vào devDependencies
const { createServer } = require('http');
const {Server} = require('socket.io')
const express = require("express");
const rootRouter = require("./src/routers");
const path = require('path')
const { sequelize } = require("./models");
const {SYSTEMS: {PORT}} = require("./src/config");
const { logger } = require("./src/middleware/logger");
const { graphqlHTTP } = require("express-graphql");
const graphqlSchema = require("./src/graphql/schema");
const { graphqlResolves } = require("./src/graphql/resolvers");

//thằng app này sẽ là app cha bao hết ứng dụng
const app = express();

app.use(express.json());
app.use('/public', express.static(path.join(__dirname, 'public')))
const mainUrl = "/api/v1";
//dùng logger ở đây để tất cả request đều qua đây
app.use(logger);
//lẩy rootRouter ra import zô đây mới ăn
app.use(mainUrl,rootRouter);
//graphql
app.use('/graphql',graphqlHTTP({
  schema: graphqlSchema,
  rootValue: graphqlResolves,
  graphiql: true
}))

sequelize
  .authenticate()
  .then(() => {
    console.log("Connection has been established successfully.");
  })
  .catch((err) => {
    console.error("Unable to connect to the database:", err);
  });
const httpServer = createServer(app)
httpServer.listen(PORT, ()=>{
  console.log(`app listening on port ${PORT}`);
})
const io = new Server(httpServer)

const arrUser = [
  {user: "hòa minzy"},
  {user: "hòa cute"}
]


io.on('connection', socket => {
  console.log(socket.id,"new connection");
  arrUser.push({user:socket.id});
  socket.broadcast.emit('refresh-user',arrUser.filter(user => user.user !== socket.id))
  //check coi token cos hop le
  // socket.handshake.auth.token=""
  socket.on('send-message', (message,callback) => {
    console.log({message});
    if(!message || !message.trim()){
      return callback('empty mess')
    }

    //emit to all user
    // io.emit('receive-message',message)
    //emit to all user except sender
    socket.broadcast.emit('receive-message',message)
  });
  socket.on('disconnect', () => { 
    console.log('disconect');
   });
});
// app.listen(PORT, () => {
//   console.log("app listen to port ", PORT);
// });



