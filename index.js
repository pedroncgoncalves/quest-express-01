const { response, request } = require("express");
const express = require("express");

const app = express();
const port = 3000;

app.get("/", (request, response) => {
  response.send("Welcome to the jungle");
});

app.get("/users/:name", (request, response) => {
  response.send(`Welcome ${request.params.name}`);
});

const fruits = ["apple", "banana", "peach"];

app.get("/fruits", (request, response) => {
  if (fruits.includes(request.query.name.toLowerCase())) {
    response.send(`Here is your ${request.query.name.toLowerCase()}`);
  } else {
    response.send(`Sorry, ${request.query.name.toLowerCase()} not found...`);
  }
});

const cocktails = [
  { id: 0, name: "Margarita" },
  {
    id: 1,
    name: "Mojito",
  },
  { id: 2, name: "Cuba Libre" },
];

app.get("/cocktails", (request, response) => {
  response.status(200).json(cocktails);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
