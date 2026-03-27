import { useEffect } from 'react'
import { useNavigate } from 'react-router'
import Navbar from '@/components/layout/navbar'
import { getAccessToken } from '@/features/storages/token.storage'

function FavoritesPage() {
  const navigate = useNavigate()

  useEffect(() => {
    const token = getAccessToken()

    if (!token) {
      navigate('/login')
    }
  }, [navigate])

  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      <Navbar children={undefined} />

      <main className="grow container-main py-10">
        <div className="mb-10 text-center">
          <h1 className="text-4xl font-black text-slate-900 tracking-tight">
            Pokémons Favoritos ⭐
          </h1>
          <p className="text-muted-foreground mt-3 text-lg">
            A tua equipa de sonho.
          </p>
        </div>

        <div className="flex flex-col items-center justify-center py-20 border-2 border-dashed border-slate-200 rounded-3xl">
          <p className="text-slate-400 font-medium"></p>
        </div>
      </main>
    </div>
  )
}

export default FavoritesPage
