import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Blog from './components/Blog/Blog';
import Home from './components/Home/Home';
import ErrorElement from './components/ErrorElement/ErrorElement';
import First from './components/First/First';
import JobCategory from './components/JobCategory/JobCategory';
import JobDetailsAll from './components/JobDetailsAll/JobDetailsAll';
import jobsLoader from './loaders/jobsLoader';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import AuthProvider from './components/Providers/AuthProvider';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Terms from './components/Terms/Terms';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home></Home>,
    errorElement: <ErrorElement></ErrorElement>,
    children: [
      {
        path: '/',
        element: <First></First>,
        loader: () => fetch('https://chef-club-bd-asten-server-ataur28.vercel.app/foodList')
      },
      {
        path: 'job-category',
        element: <JobCategory></JobCategory>,
        loader: () => fetch('https://chef-club-bd-asten-server-ataur28.vercel.app/foodList')
      },
      {
        path: 'job/:jobId',
        // element: <JobDetailsAll></JobDetailsAll>,
        element: <PrivateRoute><JobDetailsAll></JobDetailsAll></PrivateRoute>,
        loader: ({ params }) => fetch(`https://chef-club-bd-asten-server-ataur28.vercel.app/chef`)
        // loader: ({params}) => fetch(`http://127.0.0.1:5173/job/${params.jobId}`)
      },
      {
        path: 'blog',
        element: <Blog></Blog>
      },
      {
        path: 'login',
        element: <Login></Login>
      },
      {
        path: 'register',
        element: <Register></Register>
      },
      {
        path: 'terms',
        element: <Terms></Terms>
      },
      {
        path: '*',
        element: <ErrorElement></ErrorElement>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
    {/* <RouterProvider router={router} /> */}
  </React.StrictMode>,
)
