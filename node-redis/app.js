const express = require("express");
const app = express();
const client = require("./redis/client");

const PORT = process.env.PORT || 8000;

const axios = require("axios");
app.get("/", async (req, res) => {
  const cacheValue = await client.get("todos");
  if (cacheValue) {
    return res.json(JSON.parse(cacheValue));
  }

  const { data } = await axios.get(
    "https://jsonplaceholder.typicode.com/todos/1"
  );
  await client.set("todos", JSON.stringify(data));
  // await client.expire("todos", 30);
  return res.json(data);
});

app.listen(PORT, () => {
  console.log("listening on port " + PORT);
});
