require("../src/db/mongoose.js");
const User = require("../src/models/user");

//

// User.findByIdAndUpdate("617b5f3d10d2267855ab3006", { age: 1 }, { new: true })
//   .then((user) => {
//     console.log(user);
//     return User.countDocuments({ age: 1 });
//   })
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((e) => {
//     console.log(e);
//   });

const updateAgeAndCount = async (id, age) => {
  const user = await User.findByIdAndUpdate(id, { age });
  const count = await User.countDocuments({ age });
  return { user, count };
};

updateAgeAndCount("617b5f3d10d2267855ab3006", 2)
  .then((count) => {
    console.log(count);
  })
  .catch((e) => {
    console.log(e);
  });
