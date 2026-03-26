export default function Footer() {
  return (
    <footer className="border-t bg-muted">
      <div className="container-main py-6 text-center text-sm text-muted-foreground">

        <p>
          © {new Date().getFullYear()} Pokédex React
        </p>

        <p className="mt-1">
          Projeto acadêmico • PWII
        </p>

      </div>
    </footer>
  )
}