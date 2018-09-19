#!/bin/bash

database="todostestdb"

echo "Configuring database: $database"

dropdb todostestdb
createdb todostestdb

psql todostestdb < ./app/bin/sql/todos.sql

echo "$database configured"
