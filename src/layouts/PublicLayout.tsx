import Footer from '@/components/shared/footer'
import Navbar from '@/components/shared/navbar'
import { Button } from '@/components/ui/button'
import { isLogged } from '@/features/storages/token.storage'
import { Link, Outlet } from 'react-router'

function PublicLayout() {
  // const { isAuthenticated } = useAuth()

  // // se já estiver logado, vai para pokedex
  // if (isAuthenticated) {
  // return <Navigate to="/pokedex" replace />
  // }

  return (
    <div className="flex flex-col min-h-svh bg-background">
      <Navbar>
        <Navbar.Brand to="/" />

        <Navbar.Links>
          <Navbar.Link to="/" text="Home" />
          <Navbar.Link to="/pokedex" text="Pokédex" />
          <Navbar.Link to="/favorites" text="Favoritos" />
        </Navbar.Links>

        <Navbar.Actions>
          {!isLogged && (
            <>
              <Button asChild>
                <Link to="/login">Entrar</Link>
              </Button>

              <Button asChild>
                <Link to="/register">Criar Conta</Link>
              </Button>
            </>
          )}
        </Navbar.Actions>
      </Navbar>

      <main className="flex-1 flex flex-col">
        <Outlet />
      </main>

      <Footer />
    </div>
  )
}

export default PublicLayout
