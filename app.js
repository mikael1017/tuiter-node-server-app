import express from "express";
import HelloController from "./controllers/hello-controller.js";
import UserController from "./controllers/users/users-controller.js";
const app = express();
console.log("Starting the server");
app.use(express.json());
HelloController(app);
UserController(app);

console.log("Started the server");

app.listen(4000);
