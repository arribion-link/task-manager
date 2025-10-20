const express = require('express');
const taskRouter = express.Router();

const {
    get_all_task,
    get_one_task,
    create_task,
    update_task,
    delete_task,
    delete_all_task
} = require('../controllers/task.Controller.js');

taskRouter
  .get("/task", get_all_task)
  .get("/:id", get_one_task)
  .post("/task", create_task)
  .patch("/task:id", update_task)
  .delete("/task:id", delete_task)
  .delete("/task", delete_all_task);

module.exports = taskRouter