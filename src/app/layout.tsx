import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Seminário Simonton | Formação Teológica Reformada",
  description:
    "Seminário Teológico Presbiteriano Rev. Ashbel Green Simonton — formando pastores e líderes para a glória de Deus desde 1982.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
