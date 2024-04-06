import React from 'react';

import {RouterProvider,createBrowserRouter} from 'react-router-dom'

import Tasks from './taskmanager/component/Task';
import AddTask from './taskmanager/component/AddTask';
import UpdateTask from './taskmanager/component/UpdateTask';


const router=createBrowserRouter([
  
  {
    path:'/',
    element:(
      <Tasks/>
    )
  },
  {
    path:'/add',
    element:(
      <AddTask/>
    )
  },
  {
    path:'/update/:_id',
    element:(
      <UpdateTask/>
    )
  },
 
])
function App() {
 
  return (
    <RouterProvider router={router}/>
  );
}

export default App;
