import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
  Navigate
} from 'react-router-dom';
import Root from './routes/Root.jsx'
import App from './components/App/App.jsx'
import ContactUs from './components/ContactUs/ContactUs.jsx'
import './index.css'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        index: true,
        element: <Navigate to="/app" replace />
      },
      {
        path: "app",
        element: <App />,
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
