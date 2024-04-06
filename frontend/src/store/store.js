import { configureStore } from '@reduxjs/toolkit'


import taskReducer from '../taskmanager/TaskSlice'
export default configureStore({
  reducer: {
   Tasks:taskReducer,
  },
})