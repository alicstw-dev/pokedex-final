import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router'
import Navbar from '@/components/layout/navbar'
import PokemonList from '@/components/pokemon/pokemon-list'
//import { getAccessToken } from '@/features/storages/token.storage'
import {
  getFavorites,
  type FavoritePokemon,
} from '@/features/storages/favorites.storage'

const POKEMON_TYPES = [
  'Todos',
  'Água',
  'Fogo',
  'Planta',
  'Elétrico',
  'Normal',
  'Pedra',
  'Venenoso',
]

function FavoritesPage() {
  const navigate = useNavigate()

  const [favorites, setFavorites] = useState<FavoritePokemon[]>([])
  const [loading, setLoading] = useState(true)
  const [selectedType, setSelectedType] = useState('Todos')

  useEffect(() => {
    /*
    const token = getAccessToken()
    if (!token) {
      navigate('/login')
      return
    }
      */

    setTimeout(() => {
      const savedFavorites = getFavorites()
      setFavorites(savedFavorites)
      setLoading(false)
    }, 500)
  }, [navigate])

  const filteredFavorites =
    selectedType === 'Todos'
      ? favorites
      : favorites.filter((pokemon) =>
          pokemon.types?.some(
            (type) => type.toLowerCase() === selectedType.toLowerCase(),
          ),
        )

  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      <Navbar children={undefined} />

      <main className="grow container-main py-10">
        <div className="mb-10 text-center">
          <h1 className="text-4xl font-black text-slate-900 tracking-tight">
            Pokémons Favoritos ⭐
          </h1>
          <p className="text-muted-foreground mt-3 text-lg">
            Sua equipe dos sonhos separada por categoria.
          </p>
        </div>

        <div className="flex flex-wrap gap-2 justify-center mb-12">
          {POKEMON_TYPES.map((type) => (
            <button
              key={type}
              onClick={() => setSelectedType(type)}
              className={`px-4 py-2 rounded-full text-sm font-bold uppercase tracking-wider transition-all duration-300 ${
                selectedType === type
                  ? 'bg-primary text-white shadow-md scale-105'
                  : 'bg-white text-slate-400 border border-slate-200 hover:bg-slate-100 hover:text-slate-600'
              }`}
            >
              {type}
            </button>
          ))}
        </div>
        <PokemonList pokemons={filteredFavorites} loading={loading} />
      </main>
    </div>
  )
}

export default FavoritesPage
