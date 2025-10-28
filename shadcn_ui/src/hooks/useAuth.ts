import { useState, useEffect } from "react";

interface User {
  id: string;
  name: string;
  email: string;
}

interface UseAuthReturn {
  user: User | null;
  loading: boolean;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
}

/**
 * Simulador de autenticação fake.
 * - Guarda o usuário no localStorage.
 * - Simula um "delay" de rede.
 * - Pode ser usado em protótipos e testes de layout.
 */
export function useAuth(): UseAuthReturn {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  // Carrega usuário do localStorage na inicialização
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) setUser(JSON.parse(storedUser));
    setLoading(false);
  }, []);

  async function login(email: string, password: string) {
    setLoading(true);
    // Simulando requisição assíncrona (ex: API)
    await new Promise((resolve) => setTimeout(resolve, 1000));

    // Regra simples de autenticação fake:
    if (email === "admin@mail.com" && password === "123456") {
      const fakeUser = { id: "1", name: "Admin", email };
      setUser(fakeUser);
      localStorage.setItem("user", JSON.stringify(fakeUser));
    } else {
      throw new Error("Credenciais inválidas");
    }

    setLoading(false);
  }

  function logout() {
    setUser(null);
    localStorage.removeItem("user");
  }

  return { user, loading, login, logout };
}
