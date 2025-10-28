import { ModeToggle } from "@/components/mode-toggle"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RegisterDialog } from "./singup"

export function LoginCard() {
  return (
    <Card className="w-full max-w-sm">
      <CardHeader>
        <CardTitle>Acesse sua conta</CardTitle>
        <CardDescription>
          Acesse com seu usuário e senha.
        </CardDescription>
        <CardAction>
            <RegisterDialog
            trigger={<Button variant="link" className="hover:cursor-pointer">Registre-se</Button>}
            onSubmit={(data) => console.log("Usuário registrado:", data)}
            />
                    
        </CardAction>
      </CardHeader>
      <CardContent>
        <form>
          <div className="flex flex-col gap-6">
            <div className="grid gap-2">
              <Label htmlFor="email">Email:</Label>
              <Input
                id="email"
                type="email"
                placeholder="example@example.com"
                required
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="password">Senha</Label>
              <Input id="password" type="password"  placeholder="********" required />
              <div className="flex items-center">
                <ModeToggle/>
                <a
                  href="#"
                  className="ml-auto inline-block text-sm underline-offset-4 hover:underline"
                >
                  Esquecer senha.
                </a>
              </div>
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex-col gap-2">
        <Button type="submit" className="w-full hover:cursor-pointer">
          Login
        </Button>
        <Button variant="outline" className="w-full hover:cursor-pointer">
          Login com Google
        </Button>
      </CardFooter>
    </Card>
  )
}
