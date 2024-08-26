import React from 'react';
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import Home from './pages/Home'
import Blog from './pages/Blog';
import Works from './pages/Works';
import WorkDetails from './pages/WorkDetails';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/Blog",
    element: <Blog />,
  },
  {
    path: "/Works",
    element: <Works />,
  },
  {
    path: "/works/:id",
    element: <WorkDetails />,
  }  
]);

function App(){
    return(
      <div>
        <Header />
        <RouterProvider router={router}  />
        <Footer />
      </div>
    );
}

export default App;