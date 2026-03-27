import Footer from '@/components/layout/footer'
import Navbar from '@/components/layout/navbar'
import { Button } from '@/components/ui/button'
import { Link, Navigate, Outlet } from 'react-router'

function PublicLayout() {
  // const { isAuthenticated } = useAuth()

  // // se já estiver logado, vai para pokedex
  // if (isAuthenticated) {
  // 	return <Navigate to="/pokemon" replace />
  // }

  return (
    <div className="flex flex-col min-h-svh bg-background">
      <Navbar>
        <Navbar.Brand to="/" />

        <Navbar.Actions>
          <Button asChild>
            <Link to="/login" className='text-muted'>Entrar</Link>
          </Button>

          <Button asChild>
            <Link to="/register" className='text-muted'>Criar Conta</Link>
          </Button>
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
