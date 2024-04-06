const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const server = express();
const cookieParser = require("cookie-parser");
server.use(express.json());
server.use(express.urlencoded({ extended: true }));
server.use(cookieParser());
server.use(express.static("public"));
server.use(cors({ origin: "http://localhost:3000", credentials: true }));

const task = require("./controller/Task");

const router = express.Router();
server.use(router);

// Routing...

router
  .get("/task", task.fetchTask)
  .post("/task", task.AddTask)
  .delete("/task/:_id", task.deleteTask)
  .patch("/task/:_id", task.updateTask);

async function main() {
  await mongoose.connect(
    "mongodb+srv://amareshranjan:amaresh123@cluster0.xor3jwu.mongodb.net/?retryWrites=true&w=majority"
  );
  console.log("database connected");
}
main().catch((error) => console.log(error));

///server setup
server.listen(8080, () => {
  console.log("starting server at 8080");
});
