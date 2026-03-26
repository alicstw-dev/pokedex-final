const BASE_URL = "https://server-user-f4ah.onrender.com/"

type RequestOptions = {
  headers?: Record<string, string>
}
class HttpClient {

  async get<T>(endpoint: string, options?: RequestOptions): Promise<T> {
    const response = await fetch(`${BASE_URL}${endpoint}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        ...(options?.headers || {})
      }
    })

    if (!response.ok) {
      throw new Error("Erro na requisição GET")
    }

    return response.json()
  }

  async post<T>(endpoint: string, body?: unknown, options?: RequestOptions): Promise<T> {
    const response = await fetch(`${BASE_URL}${endpoint}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        ...(options?.headers || {})
      },
      body: JSON.stringify(body)
    })

    if (!response.ok) {
      throw new Error("Erro na requisição POST")
    }

    return response.json()
  }
}

export const http = new HttpClient()