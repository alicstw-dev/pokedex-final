import { http } from '@/infra/http/http-client'
import { setAccessToken } from '../storages/token.storage'
import type { AuthResponse } from '../types/dto/auth-dto'

export async function RegisterUser(
  username: string,
  password: string,
): Promise<AuthResponse> {
  const response = await http.post<AuthResponse>('register', {
    username,
    password,
  })

  setAccessToken(response.token)

  return response
}
