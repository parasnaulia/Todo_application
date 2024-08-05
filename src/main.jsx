import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './assets/Store/Store.jsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App.jsx';

import './index.css';
import Calendar from 'react-calendar';
import Profile from './Profile.jsx';
import MyFriend from './MyFriend.jsx';
import BasicCalender from './BasicCalender.jsx';
import MainData from './MainData.jsx';
import Popup from './Popup.jsx';
import Calender1 from './Calender1.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children:[{
      path:"/",
      element:<MainData/>
    },
    {
      path:"/profile",
      element:<Profile/>

    },
    {
      path: "/myFriends",
      element: <MyFriend/>,
    },
    {
      path: "/calender",
      element:<BasicCalender/>,
    },
    {
      path:"/Popup",
      element:<Popup/>

    },
    {
      path:"/Calender1",
      element:<Calender1/>
    }
  

  
  ]
  },
  
  
  
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
