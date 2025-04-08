import ReactDOM from 'react-dom/client';
import React from 'react';
import ErrorPage from './error-page.jsx';
import AboutPage from './AboutPage.jsx';
import Contact from './Contact.jsx';
import ResumePage from './ResumePage.jsx';
import ProjectPage from './ProjectPage.jsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'
import App from './App.jsx'

// Define the accessible routes, and which components respond to which URL
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: 'about',
        element: <AboutPage />,
      },
      {
        path: 'contact',
        element: <Contact />,
      },
      {
        path: 'profilePage',
        element: <ProfilePage />,
      },
      {
        path: 'resume',
        element: <Resume />,
      },
    ],
  },
]);

// Render the RouterProvider component
ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);