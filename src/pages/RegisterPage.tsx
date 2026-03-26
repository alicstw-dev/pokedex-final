import { useState } from 'react'
import { User, Lock } from 'lucide-react'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'

export default function RegisterPage() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault()

    const userData = {
      username,
      password,
    }

    console.log('Usuário cadastrado:', userData)
  }

  return (
    <div className="flex-1 bg-background flex mt-40 justify-center min-h-screen px-6">
      <div className="w-full max-w-md ">
        {/* FORM */}
        <form
          onSubmit={handleRegister}
          className="bg-card p-8 rounded-xl border border-border min-h-[380px] flex flex-col"
        >
          <p className="text-2xl font-semibold">Criar Conta</p>

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

            <Button type="submit" className="w-full h-12">
              Registrar
            </Button>
          </div>
        </form>
      </div>
    </div>
  )
}
