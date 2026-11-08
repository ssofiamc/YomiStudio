import Image from "next/image";
import type { CSSProperties } from "react";
import { CacciatoriAction } from "@/components/cacciatori/CacciatoriAction";
import { cacciatoriAsset } from "@/components/cacciatori/assets";

const mechanics = [
  { number: "01 / DIAGRAMA", title: "Mecánicas", copy: "Explora el espacio, lee las señales y reúne pistas sin perder de vista lo que se mueve alrededor.", hue: "0deg" },
  { number: "02 / DIAGRAMA", title: "Experiencia", copy: "La tensión surge del recorrido: el silencio, los encuadres y las decisiones construyen la inquietud.", hue: "-8deg" },
  { number: "03 / DIAGRAMA", title: "Características", copy: "Una experiencia narrativa en un escenario cotidiano que revela progresivamente su lado más extraño.", hue: "8deg" },
  { number: "04 / DIAGRAMA", title: "Señales", copy: "Observa detalles del entorno. Cada elemento visual puede funcionar como una pista para leer el lugar.", hue: "-15deg" },
];
const characters = [
  { image: "character-captain.webp", name: "Il Capitano", number: "ID_01 / CAPITANO", copy: "El chef. Las manos conocen la textura de la piedra y la sangre." },
  { image: "character-countess.webp", name: "La Contessa", number: "ID_02 / CONTESSA", copy: "Una presencia enigmática cuya historia todavía guarda zonas sin revelar." },
  { image: "character-waiter.webp", name: "Il Cameriere", number: "ID_03 / CAMERIERE", copy: "El silencio también trabaja en la sala. A veces, es quien más observa." },
];

