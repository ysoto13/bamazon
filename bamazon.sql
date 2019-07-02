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



INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Sunflowers", "Garden", 15, 150);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Wedding Dress", "Formal Wear", 100, 1);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Wedding Suit", "Formal Wear", 100, 1);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Wedding Bands", "Jewelry", 150, 2);

INSERT INTO products ( product_name, department_name, price, stock_quantity)
VALUES ("Wedding Gifts", "Specialty Items", 20, 250);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Wedding Tables", "Dining", 30, 558);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Wedding Chairs", "Sitting", 20, 868);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Wedding Favors", "Specialty Items", 25, 674);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Wedding Sparklers", "Fireworks", 8, 1542);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Macarons", "Dessert", 7, 1237);

