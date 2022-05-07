const express = require("express");
const cors = require("cors");
const app = express();

const port = process.env.PORT || 5000;
app.use(cors());
app.use(express.json());

const users = [
  { id: 1, name: "karim", job: "bekar" },
  { id: 2, name: "Rahim", job: "bekar" },
  { id: 3, name: "Kalam", job: "bekar" },
  { id: 4, name: "Jamal", job: "bekar" },
  { id: 5, name: "Qadir", job: "bekar" },
];

app.get("/", (req, res) => {
  res.send("Hello world, how are you?");
});

app.get("/users", (req, res) => {
  if (req.query.name) {
    const search = req.query.name.toLowerCase();
    const matched = users.filter((user) =>
      user.name.toLowerCase().includes(search)
    );
    res.send(matched);
  } else {
    res.send(users);
  }
});

app.post("/user", (req, res) => {
  console.log(req.body);
  const user = req.body;
  user.id = users.length + 1;
  users.push(user);
  res.send(user);
});

app.get("/user/:id", (req, res) => {
  console.log(req.params);
  const id = parseInt(req.params.id);
  const user = users.find((u) => u.id === id);
  res.send(user);
});

app.listen(port, () => {
  console.log("Listening to port", port);
});
