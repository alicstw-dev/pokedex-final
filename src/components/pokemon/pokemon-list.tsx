import PokemonCard from "./pokemon-card"

interface Pokemon {
  id: number
  name: string
  image: string
}

interface PokemonListProps {
  pokemons: Pokemon[]
  loading: boolean
}

export default function PokemonList({ pokemons, loading }: PokemonListProps) {
  if (loading) return <p className="text-center py-10">Carregando Pokémons...</p>;
  
  if (pokemons.length === 0) {
    return <p className="text-center py-10 text-muted-foreground">Nenhum Pokémon encontrado.</p>;
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {pokemons.map((pokemon) => (
        <PokemonCard 
          key={pokemon.id} 
          name={pokemon.name} 
          id={pokemon.id} 
          image={pokemon.image} 
        />
      ))}
    </div>
  )
}