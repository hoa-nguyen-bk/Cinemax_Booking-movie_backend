const {buildSchema} = require("graphql");
//các phương thức ảnh hưởng đến dữ liệu thì dùng query, còn define get, patch, put thì dùng mutation


const graphqlSchema = buildSchema(`
  type user = {
    id: Int!
    firstName: String!
    lastName: String!
    email: String!
    birthday: Date!
    password: String!
    phoneNumber: String!
    role: String!
  }
  type rootQuery = {
    getAllUser: [User]!
  } 
  schema{
    query: rootQuery
  }
`)
module.exports = graphqlSchema;