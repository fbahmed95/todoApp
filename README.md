# Todo App

A simple todo app made with Express, Postgres, and Vue.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine.

### Prerequisites

You'll need Postgres & npm & Homebrew to get started. This guide assumes that you already have npm & Homebrew installed. If you don't have Postgres, you'll need Homebrew to install it:

```
brew update
brew install postgres
brew services start postgresql
```
Before getting the app up and running, make sure you have a todosdb and a todostestdb:

```
createdb todosdb
createdb todostestdb
```

There is a configuredb.sh file that needs write permissions given to it before it can be run:

```
chmod +x ./app/bin/configuredb.sh
```

### Installing

To get the app up and running, first configure the database. The bash file basically throws out old data and repopulates the database with some dummy data:

```
npm run configure
```

Then, install all dependencies:

```
npm run install
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
