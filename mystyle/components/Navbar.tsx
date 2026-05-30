export default function Navbar() {
  return (
    <header className="fixed top-0 z-50 w-full border-b border-white/10 bg-black/75 backdrop-blur-md">
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 md:px-10">
        <a
          href="/"
          className="font-title text-2xl uppercase tracking-[0.28em] text-white"
        >
          MyStyle
        </a>

        <div className="hidden items-center gap-9 md:flex">
          <a
            href="#about"
            className="font-ui text-[11px] uppercase tracking-[0.22em] text-zinc-300 transition hover:text-[#C8A97E]"
          >
            À propos
          </a>

          <a
            href="#collection"
            className="font-ui text-[11px] uppercase tracking-[0.22em] text-zinc-300 transition hover:text-[#C8A97E]"
          >
            Collection
          </a>

          <a
            href="#gallery"
            className="font-ui text-[11px] uppercase tracking-[0.22em] text-zinc-300 transition hover:text-[#C8A97E]"
          >
            Galerie
          </a>

          <a
            href="#contact"
            className="font-ui text-[11px] uppercase tracking-[0.22em] text-zinc-300 transition hover:text-[#C8A97E]"
          >
            Contact
          </a>
        </div>
      </nav>
    </header>
  );
}