import Image from "next/image";
import { CacciatoriAction } from "@/components/cacciatori/CacciatoriAction";
import { publicAsset } from "@/components/cacciatori/assets";

const characters = [
  {
    image: "Natalia.png",
    name: "Natalia",
    role: "PERSONAJE_01 / LA OBSERVADORA",
    copy: "Una joven bogotana de veinticuatro años, nacida en una familia adinerada y acostumbrada a una vida de privilegios, viajes y experiencias. Su curiosidad por los rumores del restaurante la lleva a acercarse a Cacciatori y a mirar de frente aquello que los demás prefieren ignorar.",
  },
  {
    image: "Cacciatori.png",
    name: "Cacciatori",
    role: "PERSONAJE_02 / EL CHEF",
    copy: "Un chef veneciano que construyó en Bogotá una imagen respetable alrededor de su restaurante. Tras esa fachada existe una relación inquietante con el control, el silencio y los secretos que guarda el sótano.",
  },
];

const scenarios = [
  { image: "Apartamento1.png", name: "Apartamento de Natalia" },
  { image: "Apartamento2.png", name: "Apartamento de Natalia" },
  { image: "Sotano1.png", name: "Sótano del restaurante" },
  { image: "Sotano2.png", name: "Sótano del restaurante" },
  { image: "RestauranteExterior.png", name: "Exterior del restaurante Cacciatori" },
  { image: "RestauranteInterior.png", name: "Interior del restaurante Cacciatori" },
];

