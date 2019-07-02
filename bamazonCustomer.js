var mysql = require("mysql");
var inquirer = require("inquirer");
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

function question(){

}

  // NPM INIT, NPM i mysql, npm i inquirer, npm console.table(look at webpage) TABLE.PUSH

