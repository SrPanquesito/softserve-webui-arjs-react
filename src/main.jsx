import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
  Navigate
} from 'react-router-dom';
import Routes from './routes/Routes.jsx'
import MainApp from './components/MainApp/MainApp.jsx'
import ContactUs from './components/ContactUs/ContactUs.jsx'
import './main.css'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Routes />,
    children: [
      {
        index: true,
        element: <Navigate to="/app" replace />
      },
      {
        path: "app",
        element: <MainApp />,
      },
      {
        path: "contact-us",
        element: <ContactUs />,
      },
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
