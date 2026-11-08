import Image from "next/image";
import { publicAsset } from "@/components/cacciatori/assets";

type InfoRow = { name: string; description: string };

const mechanics: InfoRow[] = [
  { name: "Desplazamiento", description: "Caminar, correr y agacharse para recorrer el restaurante, controlar el ruido y encontrar rutas seguras." },
  { name: "Cámara", description: "Usar el flash fotográfico y el filtro UV para revelar detalles, rastros y presencias que no se perciben a simple vista." },
  { name: "Inspección de objetos", description: "Examinar objetos del entorno para reconstruir lo ocurrido y encontrar información útil." },
  { name: "Interacción con el entorno", description: "Abrir, activar y manipular elementos del restaurante para avanzar y descubrir sus secretos." },
];

const dynamics: InfoRow[] = [
  { name: "Estrategia de movimiento sigiloso", description: "Elegir cuándo moverse, esconderse o avanzar con cautela para evitar ser detectado." },
  { name: "Gestión de riesgo", description: "Cada exploración puede acercar al jugador a una pista o a una amenaza." },
  { name: "Recolección de información", description: "Conectar evidencias visuales y objetos para comprender la historia del lugar." },
  { name: "Estrategia de escape", description: "Leer el espacio y tomar decisiones rápidas cuando la persecución comienza." },
  { name: "Análisis y resolución de problemas", description: "Interpretar hallazgos y resolver situaciones para desbloquear el recorrido." },
  { name: "Gestión de recursos", description: "Administrar las oportunidades de investigación y las herramientas disponibles." },
];

const aesthetics: InfoRow[] = [
  { name: "Distorsión de pantalla", description: "Claustrofobia: la imagen se altera para transmitir encierro y pérdida de control." },
  { name: "Diseño sonoro", description: "Estrés: silencios, ruidos y señales auditivas mantienen la amenaza presente." },
  { name: "Cámara e investigación", description: "Análisis forense: observar se convierte en la principal herramienta de supervivencia." },
  { name: "Recolección de información", description: "Descubrimiento: cada hallazgo amplía la lectura del restaurante y su pasado." },
  { name: "Administración de recursos", description: "Desafío: avanzar exige decidir qué investigar y cuándo hacerlo." },
  { name: "La Cautiva", description: "Compañerismo: su presencia introduce una relación distinta dentro de la amenaza." },
  { name: "Decisiones y tácticas", description: "Experiencia: el jugador aprende a leer el lugar y a reaccionar a sus reglas." },
  { name: "Protagonista en posición de presa", description: "Sumisión: Brayan enfrenta una fuerza que controla el espacio y dicta el ritmo." },
];

function InfoTable({ rows }: { rows: InfoRow[] }) {
  return (
    <div className="cac-info-table">
      {rows.map((row, index) => (
        <div className="cac-info-table__row" key={row.name}>
          <div className="cac-info-table__index">{String(index + 1).padStart(2, "0")}</div>
          <h3>{row.name}</h3>
          <p>{row.description}</p>
        </div>
      ))}
    </div>
  );
}

const characters = [
  { image: publicAsset("ProtaVideojuego.png"), name: "Brayan", role: "Protagonista", copy: "Un joven estudiante de criminalística que se infiltra en el restaurante abandonado para investigar lo que ocurrió allí. Su mirada forense es también su única forma de orientarse." },
  { image: publicAsset("ChefVideojuego.png"), name: "Cacciatori", role: "Antagonista principal", copy: "La presencia que domina el restaurante. Persigue a Brayan, altera su percepción y convierte cada pasillo en una amenaza." },
  { image: publicAsset("CautivaVideojuego.png"), name: "La Cautiva", role: "Antagonista secundaria", copy: "Otro de los personajes del videojuego. Su aparición añade una dimensión impredecible al recorrido y a la tensión de la historia." },
];

