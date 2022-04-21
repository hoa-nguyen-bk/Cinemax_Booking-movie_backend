const {buildSchema} = require("graphql");
//các phương thức ảnh hưởng đến dữ liệu thì dùng query, còn define get, patch, put thì dùng mutation


const graphqlSchema = buildSchema(`
  type Avatar {
    id: Int!
    url: String!
    userId: Int!
    isActive: Boolean!
  }
  type User {
    id: Int!
    firstName: String!
    lastName: String!
    email: String!
    birthday: String!
    password: String!
    phoneNumber: String!
    role: String!
    avatar: Avatar!
    avatars: [Avatar]!
  }
  type rootQuery {
    getAllUser: [User]!,
    getUserById(id:Int):User!
  } 
  input UserInput{
    firstName: String!
    lastName: String!
    email: String!
    birthday: String!
    phoneNumber: String!
    password: String!
  }
  type rootMutation {
    createUser(userInput: UserInput): User

  } 
  schema{
    query: rootQuery
    mutation: rootMutation
  }
`)
module.exports = graphqlSchema;