import { Link, useNavigate } from 'react-router' // Mantendo seu import
import { Button } from '@/components/ui/button'
import { LogOut } from 'lucide-react'

export default function Navbar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Se tiver lógica de auth, limpe aqui
    navigate('/'); // Direciona para home
  }

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-primary w-full">
      <div className="container-main flex items-center justify-between py-3">
        <Link to="/" className="flex items-center gap-2 font-bold text-xl">
          <span className="bg-background text-primary px-2 py-1 rounded-md transition-transform hover:scale-105">
            Pokédex
          </span>
        </Link>

        <nav className="flex items-center gap-6 text-base font-medium">
          <Link to="/" className="hover:text-accent text-primary-foreground transition-colors">
            Home
          </Link>
          <Link to="/pokedex" className="hover:text-accent text-primary-foreground transition-colors">
            Pokémons
          </Link>
          <Link to="/favorites" className="hover:text-accent text-primary-foreground transition-colors">
            Favoritos
          </Link>
        </nav>

      </div>
    </header>
  )
}