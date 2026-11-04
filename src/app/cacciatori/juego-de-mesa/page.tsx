import Image from "next/image";
import { CacciatoriAction } from "@/components/cacciatori/CacciatoriAction";
import { cacciatoriAsset } from "@/components/cacciatori/assets";

const rules = [
  { number: "01 / OBJETIVO", icon: "↗", title: "Muévete y supera desafíos", text: "Avanza por el tablero, observa los espacios y reúne las pistas que te ayuden a seguir con vida." },
  { number: "02 / PELIGRO", icon: "⌁", title: "Evita al chef y compite", text: "Las decisiones del resto alteran tu camino. Negocia, calcula y aprende cuándo no confiar." },
  { number: "03 / SALIDA", icon: "✳", title: "Consigue las cartas", text: "Completa tus objetivos y busca una salida antes de que la casa decida cerrar sus puertas." },
];
const pawns = [
  { image: "pawn-red.webp", id: "PIEZA_09 / EL ÁNGEL MUERTO", title: "Miniatura de bronce", text: "Una pieza de presencia imponente, marcada por el tono escarlata del expediente." },
  { image: "pawn-orange.webp", id: "TABLERO_01 / LA MANSIÓN", title: "El mapa del pecado", text: "El recorrido es parte de la historia: cada casilla acerca a los jugadores a una nueva sospecha." },
  { image: "pawn-yellow.webp", id: "ACCESORIO_04 / DADOS ARCANOS", title: "Dados de ónix", text: "Una referencia visual de las piezas y accesorios que completan la experiencia en mesa." },
];

