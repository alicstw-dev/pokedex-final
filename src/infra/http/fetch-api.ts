
export async function getPokemons() {
      const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=151")
      const data = await response.json()
      const formatted = data.results.map((p: any, index: number) => ({
        name: p.name,
        id: index + 1,
        image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${index + 1}.png`
      }))

      return {data, formatted}
    }