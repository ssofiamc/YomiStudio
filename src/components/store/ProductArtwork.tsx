import clsx from "clsx";
import Image from "next/image";
import { Product } from "@/data/products";

export function ProductArtwork({ product, className }: { product: Pick<Product, "name" | "accent" | "image">; className?: string }) {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
  return <div className={clsx("relative isolate overflow-hidden border border-black bg-white", className)} aria-label={`Imagen de ${product.name}`}><Image src={`${basePath}${product.image}`} alt={product.name} fill sizes="(max-width: 768px) 100vw, 50vw" className="object-contain p-6 sm:p-10" /><p className="absolute bottom-3 left-3 max-w-[72%] bg-white/95 px-2 py-1 text-left font-sans text-2xl uppercase leading-[.82] tracking-tight">{product.name}</p><span className="absolute right-2 top-2 bg-white/95 px-1 text-[10px] font-bold uppercase tracking-[.2em]">YOMI STUDIO</span></div>;
}
