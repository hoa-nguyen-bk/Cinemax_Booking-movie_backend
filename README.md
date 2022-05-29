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


heroku run node index.js  