# Web Application Test with Nodejs, Typescript


### Directory structure
- /src -> Next(Client)
- /server -> Nest(Server)
- /db -> MySQL(DB)


# FOR API (Backend)

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.
[Postman collection JSON](https://raw.githubusercontent.com/shaponpal6/twitter-clone/main/postman/Twitter%20Clone.postman_collection.json) test api endpoint.

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Theme
Please implement web application which is able to show murmur(=tweet) by user. (this application is similar to Twitter)

## Specifications
* The user can follow other users.
* By following, a list of murmurs posted by other users is displayed in the timeline.
* The user can post murmur as many times as he wants.
* Only the user who posted can delete his murmur.
* The user can add LIKE to another person's murmur.
* [optional] User authentication.

### DB
There are two sample tables in this application.
Please consider and add columns to below tables.
Further more I think you need more tables, so it's possible to add new tables depending on below specification.

e.g.
* murmurs
* users

### Server
Please implement REST API. There are three sample endpoints below.
I think you need more endpoints, so you add more endpoints as needed.
It is more highly appreciated if you can have it implemented using the [Nest.js framework](https://nestjs.com/), so please use it actively.
If you want to use ORM (e.g. [Sequelize](https://sequelize.org/), [TypeORM](https://typeorm.io/#/)), you can do that.

e.g.
* `[GET] /api/murmurs/`
* `[POST] /api/me/murmurs/`
* `[DELETE] /api/me/murmurs/:id/`

### Client
Please implement below function.
If you want to add new function after complete to implement below function, it's possible to add and we evaluate your original function.

 * Timeline
   * List of Murmur information (e.g. text, LIKE count)
   * LIKE button each murmur.
   * Show 10 murmur per page. (need to implement pagination)
 * Murmur Detail
   * Murmur Information (e.g. text, LIKE count)
 * Own User Detail 
   * User information (e.g. name, followCount, followedCount)
   * List of own murmurs
   * Button for delete a murmur
 * Other User Detail
   * User information (e.g. name, followCount, followedCount)
   * List of the user's murmurs


## How to start the development environment
### Programming Language
* Typescript
* Javascript

note: Please program by Typescript as much as possible. The Typescript ratio in your project is also evaluated.

