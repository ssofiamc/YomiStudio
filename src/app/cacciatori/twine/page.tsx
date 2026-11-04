import Link from "next/link";
import { TwineStory } from "@/components/cacciatori/TwineStory";

export default function TwinePage() {
  return (
    <>
      <section className="cac-twine-hero">
        <div className="cac-container">
          <div className="cac-twine-hero__head">
            <div><p className="cac-eyebrow">01 / ARCHIVO_NARRATIVO</p><h1 className="cac-glitch">Red de pecado_<br />narrativa</h1></div>
            <p className="cac-eyebrow" style={{ color: "var(--cac-red)", marginTop: 6 }}>● SYSTEM_STATE: CRITICAL_OVERFLOW</p>
          </div>
          <TwineStory />
          <p className="cac-twine-note" style={{ marginTop: 25 }}>EXPERIENCIA INTERACTIVA DE MUESTRA · LAS DECISIONES SE REINICIAN AL SALIR DE ESTA PÁGINA.</p>
        </div>
      </section>
      <section className="cac-section">
        <div className="cac-container">
          <div className="cac-section-head"><div><p className="cac-eyebrow">02 / CRÉDITOS DEL ARCHIVO</p><h2 className="cac-h2">Los culpables</h2></div><p className="cac-section-note">Narrativa · interfaz · desarrollo</p></div>
          <div className="cac-credit-people"><article className="cac-credit-person"><div className="cac-credit-person__portrait">N</div><h3>Diseño narrativo</h3><p>Ramas · elecciones</p></article><article className="cac-credit-person"><div className="cac-credit-person__portrait">I</div><h3>Diseño de interfaz</h3><p>Archivo · navegación</p></article><article className="cac-credit-person"><div className="cac-credit-person__portrait">D</div><h3>Desarrollo interactivo</h3><p>Twine · experiencia</p></article></div>
        </div>
      </section>
      <section className="cac-section">
        <div className="cac-container" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 25, flexWrap: "wrap" }}>
          <div><p className="cac-eyebrow">OTRAS ENTRADAS</p><h2 className="cac-h3" style={{ marginTop: 10 }}>El expediente no termina aquí.</h2></div>
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}><Link className="cac-button" href="/cacciatori/comic">ABRIR CÓMIC ↗</Link><Link className="cac-button" href="/cacciatori">VOLVER AL INICIO</Link></div>
        </div>
      </section>
    </>
  );
}
