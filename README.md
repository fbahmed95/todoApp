# Todo App

A simple todo app made with Express, Postgres, and Vue.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine.

### Prerequisites

#### For Linux / Windows
Here are some helpful links:
http://www.postgresqltutorial.com/install-postgresql/
and
https://www.digitalocean.com/community/tutorials/how-to-install-and-use-postgresql-on-ubuntu-16-04

#### For Mac OS
You'll need Postgres & npm & Homebrew to get started. This guide assumes that you already have npm & Homebrew installed. If you don't have Postgres, you'll need Homebrew to install it:

```
brew update
brew install postgres
brew services start postgresql
```

#### Once you have Postgres
Make sure Postgres is running on port 5432.

Before getting the app up and running, make sure you have a todosdb and a todostestdb:

```
createdb todosdb
createdb todostestdb
```

There is a configuredb.sh file and a configuretestdb.sh file that need write permissions given to it before they can be run:

```
chmod +x ./app/bin/configuredb.sh
chmod +x ./app/tests/test_server/configuretestdb.sh
```

The todos database configuration is as follows:
```
module.exports = {
  user: '',
  host: 'localhost',
  database: 'todosdb',
  password: '',
  port: 5432
};
```

The config file can be found in ./app/secrets/db_configuration.js and modified there. The todostestdb database config is similar and can be found in ./app/tests/test_server/db_configuration_test.js



### Installing

To get the app up and running, first configure the database. The bash file basically throws out old data and repopulates the database with some dummy data:

```
npm run configure
```

Then, install all dependencies:

```
npm install
```

Now you can officially run the app!

```
npm run start
```

If everything went well, you should be able to head over to localhost:3000 and see the app running there.

## Running the tests

To run the tests, run:
```
npm run test
```
Note: the above command will reconfigure the test database as well as run the test script.
