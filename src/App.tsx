import HomePage from '@/pages/homepage/HomePage'
import PokemonPage from '@/pages/PokemonPage'
import { Outlet } from 'react-router'

function App() {
  return (
    <div>
      <HomePage />
      <PokemonPage/>
      <Outlet />
    </div>
  )
}

export default App
