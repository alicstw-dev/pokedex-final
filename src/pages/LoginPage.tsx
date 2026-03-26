import { useState } from 'react'
import { User, Lock } from 'lucide-react'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { LoginUser } from '@/features/services/login.service'
import { useNavigate } from 'react-router'

export default function LoginPage() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)

  const navigate = useNavigate()

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()

    try {
      setLoading(true)

      const response = await LoginUser(username, password)

      console.log('Usuário logado:', response.user)
      console.log('Token:', response.token)

      navigate('/pokedex')

    } catch (error) {
      console.error('Erro ao fazer login', error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="flex-1 bg-background flex mt-40 justify-center min-h-screen px-6">
      <div className="w-full max-w-md">
        
        <form
          onSubmit={handleLogin}
          className="bg-card p-8 rounded-xl border border-border min-h-95 flex flex-col"
        >
          <p className="text-2xl font-semibold">Entrar</p>

          <div className="space-y-6 mt-10">

            <div className="relative">
              <User className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground size-4" />
              <Input
                placeholder="Usuário"
                className="pl-10 h-12"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>

            <div className="relative">
              <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground size-4" />
              <Input
                type="password"
                placeholder="Senha"
                className="pl-10 h-12"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <Button type="submit" className="w-full h-12" disabled={loading}>
              {loading ? 'Entrando...' : 'Entrar'}
            </Button>

          </div>
        </form>

      </div>
    </div>
  )
}