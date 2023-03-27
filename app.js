import express from "express";
import HelloController from "./controllers/hello-controller.js";
import UserController from "./controllers/users/users-controller.js";
import TuitsController from "./controllers/tuits/tuits-controller.js";
import cors from "cors";

const app = express();
console.log("Starting the server");
app.use(cors());
app.use(express.json());
TuitsController(app);
HelloController(app);
UserController(app);

console.log("Started the server");

app.listen(4000);
