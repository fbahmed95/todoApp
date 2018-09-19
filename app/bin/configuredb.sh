#!/bin/bash

database="todosdb"

echo "Configuring database: $database"

dropdb -U node_user todosdb
dropdb -U node_user todostestdb
createdb -U node_user todosdb
createdb -U node_user todostestdb

psql -U node_user todosdb < ./app/bin/sql/todos.sql
psql -U node_user todostestdb < ./app/bin/sql/todos.sql

echo "$database configured"
