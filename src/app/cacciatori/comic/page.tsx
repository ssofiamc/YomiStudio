import Image from "next/image";
import Link from "next/link";
import { CacciatoriAction } from "@/components/cacciatori/CacciatoriAction";
import { cacciatoriAsset } from "@/components/cacciatori/assets";

export default function ComicPage() {
  return (
    <>
      <section className="cac-product-hero">
        <div className="cac-container cac-comic-details">
          <div>
            <p className="cac-eyebrow">01 / BIBLIOTECA PRINCIPAL</p>
            <h1 className="cac-h2" style={{ marginTop: 15 }}>Cacciatori</h1>
            <p className="cac-intro">Un expediente ilustrado sobre obsesión, hambre y secretos que no deberían llegar a la mesa.</p>
            <div className="cac-comic-details__data">
              <dt>Género</dt><dd>Terror · misterio</dd>
              <dt>Páginas</dt><dd>11 pp. / dato del prototipo</dd>
              <dt>Lectura</dt><dd>Vista editorial en preparación</dd>
            </div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 12, marginTop: 28 }}><CacciatoriAction label="LEER AHORA" variant="light" title="Lectura del cómic" image="comic-detail-cover.webp" description="Las capturas muestran el diseño editorial y las secciones del cómic, pero el ZIP no incluye las páginas completas en un PDF o lector. Este acceso queda preparado para conectar el material de lectura definitivo." /><a className="cac-button" href="#datos-obra">DATOS DE LA OBRA ↓</a></div>
          </div>
          <div><Image className="cac-comic-details__cover" src={cacciatoriAsset("comic-detail-cover.webp")} alt="Portada de referencia del expediente Ossessione" width={685} height={830} priority sizes="(max-width:760px) 100vw, 43vw" /></div>
        </div>
      </section>

      <section className="cac-section" id="datos-obra">
        <div className="cac-container cac-comic-details">
          <div>
            <p className="cac-eyebrow">02 / FICHA</p>
            <h2 className="cac-h2">Datos de la obra</h2>
            <p className="cac-intro">Una edición pensada como pieza de colección, con una identidad gráfica que mantiene la tensión entre negro, blanco y escarlata.</p>
            <dl className="cac-comic-details__data">
              <dt>Formato</dt><dd>Digital / edición física coleccionista</dd>
              <dt>Color</dt><dd>Blanco y negro + tintas escarlata</dd>
              <dt>Tamaño</dt><dd>A5 / 210 × 148 mm (referencia de prototipo)</dd>
              <dt>Páginas</dt><dd>11 pp. (referencia de prototipo)</dd>
              <dt>Edición</dt><dd>Material definitivo por confirmar</dd>
            </dl>
          </div>
          <div><Image className="cac-comic-details__cover" src={cacciatoriAsset("comic-detail-cover.webp")} alt="Arte de portada con cuchillo y cadena" width={685} height={830} sizes="(max-width:760px) 100vw, 43vw" /></div>
        </div>
      </section>

      <section className="cac-section">
        <div className="cac-container">
          <div className="cac-section-head"><div><p className="cac-eyebrow">PERSONAJES</p><h2 className="cac-h2">El reparto del silencio</h2></div><p className="cac-section-note">Personajes / ficción</p></div>
          <div className="cac-character-grid" style={{ gridTemplateColumns: "repeat(2,minmax(0,1fr))" }}>
            <article className="cac-character"><div className="cac-character__portrait"><Image src={cacciatoriAsset("comic-vincenzo.webp")} alt="Ilustración de Vincenzo" width={495} height={625} /></div><div className="cac-character__body"><p>PERSONAJE_01 / VINCENZO</p><h3>Vincenzo</h3><p>El restaurador. Sus manos conocen la textura de la piedra y la sangre.</p></div></article>
            <article className="cac-character"><div className="cac-character__portrait"><Image src={cacciatoriAsset("comic-carlo.webp")} alt="Ilustración de Carlo" width={455} height={625} /></div><div className="cac-character__body"><p>PERSONAJE_02 / CARLO</p><h3>Carlo</h3><p>El silencio. Un pasajero enterrado bajo los cimientos del restaurante.</p></div></article>
          </div>
        </div>
      </section>

      <section className="cac-section">
        <div className="cac-container">
          <div className="cac-section-head"><div><p className="cac-eyebrow">04 / ARTBOOK</p><h2 className="cac-h2">Gabinete de curiosidades</h2><p className="cac-intro">Explora el origen de la pesadilla, del primer trazo al color final.</p></div></div>
          <div className="cac-art-grid">
            <article className="cac-art-card"><Image src={cacciatoriAsset("comic-scenarios.webp")} alt="Referencias visuales de escenarios" width={745} height={685} /><div className="cac-art-card__body"><h3>Escenarios</h3><p>Restaurante, espacios interiores y lugares que convierten la rutina en una atmósfera inquietante.</p></div></article>
            <article className="cac-art-card"><Image src={cacciatoriAsset("comic-sketches.webp")} alt="Pruebas de arte y bocetos" width={440} height={685} /><div className="cac-art-card__body"><h3>Pruebas de arte</h3><p>Variaciones de personaje, siluetas y decisiones visuales de la obra.</p></div></article>
            <article className="cac-art-card"><div className="cac-art-card__body"><p className="cac-eyebrow">PROCESO CREATIVO</p><h3>La cocina detrás de la historia</h3><p>Cada panel es una decisión. Una combinación de encuadre, sombra y trazo que construye el tono del relato.</p><p style={{ marginTop: 22 }}>ARTE CONCEPTUAL</p></div></article>
          </div>
        </div>
      </section>

      <section className="cac-section">
        <div className="cac-container">
          <div className="cac-section-head"><div><p className="cac-eyebrow">05 / ADQUISICIÓN</p><h2 className="cac-h2">Hazte con la obra</h2></div><p className="cac-section-note">Edición integral / coleccionista</p></div>
          <div className="cac-buy-panel">
            <div className="cac-buy-panel__cover"><Image src={cacciatoriAsset("comic-detail-cover.webp")} alt="Portada Ossessione" width={685} height={830} /></div>
            <div className="cac-buy-panel__copy"><p className="cac-eyebrow">CACCIATORI / EDICIÓN INTEGRAL</p><h3>Una pieza para conservar el expediente.</h3><p>Incluye la obra completa, extras de arte y acceso a los materiales que acompañen la edición final. Los datos comerciales se incorporarán cuando estén confirmados.</p><div className="cac-buy-meta"><span>Formato por confirmar</span><span>Envío por definir</span><span>Contenido extra pendiente</span></div><div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}><CacciatoriAction label="CONSULTAR DISPONIBILIDAD" title="Edición en preparación" description="El prototipo presenta una compra de edición integral, pero no se proporcionaron precio, stock ni pasarela para tramitarla. Este botón evita simular una compra y queda listo para integrarse con el catálogo real." /><Link className="cac-button cac-button--light" href="/catalogo">CATÁLOGO YOMI ↗</Link></div></div>
          </div>
        </div>
      </section>

      <section className="cac-section">
        <div className="cac-container"><div className="cac-section-head"><div><p className="cac-eyebrow">06 / CRÉDITOS</p><h2 className="cac-h2">Los culpables</h2></div><p className="cac-section-note">Personas que participaron</p></div><div className="cac-credit-people"><article className="cac-credit-person"><div className="cac-credit-person__portrait">A</div><h3>Arte e ilustración</h3><p>Escenarios · personajes</p></article><article className="cac-credit-person"><div className="cac-credit-person__portrait">N</div><h3>Guion y narrativa</h3><p>Relato · edición</p></article><article className="cac-credit-person"><div className="cac-credit-person__portrait">E</div><h3>Edición y publicación</h3><p>Formato · colección</p></article></div></div>
      </section>
    </>
  );
}
