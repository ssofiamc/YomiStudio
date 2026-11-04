"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { cacciatoriAsset } from "./assets";

type Props = {
  label: string;
  title: string;
  description: string;
  image?: string;
  variant?: "default" | "red" | "light" | "play";
};

export function CacciatoriAction({ label, title, description, image, variant = "default" }: Props) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", handleKeyDown);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [open]);

  return (
    <>
      <button type="button" className={`cac-button cac-button--${variant}`} onClick={() => setOpen(true)}>
        {variant === "play" && <span className="cac-button__play" aria-hidden="true">▶</span>}
        {label}
      </button>
      {open && (
        <div className="cac-modal-backdrop" role="presentation" onMouseDown={() => setOpen(false)}>
          <section
            aria-modal="true"
            aria-labelledby="cac-modal-title"
            className="cac-modal"
            role="dialog"
            onMouseDown={(event) => event.stopPropagation()}
          >
            <button type="button" className="cac-modal__close" onClick={() => setOpen(false)} aria-label="Cerrar ventana">×</button>
            <p className="cac-eyebrow">ARCHIVO CACCIATORI / ESTADO DEL RECURSO</p>
            <h2 id="cac-modal-title">{title}</h2>
            {image && <Image className="cac-modal__image" src={cacciatoriAsset(image)} alt="Previsualización visual del archivo" width={1200} height={700} />}
            <p>{description}</p>
            <div className="cac-modal__status"><span className="cac-status-dot" /> RECURSO EXTERNO NO CONFIGURADO</div>
            <button type="button" className="cac-button cac-button--light" onClick={() => setOpen(false)}>VOLVER AL ARCHIVO</button>
          </section>
        </div>
      )}
    </>
  );
}
