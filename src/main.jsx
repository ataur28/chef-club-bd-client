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

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home></Home>,
    errorElement: <ErrorElement></ErrorElement>,
    children: [
      {
        path: '/',
        element: <First></First>,
        loader: () => fetch('http://localhost:5000/foodList')
      },
      {
        path: 'job-category',
        element: <JobCategory></JobCategory>,
        loader: () => fetch('http://localhost:5000/foodList')
      },
      {
        path: 'job/:jobId',
        element: <JobDetailsAll></JobDetailsAll>,
        loader: ({ params }) => fetch(`http://localhost:5000/chef`)
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
