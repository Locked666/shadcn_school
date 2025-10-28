import type { ReactNode } from "react"

import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

interface RegisterDialogProps {
  /** Componente que abre o Dialog (ex: botão de registro) */
  trigger?: ReactNode
  /** Função executada ao enviar o formulário */
  onSubmit?: (data: {
    nomeCompleto: string
    email: string
    confirmarEmail: string
    senha: string
    confirmarSenha: string
  }) => void
}

export function RegisterDialog({ trigger, onSubmit }: RegisterDialogProps) {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const formData = new FormData(event.currentTarget)
    const data = Object.fromEntries(formData.entries()) as {
      nomeCompleto: string
      email: string
      confirmarEmail: string
      senha: string
      confirmarSenha: string
    }

    // Executa callback externo, se existir
    onSubmit?.(data)
  }

  return (
    <Dialog>
      <form onSubmit={handleSubmit}>
        <DialogTrigger asChild>
          {trigger ? trigger : <Button variant="default">Registrar</Button>}
        </DialogTrigger>

        <DialogContent className="sm:max-w-[450px]">
          <DialogHeader>
            <DialogTitle>Cadastro de Usuário</DialogTitle>
            <DialogDescription>
              Preencha os campos abaixo para criar sua conta.
            </DialogDescription>
          </DialogHeader>

          <div className="grid gap-4 py-2">
            <div className="grid gap-2">
              <Label htmlFor="nomeCompleto">Nome Completo</Label>
              <Input
                id="nomeCompleto"
                name="nomeCompleto"
                placeholder="Digite seu nome completo"
                required
              />
            </div>

            <div className="grid gap-2">
              <Label htmlFor="email">E-mail</Label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="Digite seu e-mail"
                required
              />
            </div>

            <div className="grid gap-2">
              <Label htmlFor="confirmarEmail">Confirme o E-mail</Label>
              <Input
                id="confirmarEmail"
                name="confirmarEmail"
                type="email"
                placeholder="Confirme seu e-mail"
                required
                
              />
            </div>

            <div className="grid gap-2">
              <Label htmlFor="senha">Senha</Label>
              <Input
                id="senha"
                name="senha"
                type="password"
                placeholder="Digite sua senha"
                required
              />
            </div>

            <div className="grid gap-2">
              <Label htmlFor="confirmarSenha">Confirme a Senha</Label>
              <Input
                id="confirmarSenha"
                name="confirmarSenha"
                type="password"
                placeholder="Confirme sua senha"
                required
              />
            </div>
          </div>

          <DialogFooter>
            <DialogClose asChild>
              <Button variant="outline">Cancelar</Button>
            </DialogClose>
            <Button type="submit">Registrar</Button>
          </DialogFooter>
        </DialogContent>
      </form>
    </Dialog>
  )
}
