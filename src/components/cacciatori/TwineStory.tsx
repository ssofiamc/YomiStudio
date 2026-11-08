"use client";

import { useMemo, useState } from "react";

type Choice = { label: string; target: string };
type Passage = { index: string; title: string; text: string; choices?: Choice[]; ending?: boolean };

const passages: Record<string, Passage> = {
  entrada: {
    index: "NODO_001 / SEÑAL ABIERTA",
    title: "El registro está húmedo.",
    text: "La hoja no tiene fecha, pero la tinta todavía mancha los dedos. Bajo la mesa, una línea oscura cruza el suelo hasta la puerta del despacho. Alguien ha arrancado la última página del libro de reservas.",
    choices: [
      { label: "Seguir el rastro hasta la cocina", target: "cocina" },
      { label: "Guardar la señal antes de que desaparezca", target: "archivo" },
    ],
  },
  cocina: {
    index: "NODO_014 / ZONA_DE_SERVICIO",
    title: "La cocina está demasiado limpia.",
    text: "Las ollas siguen calientes. En la pared hay un menú escrito con una letra que reconoces, aunque no recuerdas de quién. La cámara frigorífica respira como si alguien durmiera dentro.",
    choices: [
      { label: "Abrir la cámara frigorífica", target: "camara" },
      { label: "Preguntarle al chef por el menú", target: "chef" },
    ],
  },
  archivo: {
    index: "NODO_008 / REGISTRO_FRAGMENTADO",
    title: "La señal tiene dos fondos.",
    text: "Detrás de las facturas hay un sobre con tu nombre. En el interior, una fotografía recortada y una nota: «No todas las personas que entran aquí llegan como clientes».",
    choices: [
      { label: "Romper el sello y mirar la fotografía", target: "camara" },
      { label: "Ocultar el fragmento en tu abrigo", target: "final_oculto" },
    ],
  },
  camara: {
    index: "NODO_021 / SEÑAL_DEBIL",
    title: "La pantalla te devuelve la mirada.",
    text: "La grabación no muestra quién entró al despacho. En su lugar, muestra esta misma habitación desde un ángulo imposible. El contador sigue avanzando, aunque el vídeo está detenido.",
    choices: [
      { label: "Publicar una copia del registro", target: "final_publico" },
      { label: "Apagar el terminal y guardar silencio", target: "final_silencio" },
    ],
  },
  chef: {
    index: "NODO_019 / MESA_CALIENTE",
    title: "El chef no levanta la mirada.",
    text: "«Todo lo que llega a esta cocina termina formando parte de una receta», dice. Sobre la mesa aparece un plato cubierto. El vapor dibuja las mismas letras que viste en el menú.",
    choices: [
      { label: "Levantar la tapa", target: "final_mesa" },
      { label: "Salir sin mirar atrás", target: "final_salida" },
    ],
  },
  final_oculto: {
    index: "NODO_030 / FRAGMENTO_GUARDADO",
    title: "La historia cabe en un bolsillo.",
    text: "Sales con el fragmento intacto. No has resuelto el expediente; solo has conseguido que una parte sobreviva. En algún lugar, una impresora empieza a trabajar sola.",
    ending: true,
    choices: [{ label: "Volver al primer registro", target: "entrada" }],
  },
  final_publico: {
    index: "NODO_031 / COPIA_DISTRIBUIDA",
    title: "La copia ya no te pertenece.",
    text: "La señal se replica en pantallas que no conoces. Cada copia añade una nueva línea al registro y todas terminan con tu nombre. El silencio deja de ser una opción.",
    ending: true,
    choices: [{ label: "Volver al primer registro", target: "entrada" }],
  },
  final_silencio: {
    index: "NODO_032 / SEÑAL_TERMINADA",
    title: "La sala vuelve a estar oscura.",
    text: "La pantalla se apaga y el contador desaparece. Por un instante, crees haber cerrado el expediente. Luego escuchas una silla arrastrándose detrás de ti.",
    ending: true,
    choices: [{ label: "Volver al primer registro", target: "entrada" }],
  },
  final_mesa: {
    index: "NODO_033 / SERVICIO_COMPLETO",
    title: "La casa te reserva un sitio.",
    text: "Bajo la tapa no hay una respuesta, sino otra pregunta. La mesa parece alargarse hacia una habitación que no existía hace un momento. La cena acaba de comenzar.",
    ending: true,
    choices: [{ label: "Volver al primer registro", target: "entrada" }],
  },
  final_salida: {
    index: "NODO_034 / SALIDA_NO_VERIFICADA",
    title: "La calle no aparece en el mapa.",
    text: "Cruzas la puerta y llegas al mismo pasillo. La segunda vez hay un plato servido en el suelo. La tercera, escuchas tu voz pidiendo la cuenta desde el otro lado.",
    ending: true,
    choices: [{ label: "Volver al primer registro", target: "entrada" }],
  },
};

