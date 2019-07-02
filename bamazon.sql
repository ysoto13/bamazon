DROP DATABASE IF EXISTS bamazon_DB;
CREATE database bamazon_DB;

USE bamazon_DB;

CREATE TABLE products (
  item_id VARCHAR NOT NULL,
  prouct_name VARCHAR NOT NULL,
  department_name VARCHAR NOT NULL,
  price INT NOT NULL,
  stock_quantity INT NOT NULL,
  PRIMARY KEY (item_id)
);

SELECT * FROM products;