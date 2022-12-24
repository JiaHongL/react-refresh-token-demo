import React from "react";
import { useRoutes } from "react-router-dom";
import Layout from "./layout/components/Layout";
import Home from "./pages/home/Home";
import Login from "./login/Login";
import Post from "./pages/post/Post";

function App() {
  
  let element = useRoutes([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "home",
          element: <Home />,
        },
        { path: "post", element: <Post /> },
      ],
    },
    { path: "login", element: <Login /> },
    { path: "*", element: <Login /> },
  ]);

  return element;
}

export default App;
