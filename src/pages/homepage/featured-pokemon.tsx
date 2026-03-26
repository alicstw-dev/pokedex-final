import { Button } from "@/components/ui/button";
import { Link } from "react-router";

// Mock temporário enquanto não chama a API
const FEATURED = [
  { id: 1, name: "Bulbasaur", type: "Grama", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png", color: "bg-green-100" },
  { id: 4, name: "Charmander", type: "Fogo", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png", color: "bg-red-100" },
  { id: 7, name: "Squirtle", type: "Água", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png", color: "bg-blue-100" },
];

export default function FeaturedPokemon() {
  return (
    <section className="py-20 container-main">
      <div className="flex justify-between items-end mb-10">
        <div>
          <h2 className="text-3xl font-bold">Pokémon Iniciais</h2>
          <p className="text-muted-foreground">Comece sua jornada por aqui</p>
        </div>
        <Button variant="outline" asChild>
          <Link to="/pokedex">Ver todos</Link>
        </Button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {FEATURED.map((poke) => (
          <div key={poke.id} className="group relative bg-card border rounded-3xl p-6 hover:shadow-xl transition-all hover:-translate-y-2">
            <div className={`absolute inset-0 ${poke.color} opacity-20 rounded-3xl -z-10`} />
            <img 
              src={poke.image} 
              alt={poke.name} 
              className="w-40 h-40 mx-auto drop-shadow-2xl group-hover:scale-110 transition-transform"
            />
            <div className="mt-4 text-center">
              <span className="text-xs font-mono text-muted-foreground">#00{poke.id}</span>
              <h3 className="text-xl font-bold capitalize">{poke.name}</h3>
              <p className="text-sm text-muted-foreground">{poke.type}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}