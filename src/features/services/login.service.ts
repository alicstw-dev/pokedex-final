import { http } from "@/infra/http/http-client"
import type { AuthResponse } from "../types/dto/auth-dto"
import { clearAccessToken, setAccessToken } from "../storages/token.storage"

export async function LoginUser(username: string, password: string): Promise<AuthResponse> {
  
  const response = await http.post<AuthResponse>("/login", {
    username,
    password,
  })

  setAccessToken(response.token)

  return response
}

export function Logout(): void {
  clearAccessToken()
}