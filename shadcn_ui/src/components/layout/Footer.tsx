export default function Footer() {
  return (
    <footer className="border-t bg-background p-4 text-center text-xs text-muted-foreground">
      © {new Date().getFullYear()} — Meu App. Todos os direitos reservados.
    </footer>
  );
}
