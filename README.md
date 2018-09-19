To start, make sure you have your Postgres server up. In the command line, type
createdb todosdb
psql todosdb
CREATE USER node_user WITH SUPERUSER
^D
We're going to configure the database by throwing out old data and populating with new data.
First we need to give write capabilities to the configure bash script. In the command line,
type:
chmod +x ./app/bin/configuredb.sh

Now we can configure the database. Run:

npm run configure

Now we can officially start the app! Yay! Run:

npm run start

And checkout localhost:3000

To run the test suite:

npm run test
