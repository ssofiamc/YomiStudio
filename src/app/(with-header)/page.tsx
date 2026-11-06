import Link from "next/link";
import Image from "next/image";
import { CacciatoriTV } from "@/components/home/CacciatoriTV";
import { CameraExperience } from "@/components/home/CameraExperience";
import { ContactForm } from "@/components/home/ContactForm";
import { ProductCarousel } from "@/components/home/ProductCarousel";
import { ScrollModel } from "@/components/home/ScrollModel";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
const team = [
  {
    name: "Santiago",
    image: `${basePath}/Santiago%20Pic.jpeg`,
    role: "Director",
    description: "Estudiante de Ingeniería en Multimedia con habilidad en el dibujo",
    behance: "https://www.behance.net/davidsamayar1",
  },
  {
    name: "Sara",
    image: `${basePath}/SaraPic.jpeg`,
    role: "Codirectora",
    description: "Estudiante de Ingeniería en Multimedia con habilidad en el diseño",
    behance: "https://www.behance.net/sasomc",
  },
];
export default function Page() {
  return <><section className="relative border-b-2 border-black md:min-h-[90vh]">
    <div className="h-auto overflow-visible md:sticky md:top-20 md:h-[calc(90vh-5rem)] md:overflow-hidden">
    <div className="relative z-10 mx-auto flex h-auto max-w-6xl flex-col justify-start gap-2 px-5 py-5 sm:gap-0 sm:px-8 sm:py-12 md:h-full md:justify-between">
      <div className="relative z-10 max-w-xl"><p className="mb-3 text-xs font-bold uppercase tracking-[.22em]">YOMI Studio / 2026</p>
      <h1 className="font-sans text-6xl uppercase leading-[.78] tracking-[-.07em] sm:text-8xl">Historias<br />que muerden.</h1></div>
      <ScrollModel />
      <div className="relative z-10 ml-auto max-w-sm border-2 border-black bg-zinc-100 p-5"><p className="text-sm leading-relaxed">Animación, narrativa, diseño y experiencias multimedia únicas y de calidad.</p>
      <Link href="/catalogo" className="mt-4 inline-flex border-2 border-black bg-black px-4 py-3 text-sm font-bold uppercase text-white hover:bg-zinc-300 hover:text-black">Entrar al catálogo</Link></div></div></div>
      </section><section id="estudio" className="border-b-2 border-black bg-black px-5 py-16 text-white sm:px-8 sm:py-24">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-2 lg:items-center"><CameraExperience /><div>
          <p className="text-xs font-bold uppercase tracking-[.22em] text-zinc-400">Sobre YOMI Studio</p>
          <h2 className="mt-3 font-sans text-5xl uppercase leading-[.8] tracking-[-.06em] sm:text-7xl">¿Qué es YOMI Studio?</h2>
          <p className="mt-7 max-w-xl text-lg leading-relaxed text-zinc-200">Estudio multimedia con la misión de crear experiencias inmersivas que resalten por su narrativa, interactividad y creatividad.</p>
          <p className="mt-6 text-xs font-bold uppercase tracking-[.16em] text-zinc-400">Animación · Diseño · Narrativa · Interactivo</p>
          <p className="mt-6 max-w-xl leading-relaxed text-zinc-300">Nuestra visión es convertirnos en un referente en cuanto a la creación de experiencias por medio de productos multimedia.</p></div></div></section>
          <section id="cacciatori" className="border-b-2 border-black px-5 py-16 sm:px-8 sm:py-24"><div className="mx-auto max-w-6xl"><div className="mb-10 max-w-2xl"><p className="text-xs font-bold uppercase tracking-[.22em]">Universo</p>
          <h2 className="mt-3 font-sans text-5xl uppercase leading-[.8] tracking-[-.06em] sm:text-7xl">Cacciatori</h2>
          <p className="mt-5 text-sm leading-relaxed">Un universo narrativo independiente que puedes explorar a través del videojuego, el juego de mesa, la ficción interactiva y el cómic.</p></div><CacciatoriTV /></div></section>
          <section id="catalogo" className="border-b-2 border-black bg-zinc-200 px-5 py-16 sm:px-8 sm:py-24">
            <div className="mx-auto max-w-6xl"><div className="mb-9 flex flex-wrap items-end justify-between gap-5"><div>
              <p className="text-xs font-bold uppercase tracking-[.22em]">Tienda</p>
              <h2 className="mt-3 font-sans text-5xl uppercase leading-[.8] tracking-[-.06em] sm:text-7xl">Catálogo de productos</h2>
              <p className="mt-5 max-w-xl text-sm leading-relaxed">Objetos y piezas inspiradas en nuestros mundos, personajes y procesos creativos.</p>
              </div><Link href="/catalogo" className="border-b-2 border-black text-sm font-bold uppercase">Ver catálogo completo →</Link></div><ProductCarousel /></div></section>
              <section id="equipo" className="border-b-2 border-black px-5 py-16 sm:px-8 sm:py-24"><div className="mx-auto max-w-6xl">
                <p className="text-xs font-bold uppercase tracking-[.22em]">Quiénes somos</p>
                <h2 className="mt-3 font-sans text-5xl uppercase leading-[.8] tracking-[-.06em] sm:text-7xl">El equipo</h2>
                <div className="mt-10 grid gap-5 md:grid-cols-2">{team.map((person) => <a key={person.name} href={person.behance} target="_blank" rel="noreferrer" className="grid min-h-72 grid-cols-[.8fr_1.2fr] border-2 border-black bg-white text-black transition-transform hover:-translate-y-1">
                  <div className="relative overflow-hidden border-r-2 border-black bg-zinc-300">
                    <Image src={person.image} alt={`Foto de ${person.name}`} fill sizes="(max-width: 768px) 40vw, 25vw" className="object-cover" /></div>
                    <div className="flex flex-col p-5"><h3 className="font-sans text-3xl uppercase">{person.name}</h3> 
                    <p className="mt-4 text-xs font-bold uppercase tracking-[.14em] text-zinc-600">{person.role}</p>
                    <p className="mt-auto text-sm leading-relaxed">{person.description}</p></div></a>)}</div></div></section>
                    <section id="contacto" className="bg-black px-5 py-16 text-white sm:px-8 sm:py-24"><div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[.85fr_1.15fr]"><div>
                      <p className="text-xs font-bold uppercase tracking-[.22em] text-zinc-400">Trabaja con nosotros</p>
                      <h2 className="mt-3 font-sans text-5xl uppercase leading-[.8] tracking-[-.06em] sm:text-7xl">¿Quieres ser parte de Yomi Studio?</h2>
                      <p className="mt-6 max-w-lg leading-relaxed text-zinc-300">Buscamos talento emergente para expandir el universo Cacciatori. Si crees que tu arte encaja en nuestro mundo, queremos verlo.</p></div><ContactForm /></div></section></>;
}
