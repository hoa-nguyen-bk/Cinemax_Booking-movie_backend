const multer = require("multer");
const uploadAvatar = (path: any) => {
  const storage = multer.diskStorage({
    destination: (req: any, file: any, cp: (arg0: any, arg1: any) => void) => {
      cp(null, path);
    },
    filename: (req: any, file: { originalname: string; }, callback: (arg0: any, arg1: string) => void) => {
      // if want to make a weird file name
      const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
      // callback(null, file.fieldname + '-' + uniqueSuffix)
      callback(null, `${Date.now()}.${file.originalname.split('.').pop()}`);
    },
  });
  const upload = multer({
    storage,
    limits: {
      fileSize: 1000000
    },
    fileFilter: (req: any, file: { originalname: string; }, callback: (arg0: Error, arg1: boolean) => void) => {
      const isValidType = new RegExp('^.*\.(jpg|JPG|jpeg|JPEG|gif|GIF|doc|DOC|pdf|PDF)$').test(file.originalname);
      
      if(isValidType){
        callback(null,true);
      } else {
        callback(new Error("Invalid file"), false);
      }
    }
  });
  return upload.single('avatar')
};
export {
  uploadAvatar,
};
