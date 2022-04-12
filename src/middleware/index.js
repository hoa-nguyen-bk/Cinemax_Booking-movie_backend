const { decodeToken } = require("../services/auth");
const {getUserById} = require("./../services/users")

const authenticate = async (req, res, next) => {
  try {
    const token = req.header('Authorization').split(' ')[1];
    console.log({token},"token");
    const data = await decodeToken(token);
    console.log(data,"dât");
    const user = await getUserById(data.id);
    console.log(user,"user");
    if (!user){
      return req.status(401).send('Invalid token');
    } 
    req.body.user = user;
    next();
  } catch (error) {
    res.status(500).send('authenticate error, server error')
    return console.log(error);
  }
};

const checkRole = (role) => (req, res, next) => {
  const user = req.body.user;
  if (user.role !== role) {
    return res.status(401).send("Can not access"); // loi authen 401
  }
  next();
};
module.exports = {checkRole, authenticate };

