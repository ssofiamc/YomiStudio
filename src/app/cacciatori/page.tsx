import Image from "next/image";
import Link from "next/link";
import { cacciatoriAsset, publicAsset } from "@/components/cacciatori/assets";

const products = [
  {
    number: "EXPERIENCIA INTERACTIVA",
    title: "Videojuego",
    copy: "Recorre el restaurante, sus personajes y las señales que se esconden a plena vista.",
    image: "CapVideojuego.png",
    imageType: "public",
    href: "/cacciatori/videojuego",
    action: "Explorar videojuego",
  },
  {
    number: "EXPERIENCIA FÍSICA",
    title: "Juego de mesa",
    copy: "Una mesa, varias sospechas y una salida que no siempre está donde debería.",
    image: "PredeJuego.png",
    imageType: "public",
    href: "/cacciatori/juego-de-mesa",
    action: "Explorar juego de mesa",
  },
  {
    number: "EXPERIENCIA NARRATIVA",
    title: "Twine",
    copy: "Sigue los nodos de una historia fragmentada. Lo que decidas conservar también cuenta.",
    image: "CapTwine.jpg",
    imageType: "public",
    href: "/cacciatori/twine",
    action: "Abrir narrativa",
  },
  {
    number: "RELATO ILUSTRADO",
    title: "Cómic",
    copy: "Conoce el expediente editorial de Ossessione y las piezas que rodean sus páginas.",
    image: "CapComic.png",
    imageType: "public",
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
          <h1 id="cac-home-title" className="cac-hero__title">Cacciatori</h1>
          <p className="cac-hero__quote">El secreto del corte. Una historia entre la perfección de la culinaria italiana y la brutalidad humana.</p>
          <div className="cac-hero__bottom">
            <Link className="cac-button" href="#receta">CONOCER LA RECETA ↓</Link>
          </div>
        </div>
        <div className="cac-hero__corner">EL SABOR DE LA<br />MUERTE</div>
      </section>

      <section className="cac-section" id="receta">
        <div className="cac-container cac-recipe">
          <div>
            <p className="cac-eyebrow">RECETA</p>
            <div className="cac-recipe__wordmark" aria-hidden="true">CACCIATORI</div>
          </div>
          <div className="cac-recipe__panel">
            <p className="cac-eyebrow">RELACIÓN CON EL PROYECTO</p>
            <h3>¿Qué es Cacciatori?</h3>
            <p>“El secreto del corte” es una historia que mezcla la perfección de la culinaria italiana con la brutalidad humana. En Cacciatori, la cocina es escenario, ritual y campo de batalla.</p>
            <p>El universo se expande a través de distintos productos y experiencias, cada uno con su propia forma de revelar lo que ocurre detrás de la mesa.</p>
          </div>
        </div>
      </section>

      <section className="cac-section" id="productos">
        <div className="cac-container">
          <div className="cac-section-head">
            <div><p className="cac-eyebrow">PLATOS PRINCIPALES</p><h2 className="cac-h2">Platos <span style={{ color: "var(--cac-red)", fontStyle: "italic" }}>principales</span></h2><p className="cac-intro">Explora las experiencias que expanden el universo Cacciatori y descubre dónde empieza tu recorrido.</p></div>
          </div>
          <div className="cac-product-grid">
            {products.map((product) => (
              <Link className="cac-product-card" href={product.href} key={product.href}>
                <div className="cac-product-card__image"><Image src={product.imageType === "public" ? publicAsset(product.image) : cacciatoriAsset(product.image)} alt={`Imagen del apartado ${product.title}`} width={800} height={1000} sizes="(max-width: 760px) 40vw, 30vw" /></div>
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

    </>
  );
}
