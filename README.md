# project-backend-cybersoft

**Author:**
Hòa
Quang

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

    heroku git:remote -a project-backend-cybersoft1
You can check the result of this step with  ``:

```bash
$ git remote -v
heroku  https://git.heroku.com/nodejs-express-mysql1.git (fetch)
heroku  https://git.heroku.com/nodejs-express-mysql1.git (push)
origin  https://github.com/student1060632fpt/node-express-mysql-test.git (fetch)
origin  https://github.com/student1060632fpt/node-express-mysql-test.git (push)
```

```
git push heroku main
```

**Setup mysql to cleardb**
to avoid the error mysql is not recognied

    SET PATH=%PATH%;C:\Program Files\MySQL\MySQL Server 8.0\bin

to avoid the error not auth or something

    mysql --user=root --password=12345678

to start setup
mysql://be16359ee2a58c:91334c16@us-cdbr-east-05.cleardb.net/heroku_714e0d2370734dd?reconnect=true

    mysql --host=us-cdbr-east-05.cleardb.net --user=be16359ee2a58c --password=91334c16 --reconnect heroku_714e0d2370734dd

then let's run in heroku clear db

    heroku run node index.js  

another setup in feat/express

    mysql://ba7c77fbbb8b35:ad3b9bb0@us-cdbr-east-05.cleardb.net/heroku_316385522d009b6?reconnect=true

    
and then go to mysql

    mysql --host=us-cdbr-east-05.cleardb.net --user=ba7c77fbbb8b35 --password=ad3b9bb0 --reconnect heroku_316385522d009b6

Also, you need to set the environment variables for your running Heroku's app:

    heroku config:set DB_USER=ba7c77fbbb8b35
    heroku config:set DB_PASSWORD=ad3b9bb0
    heroku config:set DB_HOST=us-cdbr-east-05.cleardb.net
    heroku config:set DATABASE=heroku_316385522d009b6


We alse have a procfile, which is declare here

https://devcenter.heroku.com/articles/getting-started-with-nodejs#define-a-procfile