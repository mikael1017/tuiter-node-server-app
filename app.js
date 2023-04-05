import express from "express";
import HelloController from "./controllers/hello-controller.js";
import UserController from "./controllers/users/users-controller.js";
import TuitsController from "./controllers/tuits/tuits-controller.js";
import cors from "cors";
import mongoose from "mongoose";

const CONNECTION_STRING = process.env.DB_CONNECTION_STRING;

mongoose.connect(
  "mongodb+srv://jaewoo:wodn1017@cs6650.o3m9wao.mongodb.net/?retryWrites=true&w=majority"
);
const app = express();
console.log("Starting the server");
app.use(cors());
app.use(express.json());
TuitsController(app);
HelloController(app);
UserController(app);

console.log("Started the server");

app.listen(process.env.PORT || 4000);
