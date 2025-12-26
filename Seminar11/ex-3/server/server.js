const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());

const users = [
  { id: 1, name: "Alice", email: "alice@example.com", type: "admin" },
  { id: 2, name: "Bob", email: "bob@example.com", type: "regular" },
  { id: 3, name: "Charlie", email: "charlie@example.com", type: "admin" },
];

app.get("/users", (req, res) => {
  res.json(users);
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
