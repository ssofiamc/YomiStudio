import { publicAsset } from "@/components/cacciatori/assets";

export default function TwinePage() {
  return (
    <>
      <section className="cac-twine-hero">
        <div className="cac-container">
          <div className="cac-twine-hero__head">
            <div><p className="cac-eyebrow">03 / PRODUCTO DEL UNIVERSO</p><h1 className="cac-h2">Twine</h1></div>
          </div>
          <div className="cac-twine-embed">
            <iframe
              src={publicAsset("Clase Twine Multimedia.html")}
              title="Historia interactiva de Twine del universo Cacciatori"
              allow="fullscreen"
            />
          </div>
          <div className="cac-twine-embed__fallback">
            <p>Explora la historia directamente dentro del universo Cacciatori.</p>
            <a className="cac-button" href={publicAsset("Clase Twine Multimedia.html")} target="_blank" rel="noreferrer">ABRIR HISTORIA ↗</a>
          </div>
        </div>
      </section>
      <section className="cac-section">
        <div className="cac-container">
          <div className="cac-section-head"><div><p className="cac-eyebrow">04 / AUTORÍA</p><h2 className="cac-h2">Los culpables</h2><p className="cac-intro">Historia interactiva creada por estudiantes de Ingeniería en Multimedia.</p></div><p className="cac-section-note">Autoría narrativa</p></div>
          <div className="cac-credit-people cac-game-authors"><article className="cac-credit-person"><h3>Santiago</h3><p>Estudiante de Ingeniería en Multimedia · Creador</p></article><article className="cac-credit-person"><h3>Sara</h3><p>Estudiante de Ingeniería en Multimedia · Creadora</p></article></div>
        </div>
      </section>
    </>
  );
}