const scenarios = [
  { image: publicAsset("CapRestaurante.png"), name: "Restaurante Cacciatori", copy: "El escenario principal: un restaurante abandonado donde los vestigios de la antigua actividad culinaria conviven con señales de violencia y abandono." },
  { image: publicAsset("CapSotano.png"), name: "Sótano oculto", copy: "Un espacio escondido bajo el restaurante. Sus pasillos profundizan el misterio y obligan a Brayan a enfrentar lo que la superficie intenta ocultar." },
];

export default function VideojuegoPage() {
  return (
    <>
      <section className="cac-game-hero">
        <Image className="cac-game-hero__image" src={publicAsset("CapVideojuego.png")} alt="Pantalla de inicio del videojuego Cacciatori" fill priority sizes="100vw" />
        <div className="cac-game-hero__veil" />
        <div className="cac-container cac-game-hero__content">
          <p className="cac-eyebrow">01 / PRODUCTO PRINCIPAL DEL UNIVERSO</p>
          <h1 className="cac-h1">Videojuego<br />Cacciatori</h1>
          <p className="cac-game-hero__claim">La investigación comienza cuando el lugar deja de estar vacío.</p>
          <div className="cac-game-hero__actions">
            <a className="cac-button" href="#ficha">CONOCER EL JUEGO ↓</a>
            <a className="cac-button cac-button--light" href="https://youtu.be/tHJWUXCfLec" target="_blank" rel="noreferrer">VER TEASER ↗</a>
          </div>
        </div>
      </section>

      <section className="cac-section" id="ficha">
        <div className="cac-container cac-game-intro">
          <div>
            <p className="cac-eyebrow">02 / FICHA DEL PRODUCTO</p>
            <h2 className="cac-h2">Una investigación<br />en la oscuridad</h2>
          </div>
          <div>
            <p className="cac-intro">Cacciatori es un videojuego de terror psicológico en primera persona, construido con una estética low poly y una atmósfera de tensión constante.</p>
            <p className="cac-body-copy">La historia sigue a Brayan, un joven estudiante de criminalística que se infiltra en un restaurante abandonado. Inspirado en la leyenda urbana colombiana <em>L&apos;Angolo Di Gigi</em>, el juego convierte la investigación en una experiencia de supervivencia: observar, interpretar y decidir cuándo escapar.</p>
            <dl className="cac-game-facts">
              <div><dt>Género</dt><dd>Terror psicológico</dd></div>
              <div><dt>Perspectiva</dt><dd>Primera persona</dd></div>
              <div><dt>Dirección artística</dt><dd>Estética low poly</dd></div>
              <div><dt>Universo</dt><dd>Cacciatori · YOMI Studio</dd></div>
            </dl>
          </div>
        </div>
      </section>

      <section className="cac-section" id="personajes">
        <div className="cac-container">
          <div className="cac-section-head"><div><p className="cac-eyebrow">03 / PERSONAJES</p><h2 className="cac-h2">Tres presencias</h2><p className="cac-intro">Cada personaje ocupa una posición distinta dentro de la persecución y modifica la forma de leer el espacio.</p></div><p className="cac-section-note">Ficción · amenaza · vínculo</p></div>
          <div className="cac-character-grid cac-game-character-grid">
            {characters.map((character) => <article className="cac-character" key={character.name}>
              <div className="cac-character__portrait"><Image src={character.image} alt={`Retrato de ${character.name}`} width={600} height={700} /></div>
              <div className="cac-character__body"><p>{character.role}</p><h3>{character.name}</h3><p className="cac-character__description">{character.copy}</p></div>
            </article>)}
          </div>
        </div>
      </section>

      <section className="cac-section">
        <div className="cac-container">
          <div className="cac-section-head"><div><p className="cac-eyebrow">04 / ESPACIOS</p><h2 className="cac-h2">El lugar de la amenaza</h2><p className="cac-intro">Dos escenarios conectados por una misma pregunta: ¿qué ocurrió realmente en Cacciatori?</p></div><p className="cac-section-note">Restaurante · sótano</p></div>
          <div className="cac-scenario-grid">
            {scenarios.map((scenario) => <article className="cac-scenario" key={scenario.name}><div className="cac-scenario__image"><Image src={scenario.image} alt={`Escenario: ${scenario.name}`} width={1200} height={700} /></div><div className="cac-scenario__body"><p className="cac-eyebrow">ESCENARIO</p><h3>{scenario.name}</h3><p>{scenario.copy}</p></div></article>)}
          </div>
        </div>
      </section>

      <section className="cac-section" id="mecanicas">
        <div className="cac-container">
          <div className="cac-section-head"><div><p className="cac-eyebrow">05 / SISTEMAS DE JUEGO</p><h2 className="cac-h2">Mecánicas</h2><p className="cac-intro">Las acciones concretas que permiten explorar, investigar y sobrevivir dentro del restaurante.</p></div><p className="cac-section-note">Acciones del jugador</p></div>
          <InfoTable rows={mechanics} />
        </div>
      </section>

      <section className="cac-section cac-section--dark">
        <div className="cac-container">
          <div className="cac-section-head"><div><p className="cac-eyebrow">06 / EXPERIENCIA</p><h2 className="cac-h2">Dinámicas</h2><p className="cac-intro">Las decisiones y comportamientos que transforman las mecánicas en una experiencia de tensión y descubrimiento.</p></div><p className="cac-section-note">Decisiones · riesgo · escape</p></div>
          <InfoTable rows={dynamics} />
        </div>
      </section>

      <section className="cac-section cac-section--dark">
        <div className="cac-container">
          <div className="cac-section-head"><div><p className="cac-eyebrow">07 / DIRECCIÓN EMOCIONAL</p><h2 className="cac-h2">Estéticas</h2><p className="cac-intro">Las decisiones visuales, sonoras y narrativas que definen cómo se siente jugar Cacciatori.</p></div><p className="cac-section-note">Atmósfera · significado</p></div>
          <InfoTable rows={aesthetics} />
        </div>
      </section>

      <section className="cac-section">
        <div className="cac-container cac-game-access">
          <div><p className="cac-eyebrow">08 / DESARROLLO Y ACCESO</p><h2 className="cac-h2">El juego<br />sigue vivo</h2></div>
          <div><p className="cac-intro">El desarrollo del videojuego Cacciatori puede consultarse en su repositorio oficial de GitHub.</p><p className="cac-body-copy">En este mismo repositorio también puedes descargar la última release, correspondiente a la versión más actualizada del juego.</p><div className="cac-game-hero__actions"><a className="cac-button" href="https://github.com/DavidSantiAmaya/Cacciatori.git" target="_blank" rel="noreferrer">VER REPOSITORIO ↗</a><a className="cac-button cac-button--red" href="https://github.com/DavidSantiAmaya/Cacciatori/releases/latest" target="_blank" rel="noreferrer">DESCARGAR ÚLTIMA RELEASE ↗</a></div></div>
        </div>
      </section>

      <section className="cac-section cac-section--dark">
        <div className="cac-container">
          <div className="cac-section-head"><div><p className="cac-eyebrow">09 / AUTORÍA</p><h2 className="cac-h2">Los creadores</h2><p className="cac-intro">Cacciatori es un proyecto creado por estudiantes de Ingeniería en Multimedia.</p></div><p className="cac-section-note">Créditos del videojuego</p></div>
          <div className="cac-credit-people cac-game-authors">
            <article className="cac-credit-person"><h3>Santiago</h3><p>Estudiante de Ingeniería en Multimedia · Creador</p></article>
            <article className="cac-credit-person"><h3>Sara</h3><p>Estudiante de Ingeniería en Multimedia · Creadora</p></article>
            <article className="cac-credit-person"><h3>Samuel</h3><p>Estudiante de Ingeniería en Multimedia · Creador</p></article>
          </div>
        </div>
      </section>
    </>
  );
}
