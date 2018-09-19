#!/bin/bash

database="todosdb"

echo "Configuring database: $database"

dropdb todosdb
createdb todosdb

psql todosdb < ./app/bin/sql/todos.sql

echo "$database configured"
