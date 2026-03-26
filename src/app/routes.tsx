import { createBrowserRouter } from "react-router-dom"

import HomePage from "@/pages/homepage/HomePage"
import DetailsPage from "@/pages/DetailsPage"
import FavoritesPage from "@/pages/FavoritesPage"


export const router = createBrowserRouter([
 {
  path: "/",
  element: <HomePage />,
 },

 {
  path: "/pokemon/:name",
  element: <DetailsPage />,
 },

 {
  path: "/favorites",
  element: <FavoritesPage />,
 },
])