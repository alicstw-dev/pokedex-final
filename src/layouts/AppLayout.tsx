import Footer from '@/components/layout/footer'
import Navbar from '@/components/layout/navbar'
import { Outlet } from 'react-router'

function AppLayout() {
  return (
    <div className="flex flex-col min-h-svh bg-background">
      <Navbar>
        <Navbar.Brand to="/" />

        <Navbar.Links>
          <Navbar.Link to="/" text="Home" />
          <Navbar.Link to="/pokedex" text="Pokémons" />
          <Navbar.Link to="/favorites" text="Favoritos" />
        </Navbar.Links>
      </Navbar>

      <main className="flex-1 flex flex-col">
        <Outlet />
      </main>

      <Footer />
    </div>
  )
}

export default AppLayout
