import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ModeToggle } from "@/components/mode-toggle";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RegisterDialog } from "./singup";
import { useAuth } from "@/contexts/AuthContext";

function LoginCard() {
  const navigate = useNavigate();
  const { login, loading, user } = useAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");

    try {
      await login(email, password);
      navigate("/dashboard"); // redireciona após login
    } catch (err) {
      console.error(err);
      setError("Email ou senha incorretos");
    }
  }

  // // Caso já esteja logado:
  // if (user) {
  //   navigate("/dashboard");
  // }

  return (
    <Card className="w-full max-w-sm">
      <CardHeader>
        <CardTitle>Acesse sua conta</CardTitle>
        <CardDescription>Acesse com seu usuário e senha.</CardDescription>
        <CardAction>
          <RegisterDialog
            trigger={
              <Button variant="link" className="hover:cursor-pointer">
                Registre-se
              </Button>
            }
            onSubmit={(data) => console.log("Usuário registrado:", data)}
          />
        </CardAction>
      </CardHeader>

      <CardContent>
        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
          <div className="grid gap-2">
            <Label htmlFor="email">Email:</Label>
            <Input
              id="email"
              type="email"
              placeholder="example@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="grid gap-2">
            <Label htmlFor="password">Senha</Label>
            <Input
              id="password"
              type="password"
              placeholder="********"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <div className="flex items-center">
              <ModeToggle />
              <a
                href="#"
                className="ml-auto inline-block text-sm underline-offset-4 hover:underline"
              >
                Esquecer senha.
              </a>
            </div>
          </div>

          {error && <p className="text-sm text-red-500">{error}</p>}
        </form>
      </CardContent>

      <CardFooter className="flex-col gap-2">
        <Button
          type="submit"
          className="w-full hover:cursor-pointer"
          disabled={loading}
          onClick={handleSubmit}
        >
          {loading ? "Entrando..." : "Login"}
        </Button>

        <Button variant="outline" className="w-full hover:cursor-pointer">
          Login com Google
        </Button>
      </CardFooter>
    </Card>
  );
}

export default LoginCard;