export function TwineStory() {
  const [started, setStarted] = useState(false);
  const [nodeId, setNodeId] = useState("entrada");
  const [history, setHistory] = useState<string[]>([]);
  const node = passages[nodeId];
  const routeLabel = useMemo(() => history.length ? history.join(" → ") : "SIN_RUTA_REGISTRADA", [history]);

  const choose = (choice: Choice) => {
    setHistory((current) => [...current, nodeId]);
    setNodeId(choice.target);
  };
  const reset = () => { setNodeId("entrada"); setHistory([]); setStarted(false); };
  const start = () => { setNodeId("entrada"); setHistory([]); setStarted(true); };

  return (
    <div className="cac-twine-layout">
      <section className="cac-twine-stage" aria-live="polite">
        {!started ? <>
          <p className="cac-twine-stage__meta">MAPA_CORRUPTO_V0.9 / ESTRUCTURA_PRACTURADA</p>
          <h2 className="cac-glitch">Descenso narrativo</h2>
          <p className="cac-twine-stage__text">La historia de la familia Cacciatori se despliega en una red de decisiones que desafían la cordura. No hay un final único: solo diferentes estados de degradación. Explora el mapa de nodos y conserva aquello que todavía recuerdas.</p>
          <div className="cac-twine-choices"><button className="cac-twine-choice" type="button" onClick={start}><span>↳</span> INICIAR_DESCENSO</button></div>
        </> : <>
          <p className="cac-twine-stage__meta">{node.index}</p>
          <h2 className="cac-glitch">{node.title}</h2>
          <p className="cac-twine-stage__text">{node.text}</p>
          {node.ending && <p className="cac-twine-stage__meta" style={{ marginTop: 24 }}>FIN_DE_FRAGMENTO / RUTA_RECUPERABLE</p>}
          <div className="cac-twine-choices">
            {node.choices?.map((choice, index) => <button className="cac-twine-choice" type="button" key={`${nodeId}-${choice.target}`} onClick={() => choose(choice)}><span>{String(index + 1).padStart(2, "0")} ↳</span> {choice.label}</button>)}
          </div>
        </>}
        <p className="cac-twine-note">RUTA ACTUAL: {started ? routeLabel : "ESPERANDO_LECTOR"}</p>
      </section>
      <aside className="cac-twine-sidebar">
        <p className="cac-eyebrow" style={{ color: "var(--cac-violet)" }}>DATOS_DE_SESIÓN</p>
        <h2>Registro_fragmentado</h2>
        <div className="cac-twine-stats">
          <div className="cac-twine-stat"><span>Formato</span><span>Hipertexto corrupto</span></div>
          <div className="cac-twine-stat"><span>Estado</span><span>{node.ending ? "Cierre detectado" : started ? "Inestable" : "En espera"}</span></div>
          <div className="cac-twine-stat"><span>Canal</span><span>Protocolo_X_Web</span></div>
          <div className="cac-twine-stat"><span>Nodo</span><span>{started ? nodeId.toUpperCase() : "NO_VINCULADO"}</span></div>
          <div className="cac-twine-stat"><span>Decisiones</span><span>{history.length}</span></div>
        </div>
        <p className="cac-twine-sidebar__summary">“No hay un final feliz; solo diferentes estados de degradación. Cada elección altera el registro y acerca al lector a una versión distinta de los hechos.”</p>
        <button className="cac-button" type="button" onClick={started ? reset : start}>{started ? "CERRAR / REINICIAR" : "INICIAR DESCENSO"}</button>
        <button className="cac-twine-reset" type="button" onClick={reset}>REPARAR_NODO ↻</button>
      </aside>
    </div>
  );
}
