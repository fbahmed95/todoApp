#!/bin/bash

database="todosdb"

echo "Configuring database: $database"

dropdb -U node_user todosdb
createdb -U node_user todosdb

psql -U node_user todosdb < ./app/bin/sql/todos.sql

echo "$database configured"
