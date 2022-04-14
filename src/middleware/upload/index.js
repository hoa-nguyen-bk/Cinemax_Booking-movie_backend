const multer = require("multer");
const uploadAvatar = (path) => {
  const storage = multer.diskStorage({
    destination: (req, file, cp) => {
      cp(null, path);
    },
    filename: (req, file, callback) => {
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
    fileFilter: (req, file, callback) => {
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
module.exports = {
  uploadAvatar,
};
