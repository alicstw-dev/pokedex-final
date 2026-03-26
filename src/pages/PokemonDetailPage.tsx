import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { 
  ChevronLeft, Weight, Ruler, Zap, Star, Loader2, 
  Trophy, Sparkles 
} from 'lucide-react'

const TYPE_CONFIG: Record<string, { color: string, gradient: string }> = {
  fire: { color: 'bg-red-500', gradient: 'from-red-500 to-orange-400' },
  water: { color: 'bg-blue-500', gradient: 'from-blue-500 to-cyan-400' },
  grass: { color: 'bg-emerald-500', gradient: 'from-emerald-500 to-teal-400' },
  electric: { color: 'bg-yellow-400', gradient: 'from-yellow-400 to-amber-300' },
  psychic: { color: 'bg-pink-500', gradient: 'from-pink-500 to-rose-400' },
  ice: { color: 'bg-cyan-400', gradient: 'from-cyan-400 to-blue-300' },
  fighting: { color: 'bg-orange-600', gradient: 'from-orange-600 to-red-600' },
  poison: { color: 'bg-purple-500', gradient: 'from-purple-500 to-fuchsia-400' },
  ground: { color: 'bg-amber-600', gradient: 'from-amber-600 to-yellow-700' },
  flying: { color: 'bg-indigo-400', gradient: 'from-indigo-400 to-blue-400' },
  bug: { color: 'bg-lime-500', gradient: 'from-lime-500 to-emerald-400' },
  rock: { color: 'bg-stone-500', gradient: 'from-stone-500 to-slate-400' },
  ghost: { color: 'bg-violet-700', gradient: 'from-violet-700 to-purple-600' },
  dragon: { color: 'bg-indigo-600', gradient: 'from-indigo-600 to-violet-600' },
  steel: { color: 'bg-slate-500', gradient: 'from-slate-500 to-gray-400' },
  fairy: { color: 'bg-pink-400', gradient: 'from-pink-400 to-rose-300' },
  normal: { color: 'bg-slate-400', gradient: 'from-slate-400 to-gray-300' },
}

