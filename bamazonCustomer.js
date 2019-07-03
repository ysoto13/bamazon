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
    question(response);
  })
  
}

function question(response) {
  inquirer
    .prompt([
      {
      name: "productId",
      type: "input",
      message: "What is the id of the product you would like to purchase? "
    },
    {
      name: "productQty",
      type: "input",
      message:"How many of this product would you like to purchase? "
    }])
      .then(function(answer) {
        console.log(answer.productId)
        console.log(response)

        var selectedId = answer.productId;
        var index = answer.productId - 1
        
        console.log(response[index])
        // var query = "SELECT item_id FROM products";
        // connection.query(query)
        
      })
      connection.end();
}



