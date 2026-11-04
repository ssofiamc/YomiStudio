import Image from "next/image";
import Link from "next/link";
import { CacciatoriAction } from "@/components/cacciatori/CacciatoriAction";
import { CacciatoriEvolution } from "@/components/cacciatori/CacciatoriEvolution";
import { cacciatoriAsset } from "@/components/cacciatori/assets";

const products = [
  {
    number: "01 / EXPERIENCIA INTERACTIVA",
    title: "Videojuego",
    copy: "Recorre el restaurante, sus personajes y las señales que se esconden a plena vista.",
    image: "game-symbol.webp",
    href: "/cacciatori/videojuego",
    action: "Explorar videojuego",
  },
  {
    number: "02 / EXPERIENCIA FÍSICA",
    title: "Juego de mesa",
    copy: "Una mesa, varias sospechas y una salida que no siempre está donde debería.",
    image: "board-cover.webp",
    href: "/cacciatori/juego-de-mesa",
    action: "Explorar juego de mesa",
  },
  {
    number: "03 / ARCHIVO NARRATIVO",
    title: "Twine",
    copy: "Sigue los nodos de una historia fragmentada. Lo que decidas conservar también cuenta.",
    image: "prede-pizza.webp",
    href: "/cacciatori/twine",
    action: "Abrir narrativa",
  },
  {
    number: "04 / RELATO ILUSTRADO",
    title: "Cómic",
    copy: "Conoce el expediente editorial de Ossessione y las piezas que rodean sus páginas.",
    image: "comic-cover.webp",
    href: "/cacciatori/comic",
    action: "Leer expediente",
  },
];

