import { createBrowserRouter } from "react-router-dom"
import HomePage from "@/pages/homepage/HomePage"
import FavoritesPage from "@/pages/FavoritesPage"
import PokemonPage from "@/pages/PokemonPage" 

export const router = createBrowserRouter([
 {
  path: "/",
  element: <HomePage />,
 },
 {
  path: "/pokedex", // Rota que você usou no Link da Navbar
  element: <PokemonPage />,
 },
 {
  path: "/favorites",
  element: <FavoritesPage />,
 },
])