export default function VideojuegoPage() {
  return (
    <>
      <section className="cac-product-hero">
        <div className="cac-container">
          <div className="cac-product-hero__top"><div><p className="cac-eyebrow">02 / TRÁILER</p><h1 className="cac-h2">Vista previa del videojuego</h1></div><a className="cac-button" href="#mecanicas">EXPLORAR ↓</a></div>
          <div className="cac-media-layout">
            <div className="cac-media-frame">
              <Image src={cacciatoriAsset("game-trailer.webp")} alt="Captura de referencia del escenario del videojuego Cacciatori" width={1055} height={592} priority sizes="(max-width:760px) 100vw, 68vw" />
              <span className="cac-media-frame__rec">REC · MATERIAL VISUAL</span>
              <div className="cac-media-frame__play"><CacciatoriAction label="Reproducir tráiler" variant="play" title="Tráiler del videojuego" image="game-trailer.webp" description="La vista previa representa el tráiler; el vídeo original aún no está conectado. Este botón queda preparado para enlazar el vídeo oficial cuando esté disponible." /></div>
            </div>
            <aside className="cac-advance">
              <p className="cac-eyebrow">TRÁILER PRINCIPAL</p><h2>Avance editorial</h2>
              <dl>
                <div className="cac-spec"><dt>Formato</dt><dd>Vídeo / 16:9</dd></div>
                <div className="cac-spec"><dt>Duración</dt><dd>Por confirmar</dd></div>
                <div className="cac-spec"><dt>Estado</dt><dd>Recurso pendiente</dd></div>
                <div className="cac-spec"><dt>Canal</dt><dd>Enlace por configurar</dd></div>
              </dl>
              <p className="cac-advance__summary">Vista previa del tráiler principal, concebida para abrir la narrativa del juego y presentar el tono visual del proyecto.</p>
              <CacciatoriAction label="VER TRÁILER" title="Tráiler pendiente" image="game-trailer.webp" description="Agrega el archivo MP4/WebM o el enlace oficial del vídeo para activar la reproducción real. No se ha inventado una URL externa." />
            </aside>
          </div>
        </div>
      </section>

      <section className="cac-section" id="mecanicas">
        <div className="cac-container">
          <div className="cac-section-head"><div><p className="cac-eyebrow">03 / EXPERIENCIA</p><h2 className="cac-h2">Mecánicas y flujo</h2></div><p className="cac-section-note">Señales · recorrido · observación</p></div>
          <div className="cac-four-grid">
            {mechanics.map((item) => <article className="cac-mechanic-card" key={item.title}>
              <div className="cac-mechanic-card__art" style={{ "--skull-hue": item.hue } as CSSProperties}><Image src={cacciatoriAsset("game-skull.webp")} alt="Diagrama visual del videojuego" width={334} height={442} /><span>{item.number}</span></div>
              <div className="cac-mechanic-card__body"><h3>{item.title}</h3><p>{item.copy}</p></div>
            </article>)}
          </div>
        </div>
      </section>

      <section className="cac-section">
        <div className="cac-container">
          <div className="cac-section-head"><div><p className="cac-eyebrow">PERSONAJES</p><h2 className="cac-h2">Perfil de personaje</h2></div><p className="cac-section-note">Figuras del universo</p></div>
          <div className="cac-character-grid">
            {characters.map((character) => <article className="cac-character" key={character.name}>
              <div className="cac-character__portrait"><Image src={cacciatoriAsset(character.image)} alt={`Concepto visual de ${character.name}`} width={455} height={565} /></div>
              <div className="cac-character__body"><p>{character.number}</p><h3>{character.name}</h3><p>{character.copy}</p></div>
            </article>)}
          </div>
        </div>
      </section>

      <section className="cac-section">
        <div className="cac-container cac-process">
          <div className="cac-process__image"><Image src={cacciatoriAsset("game-symbol.webp")} alt="Símbolo gráfico del universo Cacciatori" width={470} height={580} /></div>
          <div className="cac-process__copy"><p className="cac-eyebrow">DESARROLLO</p><h3>Proceso creativo</h3><p>La documentación del desarrollo reúne decisiones de arte conceptual, diseño de escenarios, sistemas de juego y construcción narrativa.</p><ul><li>Arte conceptual / assets</li><li>Prototipado y pruebas de experiencia</li><li>Diseño narrativo y ambientación</li></ul><CacciatoriAction label="CONSULTAR MATERIAL" title="Material de desarrollo" description="Esta sección está lista para conectar una carpeta, PDF o repositorio de materiales." /></div>
        </div>
      </section>

      <section className="cac-section">
        <div className="cac-container cac-access">
          <div className="cac-access__screen"><div className="cac-access__overlay"><p className="cac-eyebrow">06 / ACCESO</p><h3>Acceso al videojuego</h3><p>Consulta los datos técnicos y la información de acceso cuando esté publicado el ejecutable o la demo oficial.</p><CacciatoriAction label="DESCARGAR / ACCEDER" variant="red" title="Acceso aún no configurado" description="El material compartido contiene capturas del prototipo, pero no incluye un instalador, demo descargable ni URL oficial del videojuego. Añade el enlace cuando esté listo." /></div></div>
          <aside className="cac-access__specs"><h3>Datos técnicos</h3><dl>
            <div className="cac-spec"><dt>Plataforma</dt><dd>Por confirmar</dd></div>
            <div className="cac-spec"><dt>Formato</dt><dd>Demo / ejecutable</dd></div>
            <div className="cac-spec"><dt>Estado</dt><dd>En actualización</dd></div>
            <div className="cac-spec"><dt>Distribución</dt><dd>Enlace oficial</dd></div>
          </dl></aside>
        </div>
      </section>

      <section className="cac-section">
        <div className="cac-container">
          <div className="cac-section-head"><div><p className="cac-eyebrow">07 / CRÉDITOS</p><h2 className="cac-h2">Los culpables</h2></div><p className="cac-section-note">Personas que participaron</p></div>
          <div className="cac-credit-people">
            <article className="cac-credit-person"><div className="cac-credit-person__portrait">A</div><h3>Dirección creativa</h3><p>Identidad visual · universo</p></article>
            <article className="cac-credit-person"><div className="cac-credit-person__portrait">N</div><h3>Narrativa y diseño</h3><p>Historia · personajes · flujo</p></article>
            <article className="cac-credit-person"><div className="cac-credit-person__portrait">D</div><h3>Desarrollo interactivo</h3><p>Prototipo · experiencia</p></article>
          </div>
        </div>
      </section>
    </>
  );
}
