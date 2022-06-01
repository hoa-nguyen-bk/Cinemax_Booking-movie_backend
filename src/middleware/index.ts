const { decodeToken } = require("../services/auth");
const {getUserById} = require("./../services/users")

const authenticate = async (req: { header: (arg0: string) => string; status: (arg0: number) => { (): any; new(): any; send: { (arg0: string): any; new(): any; }; }; user: any; }, res: { status: (arg0: number) => { (): any; new(): any; send: { (arg0: string): void; new(): any; }; }; }, next: () => void) => {
  try {
    const token = req?.header('Authorization')?.split(' ')[1];
    if (!token) return res.status(401).send('No token provided');

    const data = await decodeToken(token);
    const user = await getUserById(data.id);
    if (!user){
      return req.status(401).send('Invalid token');
    } 
    req.user = user;
    next();
  } catch (error) {

    res.status(401).send('Token is not valid. You are unauthorized')
    return console.log({error});
  }
};

const checkRole = (role: any) => (req: { body: { user: any; }; }, res: { status: (arg0: number) => { (): any; new(): any; send: { (arg0: string): any; new(): any; }; }; }, next: () => void) => {
  const user = req.body.user;
  if (user.role !== role) {
    return res.status(401).send("Can not access"); // loi authen 401
  }
  next();
};

export {checkRole, authenticate };

