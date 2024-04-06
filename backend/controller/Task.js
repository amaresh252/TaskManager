const { Tasks } = require("../model/Task");

exports.AddTask = async (req, res) => {
  try {
    const task = new Tasks({ ...req.body });
    const doc = await task.save();
    res.status(201).json(doc);
  } catch (err) {
    res.status(400).json(err);
  }
};

exports.fetchTask = async (req, res) => {
  try {
    const { userid } = req.params;
    const task = await Tasks.find({ userid: userid });
    if (task) {
      res.status(200).json(task);
    } else {
      res.status(400).json({ message: "not fetching" });
    }
  } catch (err) {
    res.status(400).json({ message: "not fetching" });
  }
};

exports.deleteTask = async (req, res) => {
  const { _id } = req.params;
  try {
    const deletedtask = await Tasks.findByIdAndDelete(_id);
    if (deletedtask) {
      res.status(200).json({ message: "deleted successfully" });
    } else {
      res.status(400).json({ message: "not deleted" });
    }
  } catch (err) {
    res.status(400).json(err);
  }
};
exports.updateTask = async (req, res) => {
  const { _id } = req.params;
  try {
    const updatedtask = await Tasks.findByIdAndUpdate(_id, req.body, {
      new: true,
    });
    if (updatedtask) {
      res.status(200).json(updatedtask);
    } else {
      res.status(400).json({ message: "not updated" });
    }
  } catch (err) {
    res.status(400).json(err);
  }
};