export default function CacciatoriPage() {
  return (
    <>
      <section className="cac-hero" aria-labelledby="cac-home-title" style={{ backgroundColor: "#050505" }}>
        <div className="cac-hero__background" style={{ position: "absolute", inset: 0, zIndex: -1, backgroundImage: `url("${cacciatoriAsset("hero-atmosphere.webp")}")`, backgroundSize: "cover", backgroundPosition: "center 42%" }} />
        <div className="cac-hero__content">
          <p className="cac-hero__no">01 / EL INICIO</p>
          <h1 id="cac-home-title" className="cac-hero__title">Cacciatori</h1>
          <p className="cac-hero__quote">En la cocina de los dioses, no somos más que ingredientes esperando el beso del cuchillo. Una historia de sangre gourmet y hambre ancestral.</p>
          <div className="cac-hero__bottom">
            <CacciatoriAction label="Ver tráiler" variant="play" title="Tráiler de Cacciatori" image="hero-atmosphere.webp" description="Esta carpeta incluye las capturas del prototipo, pero no contiene el archivo de vídeo del tráiler. Cuando tengas el vídeo definitivo, podrá conectarse aquí sin cambiar el diseño." />
            <Link className="cac-button" href="#receta">EXPLORAR EL ARCHIVO ↓</Link>
            <span className="cac-hero__micro">Universo transmedia / Expediente 01</span>
          </div>
        </div>
        <div className="cac-hero__corner">EL SABOR DE LA<br />MUERTE</div>
      </section>

      <section className="cac-section" id="receta">
        <div className="cac-container cac-recipe">
          <div>
            <p className="cac-eyebrow">02 / LA RECETA</p>
            <div className="cac-recipe__wordmark" aria-hidden="true">CACCIATORI</div>
          </div>
          <div className="cac-recipe__panel">
            <p className="cac-eyebrow">RELACIÓN CON EL PROYECTO</p>
            <h3>¿Qué es Cacciatori?</h3>
            <p>Un descenso multisensorial al corazón de una tradición culinaria italiana, donde la línea entre el cazador y la comida se disuelve en una sola carne de misterio.</p>
            <p>La historia se despliega en diferentes formatos. Cada producto conserva una parte del expediente y abre una nueva forma de entrar en él.</p>
            <span className="cac-recipe__stamp">CONTEXTO NARRATIVO / ARCHIVO EN EXPANSIÓN</span>
          </div>
        </div>
      </section>

      <section className="cac-section">
        <div className="cac-container">
          <CacciatoriEvolution />
        </div>
      </section>

      <section className="cac-section">
        <div className="cac-container cac-plates">
          <div className="cac-plates__copy">
            <p className="cac-eyebrow">04 / EXPERIENCIA FÍSICA</p>
            <h2>Juego <em>de mesa</em></h2>
            <p>Un tablero de conflicto y una experiencia física y táctil donde cada jugador interpreta a un miembro de la familia. Estrategia, alianzas y traición en cada casilla.</p>
            <Link className="cac-button" href="/cacciatori/juego-de-mesa">EXPLORAR ARCHIVO ↗</Link>
          </div>
          <div className="cac-plates__art"><Image src={cacciatoriAsset("board-trailer.webp")} alt="Sesión de prueba del juego de mesa Cacciatori" width={967} height={545} sizes="(max-width:760px) 100vw, 55vw" /></div>
        </div>
      </section>

      <section className="cac-section" id="productos">
        <div className="cac-container">
          <div className="cac-section-head">
            <div><p className="cac-eyebrow">04 / PRODUCTOS DEL UNIVERSO</p><h2 className="cac-h2">Platos <span style={{ color: "var(--cac-red)", fontStyle: "italic" }}>principales</span></h2><p className="cac-intro">Hoy el chef recomienda… Lo que queda. Explora cada formato y decide por dónde empezar la degustación macabra.</p></div>
            <p className="cac-section-note">Menú de degustación macabra<br />4 vías de acceso</p>
          </div>
          <div className="cac-product-grid">
            {products.map((product) => (
              <Link className="cac-product-card" href={product.href} key={product.href}>
                <div className="cac-product-card__image"><Image src={cacciatoriAsset(product.image)} alt={`Imagen del apartado ${product.title}`} width={800} height={1000} sizes="(max-width: 760px) 40vw, 30vw" /></div>
                <div className="cac-product-card__body">
                  <span className="cac-product-card__num">{product.number}</span>
                  <h3>{product.title}</h3>
                  <p>{product.copy}</p>
                  <span className="cac-product-card__link">{product.action}<span aria-hidden="true">↗</span></span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="cac-section">
        <div className="cac-container cac-plates">
          <div className="cac-plates__copy">
            <p className="cac-eyebrow">05 / EL MENÚ</p>
            <h2>El hambre <em>también</em> cuenta historias.</h2>
            <p>Los nombres PREDE y Ossessione aparecen como pistas recurrentes del universo. No son piezas aisladas: funcionan como señales entre el relato, el juego y la experiencia visual.</p>
            <Link className="cac-button" href="/cacciatori/comic">EXPLORAR OSSSESSIONE ↗</Link>
          </div>
          <div className="cac-plates__art"><Image src={cacciatoriAsset("prede-pizza.webp")} alt="Caja oscura del expediente PREDE" width={1140} height={830} sizes="(max-width:760px) 100vw, 55vw" /></div>
        </div>
      </section>

      <section className="cac-section">
        <div className="cac-container">
          <div className="cac-section-head"><div><p className="cac-eyebrow">06 / ARCHIVO DE CRÉDITOS</p><h2 className="cac-h2">Los culpables</h2></div><p className="cac-section-note">Producción / arte / narrativa</p></div>
          <div className="cac-credit-strip">
            <article className="cac-credit"><h3>Arte y dirección</h3><p>Identidad visual · composición</p></article>
            <article className="cac-credit"><h3>Narrativa expandida</h3><p>Historia · archivo · decisiones</p></article>
            <article className="cac-credit"><h3>Diseño de experiencias</h3><p>Juego · interacción · medios</p></article>
          </div>
        </div>
      </section>
    </>
  );
}
