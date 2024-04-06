const mongoose = require("mongoose");
const { Schema } = mongoose;

const TaskSchema = new Schema({
  tasks: { type: String, required: true },
  status: { type: String, default: "incomplete" },
});

exports.Tasks = mongoose.model("Tasks", TaskSchema);
