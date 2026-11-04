"use client";

import Image from "next/image";
import { useState } from "react";
import { cacciatoriAsset } from "./assets";

const stages = [
  {
    image: "prede-pizza.webp",
    index: "02 / 04",
    title: "La primera mordida",
    label: "PREDE",
    description: "El expediente se abre con una caja marcada. La mesa está puesta; todavía no sabemos quién será el plato principal.",
  },
  {
    image: "comic-detail-cover.webp",
    index: "03 / 04",
    title: "La obsesión",
    label: "OSSESSIONE",
    description: "Las pistas cambian de formato, pero algo persiste: cada relato deja rastros que otro medio recoge.",
  },
  {
    image: "game-symbol.webp",
    index: "04 / 04",
    title: "El símbolo",
    label: "CACCIATORI",
    description: "Videojuego, tablero, narrativa hipertextual y cómic comparten una misma mesa. Cada acceso descubre otra capa.",
  },
];

export function CacciatoriEvolution() {
  const [index, setIndex] = useState(0);
  const stage = stages[index];
  const step = (direction: number) => setIndex((current) => (current + direction + stages.length) % stages.length);

  return (
    <div className="cac-evolution">
      <div className="cac-evolution__art">
        <Image key={stage.image} src={cacciatoriAsset(stage.image)} alt={`Arte visual: ${stage.label}`} width={1140} height={830} sizes="(max-width: 760px) 100vw, 55vw" />
      </div>
      <div className="cac-evolution__copy">
        <p className="cac-eyebrow">03 / EVOLUCIÓN DEL UNIVERSO</p>
        <h3>{stage.title}<br /><span style={{ color: "var(--cac-red)" }}>{stage.label}</span></h3>
        <p>{stage.description}</p>
        <div className="cac-evolution__controls">
          <button type="button" className="cac-icon-button" aria-label="Etapa anterior" onClick={() => step(-1)}>←</button>
          <button type="button" className="cac-icon-button" aria-label="Etapa siguiente" onClick={() => step(1)}>→</button>
          <span className="cac-evolution__index">{stage.index} / 04</span>
        </div>
      </div>
    </div>
  );
}