export default function PokemonDetailPage() {
  const { id } = useParams()
  const navigate = useNavigate()
  const [pokemon, setPokemon] = useState<any>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchDetails() {
      try {
        setLoading(true)
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
        const data = await response.json()
        setPokemon(data)
      } catch (err) { navigate('/pokedex') }
      finally { setLoading(false) }
    }
    fetchDetails()
  }, [id, navigate])

  if (loading) return (
    <div className="flex flex-col items-center justify-center min-h-[60vh]">
      <Loader2 className="size-12 animate-spin text-primary" />
    </div>
  )

  const mainType = pokemon.types[0].type.name
  const config = TYPE_CONFIG[mainType] || TYPE_CONFIG.normal

  return (
    <div className="min-h-screen bg-[#F8FAFC] pb-12 animate-in fade-in duration-500">
      <div className="container-main pt-6">
        
        {/* NAVEGAÇÃO SIMPLIFICADA */}
        <div className="mb-6">
          <button 
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 text-slate-400 font-bold hover:text-primary transition-all text-sm group"
          >
            <ChevronLeft className="size-4 group-hover:-translate-x-1 transition-transform" />
            Voltar
          </button>
        </div>

        {/* DASHBOARD CENTRALIZADO */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch max-w-6xl mx-auto">
          
          {/* COLUNA DA IMAGEM */}
          <div className="flex flex-col gap-6">
            <div className={`relative flex-1 min-h-112.5 rounded-[56px] overflow-hidden shadow-2xl bg-linear-to-br ${config.gradient} flex items-center justify-center group`}>
               
               {/* ID NO TOPO-ESQUERDO */}
               <div className="absolute top-8 left-10">
                 <span className="text-white/20 font-black text-6xl tracking-tighter italic">
                    #{String(pokemon.id).padStart(3, '0')}
                 </span>
               </div>

               {/* ESTRELA PRÓXIMA À IMAGEM (CANTO INFERIOR-DIREITO) */}
               <button 
                onClick={() => alert("⭐ Sistema de Registro em desenvolvimento!")}
                className="absolute bottom-8 right-10 z-20 bg-white/20 backdrop-blur-md border border-white/30 p-4 rounded-3xl shadow-xl hover:bg-white hover:scale-110 active:scale-95 transition-all group/star"
               >
                 <Star className="size-7 text-white group-hover/star:text-yellow-500 group-hover/star:fill-yellow-500 transition-all" />
               </button>
               
               <img 
                src={pokemon.sprites.other['official-artwork'].front_default} 
                alt={pokemon.name}
                className="relative z-10 w-full max-w-90 drop-shadow-[0_30px_40px_rgba(0,0,0,0.4)] group-hover:scale-105 transition-transform duration-700 ease-out"
              />
            </div>

            {/* BIO COMPACTA ABAIXO DA IMAGEM */}
            <div className="grid grid-cols-3 gap-4">
              {[
                { label: 'Peso', val: `${pokemon.weight / 10}kg`, icon: Weight },
                { label: 'Altura', val: `${pokemon.height / 10}m`, icon: Ruler },
                { label: 'Base XP', val: pokemon.base_experience, icon: Trophy },
              ].map((item, i) => (
                <div key={i} className="bg-white border border-slate-100 p-5 rounded-4xl flex flex-col items-center text-center shadow-sm hover:shadow-md transition-shadow">
                  <item.icon className="size-4 text-slate-300 mb-2" />
                  <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest">{item.label}</span>
                  <span className="text-xl font-black text-slate-900 leading-tight">{item.val}</span>
                </div>
              ))}
            </div>
          </div>

          {/* COLUNA DE DADOS TÉCNICOS */}
          <div className="bg-white border border-slate-100 rounded-[56px] p-10 lg:p-12 flex flex-col shadow-sm">
            
            {/* NOME E ELEMENTOS */}
            <div className="mb-10">
              <div className="flex gap-2 mb-4">
                {pokemon.types.map((t: any) => (
                  <span key={t.type.name} className={`${TYPE_CONFIG[t.type.name]?.color} text-white text-[10px] font-black uppercase tracking-[0.15em] px-5 py-2 rounded-xl shadow-lg shadow-black/5`}>
                    {t.type.name}
                  </span>
                ))}
              </div>
              <h1 className="text-7xl font-black text-slate-900 capitalize tracking-tighter leading-none">
                {pokemon.name}
              </h1>
            </div>

            {/* STATUS DE BATALHA */}
            <div className="flex-1 space-y-8">
              <div className="flex items-center justify-between border-b border-slate-50 pb-4">
                <h3 className="text-xs font-black text-slate-900 flex items-center gap-2 uppercase tracking-[0.2em]">
                  <Zap className="size-4 text-primary fill-primary" />
                  Battle Performance
                </h3>
                <span className="text-[10px] font-bold text-slate-300">MAX LEVEL STATS</span>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
                {pokemon.stats.map((s: any) => (
                  <div key={s.stat.name} className="space-y-2 group">
                    <div className="flex justify-between items-end px-1">
                      <span className="text-[9px] font-black uppercase tracking-widest text-slate-400 group-hover:text-slate-600 transition-colors">
                        {s.stat.name.replace('special-', 'sp. ')}
                      </span>
                      <span className="text-base font-black text-slate-900">{s.base_stat}</span>
                    </div>
                    <div className="h-2.5 w-full bg-slate-50 rounded-full overflow-hidden border border-slate-100 p-0.5">
                      <div 
                        className={`h-full transition-all duration-1000 rounded-full ${config.color} shadow-sm shadow-black/10`}
                        style={{ width: `${Math.min(s.base_stat, 100)}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* HABILIDADES (RODAPÉ) */}
            <div className="mt-12 pt-8 border-t border-slate-50">
              <div className="flex items-center gap-2 mb-4 text-slate-400">
                <Sparkles className="size-3" />
                <p className="text-[10px] font-black uppercase tracking-[0.2em]">Habilidades Únicas</p>
              </div>
              <div className="flex flex-wrap gap-2">
                {pokemon.abilities.map((a: any) => (
                  <div key={a.ability.name} className="px-6 py-2.5 bg-slate-900 text-white rounded-2xl text-[11px] font-black uppercase tracking-widest hover:bg-primary transition-all cursor-default">
                    {a.ability.name.replace('-', ' ')}
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}