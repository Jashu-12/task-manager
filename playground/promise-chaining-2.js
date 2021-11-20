require("../src/db/mongoose");
const Task = require("../src/models/task");

//617b07974d7aa9a3f3a89850

// Task.findByIdAndRemove("617b07974d7aa9a3f3a89850")
//   .then((task) => {
//     console.log(task);
//     return Task.countDocuments({ completed: false });
//   })
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((e) => {
//     console.log(e);
//   });

const deleteTaskAndCount = async (id) => {
  const task = await Task.findByIdAndDelete(id);
  const count = await Task.countDocuments({ completed: false });
  return { task, count };
};

deleteTaskAndCount("617b63cdd85a886444b11101")
  .then((res) => {
    console.log(res);
  })
  .catch((e) => {
    console.log(e);
  });
