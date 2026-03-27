import Footer from '@/components/layout/footer'
import HeroSection from '@/pages/homepage/hero-section'
import FeaturedPokemon from '@/pages/homepage/featured-pokemon' // Nova seção

function HomePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="grow">
        <HeroSection />
        <FeaturedPokemon />      
        <section className="py-20 bg-muted/50">
          <div className="container-main grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="text-center p-6">
              <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-primary">📊</div>
              <h3 className="font-bold mb-2">Estatísticas Reais</h3>
              <p className="text-sm text-muted-foreground">Analise HP, Ataque, Defesa e muito mais de cada Pokémon.</p>
            </div>
            <div className="text-center p-6">
              <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-primary">❤️</div>
              <h3 className="font-bold mb-2">Favoritos</h3>
              <p className="text-sm text-muted-foreground">Crie sua própria lista de desejos e treine seus preferidos.</p>
            </div>
            <div className="text-center p-6">
              <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-primary">⚡</div>
              <h3 className="font-bold mb-2">Tipos e Fraquezas</h3>
              <p className="text-sm text-muted-foreground">Descubra as vantagens elementares em batalhas.</p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

export default HomePage