USE project_movie;

CREATE TABLE IF NOT EXISTS `user` (
  id int(11) NOT NULL PRIMARY KEY AUTO_INCREMENT,
  firstName varchar(255) NOT NULL,
  lastName varchar(255) NOT NULL,
  email varchar(255) NOT NULL,
  birthday date NOT NULL,
  password varchar(255) NOT NULL,
  phoneNumber varchar(255) NOT NULL,
  role varchar(50) not null
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

npx sequelize model:generate --name User --attributes firstName:string,lastName:string,birthday:date,email:string,password:string,phoneNumber:string,role:string

npx sequelize db:migrate