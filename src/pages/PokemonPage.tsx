import { useState, useEffect } from 'react'
import { Search } from 'lucide-react'
import { Input } from '@/components/ui/input'
import PokemonList from '@/components/pokemon/pokemon-list'

export default function PokemonPage() {
  const [allPokemons, setAllPokemons] = useState<any[]>([])
  const [search, setSearch] = useState("")
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function getPokemons() {
      const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=151")
      const data = await response.json()
      const formatted = data.results.map((p: any, index: number) => ({
        name: p.name,
        id: index + 1,
        image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${index + 1}.png`
      }))
      setAllPokemons(formatted)
      setLoading(false)
    }
    getPokemons()
  }, [])

  const filtered = allPokemons.filter(p => p.name.toLowerCase().includes(search.toLowerCase()))

  return (
    <div className="flex-1 bg-background"> 
      <section className="py-12 px-6 text-left border-b border-border bg-white/50">
        <h1 className="text-foreground">Explore a Pokédex</h1>
        <p className="text-muted-foreground -mt-4 mb-8">
          Encontre Pokémons usando o nome ou número.
        </p>
        
        <div className="relative max-w-md">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground size-4" />
          <Input 
            placeholder="Buscar Pokémon..." 
            className="pl-10 bg-card border-input focus:ring-primary"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </section>

      <main className="p-6">
        <PokemonList pokemons={filtered} loading={loading} />
      </main>
    </div>
  )
}