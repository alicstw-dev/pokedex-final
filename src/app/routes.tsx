import { createBrowserRouter } from 'react-router-dom'
import HomePage from '@/pages/homepage/HomePage'
import FavoritesPage from '@/pages/FavoritesPage'
import PokemonPage from '@/pages/PokemonPage'
import RegisterPage from '@/pages/RegisterPage'
import App from '@/App'

export const router = createBrowserRouter([
  {
    path: '/',
    Component: App,
    children: [
      { index: true,
        Component: HomePage
      },
      {
        path: 'pokedex',
        Component: PokemonPage,
      },
      {
        path: 'favorites',
        Component: FavoritesPage,
      },
      {
        path: 'register',
        Component: RegisterPage,
      },
    ],
  },
])

export const ROUTES = {
  HOME: '/',
  POKEDEX: '/pokedex',
  FAVORITES: '/favorites',
}
