DROP DATABASE IF EXISTS bamazon_DB;
CREATE database bamazon_DB;

USE bamazon_DB;

CREATE TABLE products (
  item_id INT NOT NULL,
  product_name VARCHAR(100) NOT NULL,
  department_name VARCHAR(100) NOT NULL,
  price INT,
  stock_quantity INT,
  PRIMARY KEY (item_id)
);



INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (1, "Sunflowers", "Garden", 15, 150);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (2, "Wedding Dress", "Formal Wear", 100, 1);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (3, "Wedding Suit", "Formal Wear", 100, 1);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (4, "Wedding Bands", "Jewelry", 150, 2);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (5, "Wedding Gifts", "Specialty Items", 20, 250);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (6, "Wedding Tables", "Dining", 30, 558);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (7, "Wedding Chairs", "Sitting", 20, 868);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (8, "Wedding Favors", "Specialty Items", 25, 674);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (9, "Wedding Sparklers", "Fireworks", 8, 1542);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (10, "Macarons", "Dessert", 7, 1237);

