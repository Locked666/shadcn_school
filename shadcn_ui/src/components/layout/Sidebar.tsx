import { Home, Users, Settings } from "lucide-react";
import { NavLink } from "react-router-dom";
import { cn } from "@/lib/utils";

const links = [
  { to: "/dashboard", label: "Dashboard", icon: Home },
  { to: "/dashboard/users", label: "Usuários", icon: Users },
  { to: "/settings", label: "Configurações", icon: Settings },
];

export default function Sidebar() {
  return (
    <aside className="w-64 bg-background border-r flex flex-col">
      <div className="p-4 font-bold text-lg">My App</div>
      <nav className="flex flex-col gap-2 p-2">
        {links.map(({ to, label, icon: Icon }) => (
          <NavLink
            key={to}
            to={to}
            className={({ isActive }) =>
              cn(
                "flex items-center gap-2 rounded-md p-2 hover:bg-accent",
                isActive && "bg-accent text-accent-foreground"
              )
            }
          >
            <Icon className="h-4 w-4" />
            {label}
          </NavLink>
        ))}
      </nav>
    </aside>
  );
}
