import { createBrowserRouter } from "react-router-dom";
import Home from "../../Home/Home";
import Login from "../../Login/Login";
import Main from "../../Main/Main";
import Regester from "../../Regester/Regester";

const router = createBrowserRouter([
    {
        path:"",
        element:<Main></Main>,
        children:[
            {
                path:"",
                element:<Home></Home>
            },
            {
                path:"/login",
                element:<Login></Login>
            },
            {
                path:"/register",
                element:<Regester></Regester>
            },
        ]
    }
])

export default router;