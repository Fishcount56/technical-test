# Simple CRUD with Node Js, Express Js, and Sequelize ORM

## Install the Application

Run this command from the directory when you first clone

    npm install

Change the config.json on config file with your config before migrate the database

    "development": {
    "username": "root",
    "password": null,
    "database": "new_database_2",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }

Then run this command for migrate the database

    npx sequelize-cli db:migrate

and run this command for migrate the seeder

    npx sequelize-cli db:seed:all

