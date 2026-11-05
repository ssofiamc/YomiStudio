import type { Metadata } from "next";
import "./globals.css";
import { StoreProvider } from "@/components/store/StoreProvider";

export const metadata: Metadata = {
  title: "Yomi Studio",
  description: "Historias que se pueden tocar, leer, jugar y recorrer.",
  icons: {
    icon: [{ url: "public/icon.svg", type: "image/svg+xml" }],
    shortcut: ["public/icon.svg"],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="es"><body><StoreProvider>{children}</StoreProvider></body></html>;
}
