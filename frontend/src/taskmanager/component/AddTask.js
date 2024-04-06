import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { AddTaskAsync } from "../TaskSlice";
import { useNavigate } from "react-router-dom";
import "./AddTask.css";

const AddTask = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [task, setTask] = useState('');

  const handleChange = (e) => {
    setTask(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(AddTaskAsync({tasks:task,status:'incomplete'}));
    navigate("/");
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <h3>Add Task</h3>
        <textarea
          type="text"
          id="task"
          name="task"
          value={task}
          onChange={handleChange}
          rows="4" 
          cols="50"
        />
        <button type="submit">add</button>
      </form>
    </div>
  );
};

export default AddTask;
