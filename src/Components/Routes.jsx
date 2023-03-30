import PrivateRoutes from "../AuthProvider/PrivateRoutes";
import About from "./About";
import CardDetails from "./CardDetails";
import Categories from "./Categories";
import Contact from "./Contact";
import Courses from "./Courses";
import Direction from "./Direction";
import Faq from "./Faq";
import Home from "./Home";
import Login from "./Login";
import Register from "./Register";
import Root from "./Root";
import SingleCategory from "./SingleCategory";

const { createBrowserRouter } = require("react-router-dom");

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Root/>,        
        children: [
            {
                path: '/',
                element: <Home/>,
                
            },
            {
                path: 'courses',
                element: <PrivateRoutes><Courses/></PrivateRoutes>,
                loader: () => fetch('http://localhost:5000/courses'),                                
            },
            {
                path: 'category',
                element: <Categories/>,
                loader: () => fetch(`http://localhost:5000/course-categories`)
                              
            },
            {
                path: 'faq',
                element: <Faq/>,
            },
            {
                path: 'about',
                element: <About/>,
            },
            {
                path: '/courses/:id',
                element: <CardDetails/>,
                loader: ({ params }) => fetch(`http://localhost:5000/courses/${params.id}`)
            },
            {
                path: '/category/:id',
                element: <SingleCategory/>,
                loader: ({ params }) => fetch(`http://localhost:5000/category/${params.id}`)
            },
            {
                path: '/register',
                element: <Register/>
            },
            {
                path: '/login',
                element: <Login/>
            },
            {
                path: '/contact',
                element: <Contact/>
            },
            {
                path: '/direction',
                element: <Direction/>
            },
        ]
    },
    
])