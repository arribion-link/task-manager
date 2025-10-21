const taskModel = require("../models/taskModel.js");

const get_all_task = async (req, res) => {
    try {
        const task = await taskModel.find().sort({ createdAt: -1 });
        if (!task) {
            return res.status(404).json({
                msg: "no task was found"
            });
        }

        res.status(200).json({ task });
        
    } catch (error) {
        return res.status(500).json({
            msg: "error getting tasks from the database"
        });
    }
}

const get_one_task = async (req, res) => {
    const taskId = req.params.id;
    try {
        if (!taskId) {
            return res.status(404).json({
                msg: "task id needed"
            });
        }
        const taskFound = await taskModel.findById(taskId);
        res.status(200).json({ taskFound });
    } catch (error) {
        return res.status(500).json({
            msg: `error occured while getting user with ID: ${taskId}`
        });
    }
}

const create_task = async (req, res) => {
    const { title, description, dueDate } = req.body;
    try {
        if (!title || !description || !dueDate) {
            return res.status(400).json({
                msg: "all fields are required"
            });
        }
        const newTask = {
            title,
            description,
            dueDate
        }

        const updateTaskFound = await taskModel.findByIdAndUpdate(
          updateId,
          updateData,
          { new: true }
        );

        await updateTaskFound.save();

        res.status(200).json({
            msg: "task created successfully"
        });

      } catch (error) {
        return res.status(500).json({
            msg: "error occured while creating new user"
        });
      }
}


const update_task = async (req, res) => {
    const updateId = req.params.id;
    try {
        const updateTaskFound = await taskModel.findByIdAndUpdate(updateTaskFound);
        if (!updateTaskFound) {
            return res.status(404).status({
                msg: "task t be updated not found"
            });
        }
        res.status(200).json({ updateTaskFound })
    } catch (error) {
        return res.status(500).json({
            msg: "error while updating the task"
        });
    }
};

const delete_task = async (req, res) => {
    const taskDeleteId = req.params.id;
    try {
      const taskDeleted = await taskModel.findByIdAndDelete(taskDeleteId);
      // returns the document that was deleted, or null if no document was found with the given taskDeleteId.
      if (!taskDeleted) {
        return res.status(400).json({
          msg: "unable to delete the task",
        });
      }
      res.status(200).json({
        msg: "task deleted successfully",
      });
    } catch (error) {
        return res.status(500).json({
            msg: "something went wrong deleting the task"
        });
    }
}

const delete_all_task = async (req, res) => {
    try {
        await taskModel.deleteMany()
        res.status(200).json({
            msg: "tasks deleted successfully"
        })
    } catch (error) {
        return res.status(500).json({
            msg: "something went wrong while deleting the tasks"
        });
    }
}

module.exports = {
    get_all_task,
    get_one_task,
    create_task,
    update_task,
    delete_task,
    delete_all_task
}