import Link from "next/link";
import { FooterPhysics } from "./FooterPhysics";
import { Logo } from "./Logo";

const navigation = [{ href: "/", label: "Yomi Studio" }, { href: "/catalogo", label: "Catálogo" }, { href: "/cacciatori", label: "Cacciatori" }, { href: "/#equipo", label: "Equipo" }, { href: "/#contacto", label: "Contacto" }];
const socialLinks = [
  { label: "Instagram", href: "https://www.instagram.com/yomistudio26/" },
  { label: "LinkedIn Santiago", href: "https://www.linkedin.com/in/david-santiago-amaya-reyes/" },
  { label: "LinkedIn Sara", href: "https://www.linkedin.com/in/sasomc/" },
];
export function Footer() { return <footer className="relative overflow-hidden border-t-2 border-black bg-black text-white"><FooterPhysics className="pointer-events-none absolute inset-x-0 top-0 h-64 w-full opacity-90" /><div className="relative mx-auto max-w-6xl px-5 pb-8 pt-64 sm:px-8"><div className="grid gap-10 border-t-2 border-zinc-600 pt-8 md:grid-cols-[1.4fr_1fr_1fr]"><div><Logo className="text-white" />
<p className="mt-5 max-w-sm text-sm leading-relaxed text-zinc-300">Un estudio multimedia independiente creador y productor del universo Cacciatori.</p></div>
<div><h2 className="text-xs font-bold uppercase tracking-[.18em] text-zinc-400">Navegación</h2><nav aria-label="Pie de página" className="mt-4 flex flex-col gap-2 text-sm font-bold uppercase">{navigation.map((item) => <Link key={item.href} href={item.href} className="w-fit hover:underline">{item.label}</Link>)}</nav></div><div>
    <h2 className="text-xs font-bold uppercase tracking-[.18em] text-zinc-400">Social</h2>
    <p className="mt-4 max-w-xs text-sm leading-relaxed text-zinc-300">Perfiles sociales del estudio y de los integrantes del equipo.</p><div className="mt-3 flex flex-wrap gap-2">{socialLinks.map((social) => <a key={social.href} href={social.href} target="_blank" rel="noreferrer" className="border border-zinc-600 px-2 py-1 text-xs text-zinc-300 hover:border-white hover:text-white">{social.label}</a>)}</div></div></div><div className="mt-10 flex flex-wrap justify-between gap-3 border-t border-zinc-600 pt-4 text-xs uppercase tracking-wider text-zinc-400">
        <span>© 2026 YOMI Studio — Todos los derechos reservados.</span>
        <span>Política de privacidad · Términos de servicio</span></div></div></footer>; }
