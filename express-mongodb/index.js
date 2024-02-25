const express = require("express");
const app = express();
const PORT = process.env.PORT || 8000;

app.use(express.json());

const cors = require("cors");
app.use(cors());

const dotenv = require("dotenv");
dotenv.config({ path: "./config/.env" });

const connectToMongoDB = require("./config/dbconn");
connectToMongoDB();

app.get("/", (req, res) => {
  res.status(200).send({ message: "hey, I am node js in docker container v3" });
});

const routes = require("./router/routes");
app.use("/api", routes);

app.listen(PORT, () => {
  console.log("server listening on port " + PORT);
});
