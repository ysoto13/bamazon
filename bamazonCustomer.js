var inquirer = require("inquirer");
var mysql = require("mysql");
require("console.table");


var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "root",
  database: "bamazon_DB"
});

connection.connect(function (error) {
  if (error) throw error;
  // call function here from below
  showItems();
});

function showItems() {
  // going into database to select all. *=all
  connection.query("SELECT * FROM products", function (error, response) {
    if (error) throw error;
    // show on page
    console.table(response);
  })
  question();
}

function question() {
  inquirer
    .prompt({
      name: "products",
      type: "input",
      message: "What is the id of the product you would like to purchase? "
    }
    )
      .then(function(answer) {
        var query = "SELECT item_id FROM products";
        connection.query(query)
        
      })
      question2();
}


function question2() {
  inquirer
    .prompt({
      name: "products",
      type: "input",
      message:"How many of this product would you like to purchase? "
    }
    )
      .then(function(answers) {
        var query = "SELECT item_id FROM products";
        connection.query(query)
        
      })
}


