
# Task Manager

This application let's the user to create a account and authentic it. We can create as many tasks as we want and they will be linked with user account in which they are created and only the owner will be able to alter the tasks. Tested the application functionality with the help of Jest. 


## API Reference

Below are some of the useful API References of the application.

- Login

```http
  POST /users/login
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `email` | `string` | **Required**. Your Email address
|`password`   | `string`| **Required**. Your password|


- Update User

```http
  PATCH /users/me
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `Name`      | `string` |  Name of the user |
|`Email`|`string`| Email of the user|
|`Password`|`string`| password of the user|
|`Age`|`Int`| Age of the user

We can update the above information about the user

- Get avatar of the user

```http
  GET /users/:id/avatar
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `id` | `int` | **Required**. ID of the user

- Get Tasks of the user

```http
  GET /tasks/:id
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `id` | `int` | **Required**. ID of the user|

- Update tasks of a user

```http
  PATCH /tasks/:id
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `id` | `int` | **Required**. ID of the user|
|`Description`|`string`| Description of the task|
|`completed`|`boolean`| Check if the task is completed or not|






## Tech Stack


**Server:** Node, Express

**Database**: Mongoose

**Testing**: Jest

**Dependencies**: Bcryptjs, JSONWebToken, Multer, Sharp, Validator 

