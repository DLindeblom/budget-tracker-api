DROP TABLE IF EXISTS expenses;

CREATE TABLE expenses (
  id SERIAL PRIMARY KEY NOT NULL,
  budget_id INTEGER REFERENCES budgets (id) NOT NULL,
  description VARCHAR(25) NOT NULL,
  date VARCHAR NOT NULL,
  amount DECIMAL(6,2) NOT NULL
);