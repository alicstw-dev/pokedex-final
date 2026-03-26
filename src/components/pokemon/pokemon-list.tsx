import PokemonCard from "./pokemon-card"
import { Loader2 } from "lucide-react"

interface PokemonListProps {
  pokemons: any[];
  loading: boolean;
}

export default function PokemonList({ pokemons, loading }: PokemonListProps) {
  
  // LOADING STATE ESTILIZADO
  if (loading) return (
    <div className="flex flex-col items-center justify-center py-32 gap-4">
       <Loader2 className="size-10 animate-spin text-primary/40" />
       <p className="text-sm font-bold text-slate-400 tracking-widest uppercase">Sincronizando Pokédex...</p>
    </div>
  );
  
  // EMPTY STATE ESTILIZADO
  if (pokemons.length === 0) {
    return (
      <div className="text-center py-32">
        <p className="text-2xl font-black text-slate-300 italic">Nenhum Pokémon avistado nesta área.</p>
      </div>
    );
  }

  return (
    /* justify-items-center garante que em todas as telas os cards fiquem alinhados ao meio */
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 justify-items-center w-full max-w-7xl">
      {pokemons.map((pokemon) => (
        <PokemonCard 
          key={pokemon.id} 
          name={pokemon.name} 
          id={pokemon.id} 
          image={pokemon.image} 
          types={pokemon.types} // Agora passa os tipos para o card
        />
      ))}
    </div>
  )
}