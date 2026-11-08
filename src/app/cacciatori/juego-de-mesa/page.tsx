import Image from "next/image";
import { publicAsset } from "@/components/cacciatori/assets";

const experience = ["Competitividad", "Ansiedad", "Presión", "Tensión", "Estrés", "Expectativa", "Inquietud", "Incertidumbre", "Desconcierto"];

const rules = [
  { number: "01", title: "Todos son presas", text: "Cada jugador interpreta a una víctima atrapada en el restaurante y compite por ser quien consiga escapar." },
  { number: "02", title: "Solo uno sobrevive", text: "La salvación es individual: avanzar implica tomar decisiones, asumir riesgos y dejar atrás a los demás." },
  { number: "03", title: "El tiempo aprieta", text: "El reloj de arena de treinta segundos introduce urgencia y obliga a decidir bajo presión." },
  { number: "04", title: "Las cartas se acumulan", text: "Las cartas y sus efectos aumentan la tensión, modifican la partida y mantienen la amenaza activa." },
];

export default function BoardGamePage() {
  return (
    <>
      <section className="cac-game-board-hero">
        <Image className="cac-game-board-hero__image" src={publicAsset("PredeJuego.png")} alt="Juego de mesa Prede del universo Cacciatori" fill priority sizes="100vw" />
        <div className="cac-game-board-hero__veil" />
        <div className="cac-container cac-game-board-hero__content">
          <p className="cac-eyebrow">01 / PRODUCTO DEL UNIVERSO CACCIATORI</p>
          <h1 className="cac-h1">Prede</h1>
          <p className="cac-game-hero__claim">Una carrera por sobrevivir en el restaurante donde las sospechas se hicieron realidad.</p>
          <a className="cac-button" href="#ficha-prede">CONOCER EL JUEGO ↓</a>
        </div>
      </section>

      <section className="cac-section" id="ficha-prede">
        <div className="cac-container cac-game-intro">
          <div>
            <p className="cac-eyebrow">02 / FICHA DEL PRODUCTO</p>
            <h2 className="cac-h2">La mesa<br />está servida</h2>
          </div>
          <div>
            <p className="cac-intro">Prede es un juego de mesa competitivo ambientado en el mismo restaurante del videojuego Cacciatori, pero situado en los hechos del pasado.</p>
            <p className="cac-body-copy">Las sospechas de secuestro y las prácticas caníbales eran ciertas. Los jugadores encarnan a las presas del chef y deben escapar antes que los demás, porque solo uno puede salvarse.</p>
            <dl className="cac-game-facts">
              <div><dt>Tipo</dt><dd>Juego de mesa competitivo</dd></div>
              <div><dt>Ambientación</dt><dd>Pasado del restaurante</dd></div>
              <div><dt>Objetivo</dt><dd>Ser la única presa que escape</dd></div>
              <div><dt>Formato</dt><dd>Imprimible y analógico</dd></div>
            </dl>
          </div>
        </div>
      </section>

      <section className="cac-section cac-section--dark cac-game-data-section">
        <div className="cac-container cac-game-intro">
          <div>
            <p className="cac-eyebrow">03 / PROPÓSITO DEL DISEÑO</p>
            <h2 className="cac-h2">Probar la tensión<br />sin tecnología</h2>
          </div>
          <div>
            <p className="cac-intro">Prede nace como una herramienta para explorar cómo funcionan la presión, la urgencia y la vulnerabilidad dentro del universo Cacciatori.</p>
            <p className="cac-body-copy">El formato analógico permite probar y ajustar las reglas con facilidad antes de llevar estas sensaciones al videojuego. El tiempo limitado, la competencia directa, la acumulación de cartas y la interacción entre jugadores hacen visible cómo reaccionan ante el riesgo y la amenaza.</p>
          </div>
        </div>
      </section>

      <section className="cac-section">
        <div className="cac-container">
          <div className="cac-section-head"><div><p className="cac-eyebrow">04 / EXPERIENCIA OBJETIVO</p><h2 className="cac-h2">Jugar bajo presión</h2><p className="cac-intro">La experiencia busca que cada decisión se sienta urgente, incierta y potencialmente definitiva.</p></div><p className="cac-section-note">Fantasía · riesgo · supervivencia</p></div>
          <div className="cac-experience-grid">
            {experience.map((item, index) => <div className="cac-experience-item" key={item}><span>{String(index + 1).padStart(2, "0")}</span><strong>{item}</strong></div>)}
          </div>
        </div>
      </section>

      <section className="cac-section cac-section--dark" id="reglas">
        <div className="cac-container">
          <div className="cac-section-head"><div><p className="cac-eyebrow">05 / DINÁMICA DE JUEGO</p><h2 className="cac-h2">La huida comienza</h2><p className="cac-intro">Una partida convierte a los jugadores en presas que compiten por abandonar el restaurante con vida.</p></div><p className="cac-section-note">Reglas esenciales</p></div>
          <div className="cac-rules-grid cac-prede-rules">
            {rules.map((rule) => <article className="cac-rule-card" key={rule.number}><span className="cac-rule-card__index">{rule.number} / PREDE</span><h3>{rule.title}</h3><p>{rule.text}</p></article>)}
          </div>
        </div>
      </section>

      <section className="cac-section">
        <div className="cac-container">
          <div className="cac-section-head"><div><p className="cac-eyebrow">06 / MATERIALES</p><h2 className="cac-h2">Prepara la partida</h2><p className="cac-intro">Los archivos descargables contienen los materiales imprimibles para construir el juego en casa.</p></div><p className="cac-section-note">Lo que necesitas</p></div>
          <div className="cac-materials-grid">
            <article><span className="cac-eyebrow">INCLUIDO EN EL PIECEPACK</span><h3>Cartas y mapa</h3><p>Descarga e imprime el Piecepack para obtener las cartas y el mapa necesarios para jugar.</p></article>
            <article><span className="cac-eyebrow">NO INCLUIDO</span><h3>Elementos adicionales</h3><p>También necesitas 7 fichas: una para el chef y seis para los jugadores, un dado de seis caras y un reloj de arena de treinta segundos.</p></article>
          </div>
        </div>
      </section>

      <section className="cac-section cac-section--dark">
        <div className="cac-container">
          <div className="cac-section-head"><div><p className="cac-eyebrow">07 / DESCARGAS</p><h2 className="cac-h2">Juega Prede</h2><p className="cac-intro">Descarga los archivos, imprime los componentes y consulta las reglas antes de comenzar.</p></div><p className="cac-section-note">Archivos para imprimir</p></div>
          <div className="cac-download-grid">
            <a className="cac-download-card" href="https://drive.google.com/file/d/1FqIOCJ2uG2EHsvllxxbmIt7qtygkwQyS/view?usp=drive_link" target="_blank" rel="noreferrer"><span className="cac-eyebrow">PDF / PIECEPACK</span><h3>Piecepack de Prede</h3><p>Cartas y mapa imprimibles para preparar la partida.</p><strong>ABRIR PDF EN DRIVE ↗</strong></a>
            <a className="cac-download-card" href="https://drive.google.com/file/d/17UUW2ZgB8ANMtRkgzTjn-FwLNBF1G3O8/view?usp=drive_link" target="_blank" rel="noreferrer"><span className="cac-eyebrow">PDF / REGLAS</span><h3>Reglas de Prede</h3><p>Manual de instrucciones para entender el objetivo y el desarrollo del juego.</p><strong>ABRIR PDF EN DRIVE ↗</strong></a>
          </div>
        </div>
      </section>

      <section className="cac-section">
        <div className="cac-container">
          <div className="cac-section-head"><div><p className="cac-eyebrow">08 / AUTORÍA</p><h2 className="cac-h2">Creadores de Prede</h2><p className="cac-intro">Juego de mesa creado por estudiantes de Ingeniería en Multimedia.</p></div><p className="cac-section-note">Créditos del producto</p></div>
          <div className="cac-credit-people cac-game-authors">
            <article className="cac-credit-person"><h3>Santiago</h3><p>Estudiante de Ingeniería en Multimedia · Creador</p></article>
            <article className="cac-credit-person"><h3>Sara</h3><p>Estudiante de Ingeniería en Multimedia · Creadora</p></article>
          </div>
        </div>
      </section>
    </>
  );
}
