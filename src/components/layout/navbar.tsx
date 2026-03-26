import { Link } from 'react-router'
import { Button } from '@/components/ui/button'
import { Search } from 'lucide-react'

export default function Navbar() {
  return (
    <header className="sticky top-0 border-b border-border bg-primary">
      <div className="container-main flex items-center justify-between py-3">
        {/* logo */}
        <Link to="/" className="flex items-center gap-2 font-bold text-xl">
          <span className="bg-background text-primary px-2 py-1 rounded-md">
            Pokédex
          </span>
        </Link>

        {/* menu */}
        <nav className="flex items-center gap-6 text-lg font-medium">
          <Link to="/" className="hover:text-accent text-primary-foreground transition-colors">
            Home
          </Link>

          <Link
            to="/pokedex"
            className="hover:text-accent text-primary-foreground transition-colors"
          >
            Pokémons
          </Link>

          <Link
            to="/favorites"
            className="hover:text-accent text-primary-foreground transition-colors"
          >
            Favoritos
          </Link>
        </nav>

        {/* botão */}
        <Button
          variant="secondary"
          size='lg'
          className="flex items-center gap-2 bg-background text-primary"
          asChild
        >
          <Link to="/pokedex">
            Buscar
            <Search className="size-4" />
          </Link>
        </Button>
      </div>
    </header>
  )
}
