import { Link } from "react-router-dom"

export default function PokemonCard({ name, id, image }: any) {
  return (
    <Link to={`/pokemon/${name}`}>
      <div className="bg-card border border-border rounded-(--radius) p-5 hover:border-primary transition-all group relative overflow-hidden">
        <span className="absolute top-3 left-3 bg-secondary/10 text-secondary text-[10px] font-bold px-2 py-0.5 rounded-full">
          #{id.toString().padStart(3, '0')}
        </span>
        
        <div className="flex flex-col items-center">
          <img 
            src={image} 
            alt={name} 
            className="size-32 object-contain group-hover:scale-110 transition-transform" 
          />
          <h2 className="mt-4 capitalize text-foreground group-hover:text-primary transition-colors">
            {name}
          </h2>
        </div>
      </div>
    </Link>
  )
}