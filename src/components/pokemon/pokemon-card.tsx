import { useState, useEffect } from 'react'
import { Star } from 'lucide-react'
import { useNavigate } from 'react-router'
// import { getAccessToken } from '@/features/storages/token.storage'
import {
  addFavorite,
  removeFavorite,
  isFavorite,
} from '@/features/storages/favorites.storage'

interface PokemonCardProps {
  name: string
  id: number
  image: string
  types?: string[]
}

export default function PokemonCard({
  name,
  id,
  image,
  types = [],
}: PokemonCardProps) {
  const navigate = useNavigate()

  // Estado para controlar se a estrela está acesa ou apagada
  const [favorited, setFavorited] = useState(false)

  // Checa se já é favorito quando o card carrega na tela
  useEffect(() => {
    setFavorited(isFavorite(id))
  }, [id])

  const handleFavorite = (e: React.MouseEvent) => {
    e.stopPropagation()

    // TRAVA DE LOGIN COMENTADA PARA TESTE:
    /*
    const token = getAccessToken()
    if (!token) {
      navigate('/login')
      return
    } 
    */

    // Lógica que salva e remove de verdade
    if (favorited) {
      removeFavorite(id)
      setFavorited(false)
    } else {
      addFavorite({ id, name, image, types })
      setFavorited(true)
    }
  }

  const handleGoToDetails = () => {
    navigate(`/pokedex/${id}`)
  }

  return (
    <div
      onClick={handleGoToDetails}
      className="group relative bg-white border border-slate-100 rounded-[32px] p-6 w-full max-w-[280px] cursor-pointer transition-all duration-500 hover:shadow-[0_25px_50px_-12px_rgba(0,0,0,0.08)] hover:-translate-y-2 overflow-hidden"
    >
      <button
        onClick={handleFavorite}
        className={`absolute top-5 left-5 z-20 p-2 rounded-xl transition-all duration-300 active:scale-90 ${
          favorited
            ? 'bg-yellow-50 text-yellow-500' // Estrela acesa
            : 'bg-slate-50 text-slate-300 hover:bg-yellow-50 hover:text-yellow-400' // Estrela apagada
        }`}
      >
        <Star className="size-5" fill={favorited ? 'currentColor' : 'none'} />
      </button>

      <span className="absolute top-6 right-8 text-[11px] font-black text-slate-200 tracking-widest uppercase">
        #{id.toString().padStart(3, '0')}
      </span>

      <div className="relative flex justify-center items-center py-6">
        <div className="absolute w-32 h-32 bg-slate-50 rounded-full transition-all duration-700 group-hover:bg-primary/5 group-hover:scale-110" />
        <img
          src={image}
          alt={name}
          className="relative z-10 size-36 drop-shadow-2xl transition-all duration-500 group-hover:scale-110 group-hover:-rotate-6"
        />
      </div>

      <div className="text-center mt-2 space-y-3">
        <h2 className="text-2xl font-black text-slate-900 capitalize tracking-tight group-hover:text-primary transition-colors">
          {name}
        </h2>

        {types.length > 0 && (
          <div className="flex gap-1.5 justify-center">
            {types.map((type) => (
              <span
                key={type}
                className="px-2.5 py-0.5 bg-slate-100 text-[9px] font-bold uppercase tracking-tighter text-slate-500 rounded-md border border-slate-200/50"
              >
                {type}
              </span>
            ))}
          </div>
        )}
      </div>

      <div className="absolute inset-x-0 bottom-0 h-1.5 bg-primary/20 scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
    </div>
  )
}
