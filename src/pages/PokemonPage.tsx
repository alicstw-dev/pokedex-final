import { useState, useEffect, useMemo, useRef } from 'react'
import { Search, ChevronUp, ChevronLeft, ChevronRight, Info, Loader2, Sparkles } from 'lucide-react'
import { Input } from '@/components/ui/input'
import Footer from '@/components/layout/footer'
import PokemonList from '@/components/pokemon/pokemon-list'
import { getPokemons } from '@/infra/http/fetch-api'

const POKEMON_TYPES = [
  { name: 'Todos', value: 'all' },
  { name: 'Fogo', value: 'fire' },
  { name: 'Água', value: 'water' },
  { name: 'Grama', value: 'grass' },
  { name: 'Elétrico', value: 'electric' },
  { name: 'Gelo', value: 'ice' },
  { name: 'Lutador', value: 'fighting' },
  { name: 'Veneno', value: 'poison' },
  { name: 'Terra', value: 'ground' },
  { name: 'Voador', value: 'flying' },
  { name: 'Psíquico', value: 'psychic' },
  { name: 'Inseto', value: 'bug' },
  { name: 'Pedra', value: 'rock' },
  { name: 'Fantasma', value: 'ghost' },
  { name: 'Dragão', value: 'dragon' },
  { name: 'Aço', value: 'steel' },
  { name: 'Fada', value: 'fairy' },
  { name: 'Normal', value: 'normal' },
]

