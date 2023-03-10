import { useRoutes } from "react-router-dom";

import Layout from "./layout/Layout";
import Home from "./pages/home/Home";
import Login from "./login/Login";
import Post from "./pages/post/Post";

function App() {

  let element = useRoutes([
    {
      path: "/",
      element: <Layout />,
      children: [
        { path: "home", element: <Home /> },
        { path: "post/:postId", element: <Post /> },
      ],
    },
    { path: "login", element: <Login /> },
    { path: "*", element: <Login /> },
  ]);

  return element;

}

export default App;
