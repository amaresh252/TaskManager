import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  AddTasksApi,
  fetchAllTasks,
  deleteTasks,
  updateTasks,
} from "./TaskAPI";
const initialState = {
  status: "idle",
  value: 0,
  tasks: [],
};

export const AddTaskAsync = createAsyncThunk(
  "Tasks/AddTasksApi",
  async (TaskData) => {
    const response = await AddTasksApi(TaskData);
    return response.data;
  }
);

export const fetchAllTasksAsync = createAsyncThunk(
  "Tasks/fetchAllTasks",
  async () => {
    const response = await fetchAllTasks();
    return response.data;
  }
);

export const deleteTasksAsync = createAsyncThunk(
  "Tasks/deleteTasks",
  async (Taskid) => {
    const response = await deleteTasks(Taskid);
    return response.data;
  }
);

export const UpdateTasksAsync = createAsyncThunk(
  "Tasks/updateTasks",
  async (TaskData) => {
    const response = await updateTasks(TaskData);
    return response.data;
  }
);

export const addTasksSlice = createSlice({
  name: "Tasks",
  initialState,
  reducers: {
    increament: (state) => {
      state.value += 1;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(AddTaskAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(AddTaskAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.tasks.push(action.payload);
      })
      .addCase(fetchAllTasksAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchAllTasksAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.tasks = action.payload;
      })
      .addCase(deleteTasksAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(deleteTasksAsync.fulfilled, (state, action) => {
        state.status = "idle";
        const index = state.tasks.findIndex(
          (item) => item._id === action.payload._id
        );
        state.tasks.splice(index, 1);
      })
      .addCase(UpdateTasksAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(UpdateTasksAsync.fulfilled, (state, action) => {
        state.status = "idle";
        const index = state.tasks.findIndex(
          (item) => item._id === action.payload._id
        );
        state.tasks[index] = action.payload;
      });
  },
});

export const selectAllTasks = (state) => state.Tasks.tasks;
export default addTasksSlice.reducer;
