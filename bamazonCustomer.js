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
        message: "How many of this product would you like to purchase? "
      }])
    .then(function (answer) {
      // console.log(answer.productId)
      // console.log(response)

      var selectedId = answer.productId;
      var index = answer.productId - 1



      connection.query("SELECT * FROM products WHERE ?")[{ item_id: answer.productId }], function (error, response) {
        if (error) throw error;
        console.table(response);
        var quantity = response[0].stock_quantity;
        console.log("Current stock quantity: ", quantity);
        var price = response[0].price;
        var remainingQty = quantity - answer.productId;
        console.log("Remaining to stock quantity: ", remainingQty);

        if (quantity > answer.productId) {
          console.log("Amount Remaining: " + remainingQty);
          console.log("Total: " + (answer.productId * price) + "\n");

          connection.query("UPDATE products SET stock_quantity=? WHERE item_id=?", [remainingQty, selectedId],
            function (error, response) {
              console.table(response);
            });


          connection.query("SELECT * FROM products", function (error, response) {

            console.log("Updated inventory: ");
            console.log("------------------------------- \n");
            console.table(response);
          });

        } else {
          console.log("Not enough stock!! Try again!");
        }
        connection.end();
      };
    })
}





// Some where in my code it wasn't taking in something that would make the next step in the application run
// I still need some help understand what is the right code to go into this program.
// What I wasn't achieving was getting the price and quantity to update after customer had chosen what they wanted to purchase and how many of it.
// I was trying to go back to my in class activiites to figure out what I needed to do but that didn't help much. I
// I think I need to switch some things around and maybe it will work.

