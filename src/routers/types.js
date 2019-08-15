const express = require("express");
const router = express.Router();
const TypeController = require("../controllers/typeController");
const TypeRepository = require("../repositories/typeRepository");

const typeRepository = new TypeRepository();
const typeController = new TypeController(typeRepository);

router.post("/type", typeController.createType);

module.exports = router;
