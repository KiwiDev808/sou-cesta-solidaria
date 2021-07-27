var express = require("express");
var router = express.Router();

const UserController = require("./controllers/UserController");

router.post("/register", UserController.register);

router.post("/authenticate", UserController.authenticating);

router.get("/logout", UserController.logout);

module.exports = router;
