import { ROUTES } from '@/app/routes'
import { Button } from '@/components/ui/button'
import { ArrowRight, Sparkles, Zap } from 'lucide-react'
import { Link } from 'react-router-dom'

function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-card border-b border-border/50">

      <div className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 translate-y-1/4 -translate-x-1/4 w-96 h-96 bg-yellow-400/5 rounded-full blur-3xl" />

      <div className="container-main relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center py-16 lg:py-24">

        {/* TEXTO */}
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left">

          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium">
            <Sparkles className="size-3.5 fill-primary" />
            <span>Explore o universo Pokémon</span>
          </div>

          <h1 className="mt-8 text-5xl lg:text-7xl font-extrabold tracking-tight text-foreground leading-[1.1]">
            Monte sua <br />
            <span className="text-primary drop-shadow-sm">Pokédex</span> <br />
            <span className="text-muted-foreground/80">completa</span>
          </h1>

          <p className="mt-6 text-xl text-muted-foreground max-w-lg leading-relaxed">
            Navegue por centenas de Pokémons, analise estatísticas detalhadas e
            favorite seus preferidos para se tornar um verdadeiro Mestre Pokémon.
          </p>

          {/* BOTÕES */}
          <div className="mt-10 flex flex-col sm:flex-row gap-4 w-full sm:w-auto">

            <Button size="lg" className="h-14 px-8 text-md font-bold group" asChild>
              <Link to={ROUTES.POKEDEX}>
                EXPLORAR POKÉDEX
                <ArrowRight className="ml-2 size-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>

            <Button size="lg" variant="outline" className="h-14 px-8 text-md font-bold" asChild>
              <Link to="/favorites">
                MEUS FAVORITOS
              </Link>
            </Button>

          </div>

          {/* CONTADORES */}
          <div className="mt-16 flex items-center gap-10 border-t border-border pt-8 w-full justify-center lg:justify-start">

            <div className="flex flex-col gap-0.5">
              <span className="text-3xl font-black text-foreground">500+</span>
              <span className="text-sm font-medium text-muted-foreground uppercase tracking-widest">
                Pokémons
              </span>
            </div>

            <div className="h-10 w-px bg-border hidden sm:block"></div>

            <div className="flex flex-col gap-0.5">
              <span className="text-3xl font-black text-foreground flex items-center gap-2">
                18
                <Zap className="size-5 text-yellow-500 fill-yellow-500" />
              </span>
              <span className="text-sm font-medium text-muted-foreground uppercase tracking-widest">
                Tipos
              </span>
            </div>

          </div>
        </div>

        {/* IMAGEM */}
        <div className="relative flex justify-center items-center lg:justify-end">

          <div className="absolute w-75 h-75 lg:w-112.5 lg:h-112.5 bg-primary/20 rounded-full blur-[80px]" />

          <div className="relative group cursor-pointer">

            <img
              src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png"
              alt="Pikachu Destaque"
              className="w-full max-w-[320px] lg:max-w-120 drop-shadow-[0_20px_50px_rgba(0,0,0,0.2)] transition-all duration-500 group-hover:scale-105 group-hover:-rotate-3"
            />

            <div className="absolute -top-4 -right-4 bg-background border-2 border-primary px-4 py-2 rounded-2xl shadow-xl rotate-12 hidden lg:block">
              <span className="font-bold text-primary">#025 Pikachu</span>
            </div>

          </div>
        </div>

      </div>
    </section>
  )
}

export default HeroSection