import type { Metadata } from "next";
import "./globals.css";
import { StoreProvider } from "@/components/store/StoreProvider";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export const metadata: Metadata = {
  title: "Yomi Studio",
  description: "Historias que se pueden tocar, leer, jugar y recorrer.",
  icons: {
    icon: [{ url: `${basePath}/yomi-studio-blanco.png`, type: "image/png" }],
    shortcut: [`${basePath}/yomi-studio-blanco.png`],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="es"><body><StoreProvider>{children}</StoreProvider></body></html>;
}
