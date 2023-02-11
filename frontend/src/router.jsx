import {createBrowserRouter} from 'react-router-dom'
import App from './App'
import DefaultLayout from './components/DefaultLayout'
import GuestLayout from './components/GuestLayout'
import Dashboard from './views/Dashboard'
import Login from './views/Login'
import Signup from './views/Signup'
import Survey from './views/Surveys'

const router =createBrowserRouter([
    {
        path: '/',
        element: <DefaultLayout />,
        children: [
            {
                path: '/',
                element: <Dashboard />
            },
            {
                path: '/surveys',
                element: <Survey />
            }
        ]
    },
    {path : '/',
    element: <GuestLayout/>,
    children:[
    {
        path: '/login',
        element: <Login />
    },
    {
        path: '/signup',
        element: <Signup />
    }
]}

])

export default router