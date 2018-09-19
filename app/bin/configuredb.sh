#!/bin/bash

database="todosdb"

echo "Configuring database: $database"

dropdb todosdb
dropdb todostestdb
createdb todosdb
createdb todostestdb

psql todosdb < ./app/bin/sql/todos.sql
psql todostestdb < ./app/bin/sql/todos.sql

echo "$database configured"
