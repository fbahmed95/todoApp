CREATE TABLE todos(
  id serial,
  description VARCHAR (255),
  done BOOLEAN,
  important BOOLEAN
);

INSERT INTO todos(description, done, important)
VALUES
('Buy books', false, true),
('Drink coffee', false, false),
('Be awesome', true, false);
