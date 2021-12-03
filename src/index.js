const express = require("express");
require("./db/mongoose");
const userRouter = require("./routers/user");
const taskRouter = require("./routers/task");

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(userRouter);
app.use(taskRouter);

app.listen(port, () => {
  console.log("Server is running on Port " + port);
});

const Task = require("./models/task");
const User = require("./models/user");

const main = async () => {
  // const task = await Task.findById("61a987a8ed8916e8d623ef48");
  // await task.populate("owner");
  // console.log(task.owner);

  const user = await User.findById("61a986cf453eb3ca243ee2c9");
  await user.populate("tasks");
  console.log(user.tasks);
};

main();
