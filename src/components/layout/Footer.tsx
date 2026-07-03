export default function Footer() {
  return (
    <footer className="bg-stone-950 py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 text-xs text-stone-500 sm:flex-row">
        <span>
          © {new Date().getFullYear()} Seminário Teológico Presbiteriano Rev.
          Ashbel Green Simonton
        </span>
        <span>Jurisdicionado à Igreja Presbiteriana do Brasil</span>
      </div>
    </footer>
  );
}
