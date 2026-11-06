import clsx from "clsx";
import Image from "next/image";
import { Product } from "@/data/products";

export function ProductArtwork({ product, className }: { product: Pick<Product, "name" | "accent" | "image">; className?: string }) {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
  const tone = product.accent === "ink" ? "bg-black" : product.accent === "fog" ? "bg-zinc-300" : product.accent === "bone" ? "bg-zinc-100" : "bg-zinc-400";
  return <div className={clsx("relative isolate overflow-hidden border border-black bg-white", className)} aria-label={`Imagen de ${product.name}`}><Image src={`${basePath}${product.image}`} alt={product.name} fill sizes="(max-width: 768px) 100vw, 50vw" className="object-contain" /><div className={clsx("absolute inset-[12%] -z-10 border-2 border-black", tone)} /><p className={clsx("absolute bottom-3 left-3 max-w-[72%] text-left font-sans text-2xl uppercase leading-[.82] tracking-tight", product.accent === "ink" && "text-white mix-blend-difference")}>{product.name}</p><span className="absolute right-2 top-2 text-[10px] font-bold uppercase tracking-[.2em]">YOMI STUDIO</span></div>;
}
