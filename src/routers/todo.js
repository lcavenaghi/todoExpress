const express = require('express');
const router = express.Router();
const todoController = require('../controllers/todoController');

router.get("/", todoController.getAll);
router.get("/:id", todoController.get);

router.post("/", todoController.add);

router.put("/:id", todoController.update);

router.delete("/:id", todoController.delete);

module.exports = router;