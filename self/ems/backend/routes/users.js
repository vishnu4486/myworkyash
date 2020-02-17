const express = require("express");
const router = express.Router();
const users = require("../controller/usersController");
const { auth } = require("../config/auth");

// /**
//  * @swagger
//  * /user/get:
//  *  get:
//  *   summary: Get all Projects Data from database.
//  *   description: Use to get List of all Project data.
//  *   responses:
//  *    '200':
//  *     description: A successful response
//  *
//  */

// router.get("/get", (req, res) => {
//   res.send("test");
// });

router.get('/get',users.getUsers);

router.post("/add", users.add);
router.post("/login", users.login);
router.put("/update/:id", users.update);
router.delete("/delete/:id", users.delete);

module.exports = router;
