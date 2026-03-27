import { createBrowserRouter } from 'react-router-dom'

import PublicLayout from '@/layouts/PublicLayout'
import AppLayout from '@/layouts/AppLayout'

import HomePage from '@/pages/homepage/HomePage'
import FavoritesPage from '@/pages/FavoritesPage'
import PokemonPage from '@/pages/PokemonPage'
import PokemonDetailPage from '@/pages/PokemonDetailPage'
import RegisterPage from '@/pages/RegisterPage'
import LoginPage from '@/pages/LoginPage'

export const router = createBrowserRouter([

  // rotas públicas
  {
    Component: PublicLayout,
    children: [

      {
        path: '/',
        Component: HomePage
      },

      {
        path: '/login',
        Component: LoginPage
      },

      {
        path: '/register',
        Component: RegisterPage
      }

    ]
  },


  // rotas protegidas (precisa estar logado)
  {
    Component: AppLayout,
    children: [

      {
        path: '/pokedex',
        Component: PokemonPage
      },

      {
        path: '/pokedex/:id',
        Component: PokemonDetailPage
      },

      {
        path: '/favorites',
        Component: FavoritesPage
      }

    ]
  }

])