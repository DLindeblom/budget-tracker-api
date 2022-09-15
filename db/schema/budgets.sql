DROP TABLE if EXISTS budgets CASCADE;

CREATE TABLE budgets (
  id SERIAL PRIMARY KEY NOT NULL,
  user_id INTEGER REFERENCES users (id) NOT NULL,
  name VARCHAR(25) NOT NULL,
  max DECIMAL(6,2) NOT NULL
);