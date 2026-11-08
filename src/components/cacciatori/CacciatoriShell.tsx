"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { ReactNode } from "react";

const navigation = [
  { href: "/cacciatori", label: "Inicio" },
  { href: "/cacciatori#receta", label: "Receta" },
  { href: "/cacciatori#productos", label: "Platos principales" },
];

export function CacciatoriShell({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  return (
    <div className="cac-site">
      <a className="cac-skip-link" href="#contenido-cacciatori">Saltar al contenido</a>
      <header className="cac-header">
        <Link className="cac-wordmark" href="/" aria-label="Volver a YOMI Studio">YOMI STUDIO</Link>
        <nav className="cac-nav" aria-label="Navegación del universo Cacciatori">
          {navigation.map((item) => {
            const active = item.href === "/cacciatori" ? pathname === "/cacciatori" || pathname === "/cacciatori/" : pathname.startsWith(item.href);
            return <Link key={item.href} className={`cac-nav__link${active ? " is-active" : ""}`} href={item.href} aria-current={active ? "page" : undefined}>{item.label}</Link>;
          })}
        </nav>
      </header>
      <main id="contenido-cacciatori" className="cac-main">{children}</main>
      <footer className="cac-footer">
        <div className="cac-footer__brand"><Link href="/" className="cac-footer__wordmark">YOMI STUDIO</Link><p>Relatos que se sirven oscuros.</p></div>
        <div className="cac-footer__meta"><span>UNIVERSO CACCIATORI</span><Link href="/">VOLVER AL ESTUDIO ↗</Link></div>
        <a className="cac-back-top" href="#contenido-cacciatori" aria-label="Volver al inicio de la página">↑</a>
      </footer>
    </div>
  );
}
