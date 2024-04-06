export function AddTasksApi(TasksData) {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await fetch("http://localhost:8080/task", {
        method: "POST",
        body: JSON.stringify(TasksData),
        headers: { "content-type": "application/json" },
      });
      const data = await response.json();
      resolve({ data });
    } catch (error) {
      reject(error);
    }
  });
}

export function fetchAllTasks() {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await fetch("http://localhost:8080/task");
      const data = await response.json();
      resolve({ data });
    } catch (error) {
      reject(error);
    }
  });
}

export function deleteTasks(Tasksid) {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await fetch(`http://localhost:8080/task/${Tasksid}`, {
        method: "DELETE",
        headers: { "content-type": "application/json" },
      });
      const data = await response.json();
      resolve({ data });
    } catch (error) {
      reject(error);
    }
  });
}
export function updateTasks(TasksData) {
  return new Promise(async (resolve,reject) => {
    try {
      const response = await fetch(
        `http://localhost:8080/task/${TasksData._id}`,
        {
          method: "PATCH",
          body: JSON.stringify(TasksData),
          headers: { "content-type": "application/json" },
        }
      );
      const data = await response.json();
      resolve({ data });
    } catch (error) {
      reject(error);
    }
  });
}
