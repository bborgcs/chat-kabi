import { createBrowserRouter, } from "react-router-dom";

import Login from './pages/login';
import Home from './pages/home';
import Chat from './pages/chat';

const router = createBrowserRouter([
    {
        path: "/",
        element: <Login/>
    },

    {
        path: "/home",
        element: <Home/>
    },

    {
        path: "/chat/:id",
        element: <Chat/>
    }
])

export default router