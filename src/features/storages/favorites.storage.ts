const KEY_FAVORITES = 'pokedex_favorites'

export interface FavoritePokemon {
  id: number
  name: string
  image: string
  types?: string[]
}

export function getFavorites(): FavoritePokemon[] {
  const data = localStorage.getItem(KEY_FAVORITES)
  if (!data) return []
  try {
    return JSON.parse(data)
  } catch {
    return []
  }
}

export function addFavorite(pokemon: FavoritePokemon): void {
  const currentFavorites = getFavorites()

  if (!currentFavorites.some((fav) => fav.id === pokemon.id)) {
    currentFavorites.push(pokemon)
    localStorage.setItem(KEY_FAVORITES, JSON.stringify(currentFavorites))
  }
}

export function removeFavorite(id: number): void {
  const currentFavorites = getFavorites()
  const newFavorites = currentFavorites.filter((pokemon) => pokemon.id !== id)
  localStorage.setItem(KEY_FAVORITES, JSON.stringify(newFavorites))
}

export function isFavorite(id: number): boolean {
  const currentFavorites = getFavorites()
  return currentFavorites.some((pokemon) => pokemon.id === id)
}
