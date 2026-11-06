import { ProductCard } from "@/components/store/ProductCard";
import { products } from "@/data/products";
export const metadata = { title: "Catálogo | Yomi Estudios" };
export default function CatalogPage() { return <section className="mx-auto max-w-6xl px-5 py-12 sm:px-8 sm:py-16">
    <p className="text-xs font-bold uppercase tracking-[.22em]">Catálogo</p>
    <h1 className="mt-3 max-w-3xl font-sans text-5xl uppercase leading-[.82] tracking-[-.06em] sm:text-7xl">Objetos para leer, jugar y entretenerse.</h1>
    <p className="mt-6 max-w-2xl text-sm leading-relaxed">Descubre nuestra colección de productos diseñados para enriquecer tu experiencia con Yomi Studio.</p>
    <div className="mt-10 grid gap-5 sm:grid-cols-2 xl:grid-cols-3">{products.map((product) => <ProductCard key={product.id} product={product} />)}</div></section>; }
