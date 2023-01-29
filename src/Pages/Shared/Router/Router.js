import { createBrowserRouter } from "react-router-dom";
import AddPost from "../../AddPost/AddPost";
import Home from "../../Home/Home";
import Login from "../../Login/Login";
import Main from "../../Main/Main";
import OurWork from "../../OurWork/OurWork";
import Register from "../../Register/Register";
import SingleWork from "../../SingleWork/SingleWork";

const router = createBrowserRouter([
  {
    path: "",
    element: <Main></Main>,
    children: [
      {
        path: "",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "work",
        element: <OurWork />,
      },
      {
        path: "singleWork",
        element: <SingleWork></SingleWork>,
      },
      {
        path: "addpost",
        element: <AddPost></AddPost>,
      },
    ],
  },
]);

export default router;