export default function BoardGamePage() {
  return (
    <>
      <section className="cac-product-hero">
        <div className="cac-container">
          <div className="cac-product-hero__top"><div><p className="cac-eyebrow">02 / PROTOCOLO VISUAL</p><h1 className="cac-h2">Tráiler / juego de mesa</h1></div><a className="cac-button" href="#reglas">EXPLORAR ARCHIVOS ↓</a></div>
          <div className="cac-media-layout">
            <div className="cac-media-frame">
              <Image src={cacciatoriAsset("board-trailer.webp")} alt="Captura de referencia de una sesión del juego de mesa" width={967} height={545} priority sizes="(max-width:760px) 100vw, 68vw" />
              <span className="cac-media-frame__rec">ARCHIVO VISUAL / MESA 01</span>
              <div className="cac-media-frame__play"><CacciatoriAction label="Iniciar reproducción" variant="play" title="Tráiler del juego de mesa" image="board-trailer.webp" description="La captura permite representar el encuadre del tráiler del prototipo. El archivo original de vídeo no venía incluido, así que la reproducción debe conectarse cuando esté disponible." /></div>
            </div>
            <aside className="cac-advance">
              <p className="cac-eyebrow">PROTOTIPO FÍSICO</p><h2>Avance editorial</h2>
              <p className="cac-advance__summary">Una invitación a la mesa de los Cacciatori. Los componentes físicos conservan la misma maldición que sus contrapartes digitales. No juegues solo.</p>
              <dl>
                <div className="cac-spec"><dt>Formato</dt><dd>Juego de mesa</dd></div>
                <div className="cac-spec"><dt>Duración</dt><dd>Por confirmar</dd></div>
                <div className="cac-spec"><dt>Estado</dt><dd>Prototipo</dd></div>
              </dl>
              <CacciatoriAction label="VER DETALLES" title="Material del juego de mesa" description="Esta sección conserva los elementos y la jerarquía visual del prototipo. Las reglas definitivas y los materiales descargables pueden añadirse aquí cuando estén aprobados." />
            </aside>
          </div>
        </div>
      </section>

      <section className="cac-section" id="reglas">
        <div className="cac-container">
          <div className="cac-section-head"><div><p className="cac-eyebrow">03 / REGLAS</p><h2 className="cac-h2">Reglas del juego</h2></div><p className="cac-section-note">Lee las instrucciones antes de sentarte.</p></div>
          <div className="cac-rules-grid">
            {rules.map((rule) => <article className="cac-rule-card" key={rule.number}><span className="cac-rule-card__index">{rule.number}</span><div className="cac-rule-card__icon" aria-hidden="true">{rule.icon}</div><h3>{rule.title}</h3><p>{rule.text}</p></article>)}
            <aside className="cac-rules-summary"><p className="cac-eyebrow">ARCHIVO DE REGLAS</p><h3>Reglas del juego</h3><p>El manual final no se adjuntó en la carpeta. Esta tarjeta queda como entrada para insertar el PDF o la versión aprobada de las reglas.</p><CacciatoriAction label="EXPLORAR ARCHIVO" variant="red" title="Manual por incorporar" description="Cuando tengas las reglas completas, puedes enlazar un PDF o convertir cada sección en una ficha accesible dentro de esta página." /></aside>
          </div>
        </div>
      </section>

      <section className="cac-section">
        <div className="cac-container">
          <div className="cac-section-head"><div><p className="cac-eyebrow">04 / RELIQUIAS FÍSICAS</p><h2 className="cac-h2">Piezas de jugadores</h2></div><p className="cac-section-note">Componentes de la mesa / referencia visual</p></div>
          <div className="cac-pawns-grid">
            {pawns.map((pawn) => <article className="cac-pawn-card" key={pawn.title}><Image src={cacciatoriAsset(pawn.image)} alt={pawn.title} width={492} height={492} sizes="(max-width:760px) 100vw, 33vw" /><div className="cac-pawn-card__body"><p className="cac-eyebrow">{pawn.id}</p><h3>{pawn.title}</h3><p>{pawn.text}</p></div></article>)}
          </div>
        </div>
      </section>

      <section className="cac-section">
        <div className="cac-container cac-process">
          <div className="cac-process__image"><Image src={cacciatoriAsset("board-map.webp")} alt="Vista del tablero prototipado" width={935} height={465} sizes="(max-width:760px) 100vw, 60vw" /></div>
          <div className="cac-process__copy"><p className="cac-eyebrow">05 / DESARROLLO</p><h3>Proceso creativo</h3><p>El tablero, las piezas y las reglas se entienden como un solo sistema. La documentación del proceso permitirá seguir los ajustes entre el prototipo visual y la experiencia en mesa.</p><ul><li>Diseño del tablero y recorridos</li><li>Componentes y materiales</li><li>Balanceo y pruebas de juego</li></ul><CacciatoriAction label="VER DOCUMENTACIÓN" title="Notas del diseñador" description="El ZIP compartido incluye las pantallas de referencia, no las notas ni el manual de producción. Esta acción queda lista para conectarse al documento final." /></div>
        </div>
      </section>

      <section className="cac-section">
        <div className="cac-container">
          <div className="cac-section-head"><div><p className="cac-eyebrow">06 / ADQUISICIÓN</p><h2 className="cac-h2">Adquirir el juego</h2></div></div>
          <div className="cac-acquire">
            <div className="cac-acquire__edition"><p className="cac-eyebrow">EDICIÓN COLECCIONISTA</p><h3>La mesa está servida</h3><p>PRECIO POR CONFIRMAR</p><CacciatoriAction label="RECLAMAR PROPIEDAD" title="Adquisición no habilitada" description="La pantalla del prototipo muestra un flujo de compra, pero no se proporcionaron precio definitivo, inventario ni pasarela de pago. Para evitar una compra ficticia, el botón informa del estado actual." /></div>
            <div className="cac-access__specs"><h3>Información de envío</h3><dl><div className="cac-spec"><dt>Disponibilidad</dt><dd>Por confirmar</dd></div><div className="cac-spec"><dt>Envío</dt><dd>Por definir</dd></div><div className="cac-spec"><dt>Distribución</dt><dd>Información pendiente</dd></div></dl><p className="cac-advance__summary">El módulo comercial queda preparado para recibir los datos reales del producto cuando estén definidos.</p></div>
          </div>
        </div>
      </section>

      <section className="cac-section">
        <div className="cac-container"><div className="cac-section-head"><div><p className="cac-eyebrow">07 / CRÉDITOS</p><h2 className="cac-h2">Los culpables</h2></div><p className="cac-section-note">Diseño de juego · producción · arte</p></div><div className="cac-credit-people"><article className="cac-credit-person"><div className="cac-credit-person__portrait">D</div><h3>Diseño de juego</h3><p>Reglas · recorridos</p></article><article className="cac-credit-person"><div className="cac-credit-person__portrait">A</div><h3>Arte y componentes</h3><p>Tablero · piezas</p></article><article className="cac-credit-person"><div className="cac-credit-person__portrait">P</div><h3>Producción</h3><p>Prototipo · pruebas</p></article></div></div>
      </section>
    </>
  );
}
