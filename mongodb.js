//CRUD - Create Delete Update Delete

// const mongodb = require("mongodb");
// const MongoClient = mongodb.MongoClient;
// const ObjectID = mongodb.ObjectID;

const { MongoClient, ObjectID } = require("mongodb");

const id = new ObjectID();
// console.log(id.id.length);
// console.log(id.toHexString().length);

const connectURL = "mongodb://127.0.0.1:27017";
const databaseName = "task-manager";

MongoClient.connect(connectURL, { useNewUrlParser: true }, (error, client) => {
  if (error) {
    return console.log("Unable to connect to the database!");
  }

  const db = client.db(databaseName);

  //UpdateOne

  // db.collection("users")
  //   .updateOne(
  //     {
  //       _id: new ObjectID("61785d241d509be0bf6ca130"),
  //     },
  //     {
  //       $inc: {
  //         age: 2,
  //       },
  //     }
  //   )
  //   .then((result) => {
  //     console.log(result);
  //   })
  //   .catch((error) => {
  //     console.log(error);
  //   });

  //UpdateMany
  //   db.collection("users")
  //     .updateMany(
  //       {
  //         completed: false,
  //       },
  //       {
  //         $set: {
  //           completed: true,
  //         },
  //       }
  //     )
  //     .then((result) => {
  //       console.log(result.modifiedCount);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // });

  //Delete

  // db.collection("users")
  //   .deleteMany({
  //     age: 24,
  //   })
  //   .then((result) => {
  //     console.log(result);
  //   })
  //   .catch((error) => {
  //     console.log(error);
  //   });
  db.collection("users")
    .deleteOne({
      description: "This is 2nd string",
    })
    .then((result) => {
      console.log(result);
    })
    .catch((error) => {
      console.log(error);
    });
});
//   db.collection("users").findOne(
//     { _id: new ObjectID("61785b5589a2aa68703d4bc5") },
//     (error, user) => {
//       if (error) {
//         console.log("Unable to fetch");
//       }
//       console.log(user);
//     }
//   );
//   db.collection("users")
//     .find({ age: 24 })
//     .toArray((error, users) => {
//       console.log(users);
//     });

//   db.collection("users")
//     .find({ age: 24 })
//     .count((error, count) => {
//       console.log(count);
//     });

// db.collection("users").findOne(
//   { _id: new ObjectID("617879648908182ac2889cf8") },
//   (error, user) => {
//     console.log(user);
//   }
// );

// db.collection("users")
//   .find({ completed: false })
//   .toArray((error, user) => {
//     console.log(user);
//   });
//   db.collection("users").insertOne(
//     {
//       name: "Raj",
//       age: 26,
//     },
//     (error, result) => {
//       if (error) {
//         return console.log("Unable to insert user");
//       }
//       console.log(result.insertedId);
//     }
//   );
//   db.collection("users").insertMany(
//     [
//       {
//         name: "Jen",
//         age: 28,
//       },
//       {
//         name: "John",
//         age: 25,
//       },
//     ],
//     (error, result) => {
//       if (error) {
//         console.log("Unable to insert docs!");
//       }
//       console.log(result.insertedIds);
//     }
//   );
//   db.collection("users").insertMany(
//     [
//       {
//         description: "This is first string",
//         completed: true,
//       },
//       {
//         description: "This is 2nd string",
//         completed: false,
//       },
//       {
//         description: "This is 3rd string",
//         completed: true,
//       },
//     ],
//     (error, result) => {
//       if (error) {
//         return console.log("Unable to eneter the docs");
//       }
//       console.log(result.insertedIds);
//     }
//   );
