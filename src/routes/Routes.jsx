 
import { createBrowserRouter } from 'react-router-dom';
import Root from '../layout/Root';
import Home from '../pages/Home/home';
 

const router =  createBrowserRouter ([
    {
        path: '/',
        element: <Root/>,
        children:[
            {
                path:'/',
                element: <Home/>
            }
        ]

    }
])

export default router;