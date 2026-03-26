import { Link, /*useNavigate*/ } from 'react-router' 

export default function Navbar() {
  //const navigate = useNavigate();

  //const handleLogout = () => {
    // Se tiver lógica de auth, limpe aqui
   // navigate('/'); // Direciona para home
  //}

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-primary w-full">
      <div className="container-main flex items-center justify-between py-3">
        <Link to="/" className="flex items-center gap-2 font-bold text-xl">
          <span className="bg-background text-primary px-2 py-1 rounded-md transition-transform hover:scale-105">
            Pokédex
          </span>
        </Link>

        <nav className="flex items-center gap-6 text-sm font-bold uppercase tracking-wider">
          <Link to="/" className="text-white hover:text-accent transition-colors">
            Home
          </Link>
          <Link to="/pokedex" className="text-white hover:text-accent transition-colors">
            Pokémons
          </Link>
          <Link to="/favorites" className="text-white hover:text-accent transition-colors">
            Favoritos
          </Link>
        </nav>

      </div>
    </header>
  )
}