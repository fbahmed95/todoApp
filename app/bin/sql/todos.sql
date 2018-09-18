CREATE TABLE todos(
  id serial,
  description VARCHAR (255),
  done BOOLEAN
);

INSERT INTO todos(description, done)
VALUES
('Buy books', false),
('Drink coffee', false),
('Be awesome', true);
