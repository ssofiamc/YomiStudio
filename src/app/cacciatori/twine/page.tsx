import Link from "next/link";

export default function TwinePage() {
  return (
    <>
      <section className="cac-twine-hero">
        <div className="cac-container">
          <div className="cac-twine-hero__head">
            <div><p className="cac-eyebrow">NARRATIVA INTERACTIVA</p><h1 className="cac-glitch">Historia<br />interactiva</h1></div>
            <p className="cac-eyebrow" style={{ color: "var(--cac-red)", marginTop: 6 }}>● TWINE_STORY: ONLINE</p>
          </div>
          <div className="cac-twine-embed">
            <iframe
              src="https://twinery.org/2/#/stories/275c45a3-1b5f-4469-ab70-86fd6a405fc8/play"
              title="Historia interactiva de Twine del universo Cacciatori"
              allow="fullscreen"
            />
          </div>
          <div className="cac-twine-embed__fallback">
            <p>Si la historia no se carga dentro de la página, puedes abrirla directamente en una nueva pestaña.</p>
            <a className="cac-button" href="https://twinery.org/2/#/stories/275c45a3-1b5f-4469-ab70-86fd6a405fc8/play" target="_blank" rel="noreferrer">ABRIR HISTORIA ↗</a>
          </div>
        </div>
      </section>
      <section className="cac-section">
        <div className="cac-container">
          <div className="cac-section-head"><div><p className="cac-eyebrow">CRÉDITOS</p><h2 className="cac-h2">Creadores de la historia</h2><p className="cac-intro">Historia interactiva creada por estudiantes de Ingeniería en Multimedia.</p></div><p className="cac-section-note">Autoría narrativa</p></div>
          <div className="cac-credit-people cac-game-authors"><article className="cac-credit-person"><h3>Santiago</h3><p>Estudiante de Ingeniería en Multimedia · Creador</p></article><article className="cac-credit-person"><h3>Sara</h3><p>Estudiante de Ingeniería en Multimedia · Creadora</p></article></div>
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
