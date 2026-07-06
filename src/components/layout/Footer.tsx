import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-brand-950 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-5 px-6 sm:flex-row">
        <Image
          src="/images/logo-branca.png"
          alt="Seminário Teológico Presbiteriano Rev. Ashbel Green Simonton"
          width={140}
          height={38}
          className="h-8 w-auto opacity-90"
        />
        <div className="flex flex-col items-center gap-1 text-xs text-brand-200/70 sm:items-end">
          <span>
            © {new Date().getFullYear()} Seminário Teológico Presbiteriano
            Rev. Ashbel Green Simonton
          </span>
          <span>Jurisdicionado à Igreja Presbiteriana do Brasil</span>
        </div>
      </div>
    </footer>
  );
}
