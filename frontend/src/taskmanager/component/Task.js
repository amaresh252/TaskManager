import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import "./Task.css";
import {
  deleteTasksAsync,
  fetchAllTasksAsync,
  selectAllTasks,
} from "../TaskSlice";
import { Link, useNavigate } from "react-router-dom";

export default function Tasks() {
  const dispatch = useDispatch();
  const Tasks = useSelector(selectAllTasks);
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(fetchAllTasksAsync());
  }, [dispatch]);

  function handleDelete(e, _id) {
    dispatch(deleteTasksAsync(_id));
  }
  const handleUpdate = (e, _id) => {
    if (_id) {
      navigate(`/update/${_id}`);
    }
  };
  const handleAddTask = () => {
    navigate(`/add`);
  };

  return (
    <>
      <div>
        <h1 className="heading">
          <em>Welcome to Task Manager</em>
        </h1>

        <button className="add-Task-button" onClick={handleAddTask}>
          Add New Task
        </button>
      </div>
      <div className="table-container">
      <table>
        <tr>
          <th>Task</th>
          <th>Status</th>
          <th>Action1</th>
          <th>Action2</th>
        </tr>
        {Array.isArray(Tasks) && Tasks.length > 0 ? (
          Tasks.map((Task, index) => (
            <tr key={Task._id}>
              <td className="task">{Task.tasks}</td>
              <td className="status"><i>{Task.status}</i></td>
              <td className="action">
                <button onClick={(e) => handleUpdate(e, Task._id)}>
                  update
                </button>
              </td>
              <td className="action">
                <button onClick={(e) => handleDelete(e, Task._id)}>
                  delete
                </button>
              </td>
            </tr>
          ))
        ) : (
          <p>No Tasks Found</p>
        )}
      </table>
      </div>
    </>
  );
}
