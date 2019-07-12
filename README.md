# JavaScript learning
Repository used to develop my JavaScript skills

## Application:
REST API architecture, with purpose to make CRUD operations on simple MySQL database.

## Used techs:
* Express.js
* Sequelize
* Docker
* Some of the ES6/ES7 features
  
## Requirements to run:
* Installed Node
* Installed Docker
* Free by default ports: `3313` (database) and `3001` (app)

## Commands:
* `npm run start:local` - runs application
* `sh db_build.sh` - builds database container
* `sh docker/db_up.sh` - ups database container
* `npm run db:migrate`- creates migrations in database
* `npm run db:unmigrate` - destroys migrations in database
* `npm run db:seed` - seeds tables in database


## Changelog
* **12.07.19 v.0.0.1**
  * *Added*
    * README.md
    * Initial structure of project
    * Dockerized database server
* **12.07.19 v0.0.2**
  * *Added*
    * Routing for vehicles, types
    * Models for vehicles, types
    * Migrations for vehicles, types
  * *Modified*
    * Database's docker config files