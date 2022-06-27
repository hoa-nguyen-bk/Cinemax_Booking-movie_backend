# project-backend-cybersoft

**Author:**
Hòa
Quang

**Link swagger**
https://swagger-nodejs-api-2022.herokuapp.com/api-docs/#/Books/delete_books__id_

**Các bước setup:**
Đọc cái doc này trước
https://www.bezkoder.com/deploy-node-js-app-heroku-cleardb-mysql/

**Sync với github trước**
Sau đó tới heroku
```bash
heroku login
```
dùng nick 
> student1060632fpt
> i3-*****

**Sau đó **

    heroku git:remote -a project-backend-cybersoft2
You can check the result of this step with  ``:

```bash
$ git remote -v
heroku  https://git.heroku.com/nodejs-express-mysql1.git (fetch)
heroku  https://git.heroku.com/nodejs-express-mysql1.git (push)
origin  https://github.com/student1060632fpt/node-express-mysql-test.git (fetch)
origin  https://github.com/student1060632fpt/node-express-mysql-test.git (push)
```

```
git push heroku feat/express
```

**Setup mysql to cleardb**
to avoid the error mysql is not recognied

    SET PATH=%PATH%;C:\Program Files\MySQL\MySQL Server 8.0\bin

to avoid the error not auth or something

    mysql --user=root --password=12345678
    mysql --user=ba7c77fbbb8b35 --password=ad3b9bb0 --database=heroku_316385522d009b6 --host=us-cdbr-east-05.cleardb.net

to start setup

then let's run in heroku clear db in another terminal

    heroku run node index.js  

This is Setup link

    mysql://bfd2557cd29e86:5cb9f2ce@us-cdbr-east-05.cleardb.net/heroku_efed8e9ad8e8217?reconnect=true
    
and then go to mysql

    mysql --host=us-cdbr-east-05.cleardb.net --user=bfd2557cd29e86 --password=5cb9f2ce --reconnect heroku_efed8e9ad8e8217

Migrating an existing database to ClearDB
    heroku addons:create cleardb:ignite --fork=mysql://bfd2557cd29e86:5cb9f2ce@us-cdbr-east-05.cleardb.net/heroku_efed8e9ad8e8217?reconnect=true

Also, you need to set the environment variables for your running Heroku's app:

    heroku config:set DB_USER=bfd2557cd29e86
    heroku config:set DB_PASSWORD=5cb9f2ce
    heroku config:set DB_HOST=us-cdbr-east-05.cleardb.net
    heroku config:set DATABASE=heroku_efed8e9ad8e8217


We alse have a procfile, which is declare here

https://devcenter.heroku.com/articles/getting-started-with-nodejs#define-a-procfile


**Các bước tạo một table mới**

Ví dụ: làm một api lấy danh sách quyền của người dùng
B1: chạy câu lệnh trong terminal để tạo model role
```
sequelize model:generate --name Role --attributes type:string,description:string
```
B2: chạy migrate để tạo ra các column trong table của database
```
sequelize db:migrate
```

**Các bước setup heroku:**
- b1: `npm install -g heroku`
- b2: `heroku --version` (để check version heroku)
- b3: login vào heroku bằng câu lệnh `heroku login`, sau đó heroku sẽ bảo gõ bất kì chữ nào, và lúc đó chỉ cần gõ tạm 1 chữ và đăng nhập vào.
- b4 (Optional): check lại thông tin mình đã login bằng câu lệnh `heroku login -i`

**các bước deploy code lên heroku:**

- B1: mở project github.com/student1060632fpt/project-backend-cybersoft

- B2: checkout về nhánh main

- B3: `git add .` và `git commit -m <commit-description>` gì đó như bình thường vẫn hay làm

- B4: push code lên github trước bằng các câu lệnh push : `git push origin main`

- B5: push code lên heroku bằng câu lệnh: `git push heroku main`


## Các bước setup database ở local

- Bước 1: vào file `src/config/index.js `
- Bước 2: tạo biến để kết nối với database ở máy local cá nhân trong đó có:

```
const localQuang = {
    username: "root",
    password: "",
    database: "",
    host: "localhost",
    dialect: "mysql",
  },
```

Với các trường phù hợp với trong hình
![database setup](https://cdn.discordapp.com/attachments/924836598313541663/986126747420475482/unknown.png)
và dialect là mysql tại vì chúng ta đang xài mysql

- bước 3: đưa biến localQuang vào biến config

```
const config = {
  auth: {
    SECRET_KEY: "nodejs-20",
  },
  SYSTEMS: {
    PORT: 3000,
    HOST: "http://localhost:",
    DOMAIN: "http://localhost:3000",
  },
  development: dbConnect,
  test: dbConnect,
  production: dbConnect,
  localHoa: {
    username: "root",
    password: "12345678",
    database: "hoa_movie",
    host: "localhost",
    dialect: "mysql",
  },
  //localQuang right here
  localQuang
};
```

- bước 4: vào 2 thư mục `.sequelizerc` và `src/models/index.js` như trong hình đổi biến **localHoa** thành **localQuang**
  ![database setup](https://cdn.discordapp.com/attachments/924836598313541663/986127771971514368/unknown.png)

- bước 5: chạy lại yarn run start
## Các bước setup database từ local qua lại heroku
- B1: ở file `.sequelize` và `src\config\index.js` ta đổi biến `localHoa` hoặc `localQuang` được đưa làm ví dụ ở trên thành biến `development`
![change variable database name](https://cdn.discordapp.com/attachments/984347898261159947/987942814841196575/unknown.png)
![change variable](https://cdn.discordapp.com/attachments/984347898261159947/987944224240590878/unknown.png)
- B2: login vào heroku bằng câu lệnh `heroku login`, sau đó heroku sẽ bảo gõ bất kì chữ nào, và lúc đó chỉ cần gõ tạm 1 chữ và đăng nhập vào.
- B4 (Optional): check lại thông tin mình đã login bằng câu lệnh `heroku login -i`
- B5: Để test app và db chạy ổn hay không trên máy local, ta chạy lệnh `heroku local`. Vì đây là chạy trên máy local nên *chưa có db*, nhưng vẫn QUAN TRỌNG VÀ cần chạy thử để test trường hợp nếu bị lỗi khi migrate hay seeder một entity nào đó
  - Test thử trên database 
  - Nếu chạy ổn và không hiện lỗi nào thì test thử call api trên postman với `domain` là `herokuDomain`
![run in postman](https://cdn.discordapp.com/attachments/984347898261159947/987958377697136690/unknown.png)
  - Và chạy thử trên api chưa có gì hết là api get roles
![in roles](https://cdn.discordapp.com/attachments/984347898261159947/987958794879402004/unknown.png)
  - Sau khi chạy ổn mà không bị bug nào bạn có thể close  terminal và chuyển đến bước 6
- B6: Chạy trên heroku luôn bằng câu lệnh 
  ```heroku run node index.js``` 
  - B6.1: Ở bước này, ta nên xóa các db cũ bằng cách dùng lệnh ```sequelize db:migrate:undo```
    - Ở bước B6.1 nếu gặp lỗi `Cannot delete or update a parent row: a foreign key constraint fails`. Ta phải vào dbeaver xóa tay từng table một, bắt đầu từ table roles, hiện tại chưa nghĩ ra cách nào nhanh hơn
    - Sau đó tạo lại 
  
  - Sau đó migrate lại bằng lệnh `sequelize db:migrate`
  - Và chạy seeder để tạo các data cần phải có `npx sequelize-cli db:seed:all`


cba
