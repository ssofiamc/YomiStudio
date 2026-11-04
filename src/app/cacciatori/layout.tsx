import type { Metadata } from "next";
import type { ReactNode } from "react";
import { CacciatoriShell } from "@/components/cacciatori/CacciatoriShell";
import "./cacciatori.css";

export const metadata: Metadata = {
  title: "Cacciatori — Universo transmedia | YOMI Studio",
  description: "Explora el archivo del universo Cacciatori: videojuego, juego de mesa, narrativa interactiva y cómic.",
};

export default function CacciatoriLayout({ children }: Readonly<{ children: ReactNode }>) {
  return <CacciatoriShell>{children}</CacciatoriShell>;
}
