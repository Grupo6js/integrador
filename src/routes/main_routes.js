// rutas del main: index, login, register, etc
const express = require("express");
const router = express.Router();
const controller = require("../controllers/main_controller");

router.get("/", controller.home);
router.get("/contacto", controller.contacto);
//router.get('/about', controller.contacto);

module.exports = router;