export default function PokemonPage() {
  const [allPokemons, setAllPokemons] = useState<any[]>([])
  const [search, setSearch] = useState("")
  const [selectedType, setSelectedType] = useState("all")
  const [loading, setLoading] = useState(true)
  const [isScrolled, setIsScrolled] = useState(false)
  
  const scrollRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const fetchPokemons = async () => {
      const {formatted} = await getPokemons()
      setAllPokemons(formatted)
      setLoading(false)
    }
    fetchPokemons()
    const handleScroll = () => setIsScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true)
        const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=151")
        const data = await response.json()
        const detailPromises = data.results.map((p: any) => fetch(p.url).then(res => res.json()))
        const details = await Promise.all(detailPromises)
        const formatted = details.map((d: any) => ({
          id: d.id,
          name: d.name,
          image: d.sprites.other['official-artwork'].front_default,
          types: d.types.map((t: any) => t.type.name) 
        }))
        setAllPokemons(formatted)
      } finally {
        setLoading(false)
      }
    }
    fetchData()
  }, [])

  const scrollFilters = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { scrollLeft } = scrollRef.current
      const scrollAmount = 300
      scrollRef.current.scrollTo({ 
        left: direction === 'left' ? scrollLeft - scrollAmount : scrollLeft + scrollAmount, 
        behavior: 'smooth' 
      })
    }
  }

  const filteredPokemons = useMemo(() => {
    return allPokemons.filter(p => {
      const matchesSearch = p.name.toLowerCase().includes(search.toLowerCase()) || p.id.toString() === search
      const matchesType = selectedType === "all" || p.types.includes(selectedType)
      return matchesSearch && matchesType
    })
  }, [search, selectedType, allPokemons])

  return (
    <div className="min-h-screen bg-[#FDFDFD] flex flex-col selection:bg-primary/10">

      {/* HEADER ULTRA-CLEAN */}
      <header className={`sticky top-14.25 z-40 w-full transition-all duration-500 bg-white/80 backdrop-blur-xl border-b border-slate-100 ${
        isScrolled ? 'py-4 shadow-[0_2px_20px_-5px_rgba(0,0,0,0.05)]' : 'py-12'
      }`}>
        <div className="container-main max-w-6xl">
          <div className="flex flex-col gap-8">
            
            {/* Título com Animação */}
            <div className={`text-center transition-all duration-500 transform ${isScrolled ? 'scale-0 h-0 opacity-0 overflow-hidden' : 'scale-100 opacity-100'}`}>
              <div className="flex items-center justify-center gap-2 mb-3 text-primary font-bold text-xs uppercase tracking-[0.2em]">
                <Sparkles className="size-3.5 fill-primary" />
                <span>Base de Dados Kanto</span>
              </div>
              <h1 className="text-5xl font-black text-slate-900 tracking-tighter">
                Pokédex <span className="text-primary">Regional</span>
              </h1>
            </div>

            <div className="space-y-6">
              {/* BUSCA COM SOMBRA SUAVE */}
              <div className="relative max-w-2xl mx-auto w-full group">
                <Search className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-primary transition-colors size-5" />
                <Input 
                  placeholder="Pesquisar por nome ou número..." 
                  className="pl-14 h-14 rounded-2xl bg-slate-50 border-none shadow-inner focus-visible:ring-2 focus-visible:ring-primary/10 transition-all text-base placeholder:text-slate-400"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                />
              </div>

              {/* FILTROS COM SETAS E GRADIENTE DE MÁSCARA */}
              <div className="relative flex items-center max-w-4xl mx-auto px-12 group/filters">
                {/* Seta Esquerda */}
                <button 
                  onClick={() => scrollFilters('left')}
                  className="absolute left-0 p-2.5 bg-white border border-slate-100 rounded-full shadow-lg hover:bg-primary hover:text-white transition-all z-10 active:scale-90"
                >
                  <ChevronLeft className="size-4" />
                </button>

                {/* Container de Filtros com Máscara de Gradiente */}
                <div className="relative overflow-hidden w-full">
                  <div 
                    ref={scrollRef}
                    className="flex items-center gap-3 overflow-x-auto no-scrollbar scroll-smooth py-2 px-1"
                  >
                    {POKEMON_TYPES.map((type) => (
                      <button
                        key={type.value}
                        onClick={() => setSelectedType(type.value)}
                        className={`px-6 py-2 rounded-xl text-[13px] font-bold transition-all border whitespace-nowrap active:scale-95 ${
                          selectedType === type.value 
                          ? 'bg-slate-900 border-slate-900 text-white shadow-xl shadow-slate-200' 
                          : 'bg-white border-slate-200 text-slate-500 hover:border-slate-400 hover:text-slate-900'
                        }`}
                      >
                        {type.name}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Seta Direita */}
                <button 
                  onClick={() => scrollFilters('right')}
                  className="absolute right-0 p-2.5 bg-white border border-slate-100 rounded-full shadow-lg hover:bg-primary hover:text-white transition-all z-10 active:scale-90"
                >
                  <ChevronRight className="size-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* CONTEÚDO PRINCIPAL CENTRALIZADO */}
      <main className="grow container-main py-16 flex flex-col items-center">
        {loading ? (
          <div className="flex flex-col items-center py-20 gap-4">
            <div className="relative">
                <Loader2 className="size-12 animate-spin text-primary/20" />
                <Loader2 className="size-12 animate-spin text-primary absolute inset-0 animation-duration-[1.5s]" />
            </div>
            <p className="font-bold text-slate-400 tracking-tight text-sm uppercase">Sincronizando Pokémons...</p>
          </div>
        ) : filteredPokemons.length > 0 ? (
          <div className="w-full max-w-7xl animate-in fade-in slide-in-from-bottom-8 duration-700">
             <PokemonList pokemons={filteredPokemons} loading={loading} />
          </div>
        ) : (
          /* EMPTY STATE MINIMALISTA */
          <div className="flex flex-col items-center justify-center py-32 text-center max-w-sm mx-auto">
            <div className="bg-slate-50 p-10 rounded-[40px] mb-8 group">
              <Info className="size-12 text-slate-200 group-hover:text-primary transition-colors duration-500" />
            </div>
            <h3 className="text-2xl font-black text-slate-900 tracking-tight">Sem resultados</h3>
            <p className="text-slate-500 mt-3 leading-relaxed">
              Não encontramos nenhum Pokémon com esses critérios. Tente limpar os filtros.
            </p>
            <button 
              onClick={() => { setSearch(""); setSelectedType("all"); }}
              className="mt-8 font-black text-primary hover:text-primary/80 transition-all border-b-2 border-primary/20 hover:border-primary pb-1"
            >
              Resetar Busca
            </button>
          </div>
        )}
      </main>

      <Footer />

      {/* Voltar ao topo */}
      {isScrolled && (
        <button 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-10 right-10 p-4 bg-slate-900 text-white rounded-2xl shadow-2xl hover:-translate-y-2 transition-all z-50 active:scale-95"
        >
          <ChevronUp className="size-6" />
        </button>
      )}
    </div>
  )
}