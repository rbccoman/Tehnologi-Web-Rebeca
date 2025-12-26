const express = require("express");
const cors = require("cors");

const sequelize = require("./db");
const User = require("./models/User");

const app = express();
app.use(cors());
app.use(express.json());

// sincronizeaza DB + seed 
async function init() {
  await sequelize.authenticate();
  await sequelize.sync();

  const count = await User.count();
  if (count === 0) {
    await User.bulkCreate([
      { name: "Alice", email: "alice@example.com", type: "regular" },
      { name: "Bob", email: "bob@example.com", type: "power" },
      { name: "Charlie", email: "charlie@example.com", type: "regular" },
    ]);
  }
}

app.get("/users", async (req, res) => {
  const users = await User.findAll({ order: [["id", "ASC"]] });
  res.json(users);
});

app.post("/users", async (req, res) => {
  const { name, email, type } = req.body;
  const user = await User.create({ name, email, type });
  res.json(user);
});

init()
  .then(() => {
    app.listen(3000, () => {
      console.log("Server running on port 3000");
    });
  })
  .catch((err) => {
    console.error("DB init failed:", err);
    process.exit(1);
  });
