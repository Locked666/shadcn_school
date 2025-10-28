import { ModeToggle } from "@/components/mode-toggle";
import { useAuth } from "@/hooks/useAuth";

export default function Navbar() {
  const { user, logout } = useAuth();

  return (
    <header className="flex items-center justify-between border-b bg-background p-4">
      <h1 className="text-lg font-semibold">Painel</h1>
      <div className="flex items-center gap-4">
        <ModeToggle />
        {user && (
          <>
            <span>{user.name}</span>
            <button
              onClick={logout}
              className="text-sm text-red-500 hover:underline"
            >
              Sair
            </button>
          </>
        )}
      </div>
    </header>
  );
}
