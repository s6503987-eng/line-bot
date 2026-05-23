const express = require("express");

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.send("LINE Bot running 🚀");
});

app.post("/webhook", (req, res) => {
  console.log(req.body);

  res.sendStatus(200);
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log("Server running");
});
