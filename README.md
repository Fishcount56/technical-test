# Simple CRUD with Node Js, Express Js, and Sequelize ORM

## Install the Application

Run this command from the directory when you first clone

    npm install

Change the config.json on config file with your config before migrate the database

    "development": {
        "username": "root",
        "password": null,
        "database": "[your database]",
        "host": "127.0.0.1",
        "dialect": "mysql"
    }
    

Then run this command for migrate the database

    npx sequelize-cli db:migrate

and run this command for migrate the seeder

    npx sequelize-cli db:seed:all

Change the port on index.js file, then run this command to run the application

    npm start

Use this on postman if you want loggin as admin

    {
      "usernamelogin" : "admin",
      "passwordlogin" : "123456"
    }

This is some endpoint that you can use only as an admin

    [POST]   http://localhost:[yourport]/api/v1/addBook
    [PATCH]  http://localhost:[yourport]/api/v1/updateBook/id=:id
    [DELETE] http://localhost:[yourport]/api/v1/deleteBook/id=:id

this is someendpoint that you can use without loggin as admin

    [POST] http://localhost:[yourport]/api/v1/login
    [POST] http://localhost:[yourport]/api/v1/register
    [GET]  http://localhost:[yourport]/api/v1/books
    [GET]  http://localhost:[yourport]/api/v1/book/id=:id