export default function ComicPage() {
  return (
    <>
      <section className="cac-comic-hero">
        <Image className="cac-comic-hero__image" src={publicAsset("CapComic.png")} alt="Portada del cómic Ossessione" fill priority sizes="100vw" />
        <div className="cac-comic-hero__veil" />
        <div className="cac-container cac-comic-hero__content">
          <p className="cac-eyebrow">01 / PRODUCTO DEL UNIVERSO CACCIATORI</p>
          <h1 className="cac-h1">Ossessione</h1>
          <p className="cac-game-hero__claim">Una historia de terror psicológico sobre deseo, violencia y secretos que nunca permanecen enterrados.</p>
          <div className="cac-game-hero__actions">
            <CacciatoriAction label="LEER HISTORIA" variant="light" title="Lectura de Ossessione" image="comic-detail-cover.webp" description="El enlace de lectura se incorporará cuando esté disponible." />
            <a className="cac-button" href="#ficha-ossessione">CONOCER LA OBRA ↓</a>
          </div>
        </div>
      </section>

      <section className="cac-section" id="ficha-ossessione">
        <div className="cac-container cac-game-intro">
          <div>
            <p className="cac-eyebrow">02 / FICHA DEL PRODUCTO</p>
            <h2 className="cac-h2">Una obsesión<br />a puerta cerrada</h2>
          </div>
          <div>
            <p className="cac-intro">Ossessione es un cómic de terror psicológico y horror criminal que explora la fascinación por la violencia y los límites de una relación construida sobre secretos.</p>
            <p className="cac-body-copy">Natalia, una joven adinerada y emocionalmente aislada, llega al restaurante Cacciatori atraída por sus rumores. Allí conoce al chef y descubre que detrás de su imagen pública existe una verdad mucho más oscura. En lugar de huir, se acerca cada vez más a él, hasta quedar atrapada en una relación donde el amor, la admiración y el peligro se confunden.</p>
            <dl className="cac-game-facts">
              <div><dt>Nombre</dt><dd>Ossessione</dd></div>
              <div><dt>Género</dt><dd>Terror psicológico · horror criminal</dd></div>
              <div><dt>Protagonista</dt><dd>Natalia</dd></div>
              <div><dt>Escenario</dt><dd>Bogotá · restaurante Cacciatori</dd></div>
            </dl>
          </div>
        </div>
      </section>

      <section className="cac-section cac-section--dark">
        <div className="cac-container">
          <div className="cac-section-head"><div><p className="cac-eyebrow">03 / SINOPSIS</p><h2 className="cac-h2">El secreto detrás<br />de la fachada</h2><p className="cac-intro">Una historia sobre la atracción por lo prohibido y el precio de creer que se puede comprender a un monstruo.</p></div><p className="cac-section-note">Sin revelar el desenlace</p></div>
          <div className="cac-synopsis">
            <p>Natalia visita el restaurante CACCIATORI, fascinada por los rumores de desapariciones y asesinatos relacionados con su chef. Cuando descubre una parte de la verdad, su reacción no es escapar: decide acercarse, observar y aceptar aquello que los demás no se atreven a nombrar.</p>
            <p>La relación entre ambos crece bajo la mirada admirada del público, mientras Natalia empieza a preguntarse cuánto conoce realmente al hombre que ha elegido. Cuando una nueva revelación rompe el equilibrio, la pareja deberá enfrentarse a las consecuencias de una obsesión que ya no puede mantenerse bajo control.</p>
          </div>
        </div>
      </section>

      <section className="cac-section" id="personajes-ossessione">
        <div className="cac-container">
          <div className="cac-section-head"><div><p className="cac-eyebrow">04 / PERSONAJES</p><h2 className="cac-h2">Los rostros de la obsesión</h2><p className="cac-intro">Conoce a los personajes centrales sin descubrir todavía todo lo que esconden.</p></div><p className="cac-section-note">Bocetos · identidad · conflicto</p></div>
          <div className="cac-character-grid cac-comic-character-grid">
            {characters.map((character) => <article className="cac-character" key={character.name}>
              <div className="cac-comic-sketch"><Image src={publicAsset(character.image)} alt={`Bocetos de ${character.name}`} width={1000} height={900} /></div>
              <div className="cac-character__body"><p>{character.role}</p><h3>{character.name}</h3><p className="cac-character__description">{character.copy}</p></div>
            </article>)}
          </div>
        </div>
      </section>

      <section className="cac-section cac-section--dark">
        <div className="cac-container">
          <div className="cac-section-head"><div><p className="cac-eyebrow">05 / ESCENARIOS</p><h2 className="cac-h2">Los espacios del secreto</h2><p className="cac-intro">Los lugares donde la imagen pública y la verdad oculta se encuentran.</p></div><p className="cac-section-note">Bocetos de ambientación</p></div>
          <div className="cac-comic-scenarios">
            {scenarios.map((scenario) => <figure className="cac-comic-scenario" key={scenario.image}><div className="cac-comic-sketch"><Image src={publicAsset(scenario.image)} alt={`Boceto del ${scenario.name}`} width={1000} height={800} /></div><figcaption>{scenario.name}</figcaption></figure>)}
          </div>
        </div>
      </section>

      <section className="cac-section">
        <div className="cac-container">
          <div className="cac-section-head"><div><p className="cac-eyebrow">06 / LECTURA</p><h2 className="cac-h2">Entra al expediente</h2><p className="cac-intro">La historia completa de Ossessione estará disponible para lectura cuando se incorpore el enlace definitivo.</p></div></div>
          <div className="cac-comic-read-panel"><p>Descubre la relación entre Natalia y Cacciatori, sus secretos y la conexión que este relato establece con el resto del universo.</p><CacciatoriAction label="LEER HISTORIA" variant="red" title="Lectura próximamente" description="El botón está preparado para enlazar el cómic completo cuando se publique el lector o el archivo definitivo." /></div>
        </div>
      </section>

      <section className="cac-section">
        <div className="cac-container">
          <div className="cac-section-head"><div><p className="cac-eyebrow">07 / AUTORÍA</p><h2 className="cac-h2">Los culpables</h2><p className="cac-intro">Ossessione es una obra creada dentro del universo Cacciatori.</p></div><p className="cac-section-note">Créditos del producto</p></div>
          <div className="cac-credit-people"><article className="cac-credit-person"><h3>Arte e ilustración</h3><p>Personajes · escenarios · bocetos</p></article><article className="cac-credit-person"><h3>Guion y narrativa</h3><p>Relato · personajes · edición</p></article><article className="cac-credit-person"><h3>Edición y publicación</h3><p>Formato · colección</p></article></div>
        </div>
      </section>
    </>
  );
}
