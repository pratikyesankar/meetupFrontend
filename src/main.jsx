import React from "react"
import { createRoot } from "react-dom/client"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import "./index.css"
import App from "./App.jsx"
import EventDetails from "./components/EventDetails.jsx"
import "bootstrap/dist/css/bootstrap.min.css"

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/events/:eventId",
    element: <EventDetails />,
  },
])

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
