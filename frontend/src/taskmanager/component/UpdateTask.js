import { fetchAllTasksAsync, selectAllTasks, UpdateTasksAsync } from "../TaskSlice";
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import "./UpdateTask.css";

export default function UpdateTask() {
  const { _id } = useParams();
  const numberIndex = _id;
  const dispatch = useDispatch();
  const tasks = useSelector(selectAllTasks);
  const navigate = useNavigate();

  const usertask = tasks.filter((item) => item._id === numberIndex);

  const [task, setTask] = useState("" || usertask[0].tasks);
  const [Status, setStatus] = useState("" || usertask.status);

  const handleChange = (e) => {
    setTask(e.target.value);
  };
  const handleStatus = (e) => {
    setStatus(e.target.value);
  };
  useEffect(()=>{
    fetchAllTasksAsync();
  },[])
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(UpdateTasksAsync({ tasks:task, _id:numberIndex,status:Status }));
    navigate("/");
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <h3>Update Task</h3>
        <textarea
          type="text"
          id="task"
          name="task"
          value={task}
          onChange={handleChange}
          rows="4"
          cols="50"
        />
        <h3>Change Status</h3>
        <label htmlFor="status1">
        <input
          type="radio"
          id="status1"
          name="status"
          value="incomplete"
          checked={Status === "incomplete"}
          onChange={handleStatus}
        />
          incomplete</label>
        <label htmlFor="status2"><input
          type="radio"
          id="status2"
          name="status"
          value="completed"
          checked={Status === "completed"}
          onChange={handleStatus}
        />
          completed</label>
        
        <button type="submit">update</button>
      </form>
    </div>
  );
}
