const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema(
  {
    // userId: {
    //   type: String,
    //   required: true,
    // },
    title: {
      type: String,
      required: true,
      trim: true,
    },
    description: {
      type: String,
      default: "",
    },
    dueDate: {
      type: Date,
      required: true,
    },
    status: {
      type: String,
      enum: ["pending", "in progress", "completed"],
      default: "pending",
    },
    priority: {
      type: String,
      enum: ["low", "medium", "high"],
      default: "medium",
    },
    tags: {
      type: [String],
      default: [],
    },
  },
  {
    timestamps: true, // adds createdAt and updatedAt
  }
);

const taskModel = mongoose.model("Task", taskSchema);

module.exports = taskModel;
