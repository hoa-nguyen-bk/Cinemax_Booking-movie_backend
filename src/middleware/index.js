const { decodeToken } = require("../services/auth");
const { getUserById } = require("./../services/users");

const authenticate = async (req, res, next) => {
  try {
    const token = req?.header("Authorization")?.split(" ")[1];
    if (!token) return res.status(401).send("No token provided");
    const data = await decodeToken(token);
    if (!data || !data?.id) {
      return res.status(401).send("Wrong input token, please login again");
    }
    const user = await getUserById(data?.id);
    if (!user) {
      return req.status(401).send("Invalid token");
    }
    req.user = user;
    next();
  } catch (error) {
    res.status(401).send("Token is not valid. You are unauthorized");
    return console.log({ error });
  }
};

const checkRole = (role) => (req, res, next) => {
  const user = req.body.user;
  if (user.role !== role) {
    return res.status(401).send("Can not access"); // loi authen 401
  }
  next();
};

module.exports = { checkRole, authenticate };
